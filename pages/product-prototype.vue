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
                  {{ $t("protatypeAdd") }}
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
                  <label for="c-1">{{ $t("protatypeTitle1") }}</label>
                  <input type="text" id="c-1" v-model="fatherAddUz" />
                </div>
                <div class="info">
                  <label for="c-2">{{ $t("protatypeTitle2") }}</label>
                  <input type="text" id="c-2" v-model="fatherAddRu" />
                </div>
                <div class="add_btn" @click="categoryFatherAddApi">
       {{ $t("Send") }}
                </div>
              </div>
              <div
                class="protatype_content_add_modal edit"
                :class="{ active: contentModalEdit }"
              >
                <div
                  class="close_btn"
                  @click="(contentModalEdit = false), (bgModal = false)"
                ></div>
                <div class="info">
                  <label for="c-1">{{ $t("protatypeTitle1") }}</label>
                  <input type="text" id="c-1" v-model="fatherAddUz" />
                </div>
                <div class="info">
                  <label for="c-2">{{ $t("protatypeTitle2") }}</label>
                  <input type="text" id="c-2" v-model="fatherAddRu" />
                </div>
                <div class="add_btn" @click="categoryFatherEditApi">
             {{ $t("Send") }}
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
                class="protatype_content_title_icon edit"
                @click="protatypeFatherEdit(p?.id)"
              >
                <svg
                  width="10"
                  height="10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="black"
                >
                  <path
                    d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"
                  />
                </svg>
              </div>
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
               {{ $t("particularityAdd") }}
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
                  <label for="c-1">{{ $t("particularityTitle1") }}</label>
                  <input type="text" id="c-1" v-model="childAddUz" />
                </div>
                <div class="info">
                  <label for="c-2">{{ $t("particularityTitle2") }}</label>
                  <input type="text" id="c-2" v-model="childAddRu" />
                </div>
                <div class="add_btn" @click="categoryChildAddApi">{{ $t("Send") }}</div>
              </div>
              <div
                class="protatype_title_add_modal edit"
                :class="{ active: titleEditModal }"
              >
                <div
                  class="close_btn"
                  @click="(titleEditModal = false), (bgModal = false)"
                ></div>
                <div class="info">
                  <label for="c-1">{{ $t("particularityTitle1") }}</label>
                  <input type="text" id="c-1" v-model="childAddUz" />
                </div>
                <div class="info">
                  <label for="c-2">{{ $t("particularityTitle3") }}</label>
                  <input type="text" id="c-2" v-model="childAddRu" />
                </div>
                <div class="add_btn" @click="categoryChildEditApi">
                  {{ $t("Send") }}
                </div>
              </div>
            </div>
            <div
              class="protatype_title_content"
              v-for="p in categoryChild"
              :key="p"
            >
              <div class="protatype_title_content_name">{{ p?.name }}</div>
              <div
                class="protatype_title_content_icon edit"
                @click="protatypeChildEdit(p?.id)"
              >
                <svg
                  width="10"
                  height="10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="black"
                >
                  <path
                    d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"
                  />
                </svg>
              </div>
              <div
                class="protatype_title_content_icon delete"
                @click="childProtitipDelete(p?.id)"
              >
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
import { useToast } from "vue-toastification";
import { useStore } from "~/store/store";
const toast = useToast();
const store = useStore();
const bgModal = ref(false);
const baseUrl = useRuntimeConfig().public.baseUrl;
const { locale } = useI18n();

const contentModal = ref(false);
const titleModal = ref(false);
const categoryFather = ref(null);
async function categoryFatherApi() {
  store.loader = true;
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
  store.loader = false;
}
categoryFatherApi();
const categoryChild = ref(null);
const categoryId = ref(null);
const protatype = ref();
async function categoryChildApi(e, event) {
  try {
    store.loader = true;
    protatype.value.forEach((el) => {
      if (el == event.target) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
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

    if (data) {
      store.loader = false;
    }
  } catch (error) {
    console.log(error);
  }
}
const fatherAddUz = ref("");
const fatherAddRu = ref("");
async function categoryFatherAddApi() {
  try {
    store.loader = true;
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
      toast.success(data?.message, {
        position: "top-right",
        timeout: 2000,
      });

      categoryFatherApi();
      bgModal.value = false;
      contentModal.value = false;
      store.loader = false;
    } else {
    }
  } catch (error) {
    store.loader = false;
    toast.error(error.response._data.message, {
      position: "top-right",
      timeout: 2000,
    });
  }
}
const childAddUz = ref("");
const childAddRu = ref("");
async function categoryChildAddApi() {
  try {
    store.loader = true;
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
      toast.success(data?.message, {
        position: "top-right",
        timeout: 2000,
      });

      bgModal.value = false;
      titleModal.value = false;
      store.loader = false;
      try {
        store.loader = true;
        const data = await $fetch(baseUrl + "/category-detail/all", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("userToken"),
            "Accept-Language": locale.value,
          },
          params: {
            categoryId: categoryId.value,
          },
        });
        categoryChild.value = data;
        if (data) {
          store.loader = false;
        }
      } catch (error) {
        store.loader = true;
        toast.error(error.response._data.message, {
          position: "top-right",
          timeout: 2000,
        });
      }
    } else {
    }
  } catch (error) {
    store.loader = false;
    toast.error(error?.response?._data?.message || "Error", {
      position: "top-right",
      timeout: 2000,
    });
  }
}
async function fatherProtitipDelete(p) {
  try {
    const data = await $fetch(baseUrl + `/category/${p}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
    });
    if (data?.message == "ok") {
      bgModal.value = false;
      titleModal.value = false;
      store.loader = false;
      categoryFatherApi();
      toast.success(data?.message, {
        position: "top-right",
        timeout: 2000,
      });
    } else {
    }
    categoryFatherApi();
  } catch (error) {
    store.loader = false;
    toast.error(error.response._data.message, {
      position: "top-right",
      timeout: 2000,
    });
  }
}
async function childProtitipDelete(p) {
  try {
    const data = await $fetch(baseUrl + `/category-detail/${p}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
    });
    if (data?.message == "ok") {
      bgModal.value = false;
      titleModal.value = false;
      store.loader = false;
      // categoryFatherApi();
      toast.success(data?.message, {
        position: "top-right",
        timeout: 2000,
      });
      try {
        store.loader = true;
        const data = await $fetch(baseUrl + "/category-detail/all", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("userToken"),
            "Accept-Language": locale.value,
          },
          params: {
            categoryId: categoryId.value,
          },
        });
        categoryChild.value = data;
        if (data) {
          store.loader = false;
        }
      } catch (error) {
        store.loader = true;
        toast.error(error.response._data.message, {
          position: "top-right",
          timeout: 2000,
        });
      }
    } else {
    }
  } catch (error) {
    store.loader = false;
    toast.error(error?.response?._data?.message, {
      position: "top-right",
      timeout: 2000,
    });
  }
}
categoryFatherApi();
const contentModalEdit = ref(false);
const protatypeId = ref("");
async function protatypeFatherEdit(e) {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + `/category/${e}`, {
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
    });
    protatypeId.value = e;
    if (data) {
      contentModalEdit.value = true;
      bgModal.value = true;
      fatherAddUz.value = data?.nameUz;
      fatherAddRu.value = data?.nameRu;
      store.loader = false;
    }
  } catch (error) {
    store.loader = false;
    toast.error(error?.response?._data?.message, {
      position: "top-right",
      timeout: 2000,
    });
  }
}
async function categoryFatherEditApi() {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + "/category", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
      body: JSON.stringify({
        id: protatypeId.value,
        nameUz: fatherAddUz.value,
        nameRu: fatherAddRu.value,
      }),
    });
    if (data?.message == "ok") {
      contentModalEdit.value = false;
      bgModal.value = false;
      toast.success(data?.message, {
        position: "top-right",
        timeout: 2000,
      });

      categoryFatherApi();
      bgModal.value = false;
      contentModal.value = false;
      store.loader = false;
    } else {
    }
  } catch (error) {
    store.loader = false;
    toast.error(error.response._data.message, {
      position: "top-right",
      timeout: 2000,
    });
  }
}
const titleEditModal = ref(false);
const childProtatypeId = ref("");
async function protatypeChildEdit(e) {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + `/category-detail/${e}`, {
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
    });
    childProtatypeId.value = e;
    if (data) {
      titleEditModal.value = true;
      bgModal.value = true;
      childAddUz.value = data?.nameUz;
      childAddRu.value = data?.nameRu;
      categoryId.value = data?.categoryId;
      store.loader = false;
    }
  } catch (error) {
    store.loader = false;
    toast.error(error?.response?._data?.message, {
      position: "top-right",
      timeout: 2000,
    });
  }
}
async function categoryChildEditApi() {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + "/category-detail", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
      body: JSON.stringify({
        id: childProtatypeId.value,
        categoryId: categoryId.value,
        nameUz: childAddUz.value,
        nameRu: childAddRu.value,
      }),
    });
    if (data?.message == "ok") {
      titleEditModal.value = false;
      bgModal.value = false;
      toast.success(data?.message, {
        position: "top-right",
        timeout: 2000,
      });
      categoryFatherApi();
      bgModal.value = false;
      contentModal.value = false;
      store.loader = false;
    } else {
    }
  } catch (error) {
    store.loader = false;
    toast.error(error.response._data.message, {
      position: "top-right",
      timeout: 2000,
    });
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

      router.push("/login");
    }else{
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