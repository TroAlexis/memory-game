<template>
  <StartCardSection :buttons="buttons" v-model:value="gridArea">
    <template #heading>
      Grid Size
    </template>
  </StartCardSection>
</template>

<script setup lang="ts">
import { Ref, ref, useCssModule } from 'vue';
import StartCardSection from '@/components/pages/start/StartCardSection.vue';
import { addSharedClassNameForAll, UiButton } from '@/components/ui/UiButton';

const $style = useCssModule();

const gridArea: Ref<number> = ref(16);

const buttons: UiButton[] = [
  {
    content: '4x4',
    value: 16,
    props: {
      shade: 'dark',
    },
  }, {
    content: '6x6',
    value: 36,
  },
];

addSharedClassNameForAll(buttons, $style.button);
</script>

<style lang="scss" module>
  @use "~include-media" as m;
  .StartCardSectionTheme {
    //
  }

  .button {
    flex-basis: 50%;
    & + & {
      margin-left: 3rem;

      @include m.media('<=tablet') {
        margin-left: 1.3rem;
      }
    }
  }
</style>
