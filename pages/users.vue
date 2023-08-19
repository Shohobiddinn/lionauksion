<template>
  <div>
    <div class="company_page">
      <div class="container">
        <div class="company_info">
          <div class="company_info_top">
            <div class="search">
              <div class="form">
                <input
                  type="text"
                  placeholder="Qidiruv.."
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
                  search..
                </div>
              </div>
            </div>
            <div class="company_info_top_add">
              <NuxtLink class="company_info_top_add_link" to="/usersadd">
                Foydalanuvchi qo'shish
              </NuxtLink>
            </div>
            <div class="company_filter" :class="{ active: filterModal }">
              <div
                class="company_filter_option"
                @click="filterModal = !filterModal"
              >
                <div class="company_filter_option_icon">
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
                <div class="company_filter_option_title">filter</div>
              </div>
              <div class="company_filter_content">
                <div class="company_filter_content_title">
                  <input
                    id="filter-1"
                    value="Hello Shahobiddin baby"
                    name="filter"
                    type="checkbox"
                  />

                  <label
                    for="filter-1"
                    class="company_filter_content_title_text nds"
                  >
                    QQS
                  </label>
                </div>
                <div class="company_filter_content_title">
                  <input id="filter-2" name="filter" type="checkbox" />

                  <label
                    for="filter-2"
                    class="company_filter_content_title_text"
                  >
                    yetkazib berish
                  </label>
                </div>
                <div class="company_filter_content_title">
                  <input id="filter-3" name="filter" type="checkbox" />

                  <label
                    for="filter-3"
                    class="company_filter_content_title_text"
                  >
                    faol
                  </label>
                </div>
                <div class="company_filter_content_title">
                  <input id="filter-4" name="filter" type="checkbox" />

                  <label
                    for="filter-4"
                    class="company_filter_content_title_text"
                  >
                    faol emas
                  </label>
                </div>
                <div
                  class="company_filter_content_btn"
                  @click="(filterModal = false), func()"
                >
                  yuborish
                </div>
              </div>
            </div>
          </div>
          <div class="company_info_bottom">
            <div class="company_info_bottom_top">
              <div class="company_info_bottom_top_title logotip">logotip</div>
              <div class="company_info_bottom_top_title">
                foydalanuvchi nomi
              </div>
              <div class="company_info_bottom_top_title">
                foydalanuvchi rahbari
              </div>
              <div class="company_info_bottom_top_title">
                foydalanuvchi raqami
              </div>
              <div class="company_info_bottom_top_title">
                foydalanuvchini bloklash
              </div>
              <div class="company_info_bottom_top_title">boshqa</div>
            </div>
            <div class="company_info_bottom_companys">
              <div class="company" v-for="c in user?.content" :key="c.id">
                <div class="company_title">
                  <div class="company_title_logo">
                    <img src="../assets/image/squarelogo.svg" alt="" />
                  </div>
                </div>
                <div class="company_title">{{ c?.username }}</div>
                <div class="company_title">{{ c?.fullName }}</div>
                <div class="company_title">{{ c?.phone }}</div>
                <div
                  class="company_title lock"
                  v-if="c?.isBlocked"
                  @click="userIsBlocked(c)"
                >
                  <svg
                    width="25"
                    height="25"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                    />
                  </svg>
                </div>
                <div
                  class="company_title lock_open"
                  v-else
                  @click="userUnBlocked(c)"
                >
                  <svg
                    width="25"
                    height="25"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="#52438F"
                  >
                    <path
                      d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z"
                    />
                  </svg>
                </div>
                <div class="company_title">
                  <!-- <div class="company_title_icon">
                    <NuxtLink :to="`/usersedit/${c?.id}`">
                      <svg
                        width="25"
                        height="25"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"
                        />
                      </svg>
                    </NuxtLink>
                  </div> -->
                  <div class="company_title_icon" @click="userDelete(c?.id)">
                    <svg
                      width="25"
                      height="25"
                      fill="red"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pagination" v-if="user?.content.length">
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
              v-for="p in user?.totalPages"
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
import { useStore } from "~/store/store";
import { useToast } from "vue-toastification";
const toast = useToast();
const store = useStore();
const baseUrl = useRuntimeConfig().public.baseUrl;
const filterModal = ref(false);
const lock = ref(false);
const user = ref(null);
const page = ref(0);
const { locale } = useI18n();
async function userApi() {
  store.loader = true;
  const data = await $fetch(baseUrl + "/user", {
    method: "GET",
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
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  });
  user.value = data;
  store.loader = false;
}
userApi();
function pageDown() {
  if (page.value !== 0) {
    page.value--;
    userApi();
  }
}
function pageUpDown() {
  if (user.value.totalPages - 1 > page.value) {
    page.value++;
    userApi();
  }
}
function pageApi(p) {
  page.value = p - 1;
  userApi();
}
async function userIsBlocked(e) {
  store.loader = true;
  if (localStorage.getItem("userSupplierId") !== "") {
    const data = await $fetch(baseUrl + `/supplier/block-user/${e.id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
      params: {
        isBlock: false,
      },
    });
    if (data?.message == "ok") {
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
      userApi();
    }
  } else {
    const data = await $fetch(baseUrl + `/company/block-user/${e.id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
      params: {
        isBlock: false,
      },
    });
    if (data?.message == "ok") {
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
      userApi();
    }
  }
  store.loader = false;
}
async function userUnBlocked(e) {
  try {
    store.loader = true;
    if (localStorage.getItem("userSupplierId") !== "") {
      const data = await $fetch(baseUrl + `/supplier/block-user/${e.id}`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("userToken"),
          "Accept-Language": locale.value,
        },
        params: {
          isBlock: true,
        },
      });

      if (data?.message == "ok") {
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
        userApi();
      }
    } else {
      const data = await $fetch(baseUrl + `/company/block-user/${e.id}`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("userToken"),
          "Accept-Language": locale.value,
        },
        params: {
          isBlock: true,
        },
      });
      if (data?.message == "ok") {
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
        userApi();
      }
    }
    store.loader = false;
  } catch (error) {
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
async function userDelete(e) {
  try {
    if (localStorage.getItem("userSupplierId") !== "") {
      const data = await $fetch(baseUrl + `/supplier/delete-user/${e}`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("userToken"),
          "Accept-Language": locale.value,
        },
      });
      if (data.message == "ok") {
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
        userApi();
      } else {
      }
    } else {
      const data = await $fetch(baseUrl + `/company/delete-user/${e}`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("userToken"),
          "Accept-Language": locale.value,
        },
      });
      if (data.message == "ok") {
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
        userApi();
      } else {
      }
    }
  } catch (error) {
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
const searchInfo = ref();
async function search() {
  try {
    const data = await $fetch(baseUrl + "/user", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
      params: {
        page: page.value,
        size: 10,
        fullName: searchInfo.value,
        companyId: localStorage.getItem("userCompanyId")
          ? localStorage.getItem("userCompanyId")
          : null,
        supplierId: localStorage.getItem("userSupplierId")
          ? localStorage.getItem("userSupplierId")
          : null,
      },
    });
    user.value = data;
    if (data) {
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
  }
}
</script>
  
  <style lang="scss" scoped>
</style>