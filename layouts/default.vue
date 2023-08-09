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
            <div class="menu_content_title">
              <NuxtLink class="menu_content_title_link" to="/">
                <div class="menu_content_title_link_icon">
                  <svg width="30" height="30" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M248 0H208c-26.5 0-48 21.5-48 48V160c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48H328V80c0 8.8-7.2 16-16 16H264c-8.8 0-16-7.2-16-16V0zM64 256c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H184v80c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V256H64zM352 512H512c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H472v80c0 8.8-7.2 16-16 16H408c-8.8 0-16-7.2-16-16V256H352c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2V464c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512z"/></svg>
                </div>
                <div class="menu_content_title_link_text">mahsulotlar</div>
              </NuxtLink>
            </div>
            <div class="menu_content_title">
              <NuxtLink class="menu_content_title_link" to="/company">
                <div class="menu_content_title_link_icon">
                  <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 384 512"><path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/></svg>
                </div>
                <div class="menu_content_title_link_text">kompaniyalar</div>
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
            </div>
          </div>
        </div>
      </div>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>