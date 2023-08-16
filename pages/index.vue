<template>
  <div>
    <div class="informotion">
      <div class="container">
        <div class="info">
          <div class="info_top">
            <div class="categorys">
              <div class="search">
              <div class="form">
                <input type="text" placeholder="Qidiruv.." v-model="searchInfo" />
                <div class="form_icon" @click="tekshiruv">
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
                  search..
                </div>
              </div>
            </div>
              <div class="categorys_content">
                <div class="categorys_content_title">
                  <NuxtLink
                    class="categorys_content_title_link"
                    to="/productadd"
                  >
                    Qo'shish
                  </NuxtLink>
                </div>
          
              </div>
              <div class="categorys_filter" :class="{ active: filterModal }">
                <div
                  class="categorys_filter_option"
                  @click="filterModal = !filterModal"
                >
                  <div class="categorys_filter_option_icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9299 2.1001L5.9999 10.0001M5.3999 2.1001H18.5999C19.6999 2.1001 20.5999 3.0001 20.5999 4.1001V6.3001C20.5999 7.1001 20.0999 8.1001 19.5999 8.6001L15.2999 12.4001C14.6999 12.9001 14.2999 13.9001 14.2999 14.7001V19.0001C14.2999 19.6001 13.8999 20.4001 13.3999 20.7001L11.9999 21.6001C10.6999 22.4001 8.8999 21.5001 8.8999 19.9001V14.6001C8.8999 13.9001 8.4999 13.0001 8.0999 12.5001L4.2999 8.5001C3.7999 8.0001 3.3999 7.1001 3.3999 6.5001V4.2001C3.3999 3.0001 4.2999 2.1001 5.3999 2.1001Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="categorys_filter_option_title">filter</div>
                </div>
                <div class="categorys_filter_content">
                  <div class="categorys_filter_content_title">
                    <input
                      id="filter-1"
                      value="Hello Shahobiddin baby"
                      name="filter"
                      type="checkbox"
                    />

                    <label
                      for="filter-1"
                      class="categorys_filter_content_title_text nds"
                    >
                      QQS
                    </label>
                  </div>
                  <div class="categorys_filter_content_title">
                    <input id="filter-2" name="filter" type="checkbox" />

                    <label
                      for="filter-2"
                      class="categorys_filter_content_title_text"
                    >
                      yetkazib berish
                    </label>
                  </div>
                  <div class="categorys_filter_content_title">
                    <input id="filter-3" name="filter" type="checkbox" />

                    <label
                      for="filter-3"
                      class="categorys_filter_content_title_text"
                    >
                      faol
                    </label>
                  </div>
                  <div class="categorys_filter_content_title">
                    <input id="filter-4" name="filter" type="checkbox" />

                    <label
                      for="filter-4"
                      class="categorys_filter_content_title_text"
                    >
                      faol emas
                    </label>
                  </div>
                  <div
                    class="categorys_filter_content_btn"
                    @click="(filterModal = false), func()"
                  >
                    yuborish
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="info_bottom">
            <div class="info_bottom_page">
              <div class="info_bottom_page_title logo">logotip</div>
              <div class="info_bottom_page_title com">kompaniya malumoti</div>
              <div class="info_bottom_page_title phone">mahsuloti</div>
              <div class="info_bottom_page_title product">mahsulot turlari</div>
              <div class="info_bottom_page_title status">min yetkazish</div>
              <div class="info_bottom_page_title status">max yetkazish</div>
              <div class="info_bottom_page_title delivery">yetkazib berish</div>
              <div class="info_bottom_page_title price">narxi</div>
              <div class="info_bottom_page_title nds">qqs</div>
              <div class="info_bottom_page_title edit">tahrirlash</div>
            </div>
            <div class="info_bottom_deliverys">
              <div class="delivery" v-for="p in products?.content" :key="p?.id">
                <div class="delivery_content logo">
                  <img src="../assets/image/squarelogo.svg" alt="" />
                </div>
                <div class="delivery_content">
                  <div class="delivery_content_title name">
                    {{ p?.supplierName }}
                  </div>
                  <div class="delivery_content_title phone">
                    {{ p?.supplierPhone }}
                  </div>
                </div>
                <div class="delivery_content">{{ p?.categoryName }}</div>
                <div class="delivery_content">
                  <div
                    class="delivery_content_title"
                    v-for="d in p?.details"
                    :key="d?.id"
                  >
                    {{ d?.categoryDetailName }} {{ d?.value }}
                  </div>
                </div>
                <div class="delivery_content">{{ p?.minAmount }}</div>
                <div class="delivery_content">{{ p?.maxAmount }}</div>
                <div class="delivery_content">
                  <div class="delivery_content_title" v-if="p?.hasDelivery">
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
                    class="delivery_content_title"
                    v-else-if="!p?.hasDelivery"
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
                  {{ p?.price }} {{ p?.currencySymbol }}
                </div>
                <div class="delivery_content">
                  <div class="delivery_content_title" v-if="p?.hasNds">
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
                  <div class="delivery_content_title" v-else-if="!p?.hasNds">
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
                  <div class="delivery_content_title icon">
                    <NuxtLink :to="`/productedit/${p?.id}`">
                      <svg
                        width="30"
                        height="30"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="black"
                      >
                        <path
                          d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"
                        />
                      </svg>
                    </NuxtLink>
                  </div>
                  <div class="delivery_content_title icon">
                    <svg
                      width="30"
                      height="30"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                      />
                    </svg>
                  </div>
                  <div
                    class="delivery_content_title icon"
                    @click="productDelete(p?.id)"
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
                </div>
              </div>
            </div>
            <div class="pagination">
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
                v-for="p in products?.totalPages"
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
const { locale } = useI18n();
const baseUrl = useRuntimeConfig().public.baseUrl;
const filterModal = ref(false);
const page = ref(0);
function func() {
  document.getElementsByName("filter").forEach((el) => {
    if (el.checked) {
      console.log(el.value);
    }
  });
}
const products = ref(null);
async function productApi() {
  const data = await $fetch(baseUrl + "/product", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
      "Accept-Language": locale.value,
    },
    params: {
      page: page.value,
      size: 10,
    },
  });
  products.value = data;
}
productApi();
function pageDown() {
  if (page.value !== 0) {
    page.value--;
    productApi();
  }
}
function pageUpDown() {
  if (products.value.totalPages - 1 > page.value) {
    page.value++;
    productApi();
    console.log("hello");
  } else {
    console.log("bug");
  }
}
function pageApi(p) {
  page.value = p - 1;
  productApi();
}
async function productDelete(e) {
  const data = await $fetch(baseUrl + `/product/${e}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  });
  productApi();
  console.log(data);
}
const searchInfo = ref();
async function tekshiruv(){
  const data = await $fetch(baseUrl + "/product", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
      "Accept-Language": locale.value,
      
    },
    params: {
      page: page.value,
      size: 10,
      name : searchInfo.value
    },
  });
  products.value = data;
  console.log(searchInfo.value);
}
</script>

<style lang="scss" scoped>
</style>