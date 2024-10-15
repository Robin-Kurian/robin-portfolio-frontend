const APP_CONFIG = {
  AUTH: {
    SIGNIN_PATH: "",
    SIGNUP_PATH: "",
    SIGNOUT_PATH: "",
    USER_PROFILE_PATH: "",
  },
  SERVER_REQUEST: {
    DEFAULT_HOST: process.env.NEXT_PUBLIC_API_HOST,
    REFRESH_TOKEN_PATH: "",
    INVALID_ACCESS_TOKEN_CODE: "token_not_valid", // Default django rest framework code for invalid access token
    USE_TOKEN_BY_DEFAULT: false,
  },
  STORAGE: {
    PERSISTENT_DATA_KEYS: ["USER_ACCEPT_COOKIES"],
  },
};

export default APP_CONFIG;
