<template>
  <div>
    <h1>{{ attendTitle }}</h1>
    <p>
      {{ this.$store.state.Calendar.year }}.{{
        this.$store.state.Calendar.month
      }}.{{ this.$store.state.Calendar.day }}
    </p>
    <template
      v-if="
        this.year == this.$store.state.Calendar.year &&
          this.month == this.$store.state.Calendar.month &&
          this.day == this.$store.state.Calendar.day
      "
    >
      <div>
        <h2 v-for="user in users" :key="user" id="user">
          {{ user }}
          <button id="attend" @click="check('attend', user)">출석</button>
          <button id="late" @click="check('late', user)">지각</button>
          <button id="absence" @click="check('absence', user)">결석</button>
        </h2>
      </div>
    </template>

    <template
      v-if="
        this.year != this.$store.state.Calendar.year &&
          this.month != this.$store.state.Calendar.month &&
          this.day != this.$store.state.Calendar.day
      "
    >
      <ul>
        <li v-for="(todo, index) in attend" :key="index">
          <i class="far fa-calendar-check check"></i>
          {{ todo }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { memberAttend } from '@/api/index.js';
export default {
  data() {
    return {
      attendTitle: '',
      users: [],
      year: '',
      month: '',
      day: '',
    };
  },
  async created() {
    this.attendTitle = this.$store.state.Bulletin.attendName;
    this.users = this.$store.state.Calendar.checkUser;
    const id = this.$store.state.Bulletin.attendId;
    await this.$store.dispatch('getAttend', id);
    const today = new Date();
    this.year = today.getFullYear();
    this.month = ('0' + (today.getMonth() + 1)).slice(-2);
    this.day = ('0' + today.getDate()).slice(-2);
  },
  computed: {
    attend() {
      return this.$store.getters.showAttend;
    },
  },
  methods: {
    check(check, user) {
      const attendInfo = {
        name: user,
        attend: check,
        createdAt:
          this.$store.state.Calendar.year +
          '-' +
          this.$store.state.Calendar.month +
          '-' +
          this.$store.state.Calendar.day,
        studyId: this.$store.state.Bulletin.attendId,
      };
      memberAttend(attendInfo);
      console.log(check);
      console.log(user);
    },
  },
};
</script>

<style></style>
