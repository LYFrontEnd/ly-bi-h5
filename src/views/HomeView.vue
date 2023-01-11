<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Button>1111111</Button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Button } from "vant";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Button,
  },
};
</script>
