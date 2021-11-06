<template>
  <UiCard :class="$style.StartCard" tag="article" rounded="xl">
    <StartCardSectionTheme />
    <StartCardSectionPlayers />
    <StartCardSectionGridSize />
    <UiButton color="primary" size="medium" :class="$style.button">
      Start Game
    </UiButton>
  </UiCard>
</template>

<script setup>
import UiCard from '@/components/ui/UiCard.vue';
import StartCardSectionTheme from '@/components/pages/start/StartCardSectionTheme.vue';
import StartCardSectionPlayers from '@/components/pages/start/StartCardSectionPlayers.vue';
import StartCardSectionGridSize from '@/components/pages/start/StartCardSectionGridSize.vue';
import UiButton from '@/components/ui/UiButton.vue';
</script>

<style lang="scss" module>
  @use "~@/assets/scss/_colors.scss";

  .StartCard {
    display: flex;
    flex-direction: column;
    background-color: colors.$cloud-500;
  }

  .section {
    & + & {
      margin-top: 3.2rem;
    }
  }

  .button {
    margin-top: 3.3rem;
  }
</style>
