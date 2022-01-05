<template>
  <StartCardSection :buttons="buttons" :value="players" @update:value="setPlayers">
    <template #heading>
      Number of Players
    </template>
  </StartCardSection>
</template>

<script setup lang="ts">
import {
  useCssModule,
} from 'vue';
import StartCardSection from '@/components/pages/start/StartCardSection.vue';
import { addSharedClassNameForAll, UiButton } from '@/components/ui/UiButton';
import usePlayers, { PLAYERS } from '@/composables/usePlayers';

const $style = useCssModule();

const { players, setPlayers } = usePlayers();

const buttons: UiButton[] = [
  {
    content: '1',
    value: PLAYERS.ONE,
  }, {
    content: '2',
    value: PLAYERS.TWO,
  }, {
    content: '3',
    value: PLAYERS.THREE,
  }, {
    content: '4',
    value: PLAYERS.FOUR,
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
    flex-basis: 25%;
    & + & {
      margin-left: 2.1rem;

      @include m.media('<=tablet') {
        margin-left: 1.3rem;
      }
    }
  }
</style>
