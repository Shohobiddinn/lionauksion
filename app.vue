<template>
  <div>
    <Head>
      <Link
        rel="icon"
        href="./public/logo.png"
        type="image/x-icon"
        sizes="160x160"
      />
    </Head>
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
// if (!localStorage.getItem("userToken")) {
//   router.push(localePath("/login"));
// }

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
});
const { locale, messages } = useI18n();
const loc = ref("uz");
onMounted(() => {
  loc.value = locale.value
});
function tekshiruv() {
  console.log(messages.value.uz.header.body.items);
}
</script>