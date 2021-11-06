<template>
  <StartCardSection :buttons="buttons">
    <template #heading>
      Select Theme
    </template>
  </StartCardSection>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import StartCardSection from '@/components/pages/start/StartCardSection.vue';
import { UiButton } from '@/components/ui/UiButton';

const $style = useCssModule();

const buttons: UiButton[] = [
  {
    content: 'Numbers',
    props: {
      shade: 'dark',
      class: $style.button,
    },
  }, {
    content: 'Icons',
    props: {
      class: $style.button,
    },
  },
];
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
