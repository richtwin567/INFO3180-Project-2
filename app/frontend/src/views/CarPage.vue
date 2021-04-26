<template>
  <div id="car">
    <CarComponent />
  </div>
</template>

<script>
import CarComponent from "@/components/CarComponent.vue";

export default {
  name: "CarPage",
  components: {
    CarComponent,
  },
};
</script>
<style scoped>
#car {
  background-color: rgb(243, 244, 246);
  padding-top: 60px;
  height: calc(93vh - 80px);
}
</style>
