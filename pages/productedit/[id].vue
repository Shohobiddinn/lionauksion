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
                    {{ inputFatherTitle  }}
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
                <label class="info_label" for="nds">{{ $t("QQS") }}</label>
              </div>
              <div class="info">
                <input
                  class="info_input"
                  v-model="deliveryInput"
                  type="checkbox"
                  id="delivery"
                />
                <label class="info_label" for="delivery">{{ $t("Delivery") }}</label>
              </div>
              <div class="info">
                <input
                  class="info_input"
                  v-model="lastPrice"
                  type="checkbox"
                  id="delivery"
                />
                <label class="info_label" for="delivery">{{ $t("lastPrice") }}</label>
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
     
              <div class="infos">
                <label class="infos_date_label" for="delivery"
                  >{{ $t("DateofMade") }}</label
                >
                <input
                  class="infos_date_input"
                  type="date"
                  id="delivery"
                  ref="productDate"
                  value="2022-08-08"
                />
              </div>
              <div class="infos">
                <label class="infos_date_label" for="delivery-1"
                  >{{ $t("dateEnd") }}</label
                >
                <input
                  class="infos_date_input"
                  type="date"
                  value="2022-01-01"
                  id="delivery-1"
                  ref="productEndDate"
                />
              </div>
              <div class="inputs">
                <label for="amount-1" class="inputs_label"
                  >{{ $t('MinDeliveryAmount') }}</label
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
                  >{{ $t("MaxDeliveryAmount") }}</label
                >
                <input
                  type="text"
                  id="amount-2"
                  class="inputs_input"
                  v-model="max"
                />
              </div>
              <div class="inputs">
                <label for="amount-3" class="inputs_label"
                  >{{ $t("country") }}</label
                >
                <input
                  type="text"
                  id="amount-3"
                  class="inputs_input"
                  v-model="country"
                />
              </div>
              <div class="price">
                <label for="amount-2" class="price_label">{{ $t("productPrice") }}</label>
                <input
                  type="text"
                  id="amount-2"
                  class="price_input"
                  v-model="price"
                />
              </div>
              <div class="textarea">
                <label class="textarea_label" for="text"
                  >{{ $t("AdditionalInfo") }}</label
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
                <div class="submit_icons_btn exit">
                  <NuxtLink :to="localePath('/')" class="submit_icons_btn_link">
                    Orqaga
                  </NuxtLink>
                </div>
                <div class="submit_icons_btn send" @click="productEditApi">
                  <div class="submit_icons_btn_link">
                    yuborish
                  </div>
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
const localePath = useLocalePath();
const i18n = useI18n();
const { id } = route.params;
const selectModal = ref(false);
const currensyModal = ref(false);
const currensyTitle = ref("valyuta turi");
const currensy = ref(null);
const currencyId = ref(null);
async function refresh() {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + "/refresh-token", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userRefreshToken"),
        "Accept-Language": locale.value,
      },
    });
    if (data) {
      store.loader = false;
      localStorage.setItem("userToken", data?.accessToken);
      localStorage.setItem("userId", data?.user?.id);
      localStorage.setItem("role", data?.user?.roles?.[0]?.name);
      localStorage.setItem("userRefreshToken", data?.refreshToken);
      localStorage.setItem("fullName", data?.user?.fullName);
      if (data?.user?.supplierId !== null) {
        localStorage.setItem("userSupplierId", data?.user?.supplierId);
      } else {
        localStorage.setItem("userSupplierId", "");
      }
      if (data?.user?.companyId !== null) {
        localStorage.setItem("userCompanyId", data?.user?.companyId);
      } else {
        localStorage.setItem("userCompanyId", "");
      }
    }
  } catch (error) {
    if (error?.response?._data?.status == 401) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("role");
      localStorage.removeItem("userSupplierId");
      localStorage.removeItem("userCompanyId");
      localStorage.removeItem("userRefreshToken");
      localStorage.removeItem("userId");
      localStorage.removeItem("fullName");
      router.push("/login");
    } else if (error.response.status == 403) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("role");
      localStorage.removeItem("userSupplierId");
      localStorage.removeItem("userCompanyId");
      localStorage.removeItem("userRefreshToken");
      localStorage.removeItem("userId");
      localStorage.removeItem("fullName");

    } else {
      store.loader = false;
      toast.error(
        error?.response?._data?.message ||
          error?.response?._data?.error ||
          i18n.t("error"),
        {
          position: "top-right",
          timeout: 2000,
        }
      );
    }
  }
}
refresh();
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
        i18n.t("error"),
      {
        position: "top-right",
        timeout: 2000,
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
        i18n.t("error"),
      {
        position: "top-right",
        timeout: 2000,
      }
    );
  }
}
const input = ref(null);

categoryFatherApi();
const inputFatherTitle = ref("");
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
        i18n.t("error"),
      {
        position: "top-right",
        timeout: 2000,
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
    lastPrice.value = data?.isLowestPrice;
    productEndDate.value = data?.expDate;
    country.value = data?.country
    if (data) {
      store.loader = false;
    }
  } catch (error) {
    store.loader = false;
    toast.error(
      error?.response?._data?.message ||
        error?.response?._data?.error ||
        i18n.t("error"),
      {
        position: "top-right",
        timeout: 2000,
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
        i18n.t("error"),
      {
        position: "top-right",
        timeout: 2000,
      }
    );
  }
}
getCategoryApi();
const ndsInput = ref(false);
const deliveryInput = ref(false);
const productDate = ref(null);
const productEndDate = ref(null);
const min = ref(null);
const max = ref(null);
const price = ref(null);
const textarea = ref();
const lastPrice = ref(false);
const country = ref(null);
async function productEditApi() {
  try {
    store.loader = true;
    const arr = [];
    input.value.forEach((elem, i) => {
      arr.push({
        categoryDetailId: produyctList.value.details[i].categoryDetailId,
        value: elem.value,
      });
      console.log();
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
        expDate: productEndDate.value.value,
        isLowestPrice: lastPrice.value,
        country:country.value,
        supplierId: localStorage.getItem("userSupplierId"),
        details: arr,
      }),
    });
    if (data?.message == "ok") {
      router.push("/");
      toast.success(data?.message || i18n.t("susses"), {
        position: "top-right",
        timeout: 2000,
      });
    }
  } catch (error) {
    store.loader = false;
    toast.error(
      error?.response?._data?.message ||
        error?.response?._data?.error ||
        i18n.t("error"),
      {
        position: "top-right",
        timeout: 2000,
      }
    );
  }
}

</script>
  
    <style lang="scss" scoped>
</style>