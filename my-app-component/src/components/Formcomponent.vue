<template>
  <form>
    <div class="form-control">
      <label for="emp-name">ชื่อพนักงาน</label>
      <input type="text" v-model.trim="employee.name" />
    </div>
    <div class="form-control">
      <label for="salary">เงินเดือน</label>
      <input type="number" v-model="employee.salary" />
    </div>
    <div class="form-control">
      <label for="depertment">ตำแหน่งงาน</label>
      <select v-model="employee.depertment">
        <option value="ฝ่ายขาย">ฝ่ายขาย</option>
        <option value="โปรแกรมเมอร์">โปรแกรมเมอร์</option>
        <option value="การตลาด">การตลาด</option>
      </select>
    </div>
    <div class="form-control">
      <h2>เพศ</h2>
      <div>
        <input type="radio" value="ชาย" v-model="employee.gender" />
        <label for="gender-name">ชาย</label>
      </div>
      <div>
        <input type="radio" value="หญิง" v-model="employee.gender" />
        <label for="gender-name">หญิง</label>
      </div>
    </div>
    <div class="form-control">
      <h2>ทักษะ</h2>
      <div>
        <input type="checkbox" value="โปรแกรม" v-model="employee.skill" />
        <label for="skill">โปรแกรม</label>
      </div>
      <div>
        <input type="checkbox" value="พูด" v-model="employee.skill" />
        <label for="skill">พูด</label>
      </div>
      <div>
        <input type="checkbox" value="สื่อสาร" v-model="employee.skill" />
        <label for="skill">สื่อสาร</label>
      </div>
    </div>
    <div>
      <button>บันทึกข้อมูล</button>
    </div>
    {{ JSON.stringify(employee) }}
  </form>
</template>

<script>
export default {
  name: "FromComponent",
  data() {
    return {
      employee: {
        name: "",
        salary: 0,
        depertment: "การตลาด",
        gender: "",
        skill: [],
      },
    };
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  background: #fff;
}
.form-control {
  margin: 0.5rem 0;
}
label {
  font-weight: bold;
}
input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}
button {
  font: inherit;
  background: paleturquoise;
  color: blueviolet;
  cursor: pointer;
  padding: 0.5rem 0.25rem;
  border-radius: 15px;
}
input[type="radio"],
input[type="checkbox"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}
input[type="radio"] + label,
input[type="checkbox"] + label {
  font-weight: normal;
}
h2 {
  font-size: 1rem;
  margin: 1rem 0;
}
</style>