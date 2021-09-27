<template>
  <div class="heading" :class="{ 'hide-hello': condenseHeader, 'translate-name': showNavLinks }">
    <p class="hello-statement">Hey there, I'm&nbsp;</p>
    <span class="name-container">
      <div v-if="showNavLinks" class="header-nav">
        <router-link to="/"><span class="emphasis-red link-underline">Zach Smith</span></router-link>&nbsp;&nbsp;|&nbsp;
        <router-link to="/webdev" class="link-underline all-caps">full stack dev</router-link>&nbsp;&nbsp;|&nbsp;
        <router-link to="/sounddesign" class="link-underline all-caps">sound design</router-link>
      </div>
      <template v-else>
        <span class="emphasis-red">Zach Smith</span>.
      </template>
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
    transition: max-width 0.4s ease-in-out, max-height 0.4s ease-in-out, opacity 0.4s ease-in-out 0.5s;
  }

  .name-container {
    z-index: 2;
    white-space: nowrap;
    overflow: hidden;
  }

  &.hide-hello {
    .hello-statement {
      transition: all 0.4s ease-in-out;
      opacity: 0;
    }
  }

  &.translate-name {
    .hello-statement {
      max-width: 0;
      max-height: 0;
    }
  }
}

</style>