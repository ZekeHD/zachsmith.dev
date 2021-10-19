<template>
  <footer class="footer-container">
    <p>Get in touch:</p>
    <a href="https://www.linkedin.com/in/zachsmith258/" target="_blank">
      <img src="@/assets/icons/linkedin.png" draggable="false" alt="LinkedIn link">
    </a>
    <a href="https://github.com/ZekeHD" target="_blank">
      <img src="@/assets/icons/git.svg" draggable="false" alt="Github link">
    </a>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterComponent',
});
</script>

<style lang="scss" scoped>
  .footer-container {
    display: inline-flex;
    flex-direction: row;
    font-size: 32px;
    position: fixed;
    bottom: 1vh;
    left: 2vw;
    z-index: 0;

    p {
      margin-right: 8px;
    }

    img {
      &:first-of-type {
        margin-right: 10px;
      }

      width: 50px;
      transition: width 0.3s ease-in-out;
    }
  }
</style>