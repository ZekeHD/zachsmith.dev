<template>
  <div>
    <div class="descriptions left-align emphasis-red">
      <p>Mastery at crafting clean, maintainable, and testable web components.</p>
      <p>Focus on best practices and team collaboration.</p>
    </div>

    <div class="description-sentences left-align">
      <p>I love creating easy-to-use and attractive user experiences.</p>
      <p>Let's get stuff done.</p>
    </div>
    
    <hr>

    <div class="left-align">
      <a href="ZS_Resume_Feb2025.pdf" download class="link-underline">Click here</a> to download my resume!
    </div>

    <hr>
    <p class="section-title all-caps emphasis-red left-align">proficiencies</p>

    <proficiencies-component
      v-for="proficiency in devProficiencies"
      :key="proficiency.title"
      :title="proficiency.title"
      :type="ProficiencyType.Dev"
      :techs="proficiency.techs"
      @updateMousePosition="updateMousePosition"
      @hideYearsLabel="(value) => { hideLabelDiv = value }"
      @setTechYears="(value) => { techYears = value }"
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

    <floating-label-component
      :hide="hideLabelDiv"
      :years-amount="techYears"
      :mouse-position="labelDivStyles"
    ></floating-label-component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ExperienceComponent from '../components/career/ExperienceComponent.vue';
import ProficienciesComponent from '../components/career/ProficienciesComponent.vue';

import { employers } from '../shared/employers';
import { educations } from '../shared/educations';
import { devProficiencies, ProficiencyType } from '../shared/proficiencies';
import useLabelDivSetup from '../shared/composables/useLabelDivSetup';
import FloatingLabelComponent from '../components/helpers/FloatingLabelComponent.vue';

export default defineComponent({
  name: 'WebDevView',
  components: {
    ExperienceComponent,
    ProficienciesComponent,
    FloatingLabelComponent
  },
  setup: () => ({ ...useLabelDivSetup() }),
  computed: {
    ProficiencyType: () => ProficiencyType,
    devProficiencies: () => devProficiencies,
    employers: () => employers,
    educations: () => educations,
  }
});
</script>