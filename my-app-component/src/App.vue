<template>
  <div>
      <Formcomponent/>
      <ListData/>   
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
  }
} 
</script>

<style>

</style>
