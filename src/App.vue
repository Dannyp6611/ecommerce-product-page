<template>
  <div class="font-Kumbh container">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  components: { Navigation },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");
</style>
