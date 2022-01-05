<template>
  <UiCard :class="[$style.StartCard, animated && 'fade-in-top']" tag="article" rounded="xl">
    <StartCardSectionTheme :class="[$style.section]" />
    <StartCardSectionPlayers :class="[$style.section]" />
    <StartCardSectionGridSize :class="[$style.section]" />
    <UiButton
      color="primary" size="medium" :class="$style.button"
      @click="startGame"
    >
      Start Game
    </UiButton>
  </UiCard>
</template>

<script setup>
import { useRouter } from 'vue-router';
import UiCard from '@/components/ui/UiCard.vue';
import StartCardSectionTheme from '@/components/pages/start/StartCardSectionTheme.vue';
import StartCardSectionPlayers from '@/components/pages/start/StartCardSectionPlayers.vue';
import StartCardSectionGridSize from '@/components/pages/start/StartCardSectionGridSize.vue';
import UiButton from '@/components/ui/UiButton.vue';
import useAnimatedOnMount from '@/composables/useAnimatedOnMount';
import api from '@/assets/js/api';

const router = useRouter();

const { animated } = useAnimatedOnMount();

const startGame = async () => {
  const { id } = await api.startGame();

  await router.push({
    name: 'game',
    query: {
      id,
    },
  });
};
</script>

<style lang="scss" module>
  @use "~@/assets/scss/_colors.scss";
  @use "sass:math";

  $base-delay: .1;

  .StartCard {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: colors.$cloud-500;
    animation-delay: #{$base-delay}s;
  }

  .section {
    @for $i from 1 through 3 {
      &:nth-child(#{$i}) {
        animation-delay: #{$base-delay + math.div($i,10)}s;
      }
    }

    & + & {
      margin-top: 3.2rem;
    }
  }

  .button {
    margin-top: 3.3rem;
  }
</style>
