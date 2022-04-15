<template>
  <div>
    <top-title>삼삼오오</top-title>
    <i class="fa-solid fa-circle-plus plus" @click="addBulletin"></i>
  </div>
</template>

<script>
import TopTitle from '@/components/common/TopTitle.vue';
export default {
  components: {
    TopTitle,
  },
  methods: {
    addBulletin() {
      this.$router.push(`/bulletin`);
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sunflower:wght@300&display=swap');
div {
  margin: 2.3vh auto;
}
.plus {
  position: fixed;
  top: 90vh;
  left: 80vw;
  font-size: 4.5rem;
  color: rgb(245, 109, 145);
}
</style>
