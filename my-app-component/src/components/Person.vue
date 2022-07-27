<template>
  <SlotProFile>
    <template v-slot:card-haeder>
      <h1>{{ name }}</h1>
    </template>

    <template v-slot:card-content>
          <p>เงินเดือน{{ salary }},เพศ{{gender}}</p>
          <p>ตำแหน่งงาน: {{ department }}</p>
          <p>skill{{skill}}</p>
    </template>
  </SlotProFile>
</template>

<script>
import SlotProFile from "./SlotProFile.vue";
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
    department: {
      type: String,
      require: true,
    },
    gender:{
      type: String
    },
    skill:{
      type: Array
    }
  },
  components: { SlotProFile },
};
</script>

<style scoped>
button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s linear;
}
</style>  