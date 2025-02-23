<template>
  <svg :style="svgStyles" fill="" class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" xml:space="preserve"><path d="M40.56 45.42H12.384L57.804 0l45.408 45.42h-28.51c4.046 53.517 31.917 96.753 68.052 107.266-5.513 1.599-11.224 2.452-17.077 2.452-44.143.001-80.475-48.027-85.117-109.718"/></svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CurvyArrow',
  props: {
    pointDown: Boolean,
  },
  computed: {
    svgStyles() {
      const transform = this.pointDown
        ? 'scaleX(-1) scaleY(-1)'
        : 'scaleX(-1) rotate(30deg)';

      const height = this.pointDown
        ? '1em'
        : '0.5em';

      return {
        height,
        minHeight: '15px',
        transform,
      };
    },
  }
});
</script>

<style lang="scss" scoped>
.arrow {
  fill: $off-white;
}
</style>