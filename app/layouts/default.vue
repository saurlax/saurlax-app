<script setup lang="ts">
const route = useRoute();
const { commitHash } = useAppConfig();

const items = computed(() => [
  {
    label: "Tools",
    to: "/tools",
    active: route.path.startsWith("/tools"),
  },
]);
</script>

<template>
  <UHeader>
    <template #title>
      <Logo />
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UColorModeButton />
      <UButton
        color="neutral"
        variant="ghost"
        to="https://github.com/saurlax/saurlax-app"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
      />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" />
    </template>
  </UHeader>
  <UMain>
    <slot />
  </UMain>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }} Saurlax. Built on
        <ULink
          :to="`https://github.com/saurlax/nuxt-app/commit/${commitHash}`"
          >{{ commitHash?.slice(0, 7) }}</ULink
        >
      </p>
    </template>
  </UFooter>
</template>
