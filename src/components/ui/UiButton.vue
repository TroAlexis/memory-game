<template>
  <component :is="component" :class="$style.UiButton">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue';
import colors from '@/assets/scss/exports/_colors-export.scss';
import { Props, Theme } from '@/components/ui/UiButton';

const props = withDefaults(defineProps<Props>(), {
  tag: 'button',
  color: 'secondary',
  shade: 'normal',
  size: 'small',
});

const getComponent = ({ tag }: {tag: string}): string => tag;
const component: ComputedRef = computed(() => getComponent({
  tag: props.tag,
}));

const theme: Theme = {
  color: {
    primary: {
      normal: colors.primary,
    },
    secondary: {
      dark: colors.secondary200,
      normal: colors.secondary300,
    },
  },
  size: {
    padding: {
      small: '1.1rem',
      medium: '1.6rem',
    },
    font: {
      small: '2.6rem',
      medium: '3.2rem',
    },
  },
};
</script>

<style lang="scss" module>
  @use '~@/assets/scss/_colors.scss';
  .UiButton {
    padding: v-bind("theme.size.padding[props.size]") 1rem;
    color: colors.$cloud-500;
    font-size: v-bind("theme.size.font[props.size]");
    background-color: v-bind("theme.color[props.color][props.shade]");
    border: 0;
    border-radius: 26px;
    cursor: pointer;
  }
</style>
