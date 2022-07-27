<template>
  <li>
    <img src="https://cdn-icons-png.flaticon.com/512/456/456212.png" alt="">
    <hr/>
    <slot></slot>
  </li>
</template>

<script>
export default {

}
</script>

<style scoped>
li {
  margin: 1rem 0;
  font-size: 1.25rem;
  font-weight: bold;
  background: rgb(25, 194, 224);
  padding: 0.5rem;
  color: #fff;
  border-radius: 25px;
}
img{
    width: 100px;
    height: 100px;
}
</style>