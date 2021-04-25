<template>
  <div class="main-car">
    <img :src="'http://localhost:9090/uploads/' + car.photo" alt="" />
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
        <a href="/login" class="login-btn">Email Owner</a>
        <button class="fave">
          <img src="../assets/heart.svg" alt="fave" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExploreComponent",
  created() {
    let self = this;
    let id = window.location.pathname.replace("/cars/", "");

    fetch(`http://localhost:9090/api/cars/${id}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        if (!data.message) {
          self.car = data;
          self.pic_src = "../../../../uploads/" + data.photo;
        }
      })
      .then(function() {});
  },
  data() {
    return {
      car: {},
      pic_src: String,
    };
  },
  methods: {
    favourite() {},
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
</style>
