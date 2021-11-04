<template>
  <div class="video__wrapper">
    <p class="title">{{ title }}</p>
    <div class="video-player__container" style="padding:56.25% 0 0 0;position:relative;">
      <iframe
        :src="url"
        frameborder="0"
        allow="autoplay;fullscreen;picture-in-picture"
        allowfullscreen
        style="position:absolute;top:0;left:0;width:100%;height:100%;">
      </iframe>
    </div>
  </div>
  <p class="description left-align">{{ description }}</p>
  <hr v-if="!lastElement">
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { Video } from '../../shared/videos';

export default defineComponent({
  name: 'SoundDesignComponent',
  props: {
    url: String as PropType<Video['url']>,
    title: String as PropType<Video['title']>,
    description: String as PropType<Video['description']>,
    lastElement: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.video__wrapper {
  margin: auto;
  margin-bottom: 15px;
  width: 80vw;
  max-width: 900px;

  .title {
    text-decoration: underline;
  }

  .video-player__container {
    margin: auto;
  }
}

.description {
  line-height: 1.2em;
}
</style>