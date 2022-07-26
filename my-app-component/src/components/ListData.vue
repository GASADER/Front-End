<template>
  <ul>
    <Person
      v-for="item in employees"
      :id="item.id"
      :key="item.id"
      :name="item.name"
      :salary="item.salary"
      :department="item.depertment"
      :inVisible="item.inVisible"
      @show="toggleVisible"
      @delete="removeEmployee"
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
        {
          id: 1,
          name: "ก้อง",
          salary: 40000,
          depertment: "โปรแกรมเมอร์",
          inVisible: false,
        },
        {
          id: 2,
          name: "แก้ม",
          salary: 40000,
          depertment: "การตลาด",
          inVisible: false,
        },
        { id: 3, name: "โจ", depertment: "การตลาด", isVisible: false },
        {
          id: 4,
          name: "ชา",
          salary: 40000,
          depertment: "ฝ่ายขาย",
          inVisible: false,
        },
      ],
    };
  },
  methods: {
    toggleVisible(id) {
      this.employees = this.employees.map((item) => {
        if (item.id === id) {
          return { ...item, inVisible: !item.inVisible };
        }
        return item;
      });
    },
    removeEmployee(id){
      this.employees = this.employees.filter((item) => {
         return item.id !== id ;
      });
    }
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