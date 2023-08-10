<template>
  <div>
    <!-- <div class="bg"></div> -->
    <div class="companyadd_page">
      <div class="container">
        <div class="information">
          <div class="information_inputs">
            <div class="info">
              <label class="info_label" for="com_name">kompaniya nomi</label>
              <input
                class="info_input"
                type="text"
                placeholder="kompaniya nomi"
                id="com_name"
                v-model="companyName"
              />
            </div>
            <div class="info">
              <label class="info_label" for="com_leader"
                >kompaniya rahbari F.I.O</label
              >
              <input
                class="info_input"
                type="text"
                placeholder="kompaniya rahbari F.I.O"
                id="com_leader"
                v-model="fullName"
              />
            </div>
            <div class="info">
              <label class="info_label" for="com_name">telefon raqami</label>
              <input
                class="info_input"
                type="text"
                placeholder="telefon raqami"
                ref="tel"
                id="com_name"
                v-model="phone"
              />
            </div>
            <div class="info">
              <label class="info_label" for="start_date">login</label>
              <input
                class="info_input"
                type="text"
                placeholder="login"
                id="start_date"
                v-model="username"
              />
            </div>
            <div class="info">
              <label class="info_label" for="start_date">password</label>
              <input
                class="info_input"
                type="password"
                placeholder="password"
                v-model="password"
              />
            </div>
          </div>
          <div class="information_image">
            <input type="file" id="file_input" @change="imgFunc($event)" />
            <label for="file_input"
              ><img id="uploadedImage" src="../assets/image/4211763.png" alt=""
            /></label>
            <div class="information_image_btns">
              <div class="btn_exit btn">oraga</div>
              <div class="btn_save btn" @click="tek">yuborish</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IMask from "imask";
const fullName = ref("");
const username = ref("");
const password = ref("");
const companyName = ref("");
const phone = ref("");
const tel = ref();
const atvet = ref(null);
const router = useRouter();
const baseUrl = useRuntimeConfig().public.baseUrl;
async function companyApi() {
  if(!companyName.value == "" && !fullName.value == "" && !password.value == "" && !username.value == ""){
    const data = await $fetch(baseUrl + "/company", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
      body: JSON.stringify({
        name: companyName.value,
        director: fullName.value,
        phone: phone.value,
        userFullName: fullName.value,
        username: username.value,
        password: password.value,
      }),
    });
    console.log(data);
  //   atvet.value = data;
    if (!data.error) {
      router.push("/company");
    }else{
      alert('error')
    }

  }
}
function tek() {
  if(!companyName.value == "" && !fullName.value == "" && !password.value == "" && !username.value == ""){
    console.log("hello");
  }else{
    console.log("bug");
  }
}
onMounted(() => {
  var maskOptions = {
    mask: "+{998}(00) 000-00-00",
    lazy: false,
  };
  var mask = new IMask(tel.value, maskOptions);
});
</script>

<style lang="scss" scoped>
</style>