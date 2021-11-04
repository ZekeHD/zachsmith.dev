<template>
<div>
  <div class="description left-align">
    <span class="emphasis-red">Better.<br></span>
    <span class="emphasis-red">Faster.<br></span>
    <span class="emphasis-red">Stronger UI/UX.<br></span>
  </div>
  <div class="dev-description left-align">
    <p>I love creating easy-to-use and attractive user experiences.</p>
    <p>Let's get stuff done.</p>
  </div>
  <hr>
  <p class="section-title all-caps emphasis-red left-align">proficiencies</p>
  <proficiencies-component
    v-for="proficiency in proficiencies"
    :key="proficiency.title"
    :title="proficiency.title"
    :techs="proficiency.techs"
  ></proficiencies-component>
  <hr>
  <p class="section-title emphasis-red all-caps left-align">professional experience</p>
  <experience-component
    v-for="employer in employers"
    :key="employer.name"
    :name="employer.name"
    :term-length="employer.termLength"
    :descriptions="employer.descriptions"
    :role="employer.role"
    :url="employer.name"
  ></experience-component>
  <hr>
  <p class="section-title emphasis-red all-caps left-align">education</p>
  <experience-component
    v-for="education in educations"
    :key="education.name"
    :name="education.name"
    :term-length="education.termLength"
    :descriptions="education.descriptions"
  ></experience-component>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ExperienceComponent from '../components/career/ExperienceComponent.vue';
import ProficienciesComponent from '../components/career/ProficienciesComponent.vue';

import { employers } from '../shared/employers';
import { educations } from '../shared/educations';
import { proficiencies } from '../shared/proficiencies';

export default defineComponent({
  name: 'WebDevView',
  components: {
    ExperienceComponent,
    ProficienciesComponent
  },
  data: () => ({
    employers,
    educations,
    proficiencies,
  }),
});
</script>

<style lang="scss" scoped>
.description {
  margin-bottom: 12px;
}

.section-title {
  font-size: calc(26px + 1.5vw);

  @include screen-gt($size-tablet) {
    font-size: calc(40px + 2vw);

    @include screen-gt($size-desktop) {
      font-size: 70px;
    }
  }
}

.dev-description {
  p {
    line-height: 1.2em;
    margin-bottom: 8px;
  }
}
</style>