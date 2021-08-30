<template>
<div class="page-container">
  <div class="content">
    <router-view />
  </div>
  <FooterComponent></FooterComponent>
</div>
</template>

<script lang="ts">
import FooterComponent from './components/FooterComponent.vue';
export default {
  name: 'App',
  components: {
    FooterComponent,
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap');
body {
  font-family: 'Teko', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  user-select: none;

  html, body, p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    height: 98vh;

    .content {
      flex-grow: 1;
      width: 85%;
      margin: auto;
    }
  }
}
</style>
