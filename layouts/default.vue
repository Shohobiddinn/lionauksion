<template>
  <div>
    <bgmodal v-if="bgmodol" />
    <whiteModal @click="modalFalse" v-if="traModal" />
    <nav>
      <div class="container">
        <div class="menu">
          <div class="menu_popup" @click="content">
            <span></span><span></span><span></span>
          </div>
          <div class="menu_logo">
            <NuxtLink :to="localePath('/')">
              <img src="@/assets/image/logo.png" alt="" />
            </NuxtLink>
          </div>
          <div class="menu_logo2">
            <NuxtLink :to="localePath('/')">
              <img src="../assets/image/squarelogo.svg" alt="" />
            </NuxtLink>
          </div>
          <div class="menu_content" :class="{ active: contentModal }">
            <div class="menu_content_title" v-if="productPage">
              <NuxtLink
                class="menu_content_title_link"
                @click="contentModal = false"
                :to="localePath('/')"
              >
                <div class="menu_content_title_link_icon">
                  <svg
                    width="30"
                    height="30"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M248 0H208c-26.5 0-48 21.5-48 48V160c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48H328V80c0 8.8-7.2 16-16 16H264c-8.8 0-16-7.2-16-16V0zM64 256c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H184v80c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V256H64zM352 512H512c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H472v80c0 8.8-7.2 16-16 16H408c-8.8 0-16-7.2-16-16V256H352c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2V464c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512z"
                    />
                  </svg>
                </div>
                <div class="menu_content_title_link_text">
                  {{ $t("products") }}
                </div>
              </NuxtLink>
            </div>
            <div class="menu_content_title" v-if="companyPage">
              <NuxtLink
                class="menu_content_title_link"
                @click="contentModal = false"
                :to="localePath('/company')"
              >
                <div class="menu_content_title_link_icon">
                  <svg
                    width="30"
                    height="30"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 384 512"
                  >
                    <path
                      d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                    />
                  </svg>
                </div>
                <div class="menu_content_title_link_text">
                  {{ $t("Companies") }}
                </div>
              </NuxtLink>
            </div>
            <div class="menu_content_title" v-if="currensyPage">
              <NuxtLink
                class="menu_content_title_link"
                @click="contentModal = false"
                :to="localePath('/currensy')"
              >
                <div class="menu_content_title_link_icon">
                  <svg
                    width="30"
                    height="30"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"
                    />
                  </svg>
                </div>
                <div class="menu_content_title_link_text">
                  {{ $t("Currencies") }}
                </div>
              </NuxtLink>
            </div>
            <div class="menu_content_title" v-if="currensyTypePage">
              <NuxtLink
                class="menu_content_title_link"
                @click="contentModal = false"
                :to="localePath('/currensyType')"
              >
                <div class="menu_content_title_link_icon">
                  <svg
                    width="30"
                    height="30"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"
                    />
                  </svg>
                </div>
                <div class="menu_content_title_link_text">
                  {{ $t("TypeOfCurrency") }}
                </div>
              </NuxtLink>
            </div>
            <div class="menu_content_title" v-if="supplierPage">
              <NuxtLink
                class="menu_content_title_link"
                @click="contentModal = false"
                :to="localePath('/supplier')"
              >
                <div class="menu_content_title_link_icon">
                  <svg
                    width="30"
                    height="30"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      d="M32 96c0-35.3 28.7-64 64-64H320c23.7 0 44.4 12.9 55.4 32h51.8c25.3 0 48.2 14.9 58.5 38l52.8 118.8c.5 1.1 .9 2.1 1.3 3.2H544c35.3 0 64 28.7 64 64v32c17.7 0 32 14.3 32 32s-14.3 32-32 32H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V288c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32V96zM384 224h85.9l-42.7-96H384v96zM160 432a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"
                    />
                  </svg>
                </div>
                <div class="menu_content_title_link_text">
                  {{ $t("Suppliers") }}
                </div>
              </NuxtLink>
            </div>
            <div class="menu_content_title" v-if="productAddPage">
              <NuxtLink
                class="menu_content_title_link"
                @click="contentModal = false"
                :to="localePath('/product-prototype')"
              >
                <div class="menu_content_title_link_icon">
                  <svg
                    width="30"
                    height="30"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      d="M32 96c0-35.3 28.7-64 64-64H320c23.7 0 44.4 12.9 55.4 32h51.8c25.3 0 48.2 14.9 58.5 38l52.8 118.8c.5 1.1 .9 2.1 1.3 3.2H544c35.3 0 64 28.7 64 64v32c17.7 0 32 14.3 32 32s-14.3 32-32 32H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V288c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32V96zM384 224h85.9l-42.7-96H384v96zM160 432a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"
                    />
                  </svg>
                </div>
                <div class="menu_content_title_link_text">
                  {{ $t("productProtatip") }}
                </div>
              </NuxtLink>
            </div>
            <div class="menu_content_title" v-if="userPage">
              <NuxtLink
                class="menu_content_title_link"
                @click="contentModal = false"
                :to="localePath('/users')"
              >
                <div class="menu_content_title_link_icon">
                  <svg
                    width="30"
                    height="30"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
                    />
                  </svg>
                </div>
                <div class="menu_content_title_link_text">
                  {{ $t("users") }}
                </div>
              </NuxtLink>
            </div>
            <div class="menu_content_title" v-if="orderSuplierPage">
              <NuxtLink
                class="menu_content_title_link"
                @click="contentModal = false"
                :to="localePath('/orderSuplier')"
              >
                <div class="menu_content_title_link_icon">
                  <svg
                    width="30"
                    height="30"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z"
                    />
                  </svg>
                </div>
                <div class="menu_content_title_link_text">
                  {{ $t("order") }}
                </div>
              </NuxtLink>
            </div>
            <div class="menu_content_title" v-if="orderPage">
              <NuxtLink
                class="menu_content_title_link"
                @click="contentModal = false"
                :to="localePath('/orderStack')"
              >
                <div class="menu_content_title_link_icon">
                  <svg
                    width="30"
                    height="30"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z"
                    />
                  </svg>
                </div>
                <div class="menu_content_title_link_text">
                  {{ $t("order") }}
                </div>
              </NuxtLink>
            </div>
            <div class="menu_content_title" v-if="cartPage">
              <NuxtLink
                class="menu_content_title_link"
                @click="contentModal = false"
                :to="localePath('/cart')"
              >
                <div class="menu_content_title_link_icon">
                  <svg
                    width="30"
                    height="30"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                    />
                  </svg>
                </div>
                <div class="menu_content_title_link_text">
                  {{ $t("cart") }}
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="div"></div>
        <div class="content">
          <div class="language" :class="{ active: langModal }">
            <div
              class="language_option"
              @click="(langModal = !langModal), (traModal = !traModal)"
            >
              <div class="language_option_title">
                {{ locale }}
              </div>
              <div class="language_option_icon">
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
            <div class="language_content">
              <NuxtLink
                class="language_content_title"
                v-for="l in locales"
                :key="l?.id"
                :to="switchLocalePath(l?.code)"
                @click="
                  delLang($event), (langModal = false), (traModal = false)
                "
              >
                {{ l?.code }}
              </NuxtLink>
            </div>
          </div>
          <div class="profil" :class="{ active: profilModal }">
            <div
              class="profil_option"
              @click="(profilModal = !profilModal), (traModal = !traModal)"
            >
              <div class="profil_option_icon">
                <svg
                  width="25"
                  height="25"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
                  />
                </svg>
              </div>
            </div>
            <div class="profil_content">
              <div class="profil_content_title">{{ profilName }}</div>
              <div class="profil_content_title btn" @click="pasEditModal()">
                {{ $t("passwordEditor") }}
              </div>
            </div>
          </div>
          <div class="currensy_modal" v-if="passwordModal">
            <div
              class="currensy_modal_close_btn"
              @click="(bgmodol = false), (passwordModal = false)"
            ></div>
            <div class="currensy_modal_info">
              <label class="currensy_modal_info_label" for="cur-1">
                {{ $t("oldPassword") }}
              </label>
              <input
                class="currensy_modal_info_input"
                v-model="oldPassword"
                type="text"
                id="cur-1"
                @keyup.enter="editPassword"
              />
            </div>
            <div class="currensy_modal_info">
              <label for=""></label>
            </div>
            <div class="currensy_modal_info">
              <label class="currensy_modal_info_label" for="cur-1">
                {{ $t("newPassword") }}
              </label>
              <input
                class="currensy_modal_info_input"
                v-model="newPassword"
                type="text"
                id="cur-1"
                @keyup.enter="editPassword"
              />
            </div>
            <div class="currensy_modal_send" @click="editPassword">
              <div class="currensy_modal_send_btn">{{ $t("Send") }}</div>
            </div>
          </div>
          <div class="log_out" @click="logout">
            <div class="log_out_icon">
              <svg
                width="25"
                height="25"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"
                />
              </svg>
            </div>
            <div class="log_out_title">{{ $t("exit") }}</div>
          </div>
        </div>
      </div>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
import { useToast } from "vue-toastification";
const toast = useToast();
const store = useStore();
function content() {
  contentModal.value = !contentModal.value;
  traModal.value = !traModal.value;
}
function modalFalse() {
  traModal.value = false;
  langModal.value = false;
  contentModal.value = false;
  profilModal.value = false;
}
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
const role = localStorage.getItem("role");
const baseUrl = useRuntimeConfig().public.baseUrl;
const i18n = useI18n();
const router = useRouter();
const contentModal = ref(false);
const productPage = ref(false);
const companyPage = ref(false);
const orderPage = ref(false);
const currensyPage = ref(false);
const currensyTypePage = ref(false);
const supplierPage = ref(false);
const productAddPage = ref(false);
const cartPage = ref(false);
const orderSuplierPage = ref(false);
const userPage = ref(false);
const langModal = ref(false);
const passwordModal = ref(false);
const bgmodol = ref(false);
const profilModal = ref(false);
const oldPassword = ref(null);
const newPassword = ref(null);
const traModal = ref(false);
const profilName = ref(localStorage.getItem("fullName"));
function pasEditModal() {
  bgmodol.value = true;
  profilModal.value = false;
  traModal.value = false;
  passwordModal.value = true;
}
function logout() {
  localStorage.removeItem("userToken");
  localStorage.removeItem("role");
  localStorage.removeItem("userSupplierId");
  localStorage.removeItem("userCompanyId");
  localStorage.removeItem("userRefreshToken");
  localStorage.removeItem("userId");
  localStorage.removeItem("fullName");
  router.push(localePath("/login"));
}
function delLang(e) {
  document.querySelectorAll(".language_content_title").forEach((item) => {
    if (e.target == item) {
      e.target.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
}
async function editPassword() {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + "/change-password", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userRefreshToken"),
        "Accept-Language": locale.value,
      },
      params: {
        oldPassword: oldPassword.value,
        newPassword: newPassword.value,
      },
    });
    if (data) {
      store.loader = false;
      router.push("/login");
      bgmodol.value = false;
      passwordModal.value = false;
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
onMounted(() => {
  if (role == "ROLE_ADMIN") {
    productPage.value = true;
    companyPage.value = true;
    currensyPage.value = true;
    currensyTypePage.value = true;
    supplierPage.value = false;
    productAddPage.value = false;
    orderPage.value = false;
    cartPage.value = false;
    orderSuplierPage.value = false;
  }
  if (role == "ROLE_SUPPLIER_ADMIN") {
    productPage.value = true;
    companyPage.value = false;
    currensyPage.value = true;
    currensyTypePage.value = false;
    supplierPage.value = false;
    productAddPage.value = false;
    userPage.value = true;
    orderPage.value = false;
    cartPage.value = false;
    orderSuplierPage.value = true;
  }
  if (role == "ROLE_COMPANY_ADMIN") {
    productPage.value = true;
    companyPage.value = false;
    currensyPage.value = false;
    currensyTypePage.value = false;
    supplierPage.value = true;
    productAddPage.value = true;
    userPage.value = true;
    orderPage.value = true;
    cartPage.value = true;
    orderSuplierPage.value = false;
  }
  if (role == "ROLE_COMPANY_MANAGER") {
    productPage.value = true;
    companyPage.value = false;
    currensyPage.value = false;
    currensyTypePage.value = false;
    supplierPage.value = true;
    productAddPage.value = true;
    orderPage.value = true;
    cartPage.value = true;
    orderSuplierPage.value = false;
  }
  // else {
  //   productPage.value = true;
  //   companyPage.value = true;
  //   currensyPage.value = true;
  //   currensyTypePage.value = true;
  //   supplierPage.value = true;
  //   productAddPage.value = true;
  //   orderPage.value = true;
  //   cartPage.value = true;
  //   orderSuplierPage.value = true;
  // }
  document.querySelectorAll(".language_content_title").forEach((item) => {
    if (locale.value === item.textContent) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
});
</script>

<style lang="scss" scoped>
</style>