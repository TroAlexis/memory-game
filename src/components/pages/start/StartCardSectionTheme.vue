<template>
  <StartCardSection :buttons="buttons">
    <template #heading>
      Select Theme
    </template>
    <template #button="{ button }">
      <UiButton v-bind="button.props" :class="$style.button">
        {{ button.content }}
      </UiButton>
    </template>
  </StartCardSection>
</template>

<script setup lang="ts">
import StartCardSection from '@/components/pages/start/StartCardSection.vue';
import UiButton from '@/components/ui/UiButton.vue';

interface Btn {
  content: string,
  props?: Record<string, unknown>,
}

const buttons: Btn[] = [
  {
    content: 'Numbers',
    props: {
      shade: 'dark',
    },
  }, {
    content: 'Icons',
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
