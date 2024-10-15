const DOCS = {
  env_config: [
    {
      Variable: "NEXT_PUBLIC_API_HOST",
      "Value Type": "URL",
      Example: "https://api.mobiux.in",
      Description:
        "Setting default host for making API calls. ServerRequest utility will use this value as default.",
    },
  ],
  server_request_config: [
    {
      Variable: "REFRESH_TOKEN_PATH",
      "Value Type": "path",
      Example: "/api/v1/accounts/refresh-token/",
      Description:
        "Used to automatically call refresh token API once server returns a 401 response saying token_expired",
    },
    {
      Variable: "USE_TOKEN_BY_DEFAULT",
      "Value Type": "bool",
      Example: "true",
      Description: "Setup default behaviour of request to use token",
    },
    {
      Variable: "INVALID_ACCESS_TOKEN_CODE",
      "Value Type": "string",
      Example: "token_not_valid",
      Description:
        "This is used to check if access token is invalid or not. If this code maches with server response, then it will call refresh token API to get new access token. Should be in `code` key of response data. Accessing it like `data.code`",
    },
  ],
  auth_config: [
    {
      Variable: "USER_PROFILE_PATH",
      "Value Type": "path",
      Required: "True",
      Example: "/api/v1/accounts/profile/",
      Description: "api endpoint for fetching user profile",
    },
    {
      Variable: "SIGNIN_PATH",
      "Value Type": "path",
      Required: "True",
      Example: "/api/v1/accounts/sign-in/",
      Description: "api endpoint for login",
    },
    {
      Variable: "SIGNUP_PATH",
      "Value Type": "path",
      Required: "True",
      Example: "/api/v1/accounts/sign-up/",
      Description: "api endpoint for register",
    },
    {
      Variable: "SIGNOUT_PATH",
      "Value Type": "path",
      Required: "False",
      Example: "/api/v1/accounts/sign-out/",
      Description: "api endpoint for logout",
    },
  ],
  storage_config: [
    {
      Variable: "PERSISTENT_DATA_KEYS",
      "Value Type": "array<string>",
      Required: "False",
      Example: "USER_ACCEPT_COOKIES",
      Description:
        "List of keys which should not be cleared when calling `clear` function from Storage utility, helping to persist some data in local storage. Mostly used to save user preferences without signing in.",
    },
  ],
};

export default DOCS;
