<template>
  <div>
    <bgmodal v-if="bgModal" />
    <div class="product_prototype_page">
      <div class="container">
        <div class="protatype">
          <div class="protatype_content">
            <div class="protatype_content_add">
              <div
                class="protatype_content_add_content"
                @click="(contentModal = true), (bgModal = true)"
              >
                <div class="protatype_content_add_content_icon"></div>
                <div class="protatype_content_add_content_title">
                  tovar kategorya qo'shish
                </div>
              </div>
              <div
                class="protatype_content_add_modal"
                :class="{ active: contentModal }"
              >
                <div
                  class="close_btn"
                  @click="(contentModal = false), (bgModal = false)"
                ></div>
                <div class="info">
                  <label for="c-1">kategoriya nomini kiriting UZ</label>
                  <input
                    type="text"
                    id="c-1"
                    placeholder="kategoriya nomini kiriting UZ"
                    v-model="fatherAddUz"
                  />
                </div>
                <div class="info">
                  <label for="c-2">kategoriya nomini kiriting RU</label>
                  <input
                    type="text"
                    id="c-2"
                    placeholder="kategoriya nomini kiriting RU"
                    v-model="fatherAddRu"
                  />
                </div>
                <div class="add_btn" @click="categoryFatherAddApi">
                  yuborish
                </div>
              </div>
            </div>
            <div
              class="protatype_content_title"
              v-for="p in categoryFather?.content"
              :key="p"
              @click="categoryChildApi(p?.id)"
            >
              <div class="protatype_content_title_name">{{ p?.name }}</div>
              <div class="protatype_content_title_icon">
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
          </div>
          <div class="protatype_title" v-if="categoryChild">
            <div class="protatype_title_add">
              <div
                class="protatype_title_add_content"
                @click="(titleModal = true), (bgModal = true)"
              >
                <div class="protatype_title_add_content_icon"></div>
                <div class="protatype_title_add_content_title">
                  tovar kategorya qo'shish
                </div>
              </div>
              <div
                class="protatype_title_add_modal"
                :class="{ active: titleModal }"
              >
                <div
                  class="close_btn"
                  @click="(titleModal = false), (bgModal = false)"
                ></div>
                <div class="info">
                  <label for="c-1">kategoriya nomini kiriting UZ</label>
                  <input
                    type="text"
                    id="c-1"
                    placeholder="kategoriya nomini kiriting UZ"
                    v-model="childAddUz"
                  />
                </div>
                <div class="info">
                  <label for="c-2">kategoriya nomini kiriting RU</label>
                  <input
                    type="text"
                    id="c-2"
                    placeholder="kategoriya nomini kiriting RU"
                    v-model="childAddRu"
                  />
                </div>
                <div class="add_btn" @click="categoryChildAddApi">yuborish</div>
              </div>
            </div>
            <div
              class="protatype_title_content"
              v-for="p in categoryChild"
              :key="p"
            >
              <div class="protatype_title_content_name">{{ p?.name }}</div>
              <!-- <div class="protatype_title_content_icon">
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
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const bgModal = ref(false);
const baseUrl = useRuntimeConfig().public.baseUrl;
const contentModal = ref(false);
const titleModal = ref(false);
const categoryFather = ref(null);
async function categoryFatherApi() {
  const data = await $fetch(baseUrl + "/category", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
    params: {
      page: 0,
      size: 10,
    },
  });
  categoryFather.value = data;
}
categoryFatherApi();
const categoryChild = ref(null);
const categoryId = ref(null);
async function categoryChildApi(e) {
  const data = await $fetch(baseUrl + "/category-detail/all", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
    params: {
      categoryId: e,
    },
  });
  categoryChild.value = data;
  categoryId.value = e;
}
const fatherAddUz = ref("");
const fatherAddRu = ref("");
async function categoryFatherAddApi() {
  const data = await $fetch(baseUrl + "/category", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
    body: JSON.stringify({
      nameUz: fatherAddUz.value,
      nameRu: fatherAddRu.value,
    }),
  });
}
const childAddUz = ref("");
const childAddRu = ref("");
async function categoryChildAddApi() {
  const data = await $fetch(baseUrl + "/category-detail", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
    body: JSON.stringify({
      nameUz: "Test Detail Uz 2",
      nameRu: "Test Detail Ru 2",
      categoryId: categoryId.value,
    }),
  });
  console.log(data);
}
</script>

<style lang="scss" scoped>
</style>