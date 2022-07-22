<template>
    <ul>
        <Person 
            v-for="(item,index) in employees" 
            :key="index"
            :name="item.name"
            :salary="item.salary"
            />
    </ul>
</template>

<script>
import Person from './Person.vue'
export default {
    name:"ListData",
    components:{
        Person
    },
    props:[
        "employees"
    ]
}
</script>

<style>

</style>