<template>
  <div>
    <bgmodal v-if="bgmodol" />
    <div class="currensy_page">
      <div class="container">
        <div class="currensy_info">
          <div class="currensy_info_top">
            <div
              class="currensy_content"
              @click="(currensyModal = true), (bgmodol = true)"
            >
              <div class="currensy_content_title">{{ $t("addCurrensyType") }}</div>
              <div class="currensy_content_icon">
                <svg
                  width="25"
                  height="25"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="currensy_info_bottom">
            <div class="currensy_info_bottom_page">
              <div class="page">
                <div class="page_title">{{ $t("NameCurrency") }}</div>
                <div class="page_title">{{ $t("TypeCurrency") }}</div>
                <div class="page_title">{{ $t("ValueCurrency") }}</div>
                <div class="page_title">{{ $t("DateCurrency") }}</div>
                <div class="page_title">{{ $t("editCurrensy") }}</div>
                <div class="page_title">{{ $t("Delete") }}</div>
              </div>
            </div>
            <div class="currensy" v-for="c in currensy" :key="c?.id">
              <div class="currensy_title">{{ c?.name }}</div>
              <div class="currensy_title">{{ c?.symbol }}</div>
              <div class="currensy_title">{{ c?.currencyValueInUzs }}</div>
              <div class="currensy_title">{{ c?.modifiedDate }}</div>
              <div class="currensy_title">
                <div class="currensy_title_icon" @click="edit(c?.id)">
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
                </div>
              </div>
              <div class="currensy_title">
                <div class="currensy_title_icon" @click="currensyDelete(c?.id)">
                  <svg
                    width="25"
                    height="25"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="red"
                  >
                    <path
                      d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="currensy_modal" v-if="currensyModal">
              <div
                class="currensy_modal_close_btn"
                @click="(bgmodol = false), (currensyModal = false)"
              ></div>
              <div class="currensy_modal_info">
                <label class="currensy_modal_info_label" for="cur-1">
                {{  $t("currensyType1") }}
                </label>
                <input
                  class="currensy_modal_info_input"
                  v-model="currencyTypeUz"
                  type="text"
                  id="cur-1"
                />
              </div>
              <div class="currensy_modal_info">
                <label class="currensy_modal_info_label" for="cur-1">
              {{ $t("currensyType2")}}
                </label>
                <input
                  class="currensy_modal_info_input"
                  v-model="currencyTypeRu"
                  type="text"
                  id="cur-1"
                />
              </div>
              <div class="currensy_modal_info">
                <label class="currensy_modal_info_label" for="cur-1">
             {{ $t("currensySymbol") }}
                </label>
                <input
                  class="currensy_modal_info_input"
                  v-model="symbol"
                  type="text"
                  id="cur-1"
                />
              </div>
              <div class="currensy_modal_send" @click="currensySubmit">
                <div class="currensy_modal_send_btn">{{ $t("Send") }}</div>
              </div>
            </div>
            <div class="currensy_edit_modal" v-if="currensyEditModal">
              <div
                class="currensy_modal_close_btn"
                @click="(bgmodol = false), (currensyEditModal = false)"
              ></div>
              <div class="currensy_modal_info">
                <label class="currensy_modal_info_label" for="cur-1">
             {{ $t("currensyType1") }}
                </label>
                <input
                  class="currensy_modal_info_input"
                  v-model="currencyTypeUz"
                  type="text"
                  id="cur-1"
                />
              </div>
              <div class="currensy_modal_info">
                <label class="currensy_modal_info_label" for="cur-1">
              {{ $t("currensyType2") }}
                </label>
                <input
                  class="currensy_modal_info_input"
                  v-model="currencyTypeRu"
                  type="text"
                  id="cur-1"
                />
              </div>
              <div class="currensy_modal_info">
                <label class="currensy_modal_info_label" for="cur-1">
          {{ $t("currensySymbol") }}
                </label>
                <input
                  class="currensy_modal_info_input"
                  v-model="symbol"
                  type="text"
                  id="cur-1"
                />
              </div>
              <div class="currensy_modal_send" @click="currensyEditSubmit">
                <div class="currensy_modal_send_btn">{{ $t("Send") }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
const store = useStore();
import { useToast } from "vue-toastification";
const toast = useToast();
const baseUrl = useRuntimeConfig().public.baseUrl;
const router = useRouter();
const { locale } = useI18n();
const currensy = ref(null);
const bgmodol = ref(false);
const currensyModal = ref(false);
const currensyEditModal = ref(false);
async function currensyApi() {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + "/currency-type/all", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
    });
    currensy.value = data;
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
currensyApi();
const currensyType = ref(null);
async function currencyType() {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + "/currency-type/all", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
    });
    currensyType.value = data;
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
currencyType();
const currencyTypeRu = ref("");
const currencyTypeUz = ref("");
const symbol = ref("");
async function currensySubmit() {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + "/currency-type", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
      body: JSON.stringify({
        nameUz: currencyTypeUz.value,
        nameRu: currencyTypeRu.value,
        symbol: symbol.value,
      }),
    });
    if (data.message == "ok") {
      bgmodol.value = false;
      currensyModal.value = false;
      currensyApi();
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
const currensyId = ref("")
async function edit(c) {
  try {
    const data = await $fetch(baseUrl + `/currency-type/${c}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
    });
    currensyEditModal.value = true;
    bgmodol.value = true;
    currencyTypeUz.value = data?.nameUz;
    currencyTypeRu.value = data?.nameRu;
    symbol.value = data?.symbol;
    currensyId.value = data?.id
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
async function currensyEditSubmit() {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + "/currency-type", {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
      body: JSON.stringify({
        id:currensyId.value,
        nameUz: currencyTypeUz.value,
        nameRu: currencyTypeRu.value,
        symbol: symbol.value,
      }),
    });
    if (data.message == "ok") {
      currensyEditModal.value = false;
      bgmodol.value = false;
      currensyApi();
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
async function currensyDelete(e) {
  try {
    store.loader = true;
    const data = await $fetch(baseUrl + `/currency-type/${e}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Accept-Language": locale.value,
      },
    });
    if (data.message == "ok") {
      currensyApi();
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
    console.log(error.response.status);
    if (error?.response?._data?.status == 401) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("role");
      localStorage.removeItem("userSupplierId");
      localStorage.removeItem("userCompanyId");
      localStorage.removeItem("userRefreshToken");
      localStorage.removeItem("userId");

      router.push("/login");
    }else if(error.response.status == 403){
      localStorage.removeItem("userToken");
      localStorage.removeItem("role");
      localStorage.removeItem("userSupplierId");
      localStorage.removeItem("userCompanyId");
      localStorage.removeItem("userRefreshToken");
      localStorage.removeItem("userId");
    }else {
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