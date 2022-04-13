<template>
  <div>
    <i class="fas fa-times" @click="cancel"></i>
    <h1>회원가입</h1>
    <hr
      style="width:88vw; height:2px; border:none; background-color:rgb(245, 109, 145);"
    />
    <signup-from></signup-from>
  </div>
</template>

<script>
import SignupFrom from '../components/SignupForm.vue';
export default {
  components: {
    SignupFrom,
  },
  methods: {
    cancel() {
      this.$router.replace('./login');
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sunflower:wght@300&display=swap');
div {
  margin: 2.3vh auto;
}
h1 {
  display: inline-block;
  width: 100vw;
  text-align: center;
  margin: 0 auto;
  margin-bottom: -1vh;
  font-family: 'Sunflower', sans-serif;
  font-size: 3.6rem;
  color: rgb(245, 109, 145);
}
i {
  left: 10vw;
  position: absolute;
  font-size: 3.2rem;
  color: rgb(245, 109, 145);
}
hr {
  position: relative;
  margin: 0 auto;
  /* top: 1vh; */
}
</style>
