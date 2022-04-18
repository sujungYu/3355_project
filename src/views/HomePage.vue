<template>
  <div>
    <top-title>삼삼오오</top-title>
    <!-- <type-bar></type-bar> -->
    <i class="fa-solid fa-circle-plus plus" @click="addBulletin"></i>
    <bulletin-list></bulletin-list>
  </div>
</template>

<script>
import TopTitle from '@/components/common/TopTitle.vue';
// import TypeBar from '@/components/TypeBar.vue';
import BulletinList from '@/components/BulletinList.vue';

export default {
  components: {
    TopTitle,
    // TypeBar,
    BulletinList,
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
