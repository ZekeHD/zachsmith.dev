<template>
<div class="nav-container">
  <p>I'm looking for...</p>
  <nav class="options-container">
    <router-link to="/webdev" class="link-underline">full stack dev</router-link>
    <router-link to="/sounddesign" class="link-underline">editing/sound design</router-link>
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
  
  p {
    margin-bottom: 8px;
  }

  .options-container {
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
  }
}
</style>