<template>
<div class="description left-align">
  <span class="im-a">I'm a...</span>
  <div class="titles-picture__container">
    <div class="titles">
      <span class="emphasis-red">full-stack web engineer</span>
      <span class="emphasis-red">video editor</span>
      <span class="emphasis-red">sound designer</span>
      <span class="emphasis-red">professional bad guitar player</span>
    </div>
    <div class="picture__container">
      <img class="portrait" :src="portraitPath">
      <span class="portrait-name">
        <p>Zach Smith</p>
        <img :src="arrowPath">
      </span>
    </div>
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
  computed: {
    portraitPath: () => require('@/assets/pictures/zach.png'),
    arrowPath: () => require('@/assets/icons/arrow-up.svg'),
  },
});
</script>
<style lang="scss" scoped>
.titles-picture__container {
  position: relative;

  .picture__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;

    img.portrait {
      width: 20vw;
      height: auto;
      position: relative;
      right: 0;
      bottom: 30px;
      border-radius: 50%;
      object-fit: cover;
      background-color: #e3e3e3;
      padding: 8px;
      aspect-ratio: 1;

      @include screen-gt(425px) {
        width: 20vw;
        max-width: 138px;
        position: static;
        margin-bottom: 10px;

        @include screen-gt($size-tablet) {
          max-width: 230px;
        }
      }
    }

    .portrait-name {
      display: none;
      flex-direction: row;
      right: 0;

      img {
        height: 0.5em;
        min-height: 20px;
        transform: scaleX(-1) rotate(30deg);
      }
    }

    @include screen-gt(425px) {
      .portrait-name {
        display: flex;
      }
    }
  }
}

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