// Optimabot - customer ordering frontend runtime config.
// In production, __BACKEND_URL__ is replaced by the GitHub Actions workflow
// with the actual Azure Container App URL.
// In local dev, leave as-is: the app falls back to window.location.origin.
window.OPTIMABOT_BACKEND_URL = "__BACKEND_URL__";
window.OPTIMABOT_FRONTEND_ROLE = "customer";
