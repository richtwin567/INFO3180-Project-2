/* Add your Application JavaScript */
// Instantiate our main Vue Instance

const API_ENDPOINT = "http://localhost:9090/api";
async function login(userObj) {
  let requestParams = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: userObj.username,
      password: userObj.password,
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

// async function register(userObj) {}

async function logout() {
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
async function handleResponse(response) {
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

const app = Vue.createApp({
  data() {
    return {};
  },
});

app.component("app-header", {
  name: "AppHeader",
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <a class="navbar-brand" href="#">Lab 7</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
          </li>
        </ul>
      </div>
    </nav>
    `,
});

app.component("app-footer", {
  name: "AppFooter",
  template: `
    <footer>
        <div class="container">
            <p>Copyright &copy; {{ year }} Flask Inc.</p>
        </div>
    </footer>
    `,
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
});

app.component("upload-form", {
  name: "UploadForm",
  template: `
    <section id='upload-form'>
        <h1> Upload Form </h1>
        <article v-if="success !== false" class="alert alert-success">
            File Uploaded Successfully
        </article>
        <ul v-if="errors.length"  class="alert alert-danger">
            <li v-for="error in errors">{{ error }}</li>
        </ul>
        <form @submit.prevent="uploadPhoto" method='POST' enctype='multipart/form-data' id='uploadForm'>
            <label for='description'> Photo Description: </label>
            <textarea id='description' name='description'> </textarea>
            <label for="photo">Photo Upload:</label>
            <input type="file" name="photo">
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    </section>
    `,
  methods: {
    uploadPhoto() {
      let uploadForm = document.getElementById("uploadForm");
      let formData = new FormData(uploadForm);
      fetch("/api/upload", {
        method: "POST",
        body: formData,
        headers: {
          "X-CSRFToken": token,
        },
        credentials: "same-origin",
      })
        .then((response) => {
          return response.json();
        })
        .then((jsonResponse) => {
          if (jsonResponse.errors) {
            this.errors = jsonResponse.errors;
          } else {
            this.errors = [];
            this.success = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      success: false,
      errors: [],
    };
  },
});

const UploadForm = app.component("upload-form");

const Home = {
  name: "Home",
  template: `
    <div class="jumbotron">
        <h1>Lab 7</h1>
        <p class="lead">In this lab we will demonstrate VueJS working with Forms and Form Validation from Flask-WTF.</p>
    </div>
    `,
  data() {
    return {};
  },
};

const Login = {
  name: "Login",
  template: `
  <div id="login">
    <h1>Log in to your account</h1>
    <login-form></login-form>
  </div>
  `,
};

const LoginForm = {
  name: "LoginForm",
  template: `
  <section id="login-form-container">
    <form @submit.prevent="handleSubmit" method="POST">
        <label for="username"> Username </label>
        <input id="username" type="text" v-model="username" required />
        <label for="password"> Password </label>
        <input id="password" type="password" v-model="password" required />
        <button class="auth-form-btn" type="submit">
          Login
        </button>
        <div v-if="error" class="error">
          {{ error }}
        </div>
    </form>
</section>
  `,
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      let userObj = { username: this.username, password: this.password };

      // Log the user in
      let data = await login(userObj);
      if (data.error) {
        console.log(data.error);
        this.error = data.error;
      }
      console.log(data);
    },
  },
};

const NotFound = {
  name: "NotFound",
  template: `
    <div>
        <h1>404 - Not Found</h1>
    </div>
    `,
  data() {
    return {};
  },
};

// Define Routes
const routes = [
  { path: "/", component: Home },
  // Put other routes here
  { path: "/upload", component: UploadForm },

  // This is a catch all route in case none of the above matches
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes`
});

app.use(router);

app.mount("#app");
