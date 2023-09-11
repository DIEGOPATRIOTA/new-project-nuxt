export function authHeader(username, password) {
    if (username && password) {
        return "Basic " + btoa(username + ":" + password);
    } else {
        return {};
    }
}