<template>
  <div>
    <div class="description left-align">
      <span class="emphasis-red">Better.<br></span>
      <span class="emphasis-red">Faster.<br></span>
      <span class="emphasis-red">Stronger UI/UX.<br></span>
    </div>
    <div class="dev-description left-align">
      <p>I specialize in creating easy-to-use and straightforward user experiences.</p>
    </div>
    <hr>
    <p class="profs__text all-caps emphasis-red left-align">proficiencies</p>
    <proficiencies-component
      v-for="proficiency in proficiencies"
      :key="proficiency.title"
      :title="proficiency.title"
      :techs="proficiency.techs"
    ></proficiencies-component>
    <hr>
    <p class="emphasis-red all-caps left-align">professional experience</p>
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
    <p class="emphasis-red all-caps left-align">education</p>
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

import { Experience } from '../shared/interfaces/Experience';
import { proficiencies } from '../shared/proficiencies';

export default defineComponent({
  name: 'WebDevView',
  components: {
    ExperienceComponent,
    ProficienciesComponent
  },
  data: () => ({
    employers: [
      {
        name: 'Rural Sourcing, Inc.',
        termLength: 'June 2018 - Present',
        descriptions: [
          `\
Rural Sourcing is a U.S.-based IT/Development Consulting firm that has served \
many enterprise-level clients, such as ParkMobile, Cars.com, and Southwest Airlines.`,
        `\
I previously consulted for a Fortune-500 company's ad campaign on their site, and am \
currently consulting for an EOS web app, helping drive their SMS and email campaigns.`
        ],
        role: 'Web Developer/Consultant',
        url: 'https://ruralsourcing.com',
      },
    ] as Experience[],
    educations: [
      {
        name: 'Augusta University',
        termLength: 'August 2014 - May 2018',
        descriptions: [
          'Bachelor of Science in Information Technology',
          'Minor in Computer Science',
        ]
      }
    ] as Experience[],
    proficiencies,
  }),
});
</script>

<style lang="scss" scoped>
.description {
  margin-bottom: 12px;
}

.profs__text {
  font-size: 60px;
}

.dev-description {
  font-size: 48px;

  p {
    line-height: 1.2em;
    margin-bottom: 8px;
  }
}
</style>