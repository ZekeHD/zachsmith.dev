<template>
<footer class="footer-container">
  <p>Get in touch:</p>
  <a href="https://www.linkedin.com/in/zachsmith258/" target="_blank">
    <img src="@/assets/icons/dev-icons/linkedin.png" draggable="false" alt="Zach Smith LinkedIn link">
  </a>
  <a href="https://github.com/ZekeHD" target="_blank">
    <img src="@/assets/icons/dev-icons/git.svg" draggable="false" alt="Zach Smith Github link">
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
  display: flex;
  align-items: center;
  flex-direction: row;
  z-index: 0;

  @include screen-gt($size-tablet) {
    @include screen-gt($size-desktop) {
      font-size: 32px;
    }
  }

  p {
    margin-right: 12px;
  }

  img {
    height: calc(18px + 1.5vw);
    margin-right: 10px;

    @include screen-gt($size-tablet) {
      height: calc(25px + 2vw);

      @include screen-gt($size-desktop) {
        height: 40px;
      }
    }
  }
}
</style>