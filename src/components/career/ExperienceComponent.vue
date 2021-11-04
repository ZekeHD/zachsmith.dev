<template>
<div class="experience_container">
  <div class="name-term__container">
    <span class="left-align">
      <p>{{ name }}</p>
      <p class="role" v-if="role">{{ role }}</p>
    </span>
    <span class="term-length left-align">{{ termLength }}</span>
  </div>
  <div v-if="descriptions" class="description__container left-align">
    <p v-for="(description, i) in descriptions" :key="i">{{ description }}</p>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { Experience } from '../../shared/interfaces/Experience';

export default defineComponent({
  name: 'ExperienceComponent',
  props: {
    name: String as PropType<Experience['name']>,
    role: String as PropType<Experience['role']>,
    termLength: String as PropType<Experience['termLength']>,
    descriptions: Array as PropType<Experience['descriptions']>,
    url: String as PropType<Experience['url']>,
  },
});
</script>

<style lang="scss" scoped>
.experience_container {
  .name-term__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media screen and (min-width: 400px) {
      flex-direction: row;
    }
  }

  @media screen and (max-width: $size-tablet) {
    .role {
      display: none;
    }
  }

  .description__container {
    font-size: calc(16px + 1.5vw);
    font-weight: 200;
    margin-left: 12px;
    line-height: 1.2em;

    @include screen-gt($size-tablet) {
      font-size: calc(20px + 1.5vw);

      @include screen-gt($size-desktop) {
        font-size: 40px;
        margin-left: 30px;
      }
    }

    p {
      margin-bottom: 15px;
    }
  }
}
</style>