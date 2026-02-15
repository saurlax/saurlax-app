<script setup lang="ts">
const { data } = await useAsyncData(() => {
  return queryCollectionNavigation("tools");
});
</script>

<template>
  <NuxtLayout name="default">
    <UContainer>
      <UPage>
        <template #left>
          <UPageAside>
            <UContentNavigation :navigation="data?.[0]?.children" highlight />
          </UPageAside>
        </template>
        <slot />
      </UPage>
    </UContainer>
  </NuxtLayout>
</template>
