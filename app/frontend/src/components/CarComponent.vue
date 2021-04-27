<template>
  <div class="main-car">
    <img :src="API_ENDPOINT + '/uploads/' + car.photo" alt="" />
    <div id="car-page">
      <div>
        <h2>{{ car.year + " " + car.make }}</h2>
        <h3>{{ car.model }}</h3>
        <p>{{ car.description }}</p>

        <div class="details">
          <p class="black">
            <span class="detail-labels">Colour </span>{{ car.colour }}
          </p>
          <p class="black">
            <span class="detail-labels">Body Type </span>{{ car.car_type }}
          </p>
          <p class="black">
            <span class="detail-labels">Price </span>${{ car.price }}
          </p>
          <p class="black">
            <span class="detail-labels">Transmission </span
            >{{ car.transmission }}
          </p>
        </div>
      </div>
      <div class="car-btns">
        <a class="login-btn">Email Owner</a>
        <button @click="setFave" class="fave">
          <img
            :class="isFavourite ? 'hidden' : ''"
            src="../assets/heart.svg"
            alt="fave"
          />
          <img
            :class="isFavourite ? '' : 'hidden'"
            src="../assets/heart-filled.svg"
            alt="fave"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { authHeader } from "../services/headers.service.js";

export default {
  name: "ExploreComponent",
  created() {
    const API_ENDPOINT = "http://localhost:9090/api";
    let self = this;
    let id = window.location.pathname.replace("/cars/", "");

    let token = authHeader().Authorization;

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

    fetch(API_ENDPOINT + `/cars/${id}`, {
      headers: authHeader(),
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        if (!data.message) {
          self.car = data;
          self.pic_src = "../../../../uploads/" + data.photo;
        }
      });
    fetch(API_ENDPOINT + `/users/${self.uid}/favourites`, {
      headers: authHeader(),
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        if (!data.message) {
          self.favourites = data;
        }
      })
      .then(function() {
        if (self.favourites.map((fave) => fave.id).includes(self.car.id)) {
          self.isFavourite = true;
        }
      });
  },
  data() {
    return {
      car: {},
      favourites: [],
      isFavourite: false,
      pic_src: String,
      uid: String,
      API_ENDPOINT: "http://localhost:9090/api",
    };
  },
  methods: {
    setFave() {
      let self = this;
      const API_ENDPOINT = "http://localhost:9090/api";

      if (!self.isFavourite) {
        fetch(API_ENDPOINT + `/cars/${self.car.id}/favourite`, {
          headers: authHeader(),
          method: "POST",
        })
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            console.log(data);
            self.isFavourite = true;
          });
      }
    },
  },
};
</script>

<style scoped>
.black {
  color: black;
  font-weight: 600;
  margin: 5px 0;
}

.fave {
  border-radius: 50%;
  border: 1px solid #777;
  background-color: white;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-car {
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 3fr;
  height: 500px;
  width: 50%;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
}

.detail-labels {
  color: gray;
  margin-right: 10px;
}

.car-btns {
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-car img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.fave img {
  height: 24px;
  width: 24px;
}

#car-page h2 {
  margin: 0;
  color: black;
  max-width: 400px;
}
p {
  max-width: 500px;
}
.btns {
  max-width: 400px;
}

#car-page {
  padding: 10px 20px 30px 10px;
  width: 100%;
  background-color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#car-page h3 {
  color: #776;
  margin: 0;
}

.details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.login-btn {
  margin-right: 5px;
  background: rgb(0, 214, 125);
  border: none;
  width: 120px;
  border-radius: 5px;
  color: #ffffff;
  padding: 12px 25px;
}

.login-btn:hover {
  cursor: not-allowed;
}

.fave:hover {
  cursor: pointer;
}
.hidden {
  display: none;
}
</style>
