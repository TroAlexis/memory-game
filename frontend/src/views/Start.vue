<template>
  <div :class="$style.StartPage">
      <section :class="$style.wrapper" class="container">
        <Logo :class="$style.logo" />
        <StartCard :class="$style.card" />
      </section>
  </div>
</template>

<script setup>
import Logo from '@/components/Logo.vue';
import StartCard from '@/components/pages/start/StartCard.vue';
</script>

<style lang="scss" module>
  @use "~@/assets/scss/_colors.scss";

  $padding-y: 2rem;

  .StartPage {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-top: $padding-y;
    padding-bottom: $padding-y;
    background-color: colors.$secondary-100;
  }

  .wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
  }

  .logo {
    align-self: center;
    margin-bottom: 7.8rem;
  }

  .card {
    align-self: center;
    width: 100%;
    max-width: 65.4rem;
  }
</style>
