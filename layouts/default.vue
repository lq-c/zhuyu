
<!-- import layoutHeader from '~/components/layout-header.vue'; -->
<template>
  <div class="main-body " bg-cover bg-center h-100vh>
    <AppHeader>
      <LayoutHeader></LayoutHeader>
    </AppHeader>
    <div style="height: calc(100% - 60px);" class="overflow-y-auto">
      <slot />
    </div>
    <!-- <AppFooter>footer</AppFooter> -->
  </div>
</template>

<style>
.main-body {
  background-image: url("/public/main-bg.jpg");
}
</style>