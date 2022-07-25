<template>
  <ul>
    <Person
      v-for="(item) in employees"
      :key="item.id"
      :name="item.name"
      :salary="item.salary"
    />
  </ul>
</template>

<script>
import Person from "./Person.vue";
export default {
  name: "ListData",
  components: {
    Person,
  },
  data() {
    return {
      employees: [
        {id:1,name: "ก้อง",salary: 40000,depertment:"โปรแกรมเมอร์",isVisible: false },
        {id:2,name: "แก้ม",salary: 40000,depertment:"การตลาด",isVisible: false },
        {id:3,name: "โจ",depertment:"การตลาด",isVisible: false },
        {id:4,name: "ชา",salary: 40000,depertment:"ฝ่ายขาย",isVisible: false },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>