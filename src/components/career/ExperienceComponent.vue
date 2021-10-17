<template>
  <div class="experience_container">
    <div class="name-term__container">
      <span class="left-align">
        <span>{{ name }}</span><span v-if="role"> - {{ role }}</span>
      </span>
      <span class="term-length right-align">{{ termLength }}</span>
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
    justify-content: space-between;
  }

  .description__container {
    font-size: 40px;
    font-weight: 200;
    margin-left: 30px;
    line-height: 1.2em;

    p {
      margin-bottom: 15px;
    }
  }
}
</style>