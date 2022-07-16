<template>
  <section>
    <form action="">
      <input type="text" placeholder="Add the book you wanna read..." />
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
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
}

form {
  width: 100%;
}

form input {
  width: 100%;
  padding: 10px;
}

ul {
  width: 100%;
  list-style: none;
  text-align: left;
  padding: 0;
}
li {
  background-color: rgba(179, 179, 241, 0.529);
  padding: 6px 20px;
  margin-bottom: 10px;
}

span {
  color: rgb(52, 9, 132);
  float: right;
  cursor: pointer;
}
</style>
