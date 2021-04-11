<template>
  <v-app>
    <Bar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Bar from "./components/Bar";

export default {
  name: "App",

  components: {
    Bar,
  },
};
</script>

<style>
.background {
  background: linear-gradient(to bottom, #f8a39b 0%, #ffc120 100%);
  height: 100%;
}
</style>
