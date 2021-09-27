<template>
<div class="page-container">
  <div class="content">
    <header>
      <HeaderComponent :condenseHeader="condenseHeader"></HeaderComponent>
    </header>
    <main>
      <router-view v-slot="{ Component }">
        <transition
          name="fade"
          mode="out-in"
          @before-leave="beforeLeave"
          appear
        >
          <component :is="Component"></component>
        </transition>
      </router-view>
    </main>
  </div>
  <footer>
    <FooterComponent></FooterComponent>
  </footer>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data: () => ({
    condenseHeader: false,
  }),
  beforeMount() {
    this.setCondenseHeader();
  },
  methods: {
    beforeLeave() {
      this.setCondenseHeader();
    },
    setCondenseHeader() {
      this.condenseHeader = this.pathNotHome;
    },
  },
  computed: {
    pathNotHome() {
      console.log(this.$route);
      return this.$route.fullPath !== '/';
    },
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Teko', Avenir, Helvetica, Arial, sans-serif;
  font-size: 58px;
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

      .fade-enter-from, .fade-leave-to {
        opacity: 0;
      }

      .fade-enter-active, .fade-leave-active {
        transition: opacity 0.4s ease-out;
      }
    }
  }
}
</style>
