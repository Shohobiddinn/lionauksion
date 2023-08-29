<template>
    <div>
      <Head>
    <Title>{{ $t("Suppliers") }}</Title>
  </Head>
      <div class="order_page">
        <div class="container">
          <div class="order_info">
            <div class="order_info_top">
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
            </div>
            <div class="order_info_bottom">
              <div class="order_info_bottom_top">
                <div class="order_info_bottom_top_title logotip">
                  {{ $t("Logotip") }}
                </div>
                <div class="order_info_bottom_top_title">
                  {{ $t("suplierName") }}
                </div>
                <div class="order_info_bottom_top_title">
                  {{ $t("DateCurrency") }}
                </div>
                <div class="order_info_bottom_top_title">
                  {{ $t("orderCount") }}
                </div>
                <div class="order_info_bottom_top_title">
         
                </div>
                <div class="order_info_bottom_top_title">
                  {{ $t("management") }}
                </div>
              </div>
              <div class="order_info_bottom_orders">
                <div class="order" v-for="c in orderInfoStack?.content" :key="c.id">
               
               <NuxtLink class="order" :to="localePath(`/order/${c?.id}`)">
                    <div class="order_title">
                    <div class="order_title_logo">
                      <img src="../assets/image/squarelogo.svg" alt="" />
                    </div>
                  </div>
                  <div class="order_title">{{ c?.createdBy }}</div>
                  <div class="order_title">{{ c?.createdDate.slice(0,10) }}</div>
                  <div class="order_title">{{ c?.orderCount }}</div>
                  <div class="order_title lock">
                  </div>
                </NuxtLink>
                  <div class="order_title">
                    <div class="order_title_icon" @click="orderStackDelete(c?.id)">   <svg
                    width="10"
                    height="10"
                    fill="red"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                    />
                  </svg></div>
                    <div class="order_title_icon"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pagination" v-if="orderInfoStack?.content.length">
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
                v-for="p in orderInfoStack?.totalPages"
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
  </template>
    
    <script setup>
  import { useStore } from "~~/store/store";
  import { useToast } from "vue-toastification";
  const toast = useToast();
  const store = useStore();
  const { locale } = useI18n();
  const localePath = useLocalePath();
  const i18n = useI18n();
  const baseUrl = useRuntimeConfig().public.baseUrl;
  const filterModal = ref(false);
  const router = useRouter();
  const lock = ref(false);
  const orderInfoStack = ref(null);
  const page = ref(0);
  async function orderStack() {
    try {
      store.loader = true;
      const data = await $fetch(baseUrl + "/order-stack", {
        method: "GET",
        params: {
          page: page.value,
          size: 10,
          orderId: localStorage.getItem("userorderId"),
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("userToken"),
          "Accept-Language": locale.value,
        },
      });
      orderInfoStack.value = data;
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
  orderStack();
  function pageDown() {
    if (page.value !== 0) {
      page.value--;
      orderStack();
    }
  }
  function pageUpDown() {
    if (orderInfoStack.value.totalPages - 1 > page.value) {
      page.value++;
      orderStack();
    }
  }
  function pageApi(p) {
    page.value = p - 1;
    orderStack();
  }
  async function orderStackDelete(e) {
    try {
      const data = await $fetch(baseUrl + `/order-stack/${e}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("userToken"),
          "Accept-Language": locale.value,
        },
      });
      if (data.message == "ok") {
        store.loader = false;
        toast.success(data?.message || i18n.t("susses"), {
          position: "top-right",
          timeout: 2000,
        });
        orderStack();
      } else {
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
  const searchInfo = ref();
  async function search() {
    try {
      store.loader = true;
      const data = await $fetch(baseUrl + "/order-stack", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("userToken"),
          "Accept-Language": locale.value,
        },
        params: {
          page: page.value,
          size: 10,
          fullName: searchInfo.value,
        },
      });
      orderInfoStack.value = data;
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
        if (data?.user?.orderId !== null) {
          localStorage.setItem("userorderId", data?.user?.orderId);
        } else {
          localStorage.setItem("userorderId", "");
        }
      }
    } catch (error) {
      
      if (error?.response?._data?.status == 401) {
        localStorage.removeItem("userToken");
        localStorage.removeItem("role");
        localStorage.removeItem("userSupplierId");
        localStorage.removeItem("userorderId");
        localStorage.removeItem("userRefreshToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("fullName");
        router.push("/login");
      } else if (error.response.status == 403) {
        localStorage.removeItem("userToken");
        localStorage.removeItem("role");
        localStorage.removeItem("userSupplierId");
        localStorage.removeItem("userorderId");
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
  </script>
    
    <style lang="scss" scoped>
  </style>