<template>
  <section>
    <div :class="param == uid ? 'hidden' : ''">
      <h1 id="no-access">You cannot access this page</h1>
    </div>
    <div :class="param == uid ? '' : 'hidden'" id="user-page">
      <div class="user-card">
        <div class="profile-img">
          <img :src="API_ENDPOINT + '/uploads/' + user.photo" alt="" />
        </div>
        <div>
          <h1>{{ user.name }}</h1>
          <h3>{{ user.username }}</h3>
          <p>{{ user.biography }}</p>
          <br />
          <p class="black">
            <span class="user-detail-label">Email </span> {{ user.email }}
          </p>
          <p class="black">
            <span class="user-detail-label">Location </span> {{ user.location }}
          </p>
          <p class="black">
            <span class="user-detail-label">Joined </span>
            {{ user.date_joined }}
          </p>
        </div>
      </div>

      <div class="heading">
        <h1>Cars Favourited</h1>
      </div>
      <div class="car-cards">
        <ul class="cars-lst">
          <li v-for="car in cars" :key="car.id">
            <div class="car-card">
              <div class="photo">
                <img :src="API_ENDPOINT + '/uploads/' + car.photo" alt="car" />
              </div>
              <div class="car-info">
                <div>
                  <span class="name-and-price">
                    <p class="year-and-make">{{ car.year + " " + car.make }}</p>
                    <span class="car-price">
                      <img class="tags" src="../assets/tag.svg" alt="tag" />
                      <p>${{ car.price }}</p>
                    </span>
                  </span>
                  <p class="car-model">{{ car.model }}</p>
                </div>
              </div>
              <button @click="getCar(car.id)" class="btn-details">
                View More Details
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { authHeader } from "../services/headers.service";
const API_ENDPOINT = "https://united-auto-sales.herokuapp.com/api";

export default {
  name: "UserComponent",
  created() {
    let self = this;
    let token = authHeader().Authorization;
    let id = window.location.pathname.replace("/users/", "");
    self.param = id;

    function parseJWT(t) {
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
    self.uid = parseJWT(token).id;

    fetch(API_ENDPOINT + `/users/${id}/favourites`, {
      headers: authHeader(),
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        if (!data.message) {
          self.cars = data;
        }
      });
    fetch(API_ENDPOINT + `/users/${id}`, {
      headers: authHeader(),
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        if (!data.message) {
          self.user = data;
        }
      });
  },
  data() {
    return {
      cars: [],
      user: {},
      uid: String,
      param: String,
      API_ENDPOINT: "http://localhost:9090/api",
    };
  },
  methods: {
    getCar(id) {
      window.location.href = `/cars/${id}`;
    },
  },
};
</script>

<style scoped>
.user-card {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  width: 100%;
  max-width: 1070px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 60px 20px;
  margin-bottom: 50px;
}

.black {
  color: black;
  font-weight: 600;
}

.user-detail-label {
  color: #444;
  margin-right: 20px;
  font-weight: 400;
}

#user-page a {
  text-decoration: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

#user-page input {
  margin-left: 5px;

  border-radius: 5px;
  padding: 7px;
  border: 1px solid gray;
  width: 300px;
}

#user-page img {
  object-fit: cover;
  width: 100%;
  height: 200px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

#user-page label {
  margin-left: 5px;
  color: #444;
}

.heading {
  width: 100%;
  max-width: 1100px;
  margin-bottom: 20px;
}
#user-page h1 {
  margin: 0;
  font-size: 32px;
  color: black;
}
#user-page h3 {
  margin: 0;
}
#user-page p {
  margin: 5px;
}

#user-page {
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;
  justify-content: center;
  background-color: rgb(243, 244, 246);
}

.cars-lst {
  display: grid;
  grid-template-columns: repeat(3, 350px);
  gap: 20px;
  padding: 0;
  margin: 0;
}

#user-page li {
  list-style: none;
}

.car-card {
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  height: 400px;
  background-color: #ffffff;
  position: relative;
}
.car-info {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
}

.btn-details {
  background: rgb(0, 139, 194);
  border: none;
  width: 90%;
  border-radius: 5px;
  color: #ffffff;
  padding: 12px 25px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.btn-details:hover {
  background: rgb(15, 110, 148);
  cursor: pointer;
}
.name-and-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
}
.year-and-make {
  font-weight: 600;
}

#user-page .tags {
  height: 1em;
  width: 1em;
  margin: auto;
}
.car-price {
  background-color: rgb(1, 201, 118);
  color: white;
  padding: 5px;
  border-radius: 8px;
  display: flex;
  font-size: 18px;
}

.search-cars {
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  background-color: white;
  width: 100%;
  max-width: 1070px;
  padding: 15px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.car-model {
  color: gray;
}

.inputs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.profile-img {
  display: flex;
  align-items: center;
  justify-content: center;
}
#user-page .user-card .profile-img img {
  border-radius: 50%;
  height: 150px;
  width: 150px;
  object-fit: cover;
  align-self: flex-start;
}
.hidden {
  display: none;
}
#user-page.hidden {
  display: none;
}
#no-access {
  color: black;
  margin: 20px;
  padding: 0 10px;
  font-size: 32px;
}
</style>
