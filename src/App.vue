<template>
<div class="page">
  <div id="nav" class="columns is-variable is-8-desktop is-0-mobile is-8-fullhd is-3-tablet is-mobile">

      <router-link to="/" id="home" class="column">Home</router-link>


      <router-link to="/Calculator" class="column navItem">Calculate Your Calories</router-link>


      <router-link to="/Nutrition" class="column navItem bnk">Basic Nutrition Knowledge</router-link>

    
  </div>

    <router-view/>
  
</div>
</template>
<script>

</script>

<style>
  @import './assets/style.css';
</style>

