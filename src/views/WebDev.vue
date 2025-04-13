<template>
  <div>
    <div class="descriptions left-align emphasis-red">
      <p>
        Mastery at crafting clean, maintainable, and testable web components.
      </p>
      <p>Focus on best practices and team collaboration.</p>
    </div>

    <div class="description-sentences left-align">
      <p>I love creating easy-to-use and attractive user experiences.</p>
      <p>Let's get stuff done.</p>
    </div>

    <hr />
    <div class="proficiencies-text">
      <span class="section-title all-caps emphasis-red left-align"
        >proficiencies</span
      >

      <template v-if="showTouchLabel">
        <span>(tap items for more!)</span>
        <CurvyArrow pointDown />
      </template>
    </div>

    <proficiencies-component
      v-for="proficiency in devProficiencies"
      :key="proficiency.title"
      :title="proficiency.title"
      :type="ProficiencyType.Dev"
      :techs="proficiency.techs"
      @updateMousePosition="updateMousePosition"
      @hideYearsLabel="
        (value) => {
          hideLabelDiv = value;
        }
      "
      @setTechYears="
        (value) => {
          techYears = value;
        }
      "
    />

    <hr />
    <p class="section-title emphasis-red all-caps left-align">
      professional experience
    </p>

    <experience-component
      v-for="employer in employers"
      :key="employer.name"
      :name="employer.name"
      :term-length="employer.termLength"
      :descriptions="employer.descriptions"
      :role="employer.role"
      :url="employer.url"
    />

    <hr />
    <p class="section-title emphasis-red all-caps left-align">education</p>

    <experience-component
      v-for="education in educations"
      :key="education.name"
      :name="education.name"
      :term-length="education.termLength"
      :descriptions="education.descriptions"
      :url="education.url"
    />

    <floating-label-component
      :hide="hideLabelDiv"
      :years-amount="techYears"
      :mouse-position="labelDivStyles"
    />
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
import useTouchLabelSetup from '@/shared/composables/useTouchLabelSetup';
import FloatingLabelComponent from '../components/helpers/FloatingLabelComponent.vue';
import CurvyArrow from '@/components/helpers/CurvyArrow.vue';

export default defineComponent({
  name: 'WebDev',

  components: {
    CurvyArrow,
    ExperienceComponent,
    ProficienciesComponent,
    FloatingLabelComponent,
  },

  data: () => ({
    showTouchLabel: false,
  }),

  mounted() {
    document.title = 'Zach Smith | Web Engineer';
  },

  setup: () => ({
    ...useLabelDivSetup(),
    ...useTouchLabelSetup(),
  }),

  computed: {
    ProficiencyType: () => ProficiencyType,
    devProficiencies: () => devProficiencies,
    employers: () => employers,
    educations: () => educations,
  },
});
</script>
