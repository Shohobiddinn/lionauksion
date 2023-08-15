<template>
  <div>
    <div class="loaders" v-if="store.loader">
      <div class="loader">
        <div class="item" style="--i: 1"><span style="--j: 1"></span></div>
        <div class="item" style="--i: 2"><span style="--j: 2"></span></div>
        <div class="item" style="--i: 3"><span style="--j: 3"></span></div>
        <div class="item" style="--i: 4"><span style="--j: 4"></span></div>
        <div class="item" style="--i: 5"><span style="--j: 5"></span></div>
        <div class="item" style="--i: 6"><span style="--j: 6"></span></div>
        <div class="item" style="--i: 7"><span style="--j: 7"></span></div>
        <div class="item" style="--i: 8"><span style="--j: 8"></span></div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { useStore } from "~~/store/store";
const store = useStore();
</script>
  
  <style lang="scss" scoped>
.loaders {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba($color: #ffffff, $alpha: 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  .loader {
    width: 40px;
    height: 40px;
    position: relative;
    .item {
      width: 100%;
      height: 100%;
      position: absolute;
      rotate: calc(var(--i) * 45deg);
      span {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        display: block;
        background-color: #52438f;
        animation: opacity 1s ease-in infinite;
        animation-delay: calc(var(--j) * 0.13s);
      }
      @keyframes opacity {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    }
  }
}
</style>