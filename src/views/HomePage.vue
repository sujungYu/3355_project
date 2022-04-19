<template>
  <div>
    <top-title>
      <i class="fa-solid fa-arrow-right-from-bracket out" @click="out"></i>
      삼삼오오
    </top-title>
    <!-- <type-bar></type-bar> -->
    <i class="fa-solid fa-circle-plus plus" @click="addBulletin"></i>
    <bulletin-list></bulletin-list>
    <footer-bar class="footer"></footer-bar>
  </div>
</template>

<script>
import TopTitle from '@/components/common/TopTitle.vue';
// import TypeBar from '@/components/TypeBar.vue';
import BulletinList from '@/components/BulletinList.vue';
import FooterBar from '@/components/FooterBar.vue';

export default {
  components: {
    TopTitle,
    // TypeBar,
    BulletinList,
    FooterBar,
  },
  methods: {
    addBulletin() {
      this.$router.push(`/bulletin`);
    },
    out() {
      localStorage.removeItem('user');
      this.$router.push('/login');
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
  top: 77vh;
  left: 80vw;
  font-size: 4.5rem;
  color: rgb(245, 109, 145);
}
.out {
  position: absolute;
  left: 10vw;
  font-size: 3.2rem;
}
.footer {
  position: fixed;
  top: 88vh;
}
</style>
