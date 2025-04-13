<template>
  <div>
    <home-component></home-component>
    <hr />
    <nav-component></nav-component>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HomeComponent from "../components/HomeComponent.vue";
import NavComponent from "../components/NavComponent.vue";

@Options({
  name: "HomeView",

  components: {
    HomeComponent,
    NavComponent,
  },

  mounted() {
    document.title = "Zach Smith | Home";
  },
})
export default class Home extends Vue {}
</script>
