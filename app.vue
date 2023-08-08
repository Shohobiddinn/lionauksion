<template>
  <div>
    <NuxtLayout/>
  </div>
</template>
<script setup>
const router = useRouter();
if(!localStorage.getItem("userToken")){
  router.push("/login")
};

// setTimeout(() => {
//   localStorage.removeItem("userToken");
// }, "21000");
// setInterval(function(){
//                 alert('this is executed for each second');
//               }, 5000);
</script>