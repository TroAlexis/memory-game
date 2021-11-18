<template>
  <StartCardSection :buttons="buttons" :value="theme" @update:value="setTheme">
    <template #heading>
      Select Theme
    </template>
  </StartCardSection>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import StartCardSection from '@/components/pages/start/StartCardSection.vue';
import { addSharedClassNameForAll, UiButton } from '@/components/ui/UiButton';
import useTheme, { THEMES } from '@/composables/useTheme';

const $style = useCssModule();

const { theme, setTheme } = useTheme();

const buttons: UiButton[] = [
  {
    content: 'Numbers',
    value: THEMES.NUMBERS,
    props: {
      shade: 'dark',
    },
  }, {
    content: 'Icons',
    value: THEMES.ICONS,
  },
];

addSharedClassNameForAll(buttons, $style.button);
</script>

<style lang="scss" module>
  .StartCardSectionTheme {
    //
  }

  .button {
    flex-basis: 50%;
    & + & {
      margin-left: 3rem;
    }
  }
</style>
