<template>
  <div>
    <!-- <div class="phone_page">
      <MazPhoneNumberInput
        v-model="phoneNumber"
        show-code-on-list
        color="info"
        :preferred-countries="['FR', 'BE', 'DE', 'US', 'GB']"
        :ignored-countries="['AC']"
        @update="results = $event"
        :success="results?.isValid"
        class="moz_input"
        aria-label="telefon raqamni kiriting"
        ref="moz"
      />
      <code>
        {{ results?.formatInternational }}
      </code>
      <pre>{{ phoneNumber }}</pre>
      <button @click="mozTek">fghjk</button>
    </div> -->
    <div class="phone_page">
      <pre>{{ data }}</pre>
      Mouse position is at: {{ username }} : {{ password }}
      <input type="text" v-model="password">
      <input type="text" v-model="username">
      <button @click="loginApi()">loginApi</button>
    </div>
  </div>
</template>
<!--   
  <script setup lang="ts">
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
const phoneNumber = ref();
const results = ref();
const moz = ref();
function mozTek(){
console.log(moz);

}
</script> -->
<script setup>
import {useLogin} from "~~/function/post"
const { password, username, loginApi, data} = useLogin();
</script>

<style lang="scss">
.phone_page {
  margin-left: 350px;
  padding-top: 100px;
}

</style>