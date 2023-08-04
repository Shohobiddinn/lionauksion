<template>
  <div>
    <div class="bg"></div>

    <div class="add_page">
      <div class="container">
        <div class="add_info">
          <div class="product">
            <div class="product_name">Mahsulot nomi</div>

            <input
              class="product_input"
              type="text"
              placeholder="mahsulot nomini kiriting"
            />
            <div class="product_category">
              <div class="product_category_option">Mahsulot toifasi</div>
              <div class="product_category_modal">
                <div class="close_btn">
                  <div class="btn"></div>
                </div>
                <div class="product_category_modal_title">Toifani tanlang</div>
                <div class="categorys">
                  <div
                    id="cat-1"
                    class="categorys_category"
                    @click="activeFun($event)"
                  >
                    <div class="categorys_category_title">
                      <div class="categorys_category_title_text">toifa</div>
                      <div class="categorys_category_title_icon">
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
                    <div class="categorys_category_content">
                      <div class="categorys_category_content_title">
                        toifa 1
                      </div>
                      <div class="categorys_category_content_title">
                        toifa 2
                      </div>
                      <div class="categorys_category_content_title">
                        toifa 3
                      </div>
                    </div>
                  </div>
                  <div
                    id="cat-2"
                    class="categorys_category"
                    @click="activeFun($event)"
                  >
                    <div class="categorys_category_title">
                      <div class="categorys_category_title_text">
                        categoriya
                      </div>
                      <div class="categorys_category_title_icon">
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
                    <div class="categorys_category_content">
                      <div class="categorys_category_content_title">
                        categoriya 1
                      </div>
                      <div class="categorys_category_content_title">
                        categoriya 2
                      </div>
                      <div class="categorys_category_content_title">
                        categoriya 3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
function activeFun(e) {
  document.querySelectorAll(".categorys .categorys_category").forEach((el) => {
    if (e.target.parentElement.id == el.id) {
      e.target.parentElement.classList.toggle("active");
    } else {
      e.target.parentElement.classList.remove("active");
    }
  });
  // console.log(e.target.parentElement.id);
}
</script>

  <style lang="scss" scoped>
</style>