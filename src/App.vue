<template>
  <router-view />
</template>

<style lang="scss">
  @use "~normalize.css" as n;
  @use "~@/assets/scss/_text.scss";
  @use "~@/assets/scss/_ui.scss";
  @use "~@/assets/scss/_animations.scss";
  @import url("https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@700&display=swap");

  html {
    font-size: 62.5%;
  }

  html, body {
    height: 100%;
  }

  body {
    font-size: 1.6rem;
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-family: "Atkinson Hyperlegible", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
