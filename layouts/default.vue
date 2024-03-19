
<!-- import layoutHeader from '~/components/layout-header.vue'; -->
<template>
  <div class="main-body " bg-cover bg-center h-100vh>
    <AppHeader flex justify-center items-center h-70px position-fixed top-0 left-0 right-0>
      <LayoutHeader></LayoutHeader>
    </AppHeader>
    <div p-t-70px h="[calc(100vh-70px)]" bg="[rgba(243,242,241)]" overflow-y-auto>
      <slot />
    </div>
    <!-- <AppFooter>footer</AppFooter> -->
  </div>
</template>

<style>
.main-body {
  /* background-image: url("/public/main-bg.jpg"); */
}
</style>