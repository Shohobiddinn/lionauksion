<template>
  <div>
    <div class="currensy_page">
      <div class="container">
        <div class="currensy_info">
          <pre>{{ currensy }}</pre>
          <div class="currensy_info_top">
            <div class="currensy_add">valyuta qo'shish</div>
          </div>
          <div class="currensy_info_bottom">
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
            </div>
            <div class="currensy_info_bottom_title"></div>
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
              <div class="currensy_name icon">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const baseUrl = useRuntimeConfig().public.baseUrl;
const currensyType = ref(null);
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
      companyId:localStorage.getItem("userId"),
    },
    headers:{
        Authorization: "Bearer " + localStorage.getItem("userToken"),
    }
  });
  currensy.value = data;
}
currensyApi();
</script>

<style lang="scss" scoped>
</style>