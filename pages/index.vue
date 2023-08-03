<template>
  <div>
    <div class="banner">
      <div class="container">
        <div class="banner_top">
          <div class="search">
            <div class="form">
              <div class="form_icon">
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3037 28.6074C6.41923 28.6074 0 22.1882 0 14.3037C0 6.41923 6.41923 0 14.3037 0C22.1882 0 28.6074 6.41923 28.6074 14.3037C28.6074 22.1882 22.1882 28.6074 14.3037 28.6074ZM14.3037 2.09323C7.56353 2.09323 2.09323 7.57748 2.09323 14.3037C2.09323 21.03 7.56353 26.5142 14.3037 26.5142C21.0439 26.5142 26.5142 21.03 26.5142 14.3037C26.5142 7.57748 21.0439 2.09323 14.3037 2.09323Z"
                    fill="#292D32"
                  />
                  <path
                    d="M28.9569 30.0029C28.6918 30.0029 28.4266 29.9052 28.2173 29.6959L25.4263 26.9049C25.0216 26.5002 25.0216 25.8304 25.4263 25.4257C25.831 25.021 26.5008 25.021 26.9055 25.4257L29.6965 28.2167C30.1012 28.6213 30.1012 29.2912 29.6965 29.6959C29.4872 29.9052 29.222 30.0029 28.9569 30.0029Z"
                    fill="#292D32"
                  />
                </svg>
              </div>
              <input type="text" placeholder="Qidiruv.." />
            </div>
          </div>
          <div class="profil">
            <div class="profil_notice">
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="white"
              >
                <path
                  d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
                />
              </svg>
            </div>
            <div class="profil_info">
              <div class="profil_info_image">
                <img src="../assets/image/user-solid.svg" alt="" />
              </div>
              <div class="profil_info_content">
                <div class="profil_info_content_name">luke asote</div>
                <div class="profil_info_content_businns">
                  admin for associations
                </div>
              </div>
            </div>
            <div class="profil_icon">
              <svg
                width="17"
                height="10"
                viewBox="0 0 17 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 10L0.272758 0.25L16.7272 0.25L8.5 10Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="informotion">
      <div class="container">
        <div class="info">
          <div class="info_top">
            <div class="categorys">
              <div class="categorys_content">
                <div class="categorys_content_title">Qo'shish</div>
                <div class="categorys_content_title">azo qo'shish</div>
                <div class="categorys_content_title">eksport (exel)</div>
              </div>
              <div class="categorys_filter">
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
                <div
                  class="categorys_filter_content"
                  :class="{ active: filterModal }"
                >
                  <div class="categorys_filter_content_title">
                    <input id="filter-1" name="filter" type="checkbox" />

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
                    @click="filterModal = false"
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
              <div class="info_bottom_page_title com">kompaniya nomi</div>
              <div class="info_bottom_page_title phone">raqami</div>
              <div class="info_bottom_page_title product">mahsuloti</div>
              <div class="info_bottom_page_title status">holati</div>
              <div class="info_bottom_page_title delivery">yetkazib berish</div>
              <div class="info_bottom_page_title price">narxi</div>
              <div class="info_bottom_page_title nds">qqs</div>
              <div class="info_bottom_page_title edit">tahrirlash</div>
            </div>
            <div class="info_bottom_deliverys">
              <div class="delivery" v-for="c in 20" :key="c">
                <NuxtLink class="delivery_link" to="/product">
                  <div class="delivery_link_logo item">
                    <svg
                      width="39"
                      height="32"
                      viewBox="0 0 39 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        width="38.8819"
                        height="31.5149"
                        fill="url(#pattern0)"
                      />
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlink:href="#image0_279_402"
                            transform="scale(0.00813008 0.00952381)"
                          />
                        </pattern>
                        <image
                          id="image0_279_402"
                          width="123"
                          height="105"
                          xlink:href="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                  </div>
                  <div class="delivery_link_name item">Lion Print</div>
                  <div class="delivery_link_phone item">+998942836006</div>
                  <div class="delivery_link_product item">paper</div>
                  <div class="delivery_link_status item">active</div>
                  <div class="delivery_link_delivery item">yes</div>
                  <div class="delivery_link_price item">500$</div>
                  <div class="delivery_link_nds item">yes</div>
                  <div class="delivery_link_edit item">
                    <NuxtLink class="delivery_edit_link">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.2601 3.60022L5.0501 12.2902C4.7401 12.6202 4.4401 13.2702 4.3801 13.7202L4.0101 16.9602C3.8801 18.1302 4.7201 18.9302 5.8801 18.7302L9.1001 18.1802C9.5501 18.1002 10.1801 17.7702 10.4901 17.4302L18.7001 8.74022C20.1201 7.24022 20.7601 5.53022 18.5501 3.44022C16.3501 1.37022 14.6801 2.10022 13.2601 3.60022Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.89 5.0498C12.0996 6.39066 12.7486 7.62394 13.735 8.55605C14.7214 9.48816 15.9894 10.0663 17.34 10.1998M3 21.9998H21"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </NuxtLink>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- ,
    "postinstall": "nuxt prepare netlify-lambda"  -->
<script setup>
const filterModal = ref(false);

</script>

<style lang="scss" scoped>
</style>