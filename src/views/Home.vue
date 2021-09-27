<template>
  <div>
    <HomeComponent></HomeComponent>
    <NavComponent></NavComponent>
  </div>
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
  // beforeRouteEnter(to, from, next) {
  //   console.log(to);
  // },
  // beforeRouteLeave(to, from, next) {

  // }
})
export default class Home extends Vue {}
</script>
