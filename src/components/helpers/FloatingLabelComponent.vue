<template>
  <div
    v-if="yearsAmount"
    id="floating-years__label"
    :class="{ hide: hide }"
    :style="mousePosition"
  >
    <p>{{ yearsAmount }}+</p>
    <p>years</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";

export default defineComponent({
  name: "FloatingLabelComponent",
  props: {
    hide: Boolean,
    mousePosition: Object as PropType<{ left: string; top: string }>,
    yearsAmount: Number,
  },
});
</script>

<style lang="scss">
#floating-years__label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: fixed;
  color: $off-black;
  background-color: $off-white;
  min-width: 70px;
  min-height: 40px;
  width: 8vw;
  height: 9vw;
  pointer-events: none;
  border-radius: 5px;
  transition: opacity 0.4s;

  @include screen-gt($size-tablet) {
    min-width: 100px;
    min-height: 70px;
    width: 1.9vw;

    @include screen-gt($size-desktop) {
      width: 125px;
      height: 90px;
    }
  }

  p {
    line-height: 0.7em;
  }

  &.hide {
    opacity: 0;
  }
}
</style>
