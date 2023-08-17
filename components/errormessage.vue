<template>
  <div>
    <div class="header_error">
      <div class="content" :class="{ active: store.errorMessage }">
        <div class="content_left_border"></div>
        <div class="content_icon">
          <svg
            width="20"
            height="20"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
            />
          </svg>
        </div>
        <div class="content_messages">
          <div class="content_messages_title">error</div>
          <div class="content_messages_title text">
            <slot> Biron bir hatolik </slot>
          </div>
        </div>
        <div class="content_border_close"></div>
        <div class="content_close" @click="store.errorMessage = false">
          close
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { useStore } from "~~/store/store";
const store = useStore();
</script>
  
  <style lang="scss" scoped>
</style>