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
              <div class="search">
                <div class="form">
                  <input
                    type="text"
                    :placeholder="$t('search')"
                    v-model="searchInfo"
                    @input="search"
                  />
                  <div class="form_icon" @click="search">
                    <svg
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.3037 28.6074C6.41923 28.6074 0 22.1882 0 14.3037C0 6.41923 6.41923 0 14.3037 0C22.1882 0 28.6074 6.41923 28.6074 14.3037C28.6074 22.1882 22.1882 28.6074 14.3037 28.6074ZM14.3037 2.09323C7.56353 2.09323 2.09323 7.57748 2.09323 14.3037C2.09323 21.03 7.56353 26.5142 14.3037 26.5142C21.0439 26.5142 26.5142 21.03 26.5142 14.3037C26.5142 7.57748 21.0439 2.09323 14.3037 2.09323Z"
                        fill="white"
                      />
                      <path
                        d="M28.9569 30.0029C28.6918 30.0029 28.4266 29.9052 28.2173 29.6959L25.4263 26.9049C25.0216 26.5002 25.0216 25.8304 25.4263 25.4257C25.831 25.021 26.5008 25.021 26.9055 25.4257L29.6965 28.2167C30.1012 28.6213 30.1012 29.2912 29.6965 29.6959C29.4872 29.9052 29.222 30.0029 28.9569 30.0029Z"
                        fill="white"
                      />
                    </svg>
                    {{ $t("search") }}
                  </div>
                </div>
              </div>
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
                {{ $t("status") }}
              </div>
              <div class="info_bottom_page_title edit">
                {{ $t("management") }}
              </div>
            </div>
            <div class="info_bottom_deliverys">
              <div class="delivery" v-for="p in order?.content" :key="p?.id">
                <div class="delivery_content">
                  <div class="delivery_content_title name">
                    {{ p?.supplierName }}
                  </div>
                  <div class="delivery_content_title phone">
                    {{ p?.supplierPhone }}
                  </div>
                </div>
                <div class="delivery_content">
                  {{ p?.productDto?.categoryName }}
                </div>
                <div class="delivery_content">
                  {{ p?.amount }}
                </div>
                <div class="delivery_content">
                  {{ p?.productDto?.factoryDate }} <br />
                  {{ p?.productDto?.country }}
                </div>
                <div class="delivery_content">
                  {{ p?.productDto?.expDate }}
                </div>
                <div class="delivery_content">
                  <div class="delivery_content_title">
                    min : <span>{{ p?.productDto?.minAmount }}</span> <br />
                    max : <span>{{ p?.productDto?.maxAmount }}</span>
                  </div>
                </div>
                <div class="delivery_content">
                  {{ p?.productDto?.price }} {{ p?.productDto?.currencySymbol }}
                </div>
                <div class="delivery_content">
                  <div
                    class="delivery_content_title icon"
                    v-if="p?.productDto?.hasDelivery"
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
                    v-else-if="!p?.productDto?.hasDelivery"
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
                    v-if="p?.productDto?.hasNds"
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
                    v-else-if="!p?.productDto?.hasNds"
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
                    v-if="p?.productDto?.isLowestPrice"
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
                    v-else-if="!p?.productDto?.isLowestPrice"
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
                  <div class="delivery_content_title" v-if="p?.status == 1">
                    {{ $t("expected") }}
                  </div>
                  <div class="delivery_content_title" v-if="p?.status == 2">
                    {{ $t("accepted") }}
                  </div>
                  <div class="delivery_content_title" v-if="p?.status == -1">
                    {{ $t("notAccepted") }}
                  </div>

                  <div class="delivery_content_title" v-if="p?.status == 3">
                    {{ $t("onWay") }}
                  </div>

                  <div class="delivery_content_title" v-if="p?.status == 4">
                    {{ $t("delivered") }}
                  </div>
                </div>
                <div class="delivery_content edit">
                  <div
                    class="delivery_content_title icon edit"
                    v-if="p?.status == 3"
                    @click="warn()"
                  >
                    <svg
                      width="25"
                      height="25"
                      fill="orange"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        d="M32 96c0-35.3 28.7-64 64-64H320c23.7 0 44.4 12.9 55.4 32h51.8c25.3 0 48.2 14.9 58.5 38l52.8 118.8c.5 1.1 .9 2.1 1.3 3.2H544c35.3 0 64 28.7 64 64v32c17.7 0 32 14.3 32 32s-14.3 32-32 32H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V288c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32V96zM384 224h85.9l-42.7-96H384v96zM160 432a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"
                      />
                    </svg>
                  </div>
                  <div
                    class="delivery_content_title icon edit"
                    v-if="p?.status == 1 && iconRole"
                    @click="orderStatus(p?.id, 2)"
                  >
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
                  <div
                    class="delivery_content_title icon edit"
                    v-if="p?.status == 1 && iconRole"
                    @click="orderStatus(p?.id, -1)"
                  >
                    <svg
                      width="25"
                      height="25"
                      fill="red"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
                      />
                    </svg>
                  </div>
                  <div
                    class="delivery_content_title icon edit"
                    v-if="p?.status == 2 && iconRole"
                    @click="orderStatus(p?.id, 3)"
                  >
                    <svg
                      width="25"
                      height="25"
                      fill="orange"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"
                      />
                    </svg>
                  </div>
                  <div
                    class="delivery_content_title icon edit"
                    v-if="p?.status == 3 && deleteMessage"
                    @click="orderStatus(p?.id, 4)"
                  >
                    <svg
                      width="25"
                      height="25"
                      fill="green"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                      />
                    </svg>
                  </div>
                  <div
                    class="delivery_content_title icon edit"
                    v-if="p?.status == 1 && deleteMessage"
                    @click="orderStatus(p?.id, -1)"
                  >
                    <svg
                      width="30"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="red"
                    >
                      <path
                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                      />
                    </svg>
                  </div>
                  <div
                    class="delivery_content_title icon edit"
                    @click="orderOneApi(p?.id)"
                    v-if="p?.status == 1 && deleteMessage"
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
                  <div class="cart_modal_btns" @click="cartEditApi">
                    <div class="cart_modal_btns_btn">
                      {{ $t("Send") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pagination" v-if="order?.content.length">
              <div class="pagination_icon" @click="pageDown">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 6L9 12L15 18"
                    stroke="black"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div
                class="pagination_count"
                v-for="p in order?.totalPages"
                :key="p"
                @click="pageApi(p)"
              >
                {{ p }}
              </div>
              <div class="pagination_icon" @click="pageUpDown">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="black"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
import { useStore } from "~/store/store";
const router = useRouter();
const store = useStore();
import { useToast } from "vue-toastification";
const toast = useToast();
const { locale } = useI18n();
const localePath = useLocalePath();
const baseUrl = useRuntimeConfig().public.baseUrl;
const page = ref(0);
const cartModal = ref(false);
const order = ref(null);
const bgModal = ref(false);
const deleteMessage = ref(true);
const iconRole = ref(false);
async function orderApi() {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + "/order", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
        companyId: localStorage.getItem("userCompanyId"),
        supplierId: localStorage.getItem("userSupplierId"),
      },
      params: {
        page: page.value,
        size: 10,
        companyId: localStorage.getItem("userCompanyId")
          ? localStorage.getItem("userCompanyId")
          : null,
        supplierId: localStorage.getItem("userSupplierId")
          ? localStorage.getItem("userSupplierId")
          : null,
      },
    });
    order.value = data;
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
      }
    );
  }
}
orderApi();
function pageDown() {
  if (page.value !== 0) {
    page.value--;
    orderApi();
  }
}
function pageUpDown() {
  if (order.value.totalPages - 1 > page.value) {
    page.value++;
    orderApi();
  } else {
  }
}
function pageApi(p) {
  page.value = p - 1;
  orderApi();
}
const searchInfo = ref();
async function search() {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + "/order", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
      params: {
        page: page.value,
        size: 10,
        name: searchInfo.value,
        companyId: localStorage.getItem("userCompanyId")
          ? localStorage.getItem("userCompanyId")
          : null,
        supplierId: localStorage.getItem("userSupplierId")
          ? localStorage.getItem("userSupplierId")
          : null,
      },
    });

    order.value = data;
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
      }
    );
  }
}
const role = localStorage.getItem("role");
onMounted(() => {
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
async function orderStatus(id, status) {
  try {
    const data = await $fetch(baseUrl + `/order/${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
      params: {
        status: status,
      },
    });
    if (data) {
      store.loader = false;
      toast.success(data?.message || "Success", {
        position: "top-right",
        timeout: 2000,
      });
      orderApi();
    }
  } catch (error) {
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
function warn() {
  toast.warning("Yo'lda", {
    position: "top-right",
    timeout: 2000,
  });
}
const cartInputInfo = ref("");
const productSymbol = ref("");
const productPrice = ref("");
const productName = ref("");
const companyName = ref("");
const editProductId = ref("");
const productSupplierId = ref("");
const productId = ref("");
async function orderOneApi(id) {
  try {
    cartModal.value = true;
    bgModal.value = true;

    store.loader = true;
    const data = await $fetch(baseUrl + `/order/${id}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
    });
    if (data) {
      store.loader = false;
      companyName.value = data?.supplierName;
      productName.value = data?.productDto?.categoryName;
      productPrice.value = data?.productDto?.price;
      productSymbol.value = data?.productDto?.currencySymbol;
      editProductId.value = data?.id;
      productId.value = data?.productId;
      productSupplierId.value = data?.supplierId;
      cartInputInfo.value = data?.amount;
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
      }
    );
  }
}
async function cartEditApi() {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + "/order", {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
      body: JSON.stringify({
        id: editProductId.value,
        amount: cartInputInfo.value,
        productId: productId.value,
        supplierId:productSupplierId.value ,
        companyId: localStorage.getItem("userCompanyId"),
        status:1
      }),
    });
    if (data) {
      bgModal.value = false;
      cartModal.value = false;
      store.loader = false;
      toast.success(data.message, {
        position: "top-right",
        timeout: 2000,
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
      }
    );
  }
}
</script>
  
  <style lang="scss" scoped>
</style>