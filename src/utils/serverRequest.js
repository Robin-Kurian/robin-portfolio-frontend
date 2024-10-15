import APP_CONFIG from "@/config";
import CONSTANTS from "@/data/constants";
import RESPONSE_CODES from "@/data/responseCodes";
import Auth from "./auth";
import Storage from "./storage";

const {
  DEFAULT_HOST,
  REFRESH_TOKEN_PATH,
  USE_TOKEN_BY_DEFAULT,
  INVALID_ACCESS_TOKEN_CODE,
} = APP_CONFIG.SERVER_REQUEST;

const request = async (method, path, requestOptions) => {
  const {
    body = {},
    useToken = USE_TOKEN_BY_DEFAULT,
    sendAsForm = false,
    host,
  } = requestOptions || {};
  const url = (host ? host : DEFAULT_HOST) + path;

  const options = {
    body:
      method.toUpperCase() != "GET"
        ? sendAsForm
          ? convertToFormData(body)
          : JSON.stringify(body)
        : null,
    method: method,
    headers: sendAsForm
      ? {}
      : {
          "Content-Type": "application/json",
        },
  };

  if (useToken) {
    const { access } = Storage.readTokens() || {};
    if (!access) return handleLogout(CONSTANTS.LOGOUT_CODES.TOKEN_MISSING);
    options["headers"]["Authorization"] = `Bearer ${access}`;
  }

  try {
    const response = await fetch(url, options);
    let data;
    try {
      data = await response.json();
    } catch (error) {
      data = {};
    }

    if (response.status >= 200 && response.status < 300)
      return {
        hasError: false,
        message: "ok",
        response: data,
        status: response.status,
      };

    // handle token expired
    if (response.status == RESPONSE_CODES.UNAUTHORIZED) {
      if (data && data.code == INVALID_ACCESS_TOKEN_CODE) {
        const callback = () =>
          request(method, path, { body, useToken: true, sendAsForm });
        return await refreshToken(callback);
      }
    }
    // handle other error
    const message = getErrorMessage(data);
    return {
      hasError: true,
      message: message,
      response: data,
      status: response.status,
    };
  } catch (error) {
    return {
      hasError: true,
      message:
        "Cannot connect to server, please check your internet connection and try again.",
      response: null,
      status: null,
    };
  }
};

const refreshToken = async (callback) => {
  const { refresh } = Storage.readTokens() || {};
  if (!refresh) return handleLogout(CONSTANTS.LOGOUT_CODES.TOKEN_MISSING);
  const options = {
    method: "POST",
    body: JSON.stringify({ refresh }),
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`${DEFAULT_HOST}${REFRESH_TOKEN_PATH}`, options);
  if (response.status != 200)
    return handleLogout(CONSTANTS.LOGOUT_CODES.TOKEN_EXPIRED);
  const tokens = await response.json();
  Storage.writeTokens(tokens);
  return callback();
};

const convertToFormData = (data) => {
  const form = new FormData();
  for (const key in data) form.append(key, data[key]);
  return form;
};

const getErrorMessage = (data) => {
  let message = "Something went wrong";
  if (data && typeof data == "string") message = data;
  else if (
    data &&
    data.messages &&
    data.messages.length > 0 &&
    data.messages[0].message
  )
    message = data.messages[0].message;
  else if (data && data.detail) message = data.detail;
  else if (data && data.message) message = data.message;
  return message;
};

const handleLogout = (code = CONSTANTS.LOGOUT_CODES.REQUEST_FAILED) => {
  Auth.logout(code);
  return {
    hasError: true,
    status: null,
    message: `Please login again`,
    response: null,
  };
};

const ServerRequest = {
  get: (path, options) => request("GET", path, options),
  post: (path, options) => request("POST", path, options),
  put: (path, options) => request("PUT", path, options),
  patch: (path, options) => request("PATCH", path, options),
  delete: (path, options) => request("DELETE", path, options),
  request: (method, path, options) => request(method, path, options),
};

export default ServerRequest;
