<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <input type="text" placeholder="아이디" v-model="userId" />
      </div>
      <div>
        <input type="password" placeholder="비밀번호" v-model="userPw" />
      </div>
      <button>
        로그인
      </button>
    </form>
    <router-link to="/signup">회원가입</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      userPw: '',
    };
  },
  methods: {
    async submitForm() {
      await this.$store.dispatch('login', this.userId);
      const id = this.$store.state.Login.loginUser;
      this.$router.push(`/home/${id}`);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@500&display=swap');
div {
  text-align: center;
}
input {
  border-radius: 10px;
  border: 1px solid rgb(245, 109, 145);
  width: 86vw;
  height: 6vh;
  margin-bottom: 3.5vh;
  outline-color: rgb(245, 109, 145);
  /* font-family: 'Gothic A1', sans-serif; */
}
input::placeholder {
  color: rgb(223, 223, 222);
  font-family: 'Gothic A1', sans-serif;
}
form {
  margin-top: 15vh;
}
button {
  border: 1px solid rgb(245, 109, 145);
  border-radius: 10px;
  width: 86vw;
  height: 9vh;
  font-size: 2.4rem;
  background-color: rgb(245, 109, 145);
  color: white;
  font-family: 'Gothic A1', sans-serif;
  margin-bottom: 4vh;
}
a {
  text-decoration: none;
  color: rgb(245, 109, 145);
  font-size: 1.6rem;
}
</style>
