<template>
<div>
   <div class='header'>
    <router-link  class='col' class-active="active" to='/'>Home</router-link>
    <router-link  class='col' class-active="active" to="/about">About Us</router-link>
    <router-link class='col' class-active="active" to="/contact">Contact Us</router-link>
    <blaze-template template="loginButtons" tag="span"></blaze-template>
   </div>
    <div>
      <router-view></router-view>
    </div>
    </div>
</template>
 


<script>
    export default {
 
          }

    
</script>

<style lang="css" scoped>
.header
{
   
  background-color: #f1f1f1;
  padding: 20px 10px;
}
.header a {
  color: black;

  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}
 .router-link-exact-active {
   background-color: white;
   cursor: pointer;
 }
</style>