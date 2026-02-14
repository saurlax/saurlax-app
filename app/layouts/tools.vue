<script setup lang="ts">
const route = useRoute();
const { data } = useAsyncData(
  async () => {
    return await queryCollectionNavigation("tools")
      .where("path", "LIKE", `${route.path.split("/").slice(0, 3).join("/")}%`)
      .then((items) => items[0]?.children?.[0]?.children ?? []);
  },
  { watch: [route] },
);
</script>

<template>
  <NuxtLayout name="default">
    <UContainer>
      <UPage>
        <template #left>
          <UPageAside>
            <UContentNavigation :navigation="data" />
          </UPageAside>
        </template>
        <slot />
      </UPage>
    </UContainer>
  </NuxtLayout>
</template>
