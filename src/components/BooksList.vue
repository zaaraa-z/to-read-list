<template>
  <section>
    <form action="">
      <input type="text" placeholder="Book title..." />
      <input type="text" placeholder="Book author..." />
      <input type="text" placeholder="Book pages..." />
      <button>Save to my list</button>
    </form>

    <ul>
      <li v-for="(item, index) in books" :key="index">
        <p>
          <strong>{{ item.title }}</strong> by {{ item.author }} -
          {{ item.pages }} pages <span>x</span>
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "BooksList",
  data: function () {
    return {
      books: [
        {
          title: "Atomic Habits",
          author: "James Clear",
          pages: 320,
        },
        {
          title: "Master Your Emotions",
          author: "Thibaut Meurisse",
          pages: 214,
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  width: 80%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
}

form {
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgb(111, 111, 111);
  padding: 20px;
  background-color: rgba(25, 5, 77, 0.732);
}

form input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0;
  outline: 0;
  background-color: rgb(218, 218, 218);
  border: 1px solid transparent;
  margin-bottom: 7px;
}
form input:focus {
  border: 1px solid rgb(111, 111, 111);
  background-color: white;
}

form button {
  width: 100%;
  margin-top: 10px;
  border: 0;
  padding: 10px 0;
  cursor: pointer;
  background-color: rgb(31, 191, 132);
  font-size: 15px;
  transition: 0.3s;
}
form button:hover {
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.663);
  transition: 0.3s;
}

ul {
  width: 100%;
  list-style: none;
  text-align: left;
  padding: 0;
}

li {
  background-color: rgb(195, 195, 226);
  padding: 6px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: 0.3s;
}
li:hover {
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.663);
  transition: 0.3s;
}
li:hover span {
  color: black;
  font-weight: bold;
}

span {
  color: rgb(92, 31, 205);
  float: right;
  cursor: pointer;
}
</style>
