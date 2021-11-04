<template>
<div class="page-container">
  <div class="content">
    <header-component :condense-header="condenseHeader"></header-component>
    <main>
      <router-view v-slot="{ Component }">
        <transition
          name="fade"
          mode="out-in"
          appear
        >
          <component :is="Component"></component>
        </transition>
      </router-view>
    </main>
  </div>
  <footer-component id="footer"></footer-component>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default defineComponent({
  name: 'AppComponent',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  computed: {
    condenseHeader() {
      return this.$route.fullPath !== '/';
    },
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Teko', Avenir, Helvetica, Arial, sans-serif;
  font-size: calc(20px + 1.2vw);
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $off-white;
  background-color: $off-black;
  user-select: none;

  @include screen-gt($size-tablet) {
    font-size: calc(28px + 1.5vw);

    @include screen-gt($size-desktop) {
      font-size: 48px;
    }
  }

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
    margin: auto;
    box-sizing: border-box;

    .content {
      flex-grow: 1;
      width: 95%;
      margin: 0 auto 7vh;
      z-index: 1;

      @include screen-gt($size-phablet) {
        width: 85%;
      }

      @include screen-gt($size-tablet) {
        margin-bottom: 12vh;
      }

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
