<template>
  <div>
    <router-link to="/">home</router-link>
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

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
