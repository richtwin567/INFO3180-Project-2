<template>
  <main>
    <section id="home-page">
      <h1>Buy and Sell Cars Online</h1>
      <p>
        United Auto Sales provides the fastest, easiest and most user friendy to
        buy and sell cars online. Find a great price on the vehicle you Want
      </p>
      <div class="btns">
        <a href="/register" class="reg-btn">
          Register
        </a>
        <a href="/login" class="login-btn">Login</a>
      </div>
    </section>
    <img
      src="https://blogs.forbes.com/samabuelsamid/files/2018/11/Small-Audi-e-tron-GT-concept-5118.jpg"
      alt="car"
    />
  </main>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
}

a {
  text-decoration: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

h1 {
  margin: 0;
  font-size: 48px;
  color: black;
  max-width: 400px;
}
p {
  max-width: 400px;
}
.btns {
  max-width: 400px;
}

#home-page {
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;
  justify-content: center;
  background-color: rgb(243, 244, 246);
}

.btns {
  display: flex;
  justify-content: start;
  width: 100%;
}
.reg-btn {
  margin-right: 5px;
  background: rgb(0, 183, 255);
  border: none;
  width: 120px;
  border-radius: 5px;
  color: #ffffff;
  padding: 12px 25px;
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
