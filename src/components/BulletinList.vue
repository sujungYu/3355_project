<template>
  <div>
    <type-bar></type-bar>
    <hr
      style="width:86vw; height:1px; border:none; background-color:rgb(223, 223, 222);"
    />
    <ul v-for="list in lists" :key="list.title">
      <li>
        <router-link :to="`/study/${list.type}/${list.id}`">
          <div class="list">{{ list.title }}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import TypeBar from './TypeBar.vue';
export default {
  components: { TypeBar },
  data() {
    return {
      //   lists: [],
    };
  },
  computed: {
    lists() {
      return this.$store.state.Bulletin.bulletinList;
    },
  },
  //   mounted() {
  //     this.lists = this.$store.state.Bulletin.bulletinList;
  //     console.log(this.list);
  //   },
};
</script>

<style scoped>
div {
  margin: 0 auto;
}
ul {
  padding: 0;
  margin: 0 auto;
  list-style-type: none;
}
li {
  margin: 0 auto;
  border: 1px solid rgb(223, 223, 222);
  width: 86vw;
  height: 14vh;
  border-top: 0;
  border-left: 0;
  border-right: 0;
}
.list {
  margin: 0;
  line-height: 14vh;
  font-size: 2rem;
  color: rgb(63, 51, 81);
}
a {
  text-decoration: none;
}
hr {
  margin: 0 auto;
  margin-top: 1vh;
}
</style>
