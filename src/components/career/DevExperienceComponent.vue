<template>
  <div class="description">
    <div class="titles">
      <span class="emphasis-red">Better.<br></span>
      <span class="emphasis-red">Faster.<br></span>
      <span class="emphasis-red">Stronger UI/UX.<br></span>
    </div>
  </div>
  <div class="dev-description">
    <p>I specialize in creating easy-to-use and straightforward user experiences.</p>
    <p>As web developers and designers, we are responsible for putting up simple yet intuitive guardrails for our user experiences.</p>
    <p>Our web app should be easy for all users to navigate efficiently and the functionality should be instantly discoverable.</p>
  </div>
  <div class="experience_container">
    <div class="name-term__container">
      <span>
        <span class="employer-name">{{ name }}</span> - <span class="role-name">{{ role }}</span>
      </span>
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

<style lang="scss" scoped>
.titles {
  margin-bottom: 12px;
}

.dev-description {
  font-size: 48px;
  text-align: left;

  p {
    line-height: 1.2em;
    margin-bottom: 8px;
  }
}

.experience_container {
  .name-term__container {
    display: flex;
    justify-content: space-between;
  }

}

</style>