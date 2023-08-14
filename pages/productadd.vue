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
                  <div class="selected_option_title">
                    {{ inputFatherTitle }}
                  </div>
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
                    @click="categoryChildApi(c)"
                  >
                    {{ c?.name }}
                  </div>
                </div>
              </div>
              <div class="info">
                <input class="info_input" v-model="ndsInput" type="checkbox" id="nds" />
                <label class="info_label" for="nds">QQS</label>
              </div>
              <div class="info">
                <input class="info_input" v-model="deliveryInput" type="checkbox" id="delivery" />
                <label class="info_label" for="delivery">yetkazib berish</label>
              </div>
              <div class="infos">
                <label class="infos_date_label" for="delivery"
                  >ishlab chiqarilgan sana</label
                >
                <input
                  class="infos_date_input"
                  type="date"
                  value="2017-10-10"
                  id="delivery"
                 ref="productDate"
                />
              </div>
              <div class="inputs">
                <label for="amount-1" class="inputs_label"
                  >min yetkazib berish miqdori</label
                >
                <input
                  type="text"
                  id="amount-1"
                  placeholder="min yetkazib berish miqdori"
                  class="inputs_input"
                  v-model="min"
                />
              </div>
              <div class="inputs">
                <label for="amount-2" class="inputs_label"
                  >max yetkazib berish miqdori</label
                >
                <input
                  type="text"
                  placeholder="max yetkazib berish miqdori"
                  id="amount-2"
                  class="inputs_input"
                  v-model="max"
                />
              </div>
              <div class="price">
                <label for="amount-2" class="price_label">mahsulot narxi</label>
                <input
                  type="text"
                  placeholder="mahsulot narxi"
                  id="amount-2"
                  class="price_input"
                  v-model="price"
                />
              </div>
              <div class="textarea">
                <label class="textarea_label" for="text"
                  >Qo'shimcha ma'lumot</label
                >
                <textarea
                  class="textarea_title"
                  name=""
                  id="text"
                  v-model="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div class="product_add_child">
              <div class="product_add_child_contents">
                <div
                  class="info"
                  v-for="child in categoryChild"
                  :key="child?.id"
                >
                  <label class="info_label" :for="`child-${child?.id}`">{{
                    child?.name
                  }}</label>
                  <input
                    ref="input"
                    class="info_input"
                    type="text"
                    :id="`child-${child?.id}`"
                    placeholder="narxini kiriting"
                  />
                </div>
              </div>
              <div class="submit_icons">
                <div class="submit_icons_btn exit">Orqaga</div>
                <div class="submit_icons_btn send" @click="sbmt">
                  yuborish
                </div>
              </div>
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

categoryFatherApi();
const inputFatherTitle = ref("mahsulotlar katalogi");
const categoryChild = ref(null);
const categoryFatherId = ref(null);
async function categoryChildApi(e) {
  selectModal.value = false;
  categoryFatherId.value = e.id;
  inputFatherTitle.value = e.name;
  const data = await $fetch(baseUrl + "/category-detail/all", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
    params: {
      categoryId: e.id,
    },
  });
  categoryChild.value = data;
}

const ndsInput = ref(false);
const deliveryInput = ref(false);
const productDate = ref(null);
const min = ref(null);
const max = ref(null);
const price = ref(null);
const textarea = ref();
function tekshiruv() {
  console.log(categoryFatherId.value);
}
async function sbmt() {
  const arr = [];
  input.value.forEach((elem, i) => {
    arr.push({
      categoryDetailId: categoryChild.value[i].id,
      value: elem.value,
    });
  });
  // console.log(arr);
  const data = await $fetch(baseUrl + "/product", {
    method: "POST",
    headers:{
      Authorization:"Bearer " + localStorage.getItem("userToken")
    },
    body:{
      description:textarea.value,
      price: price.value,
      hasDelivery:deliveryInput.value,
      hasNds:ndsInput.value,
      categoryId:categoryFatherId.value ,
      supplierId:localStorage.getItem("userId"),
      details: arr,
    },
  });
}
</script>

  <style lang="scss" scoped>
</style>