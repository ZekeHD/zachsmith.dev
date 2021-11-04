<template>
<div>
  <div class="descriptions left-align">
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
  <div class="description-sentences left-align">
    <p>
      Currently based out of <span class="emphasis-red">Augusta, GA</span>
      and doing <span class="emphasis-red">full-stack development</span>
      for enterprise-level clients at
      <a href="https://ruralsourcing.com" target="_blank" class="link-underline">Rural Sourcing, Inc.</a>
    </p>
  </div>
</div>
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
  margin-bottom: 20px;

  .picture__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;

    @include screen-gt($size-tablet) {
      right: 3vw;
    }

    img.portrait {
      width: 26vw;
      max-width: 150px;
      height: auto;
      position: relative;
      right: 0;
      bottom: 5px;
      border-radius: 50%;
      object-fit: cover;
      background-color: $off-white;
      padding: 4px;
      aspect-ratio: 1;

      @include screen-gt($size-phablet) {
        width: 24vw;
        position: static;
        margin-bottom: 10px;

        @include screen-gt($size-tablet) {
          max-width: 180px;
          padding: 8px;

          @include screen-gt($size-desktop) {
            max-width: 250px;
          }
        }
      }
    }

    .portrait-name {
      display: none;
      flex-direction: row;
      right: 0;

      img {
        height: 0.5em;
        min-height: 15px;
        transform: scaleX(-1) rotate(30deg);
      }
    }

    @include screen-gt($size-phablet) {
      .portrait-name {
        display: flex;
      }
    }
  }
}

.welcome {
  line-height: 1.2em;
  margin-bottom: 30px;
}


</style>