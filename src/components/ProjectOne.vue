<script>
import InputTag from "./common/InputTag.vue";
export default {
  components: {
    InputTag,
  },
  methods: {
    handleOnTagsChange(tags) {
      console.log(tags);
    },
  },
};
</script>

<template>
  <H1>PROJECTO 1</H1>
  <br />
  <InputTag @onTagsChange="handleOnTagsChange" />
  <div>
    <router-link to="/"> Volver </router-link>
  </div>
</template>

<style scoped></style>
