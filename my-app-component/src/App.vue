<template>
  <header>
    <h1>ระบบจัดการข้อมูลพนักงาน</h1>
  </header>
  <Formcomponent @save="insertEmployee"></Formcomponent>
  <section class="employee-content" v-if="employees.length>0">
    <h2>ข้อมูลพนักงาน</h2>
    <ListData :employees="employees" />
  </section>
</template>

<script>
import ListData from "./components/ListData.vue";
import Formcomponent from "./components/Formcomponent.vue";

export default {
  name: "App",
  components: {
    ListData,
    Formcomponent,
  },
  data() {
    return {
      employees: [],
    };
  },
  methods:{
    insertEmployee(data){
      this.employees.push(data);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  background-color: plum;
  color: azure;
}
.employee-content {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}
.employee-content h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: purple;
  margin: 0 0 1rem 0;
}
</style>
