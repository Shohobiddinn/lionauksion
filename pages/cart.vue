<template>
  <div>
    <bgmodal v-if="bgModal" />
    <Head>
      <Title>{{ $t("order") }}</Title>
    </Head>
    <div class="informotion">
      <div class="container">
        <div class="info">
          <div class="info_top">
            <div class="categorys">
              <div class="send_btn" @click="orderAddApi">{{ $t("Send") }}</div>
              <div class="categorys_content">
                <div class="categorys_content_title" v-show="productAddIcon">
                  <NuxtLink
                    class="categorys_content_title_link"
                    :to="localePath('/productadd')"
                  >
                    {{ $t("Addproduct") }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="info_bottom">
            <div class="info_bottom_page">
              <div class="info_bottom_page_title com">
                {{ $t("CompProduct") }}
              </div>
              <div class="info_bottom_page_title phone">
                {{ $t("Product") }}
              </div>
              <div class="info_bottom_page_title product">
                {{ $t("countCart") }}
              </div>
              <div class="info_bottom_page_title logo">{{ $t("date") }}</div>
              <div class="info_bottom_page_title product">
                {{ $t("dateEnd") }}
              </div>
              <div class="info_bottom_page_title status">
                {{ $t("MDelivery") }}
              </div>
              <div class="info_bottom_page_title price">{{ $t("Cost") }}</div>
              <div class="info_bottom_page_title delivery">
                {{ $t("Delivery") }}
              </div>
              <div class="info_bottom_page_title nds">{{ $t("QQS") }}</div>
              <div class="info_bottom_page_title">{{ $t("lastPrice") }}</div>
              <div class="info_bottom_page_title desc">
                {{ $t("addition") }}
              </div>
              <div class="info_bottom_page_title edit">
                {{ $t("management") }}
              </div>
            </div>
            <div class="info_bottom_deliverys">
              <div class="delivery" v-for="p in order" :key="p?.id">
                <div class="delivery_content">
                  <div class="delivery_content_title name">
                    {{ p?.supplierName }}
                  </div>
                  <div class="delivery_content_title phone">
                    {{ p?.product?.supplierPhone }}
                  </div>
                </div>
                <div class="delivery_content">
                  {{ p?.product?.categoryName }}
                </div>
                <div class="delivery_content">
                  {{ p?.amount }}
                </div>
                <div class="delivery_content">
                  {{ p?.product?.factoryDate }} <br />
                  {{ p?.product?.country }}
                </div>
                <div class="delivery_content">
                  {{ p?.product?.expDate }}
                </div>
                <div class="delivery_content">
                  <div class="delivery_content_title">
                    min : <span>{{ p?.product?.minAmount }}</span> <br />
                    max : <span>{{ p?.product?.maxAmount }}</span>
                  </div>
                </div>
                <div class="delivery_content">
                  {{ p?.product?.price }} {{ p?.product?.currencySymbol }}
                </div>
                <div class="delivery_content">
                  <div
                    class="delivery_content_title icon"
                    v-if="p?.product?.hasDelivery"
                  >
                    <svg
                      width="30"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="green"
                    >
                      <path
                        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
                      />
                    </svg>
                  </div>
                  <div
                    class="delivery_content_title icon"
                    v-else-if="!p?.product?.hasDelivery"
                  >
                    <svg
                      width="30"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="red"
                    >
                      <path
                        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="delivery_content">
                  <div
                    class="delivery_content_title icon"
                    v-if="p?.product?.hasNds"
                  >
                    <svg
                      width="30"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="green"
                    >
                      <path
                        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
                      />
                    </svg>
                  </div>
                  <div
                    class="delivery_content_title icon"
                    v-else-if="!p?.product?.hasNds"
                  >
                    <svg
                      width="30"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="red"
                    >
                      <path
                        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="delivery_content">
                  <div
                    class="delivery_content_title icon"
                    v-if="p?.product?.isLowestPrice"
                  >
                    <svg
                      width="30"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="green"
                    >
                      <path
                        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
                      />
                    </svg>
                  </div>
                  <div
                    class="delivery_content_title icon"
                    v-else-if="!p?.product?.isLowestPrice"
                  >
                    <svg
                      width="30"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="red"
                    >
                      <path
                        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="delivery_content">
                  {{ p?.product?.description }}
                </div>
                <div class="delivery_content edit">
                  <div
                    class="delivery_content_title icon edit"
                    @click="orderOneApi(p)"
                  >
                    <svg
                      width="30"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="modal" v-if="cartModal">
                <div class="cart_modal">
                  <div
                    class="cart_modal_close_btn"
                    @click="(bgModal = false), (cartModal = false)"
                  ></div>
                  <div class="cart_modal_content">
                    <div class="cart_modal_content_title">
                      {{ $t("CompProduct") }}
                    </div>
                    <div class="cart_modal_content_title">
                      {{ companyName }}
                    </div>
                  </div>
                  <div class="cart_modal_content">
                    <div class="cart_modal_content_title">
                      {{ $t("Product") }}
                    </div>
                    <div class="cart_modal_content_title">
                      {{ productName }}
                    </div>
                  </div>
                  <div class="cart_modal_content">
                    <div class="cart_modal_content_title">
                      {{ $t("Cost") }}
                    </div>
                    <div class="cart_modal_content_title">
                      {{ productPrice }} {{ productSymbol }}
                    </div>
                  </div>
                  <div class="cart_modal_info">
                    <label class="cart_modal_info_label" for="count_1">{{
                      $t("countCart")
                    }}</label>
                    <input
                      class="cart_modal_info_input"
                      type="number"
                      id="count_1"
                      v-model="cartInputInfo"
                    />
                  </div>
                  <div class="cart_modal_btns" @click="cartEditApi(cartInfo)">
                    <div class="cart_modal_btns_btn">
                      {{ $t("Send") }}
                    </div>
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
import { useStore } from "~/store/store";
const router = useRouter();
const store = useStore();
import { useToast } from "vue-toastification";
const toast = useToast();
const { locale } = useI18n();
const i18n = useI18n();
const localePath = useLocalePath();
const baseUrl = useRuntimeConfig().public.baseUrl;
const cartModal = ref(false);
const order = ref(null);
const bgModal = ref(false);
const deleteMessage = ref(true);
const iconRole = ref(false);
const role = localStorage.getItem("role");
onMounted(() => {
  order.value = JSON.parse(localStorage.getItem("cart"));
  if (role == "ROLE_ADMIN") {
  }
  if (role == "ROLE_SUPPLIER_ADMIN") {
    iconRole.value = true;
    deleteMessage.value = false;
  }
  if (role == "ROLE_COMPANY_ADMIN") {
    deleteMessage.value = true;
    iconRole.value = false;
  }
  if (role == "ROLE_COMPANY_MANAGER") {
    deleteMessage.value = true;
    iconRole.value = false;
  }
});
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
          "Error",
        {
          position: "top-right",
          timeout: 2000,
        }
      );
    }
  }
}
refresh();
const cartInputInfo = ref("");
const productSymbol = ref("");
const productPrice = ref("");
const productName = ref("");
const companyName = ref("");
const editProductId = ref("");
const productSupplierId = ref("");
const productId = ref("");
const cartInfo = ref(null);
async function orderOneApi(p) {
  cartModal.value = true;
  bgModal.value = true;
  store.loader = true;
  store.loader = false;
  companyName.value = p?.supplierName;
  productName.value = p?.product?.categoryName;
  productPrice.value = p?.product?.price;
  productSymbol.value = p?.product?.currencySymbol;
  editProductId.value = p?.id;
  productId.value = p?.productId;
  productSupplierId.value = p?.supplierId;
  cartInputInfo.value = p?.amount;
  cartInfo.value = p;
}
async function cartEditApi(e) {
  let productAll = JSON.parse(
    localStorage.getItem("cart") ? localStorage.getItem("cart") : "[]"
  );
  let item = {
    amount: cartInputInfo.value,
    productId: e.productId,
    supplierId: e.supplierId,
    supplierName: e.supplierName,
    companyId: localStorage.getItem("userCompanyId"),
    companyName: localStorage.getItem("userCompanyName"),
    product: e.product,
  };
  let product = productAll.filter((i) => i.productId === item.productId);
  if (product.length > 0) {
    const removeIndex = productAll.findIndex(
      (tier) => tier.productId === e.productId
    );
    if (removeIndex !== -1) {
      productAll.splice(removeIndex, 1);
    }
  }
  productAll.push(item);
  localStorage.setItem("cart", JSON.stringify(productAll));
  bgModal.value = false;
  cartModal.value = false;
}
async function orderAddApi() {
  try {
    const data = await $fetch(baseUrl + "/order", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
      body: JSON.parse(localStorage.getItem("cart"))
    });
    if(data){
      store.loader = false;
      localStorage.removeItem("cart")
      toast.success(i18n.t("susses"), {
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