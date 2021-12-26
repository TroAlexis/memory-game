<template>
  <component :is="component" :class="$style.UiButton">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue';
import colors from '@/assets/scss/exports/_colors-export.scss';
import {
  Theme, colors as ButtonColors, shades as ButtonShades, sizes as ButtonSizes,
} from '@/components/ui/UiButton';
import { validatorIsOneOf } from '@/assets/js/validators';

const props = defineProps({
  tag: {
    type: String,
    default: 'button',
  },
  color: {
    type: String,
    default: 'secondary',
    validator: validatorIsOneOf(ButtonColors),
  },
  shade: {
    type: String,
    default: 'normal',
    validator: validatorIsOneOf(ButtonShades),
  },
  size: {
    type: String,
    default: 'small',
    validator: validatorIsOneOf(ButtonSizes),
  },
});

const getComponent = ({ tag }: {tag: string}): string => tag;
const component: ComputedRef = computed(() => getComponent({
  tag: props.tag,
}));

const theme: Theme = {
  color: {
    primary: {
      normal: {
        normal: colors.primary,
        hover: colors.primary300,
      },
    },
    secondary: {
      dark: {
        normal: colors.secondary200,
        hover: colors.secondary100,
      },
      normal: {
        normal: colors.secondary300,
        hover: colors.secondary400,
      },
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
    background-color: v-bind("theme.color[props.color][props.shade].normal");
    &:hover {
      background-color: v-bind("theme.color[props.color][props.shade].hover");
    }
    &:active {
      transform: scale3d(.98, .98, 1);
    }
    border: 0;
    border-radius: 26px;
    cursor: pointer;
    transition: all .3s;
  }
</style>
