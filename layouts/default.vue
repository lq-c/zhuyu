
<!-- import layoutHeader from '~/components/layout-header.vue'; -->
<template>
  <div class="main-body " bg-cover bg-center h-100vh>
    <AppHeader flex justify-center items-center h-40px position-fixed top-30px left-0 right-0>
      <LayoutHeader></LayoutHeader>
    </AppHeader>
    <div p-t-80px h="[calc(100vh-80px)]" overflow-y-auto flex flex-direction-column justify-center>
      <slot />
    </div>
    <!-- <AppFooter>footer</AppFooter> -->
  </div>
</template>

<style>
.main-body {
  background-image: url("/public/vague-rose-dark.jpg");
}
</style>