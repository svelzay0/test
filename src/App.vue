<template>
  <div id="app">
    <!-- <navbar/> -->
    <router-view/>
  </div>
</template>

<script>
// import Navbar from './components/Navbar';
// import { mapActions, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    // Navbar
  },
  // data() {
  //   return {
  //     layout: this.$route.meta.layout,
  //     windowWidth: window.innerWidth
  //   };
  // },
  // mounted() {
  //   this.fetchCity();
  //   this.setWindowWidth(this.windowWidth);
  //   window.onresize = () => {
  //     this.windowWidth = window.innerWidth
  //     this.setWindowWidth(this.windowWidth);
  //   }
  // },
  // methods: {
  //   ...mapActions("order", ["fetchCity"]),
  //   ...mapMutations('shared', ['setWindowWidth'])
  // }
};
</script>

<style lang="scss">
.app {
  display: flex;
  height: 100vh;
}
</style>
