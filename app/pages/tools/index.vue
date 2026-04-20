<script setup lang="ts">
queryCollection("tools")
  .first()
  .then((item) => {
    if (item) {
      navigateTo(item.path);
    }
  });
</script>
