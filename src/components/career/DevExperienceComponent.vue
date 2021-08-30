<template>
  <div class="experience_container">
    <div class="name-term_container">
      <span class="employer-name">{{ name }}</span> - <span class="role-name">{{ role }}</span>
      <span class="term-length">{{ termLength }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { Employer } from '../../shared/interfaces/Employer';

export default defineComponent({
  props: {
    name: String as PropType<Employer['name']>,
    role: String as PropType<Employer['role']>,
    termLength: String as PropType<Employer['termLength']>,
    description: String as PropType<Employer['description']>,
    url: String as PropType<Employer['url']>,
  },
});
</script>>

<style lang="scss">

</style>