<template>
  <div id="app">
    <HeaderMenu class="center" />
    <main>
      <router-view />
    </main>
    <BackToTopButton />
    <FooterSite class="center" />
  </div>
</template>

<script>
import HeaderMenu from './components/HeaderMenu.vue';
import FooterSite from './components/FooterSite.vue';
import BackToTopButton from './components/BackToTopButton.vue';

export default {
  name: 'App',
  components: {
    HeaderMenu,
    FooterSite,
    BackToTopButton
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
@import "./assets/__variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.center {
  padding-left: calc(50% - 580px);
  padding-right: calc(50% - 580px);
}
</style>
