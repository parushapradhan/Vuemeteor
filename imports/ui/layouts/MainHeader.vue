<template>
   <div class='header'>
    <router-link to='/'>Home</router-link>
    <router-link to="/about">About</router-link>
    <blaze-template template="loginButtons" tag="span"></blaze-template>
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
 .header {
   overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
  }
  .header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
}

</style>