<template>
  <form action="">
    <div class="form-control">
      <label for="emp-name">ชื่อพนักงาน</label>
      <input type="text" v-model="employee.name" />
    </div>
    <div class="form-control">
      <label for="emp-name">เงินเดือน</label>
      <input type="number" v-model="employee.salary" />
    </div>
  </form>
  {{JSON.stringify(employee)}}
</template>

<script>
export default {
  name: "FromComponent",
  data() {
    return {
      employee: {
        name: "",
        salary: 0,
      },
    };
  },
};
</script>

<style>
</style>