<template>
  <section :class="$style.StartCardSection">
    <p :class="$style.heading" class="h3 secondary-400">
      <slot name="heading" />
    </p>
    <div :class="$style.themeButtons">
      <template v-for="(button, index) in buttons" :key="index">
        <slot name="button" v-bind="{button}">
          <UiButton v-bind="button.props"
                    :shade="getButtonShade(button.value)"
                    @click="$emit('update:value', button.value)">
            {{ button.content }}
          </UiButton>
        </slot>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import UiButton from '@/components/ui/UiButton.vue';
import { UiButton as Button } from '@/components/ui/UiButton';

type Value = string | number | null;

interface Props {
  buttons: Button[],
  value: Value,
}

interface Emits {
  (e: 'update:value', value: Value): void
}

const props = withDefaults(defineProps<Props>(), {
  buttons: () => [],
});

defineEmits<Emits>();

const getButtonShade = (value: unknown) => (value === props.value ? 'dark' : undefined);
</script>

<style lang="scss" module>
  .StartCardSection {
    //
  }

  .heading {
    margin-bottom: 1.6rem;
  }

  .themeButtons {
    display: flex;
  }
</style>
