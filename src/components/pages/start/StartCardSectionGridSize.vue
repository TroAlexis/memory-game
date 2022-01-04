<template>
  <StartCardSection :buttons="buttons" :value="grid" @update:value="setGrid">
    <template #heading>
      Grid Size
    </template>
  </StartCardSection>
</template>

<script setup lang="ts">
import { Ref, ref, useCssModule } from 'vue';
import StartCardSection from '@/components/pages/start/StartCardSection.vue';
import { addSharedClassNameForAll, UiButton } from '@/components/ui/UiButton';
import useGrid, { GRIDS } from '@/composables/useGrid';

const $style = useCssModule();

const { grid, setGrid } = useGrid();

const buttons: UiButton[] = [
  {
    content: '4x4',
    value: GRIDS.SIXTEEN,
    props: {
      shade: 'dark',
    },
  }, {
    content: '6x6',
    value: GRIDS.THIRTY_SIX,
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
