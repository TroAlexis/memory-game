<template>
  <UiCard :class="$style.StartCard" tag="article" rounded="small">
    <StartCardSectionTheme />
  </UiCard>
</template>

<script setup>
import UiCard from '@/components/ui/UiCard.vue';
import StartCardSectionTheme from '@/components/pages/start/StartCardSectionTheme.vue';
</script>

<style lang="scss" module>
  @use "~@/assets/scss/_colors.scss";

  .StartCard {
    background-color: colors.$cloud-500;
  }

  .section {
    & + & {
      margin-top: 3.2rem;
    }
  }
</style>
