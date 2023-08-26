<template>
  <div>
    <div class="haves" v-if="store.haveInfo">
      <div class="have">
        <div class="have_title">this is the creator of the site</div>
        <div class="have_content">IBROKHIMOV SHAKHOBIDDIN</div>
        <div class="have_close" @click="store.haveInfo = false">close</div>
      </div>
    </div>
  </div>
</template>

<script setup>
 import { useStore } from '~/store/store';
  const store = useStore();
</script>

<style lang="scss" scoped>
</style>