<template>
  <div>
    <div class="have_info">
      <div class="information">
        <div class="have_title">
            is the creator of the site: IBROKHIMOV SHOKHOBIDDIN
        </div>
        <div class="have_close">CLOSE</div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.have_info {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000050;
  .information{
    background-color: #fff;
    width: 400px;
    height: 400px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
.have_title{
    font-family: sans-serif;
    text-transform: capitalize;
}
  }
}
</style>