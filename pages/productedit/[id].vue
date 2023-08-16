<template>
  <div>
    <!-- <div class="bg"></div> -->

    <div class="add_page">
      <div class="container">
        <div class="add_info">
          <div class="product_add">
            <pre>{{ produyctList }}</pre>
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
                <input
                  class="info_input"
                  v-model="ndsInput"
                  type="checkbox"
                  id="nds"
                />
                <label class="info_label" for="nds">QQS</label>
              </div>
              <div class="info">
                <input
                  class="info_input"
                  v-model="deliveryInput"
                  type="checkbox"
                  id="delivery"
                />
                <label class="info_label" for="delivery">yetkazib berish</label>
              </div>
              <div class="infos">
                <label class="infos_date_label" for="delivery"
                  >ishlab chiqarilgan sana</label
                >
                <input
                  class="infos_date_input"
                  type="date"
                  id="delivery"
                  ref="productDate"
                  value="2022-08-08"
                />
              </div>
              <div class="inputs">
                <label for="amount-1" class="inputs_label"
                  >min yetkazib berish miqdori</label
                >
                <input
                  type="text"
                  id="amount-1"
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
                  id="amount-2"
                  class="inputs_input"
                  v-model="max"
                />
              </div>
              <div class="selected" :class="{ active: currensyModal }">
                <div
                  class="selected_option"
                  @click="currensyModal = !currensyModal"
                >
                  <div class="selected_option_title">
                    {{ currensyTitle }}
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
                    v-for="c in currensy"
                    :key="c?.id"
                    @click="currensyChildApi(c)"
                  >
                    {{ c?.nameUz }}
                  </div>
                </div>
              </div>
              <div class="price">
                <label for="amount-2" class="price_label">mahsulot narxi</label>
                <input
                  type="text"
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
                  />
                </div>
              </div>
              <div class="submit_icons" v-if="categoryChild">
                <div class="submit_icons_btn exit">Orqaga</div>
                <div class="submit_icons_btn send" @click="tekshiruv">
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
const route = useRoute();
const { locale } = useI18n();
const { id } = route.params;
const selectModal = ref(false);
const currensyModal = ref(false);
const currensyTitle = ref("valyuta turi");
const currensy = ref(null);
const currencyId = ref(null);
async function currensyApi() {
  const data = await $fetch(baseUrl + "/currency-type/all", {
    method: "GET",
    params: {
      companyId: localStorage.getItem("userId"),
    },
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  });
  currensy.value = data;
}
function currensyChildApi(e) {
  currensyModal.value = false;
  currencyId.value = e.id;
  currensyTitle.value = e.nameUz;
}
currensyApi();
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
      "Accept-Language": locale.value,
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
  console.log(id);
}
async function productAddApi() {
  const arr = [];
  input.value.forEach((elem, i) => {
    arr.push({
      categoryDetailId: categoryChild.value[i].id,
      value: elem.value,
    });
  });
  const data = await $fetch(baseUrl + "/product", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
    body: JSON.stringify({
      description: textarea.value,
      price: price.value,
      hasDelivery: deliveryInput.value,
      hasNds: ndsInput.value,
      currencyId: currencyId.value,
      categoryId: categoryFatherId.value,
      maxAmount: max.value,
      minAmount: min.value,
      supplierId: 6,
      details: arr,
    }),
  });
}
const produyctList = ref(null);
async function productListApi() {
  const data = await $fetch(baseUrl + `/product/${id}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
      "Accept-Language": locale.value,
    },
  });
  produyctList.value = data;
  inputFatherTitle.value = data?.categoryName;
  price.value = data?.price;
  productDate.value.value = data?.factoryDate;
  min.value = data?.minAmount;
  max.value = data?.maxAmount;

};
productListApi();
</script>
  
    <style lang="scss" scoped>
</style>