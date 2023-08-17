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
                  Prototip qo'shish
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
                  <label for="c-1">Prototip kiriting UZ</label>
                  <input type="text" id="c-1" v-model="fatherAddUz" />
                </div>
                <div class="info">
                  <label for="c-2">Prototip kiriting RU</label>
                  <input type="text" id="c-2" v-model="fatherAddRu" />
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
              @click="categoryChildApi(p?.id, $event)"
              ref="protatype"
            >
              <div class="protatype_content_title_name">{{ p?.name }}</div>
              <div
                class="protatype_content_title_icon delete"
                @click="fatherProtitipDelete(p?.id)"
              >
                <svg
                  width="10"
                  height="10"
                  fill="red"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                  />
                </svg>
              </div>
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
                  hususiyat qo'shish
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
                  <label for="c-1">hususiyatni kiriting UZ</label>
                  <input type="text" id="c-1" v-model="childAddUz" />
                </div>
                <div class="info">
                  <label for="c-2">hususiyatni kiriting RU</label>
                  <input type="text" id="c-2" v-model="childAddRu" />
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
              <div class="protatype_title_content_icon delete" @click="childProtitipDelete(p?.id)">
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
    </div>
  </div>
</template>

<script setup>
const bgModal = ref(false);
const baseUrl = useRuntimeConfig().public.baseUrl;
const { locale } = useI18n();
const contentModal = ref(false);
const titleModal = ref(false);
const categoryFather = ref(null);
async function categoryFatherApi() {
  const data = await $fetch(baseUrl + "/category", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
      "Accept-Language": locale.value,
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
const protatype = ref();

async function categoryChildApi(e, event) {
  protatype.value.forEach((el) => {
    if (el == event.target) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
  const data = await $fetch(baseUrl + "/category-detail/all", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
      "Accept-Language": locale.value,
    },
    params: {
      categoryId: e,
    },
  });
  categoryChild.value = data;
  categoryId.value = e;
  protatype.value.forEach((el) => {
    if (el == event.target) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}
const fatherAddUz = ref("");
const fatherAddRu = ref("");
async function categoryFatherAddApi() {
  const data = await $fetch(baseUrl + "/category", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
      "Accept-Language": locale.value,
    },
    body: JSON.stringify({
      nameUz: fatherAddUz.value,
      nameRu: fatherAddRu.value,
    }),
  });
  if (data?.message == "ok") {
    bgModal.value = false;
    contentModal.value = false;
    categoryFatherApi();
  } else {
  }
}
const childAddUz = ref("");
const childAddRu = ref("");
async function categoryChildAddApi() {
  const data = await $fetch(baseUrl + "/category-detail", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
      "Accept-Language": locale.value,
    },
    body: JSON.stringify({
      nameUz: childAddUz.value,
      nameRu: childAddRu.value,
      categoryId: categoryId.value,
    }),
  });
  if (data?.message == "ok") {
    bgModal.value = false;
    titleModal.value = false;
    categoryFatherApi();
  } else {
  }
}
// function tekshiruv() {
//   console.log(locale.value);
// }
// tekshiruv();
async function fatherProtitipDelete(p) {
  const data = await $fetch(baseUrl + `/category/${p}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  });
  categoryFatherApi();
}
async function childProtitipDelete(p) {
  const data = await $fetch(baseUrl + `/category-detail/${p}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  });
  console.log(p);
}
categoryFatherApi();
</script>

<style lang="scss" scoped>
</style>