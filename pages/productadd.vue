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
                    v-for="c in categoryFatherInfo?.content"
                    :key="c?.id"
                    @click="categoryChildApi(c?.id)"
                  >
                    {{ c?.name }}
                  </div>
                </div>
              </div>

              
            </div>
            <div class="product_add_child">
              <div class="info" v-for="child in categoryChild" :key="child?.id">
                <label class="info_label" :for="`child-${child?.id}`">{{
                  child?.name
                }}</label>
                <input
                  ref="input"
                  class="info_input"
                  type="text"
                  :id="`child-${child?.id}`"
                  :placeholder="`${child?.name}`"
                />
              </div>
              <!-- <button @click="sbmt()">click me</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
const baseUrl = useRuntimeConfig().public.baseUrl;
const selectModal = ref(false);

const categoryFatherInfo = ref(null);
async function categoryFatherApi() {
  const data = await $fetch(baseUrl + "/category", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
    params: {
      page: 0,
      size: 10,
    },
  });
  categoryFatherInfo.value = data;
}
const input = ref(null);
async function sbmt() {
  const arr = []
  input.value.forEach((elem, i) => {
    arr.push({
      categoryDetailId: categoryChild.value[i].id,
      value: elem.value,
    });
  });
  // console.log(arr);
  const data = await $fetch(baseUrl + "/product", {
    method: "POST",
    body: {
      details: arr,
    },
  });
}
categoryFatherApi();
const categoryChild = ref(null);
async function categoryChildApi(e) {
  selectModal.value = false;

  const data = await $fetch(baseUrl + "/category-detail/all", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
    params: {
      categoryId: e,
    },
  });
  categoryChild.value = data;
}
</script>

  <style lang="scss" scoped>
</style>