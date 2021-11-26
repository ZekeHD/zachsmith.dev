<template>
<div class="proficiencies__container">
  <p class="title emphasis-red">{{ title }}</p>
  <ul v-if="techs">
    <li v-for="tech in techs" :key="tech.name"
        @mouseenter="emitTechYears(tech.years)"
        @mousemove="updateMousePosition"
        @mouseleave="emitHideYearsLabel"
        v-touch="onTouch">
      <img :src="getIconPath(tech.iconName)" class="tech__icon" draggable="false" :alt="tech.name + ' icon'">
      <p class="name">{{ tech.name }}</p>
      <p class="note" v-if="tech.note">{{ tech.note }}</p>
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import debounce from 'lodash.debounce';

import { Proficiency } from '../../shared/proficiencies';

export default defineComponent({
  name: 'ProficienciesComponent',
  props: {
    title: String as PropType<Proficiency['title']>,
    techs: Object as PropType<Proficiency['techs']>,
  },
  data: () => ({
    debouncedHideYearsLabel: () => null,
  }),
  created() {
    this.debouncedHideYearsLabel = debounce(() => { this.$emit('hideYearsLabel', true) }, 1500);

    const touchPoints = navigator.maxTouchPoints ?? 0;
    if (touchPoints > 0) {
      window.addEventListener('scroll', this.emitHideYearsLabel);
    }
  },
  methods: {
    getIconPath(iconFileName: string): string {
      return require(`@/assets/icons/${iconFileName}`);
    },
    updateMousePosition(event: MouseEvent) {
      this.emitMousePosition({ x: event.clientX, y: event.clientY });
    },
    onTouch() {
      this.$emit('hideYearsLabel', false);
      this.debouncedHideYearsLabel();
    },
    emitHideYearsLabel() {
      this.$emit('hideYearsLabel', true);
    },
    emitTechYears(years: number) {
      this.$emit('hideYearsLabel', false);
      this.$emit('setTechYears', years);
    },
    emitMousePosition(positions: { x: number, y: number }) {
      this.$emit('updateMousePosition', positions);
    },
  },
});
</script>

<style lang="scss" scoped>
.proficiencies__container {
  margin: auto auto 25px;

  @include screen-gt($size-desktop) {
    width: 85%;
    margin-bottom: 45px;
  }

  .title {
    text-align: center;
    font-size: calc(25px + 1.5vw);
    margin-bottom: 5px;
    text-decoration: underline;

    @include screen-gt($size-tablet) {
      font-size: calc(30px + 2vw);

      @include screen-gt($size-desktop) {
        font-size: 60px;
      }
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 0;
    column-gap: 10px;
    row-gap: 30px;

    @include screen-gt($size-tablet) {
      justify-content: center;
      column-gap: 50px;
    }

    li {
      display: flex;
      flex-direction: column;
      list-style-type: none;
      position: relative;
      padding: 10px 25px 0;
      display: inline-block;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
      border-radius: 10px;
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      will-change: transform;
      
      @include screen-gt($size-tablet) {
        padding: 15px 40px 0;
      }

      &::after {
        content: "";
        border-radius: 10px;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      }

      &:hover {
        transform: scale(0.94);

        &::after {
          opacity: 1;
        }
      }

      img {
        object-fit: contain;
        height: calc(45px + 1.5vw);

        @include screen-gt($size-tablet) {
          height: calc(70px + 2vw);

          @include screen-gt($size-desktop) {
            height: 120px;
          }
        }
      }

      .note {
        position: relative;
        font-size: calc(15px + 1.5vw);
        bottom: calc(7px + 1vw);

        @include screen-gt($size-tablet) {
          font-size: calc(20px + 2vw);
          bottom: 18px;

          @include screen-gt($size-desktop) {
            font-size: 32px;
          }
        }
      }
    }
  }
}
</style>