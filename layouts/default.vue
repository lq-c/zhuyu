
<!-- import layoutHeader from '~/components/layout-header.vue'; -->
<template>
  <div class="h-100vh">
    <AppHeader>
      <LayoutHeader></LayoutHeader>
    </AppHeader>
    <div style="height: calc(100% - 60px);" class="bg-#F8F4EC overflow-y-auto">
      <slot />
    </div>
    <!-- <AppFooter>footer</AppFooter> -->
  </div>
</template>
