<template>
  <div>
    <top-title>출석관리</top-title>
    <attend-form></attend-form>
    <footer-bar class="footer"></footer-bar>
  </div>
</template>

<script>
import AttendForm from '../components/AttendForm.vue';
import TopTitle from '../components/common/TopTitle.vue';
import FooterBar from '../components/FooterBar.vue';
export default {
  components: { TopTitle, AttendForm, FooterBar },
};
</script>

<style>
div {
  margin: 2.3vh auto;
}
.footer {
  position: fixed;
  top: 88vh;
}
</style>
