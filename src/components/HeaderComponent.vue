<template>
  <div class="heading" :class="{ 'hide-hello': condenseHeader }">
    <p class="hello-statement">Hey there, I'm&nbsp;</p>
    <span class="name-container">
      <router-link v-if="condenseHeader" to="/"><span class="emphasis-red link-underline">Zach Smith</span></router-link>
      <span v-else class="emphasis-red">Zach Smith</span>
      <span class="extra-links__expanded">
        <span>&nbsp;&nbsp;|&nbsp;</span>
        <router-link to="/webdev" class="link-underline all-caps">full stack dev</router-link>&nbsp;&nbsp;|
        <router-link to="/sounddesign" class="link-underline all-caps">sound design</router-link>
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderComponent',
  props: {
    condenseHeader: Boolean,
    showNavLinks: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.heading {
  text-align: left;
  font-size: 72px;
  font-weight: 700;
  margin: 30px auto 0;
  display: flex;

  .hello-statement {
    max-width: 405px;
    max-height: 104px;
    white-space: nowrap;
    transition: max-width 0.4s ease-in-out, opacity 0.4s ease-in-out 0.5s;
  }

  .name-container {
    z-index: 2;
    white-space: nowrap;
    overflow: hidden;

    .extra-links__expanded {
      opacity: 0;
      pointer-events: none;
      user-select: none;
      transition: opacity 0.4s ease-in-out;
    }
  }

  &.hide-hello {
    .hello-statement {
      transition: max-width 0.4s ease-in-out 0.4s, opacity 0.4s ease-in-out;
      opacity: 0;
      max-width: 0;
      max-height: 0;
    }

    .extra-links__expanded  {
      opacity: 1;
      pointer-events: initial;
      user-select: initial;
      transition: opacity 0.4s ease-in-out;
    }
  }
}

</style>