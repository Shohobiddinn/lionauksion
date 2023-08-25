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
    <!-- <have/> -->
  </div>
</template>
<script setup>
const localePath = useLocalePath();
const router = useRouter();
if (!localStorage.getItem("userToken")) {
  router.push(localePath("/login"));
}

onMounted(() => {
  window.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.shiftKey && event.code === 'Enter') {
      // store.avtorModal = true
      // store.overlay = true
    }
    // console.log(event);
  });
  window.addEventListener("keydown", function (event) {
    if (event.code === "Escape") {
      // store.avtorModal = false
      // store.overlay = false
    }
  });
});
</script>