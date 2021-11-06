<template>
  <section :class="$style.StartCardSection">
    <p :class="$style.heading" class="h3 secondary-400">
      <slot name="heading" />
    </p>
    <div :class="$style.themeButtons">
      <template v-for="(button, index) in buttons" :key="index">
        <slot name="button" v-bind="{button}" />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
type Button = {
  [key: string]: unknown
}
interface Props {
  buttons: Button[],
}

const props = withDefaults(defineProps<Props>(), {
  buttons: () => [],
});
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
