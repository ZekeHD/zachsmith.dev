<template>
  <div>
    <div class="descriptions left-align">
      <p class="emphasis-red">10+ years editing experience.</p>
      <p class="emphasis-red">5+ years sound design experience.</p>
      <p class="emphasis-red">Ready to help you create your soundscape.</p>
    </div>

    <div class="description-sentences left-align">
      <p>Let's work together on your next passion project.</p>
    </div>

    <hr>
    <div class="proficiencies-text">
      <span class="section-title all-caps emphasis-red left-align">proficiencies</span>

      <template v-if="showTouchLabel">
        <span>(tap items for more!)</span>
        <CurvyArrow pointDown />
      </template>
    </div>

    <proficiencies-component
      v-for="proficiency in editingProficiencies"
      :key="proficiency.title"
      :title="proficiency.title"
      :type="ProficiencyType.Editing"
      :techs="proficiency.techs"
      @updateMousePosition="updateMousePosition"
      @hideYearsLabel="(value) => { hideLabelDiv = value }"
      @setTechYears="(value) => { techYears = value }"
    />

    <hr>
    <p class="section-title all-caps emphasis-red left-align">sound re-designs</p>

    <sound-design-component
      v-for="video in videos"
      :key="video.url"
      :url="video.url"
      :title="video.title"
      :description="video.description"
    />

    <floating-label-component
      :hide="hideLabelDiv"
      :years-amount="techYears"
      :mouse-position="labelDivStyles"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import CurvyArrow from '@/components/helpers/CurvyArrow.vue';
import SoundDesignComponent from '../components/career/SoundDesignComponent.vue';
import ProficienciesComponent from '../components/career/ProficienciesComponent.vue';
import FloatingLabelComponent from '../components/helpers/FloatingLabelComponent.vue';

import { videos } from '../shared/videos';
import { editingProficiencies, ProficiencyType } from '../shared/proficiencies';
import useLabelDivSetup from '../shared/composables/useLabelDivSetup';
import useTouchLabelSetup from '@/shared/composables/useTouchLabelSetup';

export default defineComponent({
  name: 'SoundDesignView',
  components: {
    CurvyArrow,
    SoundDesignComponent,
    ProficienciesComponent,
    FloatingLabelComponent,
  },
  mounted() {
    document.title = 'Zach Smith | Sound Designer';
  },

  setup: () => ({
    ...useLabelDivSetup(),
    ...useTouchLabelSetup(),
  }),

  computed: {
    editingProficiencies: () => editingProficiencies,
    ProficiencyType: () => ProficiencyType,
    videos: () => videos,
  },
});
</script>