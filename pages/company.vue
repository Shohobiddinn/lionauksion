<template>
  <div>
    <Head>
  <Title>{{ $t("Companies") }}</Title>
</Head>
    <div class="company_page">
      <div class="container">
        <div class="company_info">
          <div class="company_info_top">
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
            <div class="company_info_top_add">
              <NuxtLink
                class="company_info_top_add_link"
                :to="localePath('/companyadd')"
              >
                {{ $t("AddCompany") }}
              </NuxtLink>
            </div>
          </div>
          <div class="company_info_bottom">
            <div class="company_info_bottom_top">
              <div class="company_info_bottom_top_title logotip">
                {{ $t("Logotip") }}
              </div>
              <div class="company_info_bottom_top_title">
                {{ $t("CompanyName") }}
              </div>
              <div class="company_info_bottom_top_title">
                {{ $t("CompanyDirector") }}
              </div>
              <div class="company_info_bottom_top_title">
                {{ $t("CompanyNumber") }}
              </div>
              <div class="company_info_bottom_top_title">
                {{ $t("BlockCompany") }}
              </div>
              <div class="company_info_bottom_top_title">
                {{ $t("another") }}
              </div>
            </div>
            <div class="company_info_bottom_companys">
              <div class="company" v-for="c in company?.content" :key="c.id">
                <div class="company_title">
                  <div class="company_title_logo">
                    <img src="../assets/image/squarelogo.svg" alt="" />
                  </div>
                </div>
                <div class="company_title">{{ c?.name }}</div>
                <div class="company_title">{{ c?.director }}</div>
                <div class="company_title">{{ c?.phone }}</div>
                <div
                  class="company_title lock"
                  v-if="c?.isBlocked"
                  @click="companyIsBlocked(c)"
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
                  @click="companyUnBlocked(c)"
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
                  <div class="company_title_icon">
                    <NuxtLink :to="localePath(`/companyedit/${c?.id}`)">
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
                  </div>
                  <div class="company_title_icon" @click="companyDelete(c?.id)">
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
          <div class="pagination" v-if="company?.content.length">
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
              v-for="p in company?.totalPages"
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
const router = useRouter();
const store = useStore();
const { locale } = useI18n();
const localePath = useLocalePath();
const baseUrl = useRuntimeConfig().public.baseUrl;
const filterModal = ref(false);
const lock = ref(false);
const company = ref(null);
const page = ref(0);
async function companyApi() {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + "/company", {
      method: "GET",
      params: {
        page: page.value,
        size: 10,
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
    });
    company.value = data;
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
companyApi();
function pageDown() {
  if (page.value !== 0) {
    page.value--;
    companyApi();
  }
}
function pageUpDown() {
  if (company.value.totalPages - 1 > page.value) {
    page.value++;
    companyApi();
  }
}
function pageApi(p) {
  page.value = p - 1;
  companyApi();
}
async function companyIsBlocked(e) {
  try {
    const data = await $fetch(baseUrl + "/company", {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
      body: JSON.stringify({
        id: e.id,
        name: e.name,
        director: e.director,
        phone: e.phone,
        isBlocked: false,
        userFullName: e.userFullName,
        username: e.username,
        password: e.password,
      }),
    });
    if (data) {
      companyApi();
      store.loader = false;
      toast.success(data?.message || "Success", {
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
async function companyUnBlocked(e) {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + "/company", {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
      body: JSON.stringify({
        id: e.id,
        name: e.name,
        director: e.director,
        phone: e.phone,
        isBlocked: true,
        userFullName: e.userFullName,
        username: e.username,
        password: e.password,
      }),
    });
    if (data) {
      companyApi();
      store.loader = false;
      toast.success(data?.message || "Success", {
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
async function companyDelete(e) {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + `/company/${e}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
    });
    if (data.message == "ok") {
      companyApi();
      store.loader = false;
      toast.success(data?.message || "Success", {
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
const searchInfo = ref();
async function search() {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + "/company", {
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
    company.value = data;
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
</script>
  
  <style lang="scss" scoped>
</style>