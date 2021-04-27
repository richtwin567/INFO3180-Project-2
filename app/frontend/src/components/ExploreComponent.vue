<template>
  <section id="explore-page">
    <div class="heading">
      <h1>Explore</h1>
    </div>
    <div class="search-cars">
      <div class="inputs">
        <label class="model" for="make">Make</label>
        <input
          type="search"
          name="make"
          v-model="searchTermMake"
          v-on:change="empty"
          id="make"
          class="search-input"
        />
      </div>
      <div class="inputs">
        <label class="model" for="model">Model</label>
        <input
          type="search"
          name="model"
          v-model="searchTermModel"
          v-on:change="empty"
          id="model"
          class="search-input"
        />
      </div>
      <button class="btn-search" @click="searchCars">Search</button>
    </div>

    <div class="car-cards">
      <ul class="cars-lst">
        <li v-for="car in currentCars" :key="car.id">
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
  </section>
</template>

<script>
import { authHeader } from "../services/headers.service";
const API_ENDPOINT = "https://united-auto-sales.herokuapp.com/api";
export default {
  name: "ExploreComponent",
  created() {
    let self = this;
    fetch(API_ENDPOINT + "/cars", {
      headers: authHeader(),
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        if (!data.message) {
          self.cars = data;
        }
      })
      .then(function() {
        console.log(self.cars);
        self.currentCars = self.cars;
        console.log(self.currentCars);
      });
  },
  data() {
    return {
      cars: [],
      currentCars: [],
      searchTermModel: "",
      searchTermMake: "",
      API_ENDPOINT: "http://localhost:9090/api",
    };
  },
  methods: {
    getCar(id) {
      window.location.href = `/cars/${id}`;
    },
    empty() {
      if (this.searchTermModel == "" && this.searchTermMake == "") {
        this.currentCars = this.cars;
      }
    },
    searchCars() {
      if (this.searchTermModel != "" && this.searchTermMake == "") {
        this.currentCars = this.cars.filter(
          (car) => car.model.toUpperCase() == this.searchTermModel.toUpperCase()
        );
      } else if (this.searchTermModel == "" && this.searchTermMake != "") {
        this.currentCars = this.cars.filter(
          (car) => car.make.toUpperCase() == this.searchTermMake.toUpperCase()
        );
      } else {
        this.currentCars = this.cars.filter(
          (car) =>
            car.make.toUpperCase() == this.searchTermMake.toUpperCase() &&
            car.model.toUpperCase() == this.searchTermModel.toUpperCase()
        );
      }
    },
  },
};
</script>

<style scoped>
#explore-page a {
  text-decoration: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

#explore-page input {
  margin-left: 5px;

  border-radius: 5px;
  padding: 7px;
  border: 1px solid gray;
  width: 300px;
}

#explore-page img {
  object-fit: cover;
  width: 100%;
  height: 200px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

#explore-page label {
  margin-left: 5px;
  color: #444;
}

.heading {
  width: 100%;
  max-width: 1100px;
  margin-bottom: 20px;
}
#explore-page h1 {
  margin: 0;
  font-size: 32px;
  color: black;
}
#explore-page p {
  margin: 5px;
}

#explore-page {
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

#explore-page li {
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
  cursor: pointer;
  background: rgb(13, 96, 129);
}

.btn-search {
  margin-right: 5px;
  background: rgb(1, 201, 118);
  border: none;
  width: 120px;
  border-radius: 5px;
  color: #ffffff;
  padding: 8px 25px;
  margin-left: 10px;
}

.btn-search:hover {
  cursor: pointer;
  background: rgb(28, 161, 106);
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

#explore-page .tags {
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
</style>
