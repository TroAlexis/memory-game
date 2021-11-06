<template>
  <span :class="$style.Logo">
    memory
  </span>
</template>

<script setup lang="ts">
import colors from '@/assets/scss/exports/_colors-export.scss';

type Color = 'light' | 'dark';

interface Props {
  color?: Color,
}

type Theme = {
  [color in Color]: string;
};

const props = withDefaults(defineProps<Props>(), {
  color: 'light',
});

const theme: Theme = {
  light: colors.cloud500,
  dark: colors.secondary100,
};
</script>

<style lang="scss" module>
  @use "~@/assets/scss/_colors.scss";

  .Logo {
    color: v-bind('theme[props.color]');
    font-size: 4rem;
  }
</style>
