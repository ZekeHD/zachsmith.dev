<template>
<div class="nav-container">
  <p>I'm looking for...</p>
  <nav class="options-container">
    <router-link to="/webdev">web dev</router-link>
    <router-link to="/sounddesign">sound design</router-link>
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
  width: 50%;
  margin: auto;
  font-size: 40px;

  .options-container {
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;

    a {
      text-decoration: none;
      color: red;
    }
  }
}
</style>