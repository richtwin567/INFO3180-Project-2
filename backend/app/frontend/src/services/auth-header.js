/**
 * Generates the Authorization header for each request
 */
export default function authHeader() {
  let accessToken = JSON.parse(localStorage.getItem("jwt"));

  if (accessToken) {
    return { Authorization: "Bearer " + accessToken };
  } else {
    return {};
  }
}
