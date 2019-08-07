<template>
  <div class="home">
    <gnb></gnb>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import gnb from '@/components/nav/gnb.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    gnb
  }
}
</script>
