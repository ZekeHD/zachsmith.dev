<template>
<div class="proficiencies__container">
  <p class="title emphasis-red">{{ title }}</p>
  <ul v-if="techs">
    <li v-for="tech in techs" :key="tech.name">
      <img :src="getIconPath(tech.iconName)" class="tech__icon" draggable="false" :alt="tech.name + ' icon'">
      <p class="name">{{ tech.name }}</p>
      <p class="note" v-if="tech.note">{{ tech.note }}</p>
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { Proficiency } from '../../shared/proficiencies';

export default defineComponent({
  name: 'ProficienciesComponent',
  props: {
    title: String as PropType<Proficiency['title']>,
    techs: Object as PropType<Proficiency['techs']>,
  },
  methods: {
    getIconPath(iconFileName: string): string {
      return require(`@/assets/icons/${iconFileName}`);
    },
  },
});
</script>

<style lang="scss" scoped>
.proficiencies__container {
  margin: auto auto 10px;

  @include screen-gt($size-desktop) {
    width: 85%;
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
        margin-bottom: 15px;
      }
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 0;
    column-gap: 30px;
    row-gap: 20px;

    @include screen-gt($size-tablet) {
      justify-content: center;
      column-gap: 100px;
    }

    li {
      display: flex;
      flex-direction: column;
      list-style-type: none;

      img {
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