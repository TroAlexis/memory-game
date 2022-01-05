<template>
  <span :class="[$style.Logo, animated && 'slide-in-elliptic-left-fwd']">
    memory
  </span>
</template>

<script setup lang="ts">
import colors from '@/assets/scss/exports/_colors-export.scss';
import useAnimatedOnMount from '@/composables/useAnimatedOnMount';

type Color = 'light' | 'dark';

interface Props {
  color?: Color,
  animateEntrance?: boolean,
}

type Theme = {
  [color in Color]: string;
};

const props = withDefaults(defineProps<Props>(), {
  color: 'light',
  animateEntrance: true,
});

const theme: Theme = {
  light: colors.cloud500,
  dark: colors.secondary100,
};

const { animated } = useAnimatedOnMount(props.animateEntrance);
</script>

<style lang="scss" module>
  @use "~@/assets/scss/_colors.scss";

  .Logo {
    color: v-bind('theme[props.color]');
    font-size: 4rem;
  }
</style>
