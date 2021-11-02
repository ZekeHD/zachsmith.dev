<template>
<div class="nav-container">
  <p>I'm looking for...</p>
  <nav>
    <ul class="options-container all-caps">
      <li>
        <router-link to="/webdev" class="link-underline">full stack dev</router-link>
      </li>
      <li>
        <router-link to="/sounddesign" class="link-underline disabled">sound design/editing</router-link>
        <p>(coming soon!)</p>
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
  width: 90%;
  max-width: 900px;
  margin: auto;
  font-size: calc(16px + 2vw);

  @include screen-gt($size-tablet) {
    width: 75%;
    font-size: calc(24px + 1.5vw);

    @include screen-gt($size-desktop) {
      width: 60%;
      font-size: 44px;
    }
  }
  
  p {
    margin-bottom: 8px;
  }

  .options-container {
    display: flex;
    justify-content: space-between;
    column-gap: 15px;
    padding: 0;

    li {
      list-style-type: none;

      .disabled {
        color: grey;
        user-select: none;
        pointer-events: none;
      }
    }
  }
}
</style>