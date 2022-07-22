<template>
  <Person name="ก้อง" salary=30000 />
  <Person name="โจโจ้" salary=20000 />
  <Person name="kl" salary=15000 />
  <Person name="df" salary=18000 />
</template>

<script>
import Person from './Person.vue'
export default {
    name:"ListData",
    components:{
        Person
    }
}
</script>

<style>

</style>