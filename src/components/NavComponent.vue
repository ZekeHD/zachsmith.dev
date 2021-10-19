<template>
<div class="nav-container">
  <p>I'm looking for...</p>
  <nav>
    <ul class="options-container all-caps">
      <li>
        <router-link to="/webdev" class="link-underline">full stack dev</router-link>
      </li>
      <li>
        <router-link to="/sounddesign" class="link-underline">sound design/editing</router-link>
      </li>
    </ul>
  </nav>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavComponent',
});
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

    li {
      list-style-type: none;
    }
  }
}
</style>