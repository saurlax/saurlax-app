<script setup lang="ts">
const route = useRoute();
const { data } = useAsyncData(
  async () => {
    return queryCollection("tools")
      .where("path", "LIKE", `${route.path}%`)
      .all()
      .then((items) => {
        return items.map((item) => {
          return {
            title: item.title,
            description: item.description,
            to: item.path,
          };
        });
      });
  },
  { watch: [route] },
);
</script>

<template>
  <UPageHeader :title="route.path" />
  <UPageBody>
    <UPageGrid>
      <UPageCard v-for="item in data" :key="item.title" v-bind="item" />
    </UPageGrid>
  </UPageBody>
</template>
