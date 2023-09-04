<template>
  <div>
    <NuxtLayout />
    <load />
    <have />
  </div>
</template>
<script setup>
import { useStore } from "~/store/store";
const store = useStore();
const localePath = useLocalePath();
const router = useRouter();
if (!localStorage.getItem("userToken")) {
  router.push(localePath("/login"));
}
const { locale, messages } = useI18n();
const loc = ref("uz");
onMounted(() => {
  window.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.shiftKey && event.code === "F7") {
      store.haveInfo = true;
    }
  });
  window.addEventListener("keydown", function (event) {
    if (event.code === "End") {
      store.haveInfo = false;
    }
  });
  loc.value = locale.value
});
</script>