<template>
  <div>
    <!-- <div class="bg"></div> -->

    <div class="add_page">
      <div class="container">
        <div class="add_info">
          <div class="product_add">
            <div class="product_add_father">
              <div class="selected" :class="{ active: selectModal }">
                <div
                  class="selected_option"
                  @click="selectModal = !selectModal"
                >
                  <div class="selected_option_title">kategoriyalar</div>
                  <div class="selected_option_icon">
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
                <div class="selected_content">
                  <div
                    class="selected_content_title"
                    @click="categoryFather()"
                    v-for="p in 10"
                    :key="p"
                  >
                    kiyilar
                  </div>
                </div>
              </div>

            </div>
            <div class="product_add_child">
              <div class="info" >
                <label class="info_label" for="child-1">children</label>
                <input class="info_input" type="text" id="child-1">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
const selectModal = ref(false);
function categoryFather() {
  selectModal.value = false;
}
</script>

  <style lang="scss" scoped>
</style>