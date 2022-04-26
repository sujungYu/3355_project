<template>
  <div>
    <i class="fas fa-times back" @click="back"></i>
    <top-title>출석 체크</top-title>
    <h2 class="attend-title">{{ title }}</h2>
    <calendar-form></calendar-form>
  </div>
</template>

<script>
import CalendarForm from '../components/CalendarForm.vue';
import TopTitle from '../components/common/TopTitle.vue';
export default {
  components: {
    CalendarForm,
    TopTitle,
  },
  data() {
    return {
      title: '',
    };
  },
  created() {
    this.title = this.$store.state.Bulletin.attendName;
    console.log(this.title);
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
div {
  margin: 2.3vh auto;
  margin-bottom: 0;
}
.back {
  left: 10vw;
  position: absolute;
  font-size: 3.2rem;
  color: rgb(245, 109, 145);
}
.attend-title {
  margin: 1vh auto;
  margin-bottom: 2vh;
  width: 86vw;
  height: 6vh;
  line-height: 6vh;
  font-family: 'Gothic A1', sans-serif;
  font-size: 1.9rem;
  text-align: center;

  border-radius: 15px;
  /* font-weight: 300; */
  color: rgb(245, 109, 145);
  border: 2px solid rgb(245, 109, 145);
  /* background-color: rgb(245, 109, 145);
  color: white; */
}
</style>
