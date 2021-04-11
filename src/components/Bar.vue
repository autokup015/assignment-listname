<template>
  <div class="header">
    <v-container>
      <v-row class="pa-4">
        <v-btn
          color="success"
          width="150"
          rounded
          @click="() => this.$router.push('/')"
          >Index</v-btn
        >
        <div class="ma-5"></div>
        <v-btn
          color="success"
          width="150"
          rounded
          @click="() => this.$router.push('/Report')"
          >Report</v-btn
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Bar",
};
</script>

<style scoped>
.header {
  /* overflow: hidden;
  background-color: transparent;
  position: fixed;
  top: 0;
  width: 100%; */
  background-color: #f8a39b ;
}
</style>
