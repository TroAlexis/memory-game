<template>
  <router-view />
</template>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@700&display=swap");
  @import "~normalize.css";

  html {
    font-size: 62.5%;
  }

  html, body {
    height: 100%;
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
