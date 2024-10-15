/**
 *
 * ALWAYS USE setToStorage AND getFromStorage FUNCTIONS FOR READ, WRITE operations.
 *
 */

// Storage
const setToStorage = (key, data, storage) => {
  storage.setItem(key, JSON.stringify(data));
};
const getFromStorage = (key, storage) => {
  let data = {};
  if (storage) {
    data = storage.getItem(key);
    data = data ? JSON.parse(data) : {};
  }
  return data;
};

// Local Storage
const setToLocalStorage = (key, data) => {
  if (window && window.localStorage)
    setToStorage(key, data, window.localStorage);
};
const getFromLocalStorage = (key) => getFromStorage(key, window?.localStorage);

// Session Storage
const setToSessionStorage = (key, data) => {
  if (window && window.sessionStorage)
    setToStorage(key, data, window.sessionStorage);
};
const getFromSessionStorage = (key) =>
  getFromStorage(key, window?.sessionStorage);

// Clear All Storages except PERSISTENT_DATA_KEYS
const clear = () => {
  if (window && window.localStorage) {
    const PERSISTENT_DATA_KEYS = APP_CONFIG.STORAGE.PERSISTENT_DATA_KEYS;
    const tempStorage = {};
    for (let key of PERSISTENT_DATA_KEYS) {
      tempStorage[key] = getFromLocalStorage(key);
    }

    window.localStorage.clear();
    window.sessionStorage.clear();

    for (let key of PERSISTENT_DATA_KEYS) {
      setToLocalStorage(key, tempStorage[key]);
    }
  }
};

// User
const writeUserData = (details) => setToSessionStorage("user", details);
const readUserData = () => getFromSessionStorage("user");

// Token
const writeTokens = (details) => setToLocalStorage("tokens", details);
const readTokens = () => getFromLocalStorage("tokens");

// User accept cookies
const writeUserAcceptCookies = (value) =>
  setToLocalStorage("USER_ACCEPT_COOKIES", value);
const readUserAcceptCookies = () => getFromLocalStorage("USER_ACCEPT_COOKIES");

// Create your custom functions here...
// const myCustomFunction = () => {
//     //
// }

const Storage = {
  // user
  writeUserData,
  readUserData,
  // tokens
  writeTokens,
  readTokens,
  // user accept cookies
  writeUserAcceptCookies,
  readUserAcceptCookies,
  // others
  clear,
};

export default Storage;
