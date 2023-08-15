<template>
  <div>
    <NuxtLayout/>
    <!-- <load/>  -->
  </div>
</template>
<script setup>
const router = useRouter();
if(!localStorage.getItem("userToken")){
  router.push("/login")
};

</script>