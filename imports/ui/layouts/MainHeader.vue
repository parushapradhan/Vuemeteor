<template>
  <v-app>
    <v-toolbar app>

      <router-link to='/'>
      <v-toolbar-title class="headline text-uppercase">
        <span>Bare</span>
     
      </v-toolbar-title>
      </router-link>
     
     
  
      <v-toolbar-items class="hidden-sm-and-down">
      <v-row class="align-center">
         <v-col cols="2"  class="text-right">
            <router-link to="/about">About   </router-link>
        </v-col> 
         <v-col cols="12"  class="text-right">
           <blaze-template template="loginButtons" tag="span"></blaze-template>
        </v-col> 
      </v-row> 
    
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
 

</template>
    <!-- <div class='header'>

    <router-link to="/about">About</router-link>
    <blaze-template template="loginButtons" tag="span"></blaze-template>
    <div>
      <router-view></router-view>
    </div>
    </div> -->


<script>
    export default {
 
      data () {
      return {
        
        
      
    };
           }

    }
</script>

<style lang="css" scoped>

</style>