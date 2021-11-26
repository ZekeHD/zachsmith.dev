<template>
<div>
  <div class="descriptions left-align">
    <span class="emphasis-red">Better.<br></span>
    <span class="emphasis-red">Faster.<br></span>
    <span class="emphasis-red">Stronger UI/UX.<br></span>
  </div>
  <div class="description-sentences left-align">
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
  <div v-if="techYears" id="floating-years__label" :class="{ 'hide': hideLabelDiv }" :style="getLabelDivStyles">
    <p>{{ techYears }}+</p>
    <p>years</p>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ExperienceComponent from '../components/career/ExperienceComponent.vue';
import ProficienciesComponent from '../components/career/ProficienciesComponent.vue';

import { employers } from '../shared/employers';
import { educations } from '../shared/educations';
import { proficiencies } from '../shared/proficiencies';

const MOUSEX_DEFAULT = -1000;
const MOUSEY_DEFAULT = -1000;

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
    mouseX: MOUSEX_DEFAULT,
    mouseY: MOUSEY_DEFAULT,
    techYears: 0,
    hideLabelDiv: false,
  }),
  methods: {
    updateMousePosition(event: { x?: number, y: number }) {
      if (event.x) this.mouseX = event.x;
      this.mouseY = event.y;
    },
  },
  computed: {
    getLabelDivStyles(): { left: string, top: string } {
      return {
        left: `${this.mouseX}px`,
        top: `${this.mouseY}px`,
      };
    },
  }
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