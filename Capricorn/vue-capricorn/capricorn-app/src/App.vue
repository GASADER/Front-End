<template>
  <section>
    <img :src= "picture" :width="size" :height="size" ref="imageURL"/> <br>
    <form @submit.prevent="submitFrom">
      <label>ชื่อเล่น</label>
      <input type="text" ref="nickNameEL"/>
      <button type="submit">บันทึก</button>
    </form>
    <h1>{{getFullname()}}</h1>
    <h2>{{nickName}}</h2>
    <h2>{{age}}</h2>
    <p>ที่อยู่ : <span v-html="address"></span></p>
    <p>Social:<a :href="social" target="_blank">social</a></p>
    <p v-if="hobby.length === 0">ไม่มีงานอดิเรก</p>
    <div v-else>
    <p>งานอดิเรก</p>
      <ul>
        <li>{{hobby[0]}}</li>
        <li>{{hobby[1]}}</li>
        <li>{{hobby[2]}}</li>
      </ul>
    </div>
    <p>ข้อมูลพื้นฐาน:</p>
    <ul>
      <li>เพศ:{{general.gander}}</li>
      <li>น้ำหนัก:{{general.weigt}} kg</li>
      <li>ส่วนสูง:{{general.height}} cm</li>
      <li>โรคประจำตัว:{{general.status}}</li>
    </ul>
    <button @click="showData">คลิกเพื่อดูข้อมูล</button>
    <button @click="increment(10)">เพิ่ม</button>
    <button @click.middle="decrement(3)">ลด</button>
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
      hobby:["ทำสวน", "เล่นเกม","ฟังเพลง"],
      general:{
        gander:"ชาย",
        weigt:82.4,
        height:170,
        status:false
      }  
    }
  },
  methods:{ 
      getFullname(){
        return `${this.firstName +" "+ this.lastName}`
      },
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
      }


  }
}
</script>

<style>

</style>
