<template>
  <component :is="tag" :class="$style.UiBox">
    <slot />
  </component>
</template>

<script setup lang="ts">
type Size = 'none' | 'small' | 'medium';

interface Props {
  rounded?: Size,
  padding?: Size,
  tag?: string,
}

interface Theme {
  radius: {
    [radius in Size]: string;
  },
  padding: {
    [padding in Size]: string;
  }
}

const props = withDefaults(defineProps<Props>(), {
  rounded: 'none',
  padding: 'medium',
  tag: 'div',
});

const theme: Theme = {
  radius: {
    none: '0px',
    small: '4px',
    medium: '8px',
  },
  padding: {
    none: '0',
    small: '2.8rem',
    medium: '5.6rem',
  },
};
</script>

<style lang="scss" module>
  .UiBox {
    padding: v-bind('theme.padding[props.padding]');
    border-radius: v-bind('theme.radius[props.rounded]');
  }
</style>
