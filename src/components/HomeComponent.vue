<template>
<div>
  <div class="descriptions left-align">
    <span class="im-a">I'm a...</span>
    <div class="titles-portrait__container">
      <div class="titles">
        <span class="emphasis-red">full-stack web engineer</span>
        <span class="emphasis-red">video editor</span>
        <span class="emphasis-red">sound designer</span>
        <span class="emphasis-red">professional bad guitar player</span>
      </div>
      <div class="portrait__container">
        <div class="portrait-wrapper" :style="cssProps" aria-label="Portrait image of Zach Smith"></div>
        <span class="portrait-name">
          <p>Zach Smith</p>
          <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" xml:space="preserve"><path d="M40.56 45.42H12.384L57.804 0l45.408 45.42h-28.51c4.046 53.517 31.917 96.753 68.052 107.266-5.513 1.599-11.224 2.452-17.077 2.452-44.143.001-80.475-48.027-85.117-109.718"/></svg>
        </span>
      </div>
    </div>
  </div>
  <div class="description-sentences left-align">
    <p>
      Currently based out of <span class="emphasis-red">Augusta, GA</span>
      and doing <span class="emphasis-red">API/UI development</span>
      for <a href="https://jumpcloud.com" target="_blank" class="link-underline">JumpCloud</a>
    </p>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeComponent',
  computed: {
    portraitPath: () => require('@/assets/pictures/zach.jpg'),
    cssProps(): { backgroundImage: string, backgroundPosition: string } {
      return {
        backgroundImage: `url(${this.portraitPath})`,
        backgroundPosition: '-5px -50px',
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.titles-portrait__container {
  position: relative;
  margin-bottom: 20px;

  .portrait__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;

    @include screen-gt($size-tablet) {
      right: 3vw;
    }

    .portrait-wrapper {
      border-radius: 50%;
      border: 4px solid $off-white;
      overflow: hidden;
      width: 27vw;
      height: 27vw;
      background-color: $off-white;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      @include screen-gt($size-phablet) {
        width: 23vw;
        height: 23vw;
        margin-bottom: 10px;

        @include screen-gt($size-tablet) {
          max-width: 180px;
          max-height: 180px;
          padding: 8px;

          @include screen-gt($size-desktop) {
            max-width: 250px;
            max-height: 250px;
          }
        }
      }
    }

    .portrait-name {
      display: none;
      flex-direction: row;
      right: 0;

      .arrow {
        height: 0.5em;
        min-height: 15px;
        transform: scaleX(-1) rotate(30deg);
        fill: $off-white;
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