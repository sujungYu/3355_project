<template>
  <div>
    <h2>{{ this.study.title }}</h2>
    <hr
      style="width:86vw; height:1px; border:none; background-color:rgb(223, 223, 222);"
    />
    <h3 class="term">기간 : {{ this.study.start }} ~ {{ this.study.end }}</h3>
    <hr
      style="width:86vw; height:1px; border:none; background-color:rgb(223, 223, 222);"
    />
    <h4>안산시 고잔동</h4>
    <!-- <div class="date-container">
      <h3 class="date">요일</h3>
      <h3 class="date"><span>|</span>시간</h3>
    </div> -->

    <!-- <hr
      style="width:86vw; height:1px; border:none; background-color:rgb(223, 223, 222);"
    /> -->
    <h3>{{ this.study.rule }}</h3>
    <hr
      class="end"
      style="width:86vw; height:1px; border:none; background-color:rgb(223, 223, 222);"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      study: '',
    };
  },
  async created() {
    const info = {
      type: this.$route.params.type,
      id: this.$route.params.id,
    };

    await this.$store.dispatch('setStudy', info);
    this.study = this.$store.state.Bulletin.studyInfo;
    console.log(this.study);
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
h2 {
  font-size: 2rem;
  text-align: center;
  font-family: 'Gothic A1', sans-serif;
}
h3 {
  margin: 0 auto;
  font-size: 1.5rem;
  /* text-align: center; */
  width: 86vw;
  font-family: 'Gothic A1', sans-serif;
}
h4 {
  margin: 2vh auto;
  font-size: 1.4rem;
  font-family: 'Gothic A1', sans-serif;
  color: rgb(141, 141, 170);
  width: 86vw;
  text-align: end;
}
.date {
  display: inline-block;
  width: 43vw;
}
span {
  color: rgb(223, 223, 222);
}
.date-container {
  margin: 0 auto;
  width: 86vw;
}
.term {
  height: 7vh;
  line-height: 7vh;
}
.end {
  position: absolute;
  top: 90vh;
  left: 7vw;
}
</style>
