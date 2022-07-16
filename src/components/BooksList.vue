<template>
  <section>
    <form>
      <input type="text" v-model="title" placeholder="Book title..." />
      <input type="text" v-model="author" placeholder="Book author..." />
      <input type="text" v-model="pages" placeholder="Book pages..." />

      <p id="error">fields can not be empty!</p>

      <button @click.prevent="saveBookInfo">Save to my list</button>
    </form>

    <ul>
      <li class="message" v-if="books.length === 0">
        There is no books in your list yet!
      </li>
      <transition-group
        v-if="books.length !== 0"
        name="list-items"
        enter-active-class="animated bounceInUp"
        leave-active-class="animated bounceOutDown"
      >
        <li v-for="(item, index) in books" :key="index">
          <p>
            <strong>{{ item.title }}</strong> by {{ item.author }} -
            {{ item.pages }} pages
            <span class="remove" @click="remove(index)">x</span>
          </p>
        </li>
      </transition-group>
    </ul>
  </section>
</template>

<script>
export default {
  name: "BooksList",
  data: function () {
    return {
      title: "",
      author: "",
      pages: "",
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

  methods: {
    saveBookInfo: function () {
      if (this.title !== "" && this.author !== "" && this.pages !== "") {
        document.getElementById("error").classList.remove("show");
        this.books.push({
          title: this.title,
          author: this.author,
          pages: this.pages,
        });
        this.title = "";
        this.author = "";
        this.pages = "";
      } else {
        document.getElementById("error").classList.add("show");
      }
    },

    remove: function (index) {
      this.books.splice(index, 1);
    },
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
  font-size: 14px;
  transition: 0.3s;
}
li:hover {
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.663);
  transition: 0.3s;
}
li:hover span.remove {
  color: black;
  font-weight: bold;
}

li.message {
  background-color: white;
  height: 70px;
}
li.message:hover {
  cursor: none;
  box-shadow: none;
}

span.remove {
  color: rgb(92, 31, 205);
  float: right;
  cursor: pointer;
}

#error {
  display: none;
  color: white;
}
#error.show {
  display: inline-block;
}
</style>
