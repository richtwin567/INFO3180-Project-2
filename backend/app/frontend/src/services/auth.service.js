import axios from "axios";

export async function login(userObj) {
  return axios
    .post("/auth/login", {
      username: userObj.username,
      password: userObj.password,
    })
    .then((response) => {
      // Store the JWT if its in the response
      if (response.data.token) {
        localStorage.setItem("jwt");
      }
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

async function register(userObj) {}

export async function logout() {
  // Remove the JWT
  localStorage.removeItem("jwt");

  // Retrieve response from server
  return axios.post("/logout", {}).then((response) => {
    return response.data;
  });
}

/**
 * Checks if the response is valid and logs the user out if its invalid
 * @param {Response} response
 */
export async function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // Auto logout if 401 response returned from api
        logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
