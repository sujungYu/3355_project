<template>
  <div class="footer">
    <div class="icon" @click="home">
      <i class="fa-solid fa-house"></i>
      홈
    </div>
    <div class="icon">
      <i class="fa-solid fa-comments"></i>
      채팅
    </div>
    <div class="icon" @click="attend">
      <i class="fa-solid fa-circle-check"></i>
      출석
    </div>
    <!-- <div class="icon" @click="info">
      <i class="fa-solid fa-user"></i>
      내 정보
    </div> -->
  </div>
</template>

<script>
export default {
  methods: {
    home() {
      const id = JSON.parse(localStorage.getItem('user')).userId;
      this.$router.push(`/home/${id}`);
    },
    attend() {
      this.$router.push(`/attend`);
    },
    // info() {

    // }
  },
};
</script>

<style scoped>
.footer {
  /* display: inline-block; */
  margin: 0 auto;
  width: 100vw;
  height: 10vh;
  padding: 1vh 0;
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: rgb(245, 109, 145);
  color: white;
}
.icon {
  display: inline-block;
  font-size: 1.2rem;
}
i {
  font-size: 2.4rem;
  display: block;
}
</style>
