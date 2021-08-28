<template>
  <HomeComponent></HomeComponent>
  <NavComponent></NavComponent>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HomeComponent from '../components/HomeComponent.vue';
import NavComponent from '../components/NavComponent.vue';

@Options({
  components: {
    HomeComponent,
    NavComponent
  },
})
export default class Home extends Vue {}
</script>
