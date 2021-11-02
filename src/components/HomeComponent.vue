<template>
<div class="description left-align">
  <span class="im-a">I'm a...</span>
  <div class="titles">
    <span class="emphasis-red">full-stack web engineer</span>
    <span class="emphasis-red">video editor</span>
    <span class="emphasis-red">sound designer</span>
    <span class="emphasis-red">professional bad guitar player</span>
  </div>
</div>
<p class="welcome left-align">
  Currently based out of <span class="emphasis-red">Augusta, GA</span>
  and doing <span class="emphasis-red">full-stack development</span>
  for enterprise-level clients at
  <a href="https://ruralsourcing.com" target="_blank" class="link-underline">Rural Sourcing, Inc.</a>
</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeComponent',
});
</script>
<style lang="scss" scoped>
.welcome {
  font-size: calc(16px + 2vw);
  line-height: 1.2em;
  margin-bottom: 30px;

  @include screen-gt($size-tablet) {
    font-size: calc(24px + 1.5vw);

    @include screen-gt($size-desktop) {
      font-size: 44px;
    }
  }
}


</style>