<template>
  <div>
    <Head>
        <Title>LionPrint</Title>
        <Link rel="icon" href="`/public/favicon.ico" type="image/x-icon" sizes="16x16" />
    </Head>
    <NuxtLayout/>
    <load/> 
  </div>
</template>
<script setup>
const router = useRouter();
if(!localStorage.getItem("userToken")){
  router.push("/login")
};

</script>