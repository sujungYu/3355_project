<template>
  <div>
    <top-title>
      <i class="fa-solid fa-arrow-left-long back" @click="back"></i>
      게시물</top-title
    >
    <study-form></study-form>
  </div>
</template>

<script>
import TopTitle from '@/components/common/TopTitle.vue';
import StudyForm from '@/components/StudyForm.vue';
export default {
  components: {
    TopTitle,
    StudyForm,
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
  position: absolute;
  left: 10vw;
  font-size: 3.2rem;
}
</style>
