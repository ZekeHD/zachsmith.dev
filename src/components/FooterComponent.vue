<template>
  <footer class="footer-container">
    <p>Get in touch:</p>
    <a href="https://www.linkedin.com/in/zachsmith258/" target="_blank">
      <img src="../assets/icons/linkedin.png" draggable="false" alt="Footer icon">
    </a>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'FooterComponent'
}
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
      width: 50px;
    }
  }
</style>