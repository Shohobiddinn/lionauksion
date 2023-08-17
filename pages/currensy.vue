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
              <div class="currensy_content_title">Qo'shish</div>
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
                <div class="page_title">Nomi</div>
                <div class="page_title">turi</div>
                <div class="page_title">qiymati</div>
                <div class="page_title">yangilangan sana</div>
                <div class="page_title">tahrirlash</div>
                <div class="page_title">O'chirish</div>
              </div>
            </div>
            <div class="currensy" v-for="c in currensy" :key="c?.id">
              <div class="currensy_title">{{ c?.name }}</div>
              <div class="currensy_title">{{ c?.symbol }}</div>
              <div class="currensy_title">{{ c?.currencyValueInUzs }}</div>
              <div class="currensy_title">{{ c?.modifiedDate }}</div>
              <div class="currensy_title">
                <div class="currensy_title_icon" @click="edit(c)">
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
                  so'mdagi qiymati
                </label>
                <input
                  class="currensy_modal_info_input"
                  v-model="currensyInfo"
                  type="text"
                  id="cur-1"
                />
              </div>
              <div class="selected">
                <div class="selected" :class="{ active: selectModal }">
                  <div
                    class="selected_option"
                    @click="selectModal = !selectModal"
                  >
                    <div class="selected_option_title">
                      {{ currensyTitle }}
                    </div>
                    <div class="selected_option_icon">
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
                  <div class="selected_content">
                    <div
                      class="selected_content_title"
                      v-for="c in currensyType"
                      :key="c?.id"
                      @click="currensyBtnApi(c)"
                    >
                      {{ c?.name }} : {{ c?.symbol }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="currensy_modal_send" @click="currensySubmit">
                <div class="currensy_modal_send_btn">yuborish</div>
              </div>
            </div>
            <div class="currensy_edit_modal" v-if="currensyEditModal">
              <div
                class="currensy_modal_close_btn"
                @click="(bgmodol = false), (currensyEditModal = false)"
              ></div>
              <div class="currensy_modal_info">
                <label class="currensy_modal_info_label" for="cur-1">
                  so'mdagi qiymati
                </label>
                <input
                  class="currensy_modal_info_input"
                  v-model="currensyEditInfo"
                  type="text"
                  id="cur-1"
                />
              </div>
             <div class="selected">
                <div class="selected" :class="{ active: selectModal }">
                  <div
                    class="selected_option"
                    @click="selectModal = !selectModal"
                  >
                    <div class="selected_option_title">
                      {{ currensyTitle }}
                    </div>
                    <div class="selected_option_icon">
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
                  <div class="selected_content">
                    <div
                      class="selected_content_title"
                      v-for="c in currensyType"
                      :key="c?.id"
                      @click="currensyBtnApi(c)"
                    >
                      {{ c?.name }} : {{ c?.symbol }}
                    </div>
                  </div>
                </div>
              </div> 
              <div class="currensy_modal_send" @click="currensyEditSubmit">
                <div class="currensy_modal_send_btn">yuborish</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const baseUrl = useRuntimeConfig().public.baseUrl;
const { locale } = useI18n();
const currensy = ref(null);
const bgmodol = ref(false);
const currensyModal = ref(false);
const currensyEditModal = ref(false);
const selectModal = ref(false);
async function currensyApi() {
  const data = await $fetch(baseUrl + "/currency/all", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
      "Accept-Language": locale.value,
    },
    params:{
      companyId: localStorage.getItem("userCompanyId") ? localStorage.getItem("userCompanyId") : null,
      supplierId: localStorage.getItem("userSupplierId")? localStorage.getItem("userSupplierId") : null,
    }
  });
  currensy.value = data;
}
currensyApi();
const currensyType = ref(null);
async function currencyType() {
  const data = await $fetch(baseUrl + "/currency-type/all", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
      "Accept-Language": locale.value,
    },
  });
  currensyType.value = data;
}
currencyType();
const currensyTitle = ref("valyuta turini tanlang");
const currencyTypeId = ref("");
const currensyInfo = ref("");

function currensyBtnApi(c) {
  selectModal.value = false;
  currensyTitle.value = c.name + " " + ":" + " " + c.symbol;
  currencyTypeId.value = c.id;
}
async function currensySubmit() {
  const data = await $fetch(baseUrl + "/currency", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
      "Accept-Language": locale.value,
    },
    body: JSON.stringify({
      currencyTypeId: currencyTypeId.value,
      supplierId: localStorage.getItem("userSupplierId"),
      currencyValueInUzs: currensyInfo.value,
    }),
  });
  if (data.message == "ok") {
    bgmodol.value = false;
    currensyModal.value = false;
    currensyApi();
  } else {
    console.log(data);
  }
}
const currensyEditInfo = ref("");
const editoerId = ref("");
function edit(c) {
  currensyEditModal.value = true;
  bgmodol.value = true;
  editoerId.value = c?.id;
  currensyEditInfo.value = c?.currencyTypeId;
  console.log(c?.currencyTypeId);
}
async function currensyEditSubmit() {
  const data = await $fetch(baseUrl + "/currency", {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
      "Accept-Language": locale.value,
    },
    body: JSON.stringify({
      id: editoerId.value,
      currencyValueInUzs: currensyEditInfo.value,
      currencyTypeId: currencyTypeId.value,
      supplierId: localStorage.getItem("userSupplierId"),
    }),
  });
  if (data.message == "ok") {
    currensyEditModal.value = false;
    bgmodol.value = false;
    currensyApi();
  } else {
    console.log(data);
  }
}
async function currensyDelete(e) {
  const data = await $fetch(baseUrl + `/currency/${e}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  });
  if (data.message == "ok") {
    currensyApi();
  } else {
    console.log(data);
  }
}
</script>

<style lang="scss" scoped>
</style>