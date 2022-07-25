<template>
  <div>
    <h1>{{ name }} {{ salary }}</h1>
  </div>
</template>

<script>
export default {
  name: "Person_",
  props: {
    name: {
      type: String,
      require: true,
    },
    salary: {
      type: Number,
      default: 15000,
    },
  },
};
</script>

<style scoped>
h1 {
  color: rgb(89, 0, 255);
}
</style>  