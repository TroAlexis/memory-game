<template>
  <StartCardSection :buttons="buttons" v-model:value="players">
    <template #heading>
      Number of Players
    </template>
  </StartCardSection>
</template>

<script setup lang="ts">
import {
  Ref, ref, useCssModule,
} from 'vue';
import StartCardSection from '@/components/pages/start/StartCardSection.vue';
import { addSharedClassNameForAll, UiButton } from '@/components/ui/UiButton';

const $style = useCssModule();

const players: Ref<number> = ref(1);

const buttons: UiButton[] = [
  {
    content: '1',
    value: 1,
  }, {
    content: '2',
    value: 2,
  }, {
    content: '3',
    value: 3,
  }, {
    content: '4',
    value: 4,
  },
];

addSharedClassNameForAll(buttons, $style.button);
</script>

<style lang="scss" module>
  .StartCardSectionTheme {
    //
  }

  .button {
    flex-basis: 25%;
    & + & {
      margin-left: 2.1rem;
    }
  }
</style>
