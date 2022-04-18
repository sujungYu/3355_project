<template>
  <div>
    <top-title>게시물</top-title>
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
};
</script>

<style scoped>
div {
  margin: 2.3vh auto;
}
</style>
