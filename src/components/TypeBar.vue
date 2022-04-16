<template>
  <nav class="menu" @click="menu">
    <ul>
      <li value="language" name="menu">언어</li>
      <li value="project" name="menu">프로젝트</li>
      <li value="certificate" name="menu">자격증</li>
      <li value="job" name="menu">취업</li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    data() {
      return {};
    },
    // menu() {
    //   const select = document.getElementsByName('menu').length;
    //   console.log(document.getElementsByName('menu').length);

    //   for (var i = 0; i < select; i++) {
    //     console.log(document.getElementsByName('menu')[i].click);
    //     if (document.getElementsByName('menu')[i].change == true) {
    //       console.log('1');
    //       //   this.type = document.getElementsByName('shop')[i].value;
    //       console.log(document.getElementsByName('menu')[i].value);
    //     }
    //   }
    // },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@300&display=swap');
.menu {
  margin: 0 auto;
  height: 4vh;
  width: 86vw;
}
ul {
  padding: 0;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
li {
  display: inline-block;
}

ul li {
  list-style: none;
  color: rgb(63, 51, 81);
  font-size: 1.6rem;
  font-family: 'Gothic A1', sans-serif;
  font-weight: bold;
}
.menu li:hover {
  color: rgb(245, 109, 145);
}
.menu li.active {
  color: rgb(245, 109, 145);
}
</style>
