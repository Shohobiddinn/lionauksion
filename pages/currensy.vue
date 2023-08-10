<template>
  <div>
    <div class="currensy_page">
      <div class="container">
        <div class="currensy_info">
          <!-- <pre>{{ currensy }}</pre> -->
          <!-- <div class="currensy_info_top">
            <div class="currensy_add">valyuta turini qo'shish</div>
          </div> -->
          <div class="currensy_info_bottom">
            <!-- <div class="currensy_info_bottom_title">valyuta turlari</div>
              <div class="currensytype" v-for="c in currensyType" :key="c.id">
                <div class="currensytype_name uz">
                  uz : <span>{{ c?.nameUz }}</span>
                </div>
                <div class="currensytype_name ru">
                  ру : <span>{{ c?.nameRu }}</span>
                </div>
                <div class="currensytype_name cymbol">
                  ramzi : <span>{{ c?.symbol }}</span>
                </div>
                <div class="currensytype_name icon">
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
                </div>
              </div> -->
            <div
              class="currensy_info_bottom_currensy_add"
              @click="curModal = !curModal"
            >
              valtyuta qo'shish
            </div>
            <div class="currensy_info_bottom_title">valyuta</div>
            <div class="currensy" v-for="c in currensy" :key="c.id">
              <div class="currensy_name cymbol">
                kampaniya : <span>{{ c?.companyName }}</span>
              </div>
              <div class="currensy_name uz">
                uz : <span>{{ c?.nameUz }}</span>
              </div>
              <div class="currensy_name ru">
                ру : <span>{{ c?.nameRu }}</span>
              </div>
              <div class="currensy_name cymbol">
                ramzi : <span>{{ c?.symbol }}</span>
              </div>
              <div class="currensy_name cymbol">
                valyuta uzsda : <span>{{ c?.currencyValueInUzs }}</span>
              </div>
              <div class="currensy_name cymbol">
                o'zgartirilgan sana : <span>{{ c?.modifiedDate }}</span>
              </div>
              <div class="currensy_name icon" @click="etidFun(c.id)">
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
              </div>
            </div>
            <div class="currensy_modal" v-if="curModal">
              <div class="currensy_modal_close" @click="curModal = false"></div>
              <div class="currensy_modal_inputs">
                <div class="info">
                  <label for="c-1">valyuta UZS</label>
                  <input
                    type="text"
                    name=""
                    id="c-1"
                    placeholder="valyutani kirgizing"
                    v-model="currenPrice"
                  />
                </div>
                <div class="current" :class="{ active: currenyModal }">
                  <div
                    class="current_option"
                    @click="currenyModal = !currenyModal"
                  >
                    <div class="current_option_title">
                      {{ curInfo }}
                    </div>
                    <div class="current_option_icon">
                      <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.5 10L0.272758 0.25L16.7272 0.25L8.5 10Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="current_content">
                    <div
                      class="current_content_title"
                      @click="curChange(ct)"
                      v-for="ct in currensyType"
                      :key="ct.id"
                    >
                      {{ ct?.symbol }}
                    </div>
                  </div>
                </div>
                <div class="click_btn" @click="currentAdd">yuborish</div>
              </div>
            </div>
            <div class="edit_modal" v-if="editModal">
              <div class="edit_modal_close_btn" @click="editModal = false"></div>
              <div class="info">
                <label for="e-1">yangi valyutani kiriting</label>
                <input type="text" id="e-1" v-model="editInfo" @keyup.enter="editApi" placeholder="yangi valyutani kiriting"/>
              </div>
              <div class="edit_modal_send" @click="editApi">yuborish</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const baseUrl = useRuntimeConfig().public.baseUrl;
const currensyType = ref(null);
const curModal = ref(false);
async function currensyTypeApi() {
  const data = await $fetch(baseUrl + "/currency-type/all", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  });
  currensyType.value = data;
}
currensyTypeApi();
const currensy = ref(null);
async function currensyApi() {
  const data = await $fetch(baseUrl + "/currency/all", {
    method: "GET",
    params: {
      companyId: localStorage.getItem("userId"),
    },
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  });
  currensy.value = data;
}
currensyApi();
const editModal = ref(false);
const editInfo = ref("");
const editId = ref("");
function etidFun(e){
  editId.value = e;
  editModal.value = true;
}
async function editApi(){
  const data = await $fetch(baseUrl + "/currency",{
    method:"PUT",
    headers:{
      Authorization: "Bearer " + localStorage.getItem("userToken")
    },
    body:JSON.stringify({
      id: editId.value,
      currencyValueInUzs:editInfo.value
    })
  });
  console.log(data);
  editModal.value = false;
  currensyApi();
  currensyTypeApi();
}

const currenyModal = ref(false);
const curInfo = ref("valyuta turini tanlang");
const curId = ref("");
function curChange(e) {
  curId.value = e.id;
  curInfo.value = e.symbol;
  currenyModal.value = false;
}
const currenPrice = ref("");
async function currentAdd() {
  const data = await $fetch(baseUrl + "/currency", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
    body: JSON.stringify({
      currencyValueInUzs: currenPrice.value,
      companyId: localStorage.getItem("userId"),
      currencyTypeId: curId.value,
    }),
  });
  currensyApi();
  currensyTypeApi();
}
</script>

<style lang="scss" scoped>
</style>