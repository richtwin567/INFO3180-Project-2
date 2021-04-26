/**
 * Generates the Authorization header for each request
 */
export function authHeader() {
  let accessToken = localStorage.getItem("jwt");

  if (accessToken) {
    return { Authorization: "Bearer " + accessToken };
  } else {
    return {};
  }
}

export async function CSRFHeader(endpoint) {
  return fetch(endpoint, {
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    return response.json();
  });
}
