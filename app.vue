<template>
  <div>
    <Head>

      <Link rel="icon" href="./public/logo.png" type="image/x-icon" sizes="160x160" />
    </Head>
    <NuxtLayout />
    <load />
  </div>
</template>
<script setup>
const localePath = useLocalePath();
const router = useRouter();
if (!localStorage.getItem("userToken")) {
  router.push(localePath("/login"));
}
</script>