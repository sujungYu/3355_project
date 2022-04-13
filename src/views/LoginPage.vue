<template>
  <div class="login">
    <div class="title">
      <h1>삼삼오오</h1>
      <i class="fa fa-pencil"></i>
      <hr
        style="width:88vw; height:2px; border:none; background-color:rgb(245, 109, 145);"
      />
    </div>

    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sunflower:wght@300&display=swap');
div {
  margin: 0vh auto;
}
h1 {
  display: inline-block;
  width: 100vw;
  text-align: center;
  margin: 0 auto;
  margin-bottom: -1vh;
  font-family: 'Sunflower', sans-serif;
  font-size: 4rem;
  color: rgb(245, 109, 145);
}
i {
  margin-top: 20px;
  left: 75vw;
  position: absolute;
  font-size: 2.4rem;
  color: rgb(245, 109, 145);
}
hr {
  position: relative;
  margin: 0 auto;
  /* top: 1vh; */
}
.title {
  padding-top: 20vh;
}
</style>
