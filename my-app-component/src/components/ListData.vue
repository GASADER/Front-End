<template>
  <div>{{message}}</div>
  <Person/>
</template>

<script>
import Person from './Person.vue'
export default {
    name:"ListData",
    components:{
        Person
    },
    data(){
        return{
            message:"แสดงรายชื่อพนักงานทุกคน"
        }
    }
}
</script>

<style>

</style>