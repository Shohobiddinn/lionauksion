<template>
  <div>
    <div class="phone_page">
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
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
const phoneNumber = ref();
const results = ref();
const moz = ref();
function mozTek(){
console.log(moz);

}
</script>
<style lang="scss">
.phone_page {
  margin-left: 350px;
  padding-top: 100px;
}
.moz_input {
  width: 300px;
  height: 43px;
}
.maz-border-success{
  border:yellow;
}
</style>