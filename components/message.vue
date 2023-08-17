<template>
  <div>
    <div class="header">
      <div class="content" :class="{ active: store.message }">
        <div class="content_left_border"></div>
        <div class="content_icon">
          <svg
            width="25"
            height="25"
            fill="green"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
            />
          </svg>
        </div>
        <div class="content_messages">
          <div class="content_messages_title">Success</div>
          <div class="content_messages_title text">
            <slot>Hammasi joyida </slot>
          </div>
        </div>
        <div class="content_border_close"></div>
        <div class="content_close" @click="store.message = false">close</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const submit = ref(true);
import { useStore } from '~~/store/store';
const store = useStore();
</script>

<style lang="scss" scoped>
</style>