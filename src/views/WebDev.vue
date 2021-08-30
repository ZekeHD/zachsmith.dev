<template>
  <DevExperienceComponent
    v-for="employer in employers" :key="employer.name"
    :name="employer.name" :role="employer.role" :termLength="employer.termLength"
    :description="employer.description" :url="employer.name"
    ></DevExperienceComponent>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import DevExperienceComponent from '../components/career/DevExperienceComponent.vue';

import { Employer } from '../shared/interfaces/Employer';

export default defineComponent({
  components: { DevExperienceComponent },
  data: () => ({
    employers: [
      {
        name: 'Rural Sourcing, Inc.',
        role: 'Web Developer/Consultant',
        termLength: 'June 2018 - Present',
        description: `Rural Sourcing is a U.S.-based IT/Development Consulting firm that has served
        many enterprise-level clients, such as ParkMobile, Cars.com, and Southwest Airlines. RSI commits
        itself to bringing IT/Dev jobs to Middle America cities and increasing diversity in the Dev workforce.
        `.replace(/\n/g, ''),
        url: 'https://ruralsourcing.com',
      },
    ] as Employer[],
  }),
});
</script>

<style>

</style>