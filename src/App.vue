<template>
  <div id="app">
    <a hidden href="https://www.freepik.com/vectors/education-frame"
      >Education frame vector created by stockgiu - www.freepik.com</a
    >
    <header>
      <h1>To-Read-List!</h1>
      <p>So, what is next book?</p>
    </header>

    <nav>
      <router-link to="/">App</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background: url(./assets/bg.jpg) center center;
  background-size: cover;
  height: 100vh;
  margin: 0;
}

header {
  background-color: rgb(86 77 109 / 95%);
  color: rgba(255, 255, 255, 0.88);
  padding: 10px;
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

nav {
  padding: 10px 0;
  width: 80%;
  max-width: 600px;
  margin: auto;
  text-align: left;
}

nav a {
  text-decoration: none;
  padding: 0 10px;
  font-weight: bold;
  color: white;
  background-color: black;
  display: inline-block;
  line-height: 50px;
  text-align: center;
  width: 80px;
  margin-right: 4px;
  border: solid 1px transparent;
}

nav a.router-link-exact-active {
  color: #42b983;
  border-color: #42b983;
}
</style>
