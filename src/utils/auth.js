import APP_CONFIG from "@/config";
import ServerRequest from "./serverRequest";
import Storage from "./storage";

const { USER_PROFILE_PATH, SIGNIN_PATH, SIGNUP_PATH, SIGNOUT_PATH } =
  APP_CONFIG.AUTH;

const updateProfile = async () => {
  // get profile data from server
  const response = await ServerRequest.get(USER_PROFILE_PATH, {
    useToken: true,
  });
  if (response.hasError) return response;
  // write to storage
  Storage.writeUserData(response.response);
  // update to state
  // ..

  return response;
};

const loginWithEmailPassword = async (email, password) => {
  // 1. get Tokens from API
  const body = { email, password };
  const response = await ServerRequest.post(SIGNIN_PATH, {
    body,
    useToken: false,
  });
  if (response.hasError) return response;
  const { refresh, access } = response.response;
  // 2. store token to localstorage
  Storage.writeTokens({ refresh, access });
  return response;
};

const register = async (data) => {
  return await ServerRequest.post(SIGNUP_PATH, { body: data, useToken: false });
};

const signout = async () => {
  // clear storage
  Storage.clear();

  // clear state
  // ..

  // api call (if any)
  if (SIGNOUT_URI) {
    await ServerRequest.post(SIGNOUT_PATH);
  }
};

const verifyLogin = () => {
  const token = Storage.readTokens();
  return token && token.refresh ? true : false;
};

const Auth = {
  register,
  profile: updateProfile,
  login: loginWithEmailPassword,
  logout: signout,
  verifyLogin: verifyLogin,
};

export default Auth;
