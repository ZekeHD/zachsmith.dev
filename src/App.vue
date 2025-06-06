<template>
  <div class="page-container">
    <div class="content">
      <header-component :condense-header="condenseHeader"></header-component>
      <main>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in" appear>
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
  font-size: clamp(22px, 4.5vw, 32px);
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $off-white;
  width: 100vw;
  overflow-x: hidden;

  // mask-image: linear-gradient(to bottom, black, transparent);

  background-color: $off-black;
  background-image: radial-gradient(#595959 0.75px, transparent 0.75px),
    radial-gradient(#6f6f6f 0.75px, $off-black 0.75px);

  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;

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
    margin-bottom: 24px;
    box-sizing: border-box;
    height: 100vh;

    .content {
      flex-grow: 1;
      width: 95%;
      margin: 0 auto 0.5vh;
      z-index: 1;
      max-width: 2100px;

      @include screen-gt($size-phablet) {
        width: 85%;
        margin-bottom: 3vh;
      }

      @include screen-gt($size-tablet) {
        margin-bottom: 7vh;
      }

      @include screen-gt(1200px) {
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
