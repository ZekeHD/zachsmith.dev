<template>
<header class="heading left-align" :class="{ 'hide-hello': condenseHeader }">
  <span class="hello-statement">Hey there, I'm&nbsp;</span>
  <nav class="links-container">
    <ul class="links-container__list">
      <li class="home-text emphasis-red">
        <router-link class="home-text__link" to="/"><span class="link-underline">Zach Smith.</span></router-link>
        <span class="home-text__text">Zach Smith.</span>
      </li>
      <template class="extra-links">
        <span>&nbsp;&nbsp;|</span>
        <li>
          &nbsp;&nbsp;<router-link to="/webdev" class="link-underline all-caps">full stack dev</router-link>&nbsp;&nbsp;|
        </li>
        <li>
          &nbsp;&nbsp;<router-link to="/sounddesign" class="link-underline all-caps">sound design</router-link>
        </li>
      </template>
    </ul>
  </nav>
</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderComponent',
  props: {
    condenseHeader: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.heading {
  font-size: calc(20px + 1.5vw);
  font-weight: 700;
  margin: 15px auto 0;
  display: flex;

  @include screen-gt($size-tablet) {
    font-size: calc(36px + 2vw);

    @include screen-gt($size-desktop) {
      font-size: calc(48px + 1.5vw);
    }
  }

  .hello-statement {
    max-width: 100%;
    max-height: 104px;
    white-space: nowrap;
    transition: max-width 0.4s ease-in-out 0.4s, opacity 0.4s ease-in-out 0.5s;
  }

  .links-container {
    z-index: 2;
    white-space: nowrap;
    overflow: hidden;

    &__list {
      display: flex;
      margin: 0;
      padding: 0;

      .home-text {
        &__link {
          display: none;
        }

        &__text {
          display: inline;
        }
      }

      .extra-links {
        display: flex;
        opacity: 0;
        pointer-events: none;
        user-select: none;
        transition: opacity 0.4s ease-in-out;
      }

      li {
        list-style-type: none;
      }
    }
  }

  &.hide-hello {
    .hello-statement {
      transition: max-width 0.4s ease-in-out 0.2s, opacity 0.4s ease-in-out;
      opacity: 0;
      max-width: 0;
      max-height: 0;
    }

    .home-text {
      &__link {
        display: inline;
      }

      &__text {
        display: none;
      }
    }

    .extra-links {
      opacity: 1;
      pointer-events: initial;
      user-select: initial;
      transition: opacity 0.4s ease-in-out;
    }
  }
}
</style>