<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style src="./assets/css/app.css"></style>
<script>
export default {
  components: {}
};
</script>
<style scoped>
.fade-enter {
  @apply opacity-0;
  @apply translate-x-full;
}
.fade-enter-active {
  transition: all 0.5s ease-in-out;
}
</style>
