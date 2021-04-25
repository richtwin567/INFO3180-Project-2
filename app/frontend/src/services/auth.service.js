import axios from "axios";
// import { CSRFHeader } from "@/services/headers.service.js";

const API_ENDPOINT = "http://localhost:9090/api";
export async function login(formData) {
  // const token = await CSRFHeader(`${API_ENDPOINT}/auth/login`);
  let requestParams = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      //  "X-CSRFToken": token.csrf_token,
    },
    body: JSON.stringify({
      username: formData.username,
      password: formData.password,
    }),
  };

  return fetch(`${API_ENDPOINT}/auth/login`, requestParams)
    .then((response) => {
      if (!response.ok) {
        // Error handling for when the user isn't authenticated
        if (response.status === 401) {
          return response.json();
        }
      } else if (response.data.token) {
        // Store the JWT if its in the response
        localStorage.setItem("jwt");
        return response.data;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function register(formData) {
  let requestParams = {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  };

  return fetch(`${API_ENDPOINT}/auth/register`, requestParams)
    .then((response) => {
      if (!response.ok) {
        // Error handling for when the user isn't authenticated
        if (response.status === 401) {
          return response.json();
        }
      } else {
        return response.json();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function logout() {
  // Remove the JWT
  localStorage.removeItem("jwt");

  // Retrieve response from server
  return axios.post(`${API_ENDPOINT}/logout`, {}).then((response) => {
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
