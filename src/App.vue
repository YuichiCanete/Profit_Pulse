<script setup>
  import { onBeforeMount } from 'vue';

  //change screen when button clicked
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const newScreen = (nscr) => {
    router.push(nscr)
  };

  
  onBeforeMount(() => {
    router.push('/login');
  });

</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style>
</style>
