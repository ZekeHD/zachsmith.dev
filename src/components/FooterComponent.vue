<template>
  <footer>
    <div class="footer-container">
      <p>Get in touch:</p>
      <a href="https://www.linkedin.com/in/zachsmith258/" target="_blank">
        <img src="../assets/linkedin.png">
      </a>
    </div>
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

    p {
      margin-right: 8px;
    }

    img {
      width: 50px;
    }
  }
</style>