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
  width: 85%;
  margin: auto;

  .title {
    text-align: center;
    font-size: 52px;
    margin-bottom: 15px;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
    column-gap: 100px;
    row-gap: 20px;

    li {
      display: flex;
      flex-direction: column;
      list-style-type: none;

      .name {
        font-size: 48px;
      }

      img {
        height: 90px;
      }

      .note {
        position: relative;
        bottom: 18px;
        font-size: 32px;
      }
    }
  }
}
</style>