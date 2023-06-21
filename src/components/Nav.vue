<script setup>
import HeadPortrait from "./HeadPortrait.vue";

const imgUrl = require('@/assets/img/head_portrait.jpg')

</script>

<template>
  <div class="nav">
    <div class="own-pic">
      <HeadPortrait :imgUrl="imgUrl"></HeadPortrait>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 90vh;
  position: relative;
  border-radius: 20px 0 0 20px;

  .own-pic {
    position: absolute;
    bottom: 90%;
    margin-left: 25px;
  }
}
</style>