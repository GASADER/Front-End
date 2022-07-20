<template>
  <section>
    <img :src= "picture" :width="size" :height="size" ref="imageURL"/> <br>
    <form @submit.prevent="submitFrom">
      <label>ชื่อเล่น</label>
      <input type="text" ref="nickNameEL"/>
      <button type="submit">บันทึก</button>
    </form>
    <h1>{{getFullname}}</h1>
    <h2>{{nickName}}</h2>
    <h2>{{age}}</h2>
    <h1>เงินเดือน:{{salary}}บาท</h1>
    <h1>รายได้ต่อปี:{{getIncome}}บาท</h1>
    <h1>ตำแหน่งงาน: {{getDepartment}}</h1>
    <button @click="addsalary(5000)">เพิ่มเงินเดือน</button>
   
    <button @click="toggleVisible">{{ isVisible ? "ซ่อน" : "แสดง"}}รายละเอียด</button>
    <article v-show="isVisible">
    <p>ที่อยู่ : <span v-html="address"></span></p>
    <p>Social:<a :href="social" target="_blank">social</a></p>
    <p v-if="hobby.length === 0">ไม่มีงานอดิเรก</p>
    <div v-else>
    <p>งานอดิเรก</p>
      <ul>
        <li v-for="(item,index) in hobby" :key="index">{{index}} - {{item}}</li>
      </ul>
    </div>
    <p>ข้อมูลพื้นฐาน:</p>
    <ul>
        <li v-for="(item,key) in general" :key="key">{{key}} - {{item}}</li>
    </ul>
    <button @click="showData">คลิกเพื่อดูข้อมูล</button>
    <button @click="increment(10)">เพิ่ม</button>
    <button @click.middle="decrement(3)">ลด</button>
    </article>
  </section>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      firstName:"jo",
      lastName:"save",
      nickName:"",
      age:15,
      address:"<i>กรุงเทพมหานคร</i>",
      picture:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      size:150,
      social:"https://twitter.com/home",
      hobby:["ทำสวน", "เล่นเกม","ฟังเพลง", "เลี้ยงแมว"],
      general:{
        gander:"ชาย",
        weigt:82.4,
        height:170,
        status:false
      },
      isVisible:false,
      salary:20000
    }
  },
  methods:{ 
      showData(){
        alert(this.firstName)
      },
      increment(value){
        this.age+=value
      },
      decrement(value){
        this.age-=value
      },
      submitFrom(){
        this.nickName=this.$refs.nickNameEL.value;
      },
      toggleVisible(){
        this.isVisible = !this.isVisible
      },
      addsalary(value){
        this.salary += value ;
      }
  },
  computed:{
      getFullname(){
        return `${this.firstName +" "+ this.lastName}`;
      },
      getIncome(){
        return this.salary * 12;
      },
      getDepartment(){
        return this.salary >= 35000 ? "Project manager" : "Programmer";
      }
  }
}
</script>

<style>

</style>
