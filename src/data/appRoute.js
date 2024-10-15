const APP_ROUTE = {
  home: "/",
  login: "/login",
  register: "/register",
  forgotPassword: "/forgot-password",
  termsAndConditions: "/terms-and-conditions",
  privacyPolicy: "/privacy-policy",
  // Docs
  docs: "/docs/utility",
  docsFor: (value) => `/docs/utility/${value}`,
  docsCICD: "/docs/utility/ci-cd",
  docsCodeStandards: "/docs/code-standards",
};

export default APP_ROUTE;
