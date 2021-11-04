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
  <p class="section-title all-caps emphasis-red left-align">sound re-designs</p>
  <sound-design-component
    v-for="(video, index) in videos"
    :key="video.url"
    :url="video.url"
    :title="video.title"
    :description="video.description"
    :last-element="index === videos.length - 1"
  ></sound-design-component>
</div>
</template>

<script>
import { defineComponent } from 'vue';

import SoundDesignComponent from '../components/career/SoundDesignComponent.vue';

import { videos } from '../shared/videos';

export default defineComponent({
  name: 'SoundDesignView',
  components: {
    SoundDesignComponent,
  },
  data: () => ({
    videos,
  }),
});
</script>

<style>

</style>