//import axios from "axios";
import { authHeader } from "@/services/headers.service";

const API_ENDPOINT = "https://united-auto-sales.herokuapp.com/api";

/**
 * Sends user data to the server to log them in
 * @param {object} formData  The user data from the login form
 */
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
      } else {
        return response.json();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

/**
 * Stores the JWT in local storage
 * @param {object} loginResponse A JSON object containing the JWT
 * and success message
 */
export function handleLogin(loginResponse) {
  // Store the JWT
  localStorage.setItem("jwt", loginResponse.token);

  // Return the success message
  return { success: loginResponse.message };
}

/**
 * Creates a new user in the database
 * @param {FormData} formData The form data object containing user data
 */
export async function register(formData) {
  let requestParams = {
    method: "POST",
    body: formData,
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

export async function handleLogout() {
  // Generate the Bearer Header
  let header = authHeader();

  // Retrieve response from server
  return fetch(`${API_ENDPOINT}/auth/logout`, {
    method: "POST",
    headers: {
      Authorization: header.Authorization,
    },
    body: {},
  }).then((response) => {
    return response.json;
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
        handleLogout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

/**
 * Parses the JSON Web Token
 * @param {string} t
 */
export function parseJWT(t) {
  var base64Url = t.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
