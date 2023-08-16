<template>
  <div>
    <div class="header">
      <div class="container">
        <div class="content" :class="{active: submit}">
            <div class="content_close" @click="submit = false
            "></div>
          <div class="content_title">
            <svg width="25" height="25" fill="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
            <slot> Lorem ipsum dolor sit amet. </slot>
          </div>
        </div>
        <button @click="tek">submit</button>
      </div> 
    </div>
  </div>
</template>

<script setup>
const submit = ref(false);
function tek(){
    submit.value = true;
}
</script>

<style lang="scss" scoped>
</style>