<template>
<div class="video__container">
  <div class="video__wrapper">
    <p class="title">{{ title }}</p>
    <div
      v-if="url"
      class="video-player__container"
      style="padding:56.25% 0 0 0;position:relative;">
      <iframe
        :src="`${url}${displayTitles ? '1;' : '0;'}`"
        frameborder="0"
        allow="autoplay;fullscreen;picture-in-picture"
        allowfullscreen
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
        :aria-label="'video of ' + title">
      </iframe>
    </div>
  </div>
  <p class="description left-align">{{ description }}</p>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { Video } from '../../shared/videos';

export default defineComponent({
  name: 'SoundDesignComponent',
  mounted() {
    const initialWidthEvent: Partial<UIEvent> = {
      target: {
        innerWidth: window.innerWidth,
      } as Window,
    };

    this.setDisplayTitles(initialWidthEvent);
    window.addEventListener('resize', this.setDisplayTitles);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.setDisplayTitles);
  },
  props: {
    url: String as PropType<Video['url']>,
    title: String as PropType<Video['title']>,
    description: String as PropType<Video['description']>,
  },
  data: () => ({
    displayTitles: false,
    displayTitlesBreakpoint: 524,
  }),
  methods: {
    setDisplayTitles(e: UIEvent | Partial<UIEvent>) {
      const windowTarget = e?.target as Window;
      if (windowTarget?.innerWidth) {
        this.displayTitles = windowTarget.innerWidth > this.displayTitlesBreakpoint;
      }
    }
  },
});
</script>

<style lang="scss" scoped>
.video__container {
  margin-bottom: 35px;

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
}
</style>