<template>
  <div>
  
    <div class="company_page">
      <div class="container">
        <div class="company_info">
        
          <div class="company_info_top">
            <div class="search">
              <div class="form">
                <input type="text" placeholder="Qidiruv.." />
                <div class="form_icon">
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
              <NuxtLink class="company_info_top_add_link" to="/supplieradd">
                Taminotchi qo'shish
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
              <div class="company_info_bottom_top_title">kompaniya nomi</div>
              <div class="company_info_bottom_top_title">kompaniya rahbari</div>
              <div class="company_info_bottom_top_title">kompaniya raqami</div>
              <div class="company_info_bottom_top_title">
                kompaniyani bloklash
              </div>
            </div>
            <div class="company_info_bottom_companys">
              <div class="company" v-for="c in suplier?.content" :key="c.id">
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
                  @click="suplierIsBlocked(c)"
                >
                  <svg
                    width="25"
                    height="25"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#52438F"
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
                  @click="suplierUnBlocked(c)"
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
              v-for="p in suplier?.totalPages"
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
const baseUrl = useRuntimeConfig().public.baseUrl;
const filterModal = ref(false);
const lock = ref(false);
const suplier = ref(null);
const page = ref(0);
async function suplierApi() {
  const data = await $fetch(baseUrl + "/supplier", {
    method: "GET",
    params: {
      page: page.value,
      size: 10  ,
    },
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  });
  suplier.value = data;
}
suplierApi();
function pageDown() {
  if (page.value !== 0) {
    page.value--;
    suplierApi();
  }
}
function pageUpDown() {
  if (suplier.value.totalPages - 1 > page.value) {
    page.value++;
    suplierApi();
  }
}
function pageApi(p) {
  page.value = p - 1;
  suplierApi();
}
async function suplierIsBlocked(e) {
  const data = await $fetch(baseUrl + "/supplier", {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
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

  suplierApi();
}
async function suplierUnBlocked(e) {
  const data = await $fetch(baseUrl + "/supplier", {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
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
  suplierApi();
}
</script>
  
  <style lang="scss" scoped>
</style>