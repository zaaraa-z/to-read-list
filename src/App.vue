<template>
  <div id="app">
    <a hidden href="https://www.freepik.com/vectors/education-frame"
      >Education frame vector created by stockgiu - www.freepik.com</a
    >
    <h2>So, what is next book?</h2>
    <BooksList></BooksList>
  </div>
</template>

<script>
import BooksList from "./components/BooksList.vue";
export default {
  name: "App",
  components: {
    BooksList,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background: url(./assets/bg.jpg) center center no-repeat;
  background-size: cover;
  height: 100vh;
  margin: 0;
}

h2 {
  background-color: rgba(25, 5, 77, 0.95);
  color: rgba(255, 255, 255, 0.88);
  padding: 20px;
  margin-bottom: 30px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1d0934;
  margin-top: 30px;
}
</style>
