<template>
  <div>
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
                  v-for="child in produyctList?.details"
                  :key="child?.id"
                >
                  <label class="info_label" :for="`child-${child?.id}`">{{
                    child?.categoryDetailName
                  }}</label>
                  <input
                    ref="input"
                    :value="child?.value"
                    class="info_input"
                    type="text"
                    :id="`child-${child?.id}`"
                  />
                </div>
              </div>
              <div class="submit_icons">
                <div class="submit_icons_btn exit">Orqaga</div>
                <div class="submit_icons_btn send" @click="productEditApi">
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
import { useToast } from "vue-toastification";
const toast = useToast();
import { useStore } from "~/store/store";
const store = useStore();
const baseUrl = useRuntimeConfig().public.baseUrl;
const route = useRoute();
const router = useRouter();
const { locale } = useI18n();
const { id } = route.params;
const selectModal = ref(false);
const currensyModal = ref(false);
const currensyTitle = ref("valyuta turi");
const currensy = ref(null);
const currencyId = ref(null);
async function currensyApi() {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + "/currency-type/all", {
      method: "GET",
      params: {
        companyId: localStorage.getItem("userId"),
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
    });

    currensy.value = data;
    if (data) {
      store.loader = false;
    }
  } catch (error) {
    store.loader = false;
    toast.error(
      error?.response?._data?.message ||
        error?.response?._data?.error ||
        "Error",
      {
        position: "top-right",
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false,
      }
    );
  }
}
function currensyChildApi(e) {
  currensyModal.value = false;
  currencyId.value = e.id;
  currensyTitle.value = e.name;
}
currensyApi();
const categoryFatherInfo = ref(null);
async function categoryFatherApi() {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + "/category", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
      params: {
        page: 0,
        size: 10,
      },
    });
    categoryFatherInfo.value = data;
    if (data) {
      store.loader = false;
    }
  } catch (error) {
    store.loader = false;
    toast.error(
      error?.response?._data?.message ||
        error?.response?._data?.error ||
        "Error",
      {
        position: "top-right",
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false,
      }
    );
  }
}
const input = ref(null);

categoryFatherApi();
const inputFatherTitle = ref("mahsulotlar katalogi");
const categoryChild = ref(null);
const categoryFatherId = ref(null);
async function categoryChildApi(e) {
  try {
    store.loader = true;
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
    if (data) {
      store.loader = false;
    }
  } catch (error) {
    store.loader = false;
    toast.error(
      error?.response?._data?.message ||
        error?.response?._data?.error ||
        "Error",
      {
        position: "top-right",
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false,
      }
    );
  }
}

const produyctList = ref(null);
async function productListApi() {
  try {
    store.loader = true;
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
    textarea.value = data?.description;
    currensyTitle.value = data?.currencyName + " " + data?.currencySymbol;
    ndsInput.value = data?.hasNds;
    deliveryInput.value = data?.hasDelivery;
    categoryFatherId.value = data?.categoryId;
    currencyId.value = data?.currencyId;
    if (data) {
      store.loader = false;
    }
  } catch (error) {
    store.loader = false;
    toast.error(
      error?.response?._data?.message ||
        error?.response?._data?.error ||
        "Error",
      {
        position: "top-right",
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false,
      }
    );
  }
}
productListApi();
async function getCategoryApi() {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + "/category-detail/all", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
      params: {
        categoryId: categoryFatherId.value,
      },
    });
    categoryChild.value = data;
    if (data) {
      store.loader = false;
    }
  } catch (error) {
    store.loader = false;
    toast.error(
      error?.response?._data?.message ||
        error?.response?._data?.error ||
        "Error",
      {
        position: "top-right",
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false,
      }
    );
  }
}
getCategoryApi();
const ndsInput = ref(false);
const deliveryInput = ref(false);
const productDate = ref(null);
const min = ref(null);
const max = ref(null);
const price = ref(null);
const textarea = ref();
async function productEditApi() {
  try {
    store.loader = true;
    const arr = [];
    input.value.forEach((elem, i) => {
      arr.push({
        categoryDetailId: categoryChild.value[i].id,
        value: elem.value,
      });
    });
    const data = await $fetch(baseUrl + "/product", {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
      body: JSON.stringify({
        id: id,
        description: textarea.value,
        price: price.value,
        hasDelivery: deliveryInput.value,
        hasNds: ndsInput.value,
        currencyId: currencyId.value,
        categoryId: categoryFatherId.value,
        maxAmount: max.value,
        minAmount: min.value,
        factoryDate: productDate.value.value,
        supplierId: localStorage.getItem("userSupplierId"),
        details: arr,
      }),
    });
    if (data?.message == "ok") {
      router.push("/");
      toast.success(data?.message || "Success", {
        position: "top-right",
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false,
      });
    }
  } catch (error) {
    store.loader = false;
    toast.error(
      error?.response?._data?.message ||
        error?.response?._data?.error ||
        "Error",
      {
        position: "top-right",
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false,
      }
    );
  }
}
</script>
  
    <style lang="scss" scoped>
</style>