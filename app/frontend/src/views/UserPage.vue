<template>
  <div id="user">
    <UserComponent />
  </div>
</template>

<script>
import UserComponent from "@/components/UserComponent.vue";

export default {
  name: "CarPage",
  components: {
    UserComponent,
  },
};
</script>
<style scoped>
#user {
  background-color: rgb(243, 244, 246);
  padding-top: 60px;
  height: calc(93vh - 80px);
}
</style>
