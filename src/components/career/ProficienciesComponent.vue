<template>
<div class="proficiencies__container">
  <p class="title emphasis-red">{{ title }}</p>
  <ul v-if="techs">
    <li v-for="tech in techs" :key="tech.name"
        @mousemove="updateMousePosition"
        @mouseleave=""
        v-touch="onTouch">
      <img :src="getIconPath(tech.iconName)" class="tech__icon" draggable="false" :alt="tech.name + ' icon'">
      <p class="name">{{ tech.name }}</p>
      <p class="note" v-if="tech.note">{{ tech.note }}</p>
      <div class="floating-years__label" :style="getLabelDivStyles">
        <p>{{ tech.years }}+</p>
        <p>years</p>
      </div>
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import debounce from 'lodash.debounce';

import { Proficiency } from '../../shared/proficiencies';

const MOUSEX_DEFAULT = -1000;
const MOUSEY_DEFAULT = -1000;

export default defineComponent({
  name: 'ProficienciesComponent',
  props: {
    title: String as PropType<Proficiency['title']>,
    techs: Object as PropType<Proficiency['techs']>,
  },
  data: () => ({
    xPosition: MOUSEX_DEFAULT,
    yPosition: MOUSEY_DEFAULT,
    hideYearsLabel: () => null,
    showLabelDiv: false,
  }),
  created() {
    this.hideYearsLabel = debounce(() => { this.$emit('hideYearsLabel', true) }, 1500);
  },
  methods: {
    getIconPath(iconFileName: string): string {
      return require(`@/assets/icons/${iconFileName}`);
    },
    updateMousePosition(event: MouseEvent) {
      // const x = event.pageX;
      // const y = event.pageY;
      // const target = event.target;

      const bounds = (event.target as HTMLElement).getBoundingClientRect();
      this.xPosition = event.clientX - bounds.left;
      this.yPosition = event.clientY - bounds.top;
    },
    onTouch() {
      // this.$emit('hideYearsLabel', false);
      // this.hideYearsLabel();
    },
  },
  computed: {
    getLabelDivStyles(): { left: string, top: string } {
      return {
        left: `${this.xPosition}px`,
        top: `${this.yPosition}px`,
      };
    },
  }
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
        transform: scale(0.95, 0.95);

        &::after {
          opacity: 1;
        }

        .floating-years__label {
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

      .floating-years__label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        position: absolute;
        color: $off-black;
        background-color: $off-white;
        min-width: 70px;
        min-height: 40px;
        width: 8vw;
        height: 9vw;
        pointer-events: none;
        border-radius: 5px;
        opacity: 0;
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
      }
    }
  }
}
</style>