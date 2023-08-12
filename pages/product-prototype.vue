<template>
  <div>
    <div class="product_prototype_page">
      <div class="container">
        <div class="protatype">
          <div class="protatype_content">
            <div class="protatype_content_add">
              <div class="protatype_content_add_content">
                <div class="protatype_content_add_content_icon"></div>
                <div class="protatype_content_add_content_title">
                  tovar kategorya qo'shish
                </div>
              </div>
            </div>
            <div class="protatype_content_title" v-for="p in 10" :key="p">
              <div class="protatype_content_title_name">qog'ozlar</div>
              <div class="protatype_content_title_icon">
                <svg
                  width="30"
                  height="30"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="protatype_title">
            <div class="protatype_title_add">
              <div class="protatype_title_add_content">
                <div class="protatype_title_add_content_icon"></div>
                <div class="protatype_title_add_content_title">
                  tovar kategorya qo'shish
                </div>
              </div>
            </div>
            <div class="protatype_title_content" v-for="p in 10" :key="p">
              <div class="protatype_title_content_name">qog'ozlar</div>
              <div class="protatype_title_content_icon">
                <svg
                  width="30"
                  height="30"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>