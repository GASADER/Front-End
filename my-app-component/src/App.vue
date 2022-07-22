<template>
  <div>
      <Formcomponent/>
      <ListData :employees="employees" />   
  </div>
</template>

<script>
import Formcomponent from './components/Formcomponent.vue'
import ListData from './components/ListData.vue'

export default{
  name:"App",
  components:{
    ListData,
    Formcomponent
  },
  data(){
    return{
      employees:[
        {name:"ก้อง", salary:40000},
        {name:"แก้ม", salary:40000},
        {name:"โจ"},
        {name:"ชา", salary:40000}
      ]
    }
  }
} 
</script>

<style>

</style>
