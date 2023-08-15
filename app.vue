<template>
  <div>
    <Head>
        <Title>LionPrint</Title>
        <Link rel="icon" href="/logo.png" type="image/x-icon" sizes="16x16" />
    </Head>
    <NuxtLayout/>
    <load/> 
    <!-- <i class="fa-brands fa-telegram"></i> -->
  </div>
</template>
<script setup>
const router = useRouter();
if(!localStorage.getItem("userToken")){
  router.push("/login")
};

</script>