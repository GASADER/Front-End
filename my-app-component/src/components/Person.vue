<template>
  <li>
    <h1>{{ name }}</h1>
    <button @click="showDescription(id)">รายละเอียด</button> &nbsp;
    <button @click="deleteEmployee(id)">ลบข้อมูล</button>
    <transition name="fade">
      <div v-show="inVisible">
        <p>เงินเดือน{{ salary }}, ตำแหน่งงาน: {{ department }}</p>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  name: "Person_",
  props: {
    id: {
      type: Number,
    },
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
    inVisible: {
      type: Boolean,
    },
  },
  methods: {
    showDescription(id) {
      this.$emit("show", id);
    },
    deleteEmployee(id) {
      this.$emit("delete", id);
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  font-size: 1.25rem;
  font-weight: bold;
  background: #8ddba4;
  padding: 0.5rem;
  color: #1f1f1f;
  border-radius: 25px;
}
button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
.fade-enter-from{
  opacity: 0;
}
.fade-enter-active{
  transition: all 0.5s linear;
}
</style>  