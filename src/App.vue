<template>
<div class="page-container">
  <div class="content">
    <HeaderComponent :condenseHeader="condenseHeader"></HeaderComponent>
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
  <FooterComponent></FooterComponent>
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
  color: #e3e3e3;
  background-color: #3d3d3d;
  user-select: none;

  html, body, p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
  
  ul {
    margin: 0;
  }

  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;

    .content {
      flex-grow: 1;
      width: 85%;
      margin: 0 auto 25vh;
      z-index: 1;

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
