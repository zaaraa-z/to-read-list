<template>
  <section>
    <form action="">
      <input type="text" placeholder="Add the book you wanna read..." />
    </form>

    <ul>
      <li v-for="(item, index) in books" :key="index">
        <p>
          <strong>{{ item.title }}</strong> by {{ item.author }} -
          {{ item.pages }} pages
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ul {
  list-style: none;
  text-align: left;
  padding-left: 0;
}
li {
  background-color: rgba(179, 179, 241, 0.529);
  padding: 6px 20px;
  margin-bottom: 10px;
}
</style>
