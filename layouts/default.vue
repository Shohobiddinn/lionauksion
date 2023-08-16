<template>
  <div>
    <nav>
      <div class="container">
        <div class="menu">
          <div class="menu_logo">
            <NuxtLink to="/">
              <img src="@/assets/image/logo.png" alt="" />
            </NuxtLink>
          </div>
          <div class="menu_content">
            <div class="menu_content_title" v-if="productPage">
              <NuxtLink class="menu_content_title_link" to="/">
                <div class="menu_content_title_link_icon">
                  <svg width="30" height="30" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M248 0H208c-26.5 0-48 21.5-48 48V160c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48H328V80c0 8.8-7.2 16-16 16H264c-8.8 0-16-7.2-16-16V0zM64 256c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H184v80c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V256H64zM352 512H512c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H472v80c0 8.8-7.2 16-16 16H408c-8.8 0-16-7.2-16-16V256H352c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2V464c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512z"/></svg>
                </div>
                <div class="menu_content_title_link_text">mahsulotlar</div>
              </NuxtLink>
            </div>
            <div class="menu_content_title" v-if="companyPage">
              <NuxtLink class="menu_content_title_link" to="/company">
                <div class="menu_content_title_link_icon">
                  <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 384 512"><path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/></svg>
                </div>
                <div class="menu_content_title_link_text">kompaniyalar</div>
              </NuxtLink>
            </div>
            <div class="menu_content_title" v-if="currensyPage">
              <NuxtLink class="menu_content_title_link" to="/currensy">
                <div class="menu_content_title_link_icon">
                  <svg width="30" height="30" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"/></svg>
                </div>
                <div class="menu_content_title_link_text">valyutalar</div>
              </NuxtLink>
            </div>
            <div class="menu_content_title" v-if="currensyTypePage">
              <NuxtLink class="menu_content_title_link" to="/currensyType">
                <div class="menu_content_title_link_icon">
                  <svg width="30" height="30" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"/></svg>
                </div>
                <div class="menu_content_title_link_text">valyuta turlari</div>
              </NuxtLink>
            </div>
            <div class="menu_content_title" v-if="supplierPage">
              <NuxtLink class="menu_content_title_link" to="/supplier">
                <div class="menu_content_title_link_icon">
                  <svg width="30" height="30" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M32 96c0-35.3 28.7-64 64-64H320c23.7 0 44.4 12.9 55.4 32h51.8c25.3 0 48.2 14.9 58.5 38l52.8 118.8c.5 1.1 .9 2.1 1.3 3.2H544c35.3 0 64 28.7 64 64v32c17.7 0 32 14.3 32 32s-14.3 32-32 32H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V288c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32V96zM384 224h85.9l-42.7-96H384v96zM160 432a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg>
                </div>
                <div class="menu_content_title_link_text">Taminotchilar</div>
              </NuxtLink>
            </div>
            <div class="menu_content_title" v-if="productAddPage">
              <NuxtLink class="menu_content_title_link" to="/product-prototype">
                <div class="menu_content_title_link_icon">
                  <svg width="30" height="30" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M32 96c0-35.3 28.7-64 64-64H320c23.7 0 44.4 12.9 55.4 32h51.8c25.3 0 48.2 14.9 58.5 38l52.8 118.8c.5 1.1 .9 2.1 1.3 3.2H544c35.3 0 64 28.7 64 64v32c17.7 0 32 14.3 32 32s-14.3 32-32 32H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V288c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32V96zM384 224h85.9l-42.7-96H384v96zM160 432a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg>
                </div>
                <div class="menu_content_title_link_text">tovar prototiplari</div>
              </NuxtLink>
            </div>
            <!-- <div class="menu_content_title">
              <NuxtLink class="menu_content_title_link" to="/">
                <div class="menu_content_title_link_icon">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.5 8.125H20M7.5 8.125H2.5M27.5 21.875H22.5M10 21.875H2.5M12.5 12.5C13.0745 12.5 13.6434 12.3868 14.1742 12.167C14.705 11.9471 15.1873 11.6248 15.5936 11.2186C15.9998 10.8123 16.3221 10.33 16.542 9.79924C16.7618 9.26844 16.875 8.69953 16.875 8.125C16.875 7.55047 16.7618 6.98156 16.542 6.45076C16.3221 5.91996 15.9998 5.43766 15.5936 5.03141C15.1873 4.62515 14.705 4.30289 14.1742 4.08303C13.6434 3.86316 13.0745 3.75 12.5 3.75C11.3397 3.75 10.2269 4.21094 9.40641 5.03141C8.58594 5.85188 8.125 6.96468 8.125 8.125C8.125 9.28532 8.58594 10.3981 9.40641 11.2186C10.2269 12.0391 11.3397 12.5 12.5 12.5ZM17.5 26.25C18.6603 26.25 19.7731 25.7891 20.5936 24.9686C21.4141 24.1481 21.875 23.0353 21.875 21.875C21.875 20.7147 21.4141 19.6019 20.5936 18.7814C19.7731 17.9609 18.6603 17.5 17.5 17.5C16.3397 17.5 15.2269 17.9609 14.4064 18.7814C13.5859 19.6019 13.125 20.7147 13.125 21.875C13.125 23.0353 13.5859 24.1481 14.4064 24.9686C15.2269 25.7891 16.3397 26.25 17.5 26.25Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="menu_content_title_link_text">Control panel</div>
              </NuxtLink>
            </div>
            <div class="menu_content_title">
              <NuxtLink class="menu_content_title_link" to="/">
                <div class="menu_content_title_link_icon">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 8.75H20M11.25 13.75H18.75M8.4125 24.625C9.4375 23.525 11 23.6125 11.9 24.8125L13.1625 26.5C14.175 27.8375 15.8125 27.8375 16.825 26.5L18.0875 24.8125C18.9875 23.6125 20.55 23.525 21.575 24.625C23.8 27 25.6125 26.2125 25.6125 22.8875V8.8C25.625 3.7625 24.45 2.5 19.725 2.5H10.275C5.55 2.5 4.375 3.7625 4.375 8.8V22.875C4.375 26.2125 6.2 26.9875 8.4125 24.625Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="menu_content_title_link_text">report</div>
              </NuxtLink>
            </div> -->
          </div>
        </div>
      </div>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup>
const role = localStorage.getItem("role");
const productPage = ref(false);
const companyPage  = ref(false);
const currensyPage = ref(false);
const currensyTypePage = ref(false);
const supplierPage = ref(false);
const productAddPage = ref(false);
onMounted(()=>{
  if(role == "ROLE_ADMIN"){
    productPage.value = true;
    companyPage.value = true;
    currensyPage.value = true;
    currensyTypePage.value = true;
    supplierPage.value = true;
    productAddPage.value = true;
  }
  if(role == "ROLE_SUPPLIER_ADMIN"){
    productPage.value = true;
    companyPage.value = false;
    currensyPage.value = true;
    currensyTypePage.value = false;
    supplierPage.value = false;
    productAddPage.value = false;
  }
  if(role == "ROLE_COMPANY_ADMIN"){
    productPage.value = true;
    companyPage.value = false;
    currensyPage.value = true;
    currensyTypePage.value = false;
    supplierPage.value = true;
    productAddPage.value = true;
  };
  if(role == "ROLE_COMPANY_MANAGER"){
    productPage.value = true;
    companyPage.value = false;
    currensyPage.value = true;
    currensyTypePage.value = false;
    supplierPage.value = true;
    productAddPage.value = true;
  };
})
function tekshiruv(){
  console.log(role);
}
</script>

<style lang="scss" scoped>
</style>