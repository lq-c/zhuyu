
<!-- import layoutHeader from '~/components/layout-header.vue'; -->
<template>
  <div>
    <AppHeader>
      <LayoutHeader></LayoutHeader>
    </AppHeader>
    <slot />
    <AppFooter>footer</AppFooter>
  </div>
</template>
