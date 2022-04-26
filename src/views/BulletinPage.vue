<template>
  <div>
    <i class="fas fa-times back" @click="back"></i>
    <top-title>게시물 작성</top-title>
    <bulletin-form></bulletin-form>
  </div>
</template>

<script>
import TopTitle from '@/components/common/TopTitle.vue';
import BulletinForm from '@/components/BulletinForm.vue';
export default {
  components: {
    TopTitle,
    BulletinForm,
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
div {
  margin: 2.3vh auto;
}
.back {
  left: 10vw;
  position: absolute;
  font-size: 3.2rem;
  color: rgb(245, 109, 145);
}
</style>
