<template>
<div class="nav-container">
  <p>I'm looking for...</p>
  <nav class="options-container">
    <router-link to="/webdev">full stack dev</router-link>
    <router-link to="/sounddesign">editing/sound design</router-link>
  </nav>
</div>
</template>

<script lang="ts">
export default {
  name: 'NavComponent',
}
</script>

<style lang="scss" scoped>
.nav-container {
  width: 60%;
  margin: auto;
  font-size: 40px;

  .options-container {
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;

    a {
      text-decoration: none;
      position: relative;
      color: red;

      &::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 3px;
        bottom: 0;
        left: 0;
        transform-origin: bottom left;
        background-color: black;
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }

      &:hover::before {
        transform: scaleX(1);
      }
    }
  }
}
</style>