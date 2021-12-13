<template>
<div>
  <div class="descriptions left-align">
    <span class="emphasis-red">10+ years editing experience.<br></span>
    <span class="emphasis-red">5+ years sound design experience.<br></span>
    <span class="emphasis-red">Ready to help you create your soundscape.<br></span>
  </div>
  <div class="description-sentences left-align">
    <p>Let's work together on your next passion project.</p>
  </div>
  <hr>
  <p class="section-title all-caps emphasis-red left-align">proficiencies</p>
  <proficiencies-component
    v-for="proficiency in editingProficiencies"
    :key="proficiency.title"
    :title="proficiency.title"
    :type="ProficiencyType.Editing"
    :techs="proficiency.techs"
    @updateMousePosition="updateMousePosition"
    @hideYearsLabel="(value) => { hideLabelDiv = value }"
    @setTechYears="(value) => { techYears = value }"
  ></proficiencies-component>
  <hr>
  <p class="section-title all-caps emphasis-red left-align">sound re-designs</p>
  <sound-design-component
    v-for="video in videos"
    :key="video.url"
    :url="video.url"
    :title="video.title"
    :description="video.description"
  ></sound-design-component>
  <floating-label-component
    :hide="hideLabelDiv"
    :years-amount="techYears"
    :mouse-position="labelDivStyles"
  ></floating-label-component>
</div>
</template>

<script>
import { defineComponent } from 'vue';

import SoundDesignComponent from '../components/career/SoundDesignComponent.vue';
import ProficienciesComponent from '../components/career/ProficienciesComponent.vue';
import FloatingLabelComponent from '../components/helpers/FloatingLabelComponent.vue';

import { videos } from '../shared/videos';
import { editingProficiencies, ProficiencyType } from '../shared/proficiencies';
import useLabelDivSetup from '../shared/composables/useLabelDivSetup';

export default defineComponent({
  name: 'SoundDesignView',
  components: {
    SoundDesignComponent,
    ProficienciesComponent,
    FloatingLabelComponent,
  },
  setup: () => ({ ...useLabelDivSetup() }),
  computed: {
    editingProficiencies: () => editingProficiencies,
    ProficiencyType: () => ProficiencyType,
    videos: () => videos,
  },
});
</script>

<style>

</style>