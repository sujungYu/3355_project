<template>
  <div>
    <h2>{{ this.study.title }}</h2>
    <hr
      style="width:86vw; height:1px; border:none; background-color:rgb(223, 223, 222);"
    />
    <h3>기간 : {{ this.study.start }}~{{ this.study.end }}</h3>
    <hr
      style="width:86vw; height:1px; border:none; background-color:rgb(223, 223, 222);"
    />
    <h3>{{ this.study.rule }}</h3>
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
h2 {
  font-size: 2rem;
  text-align: center;
}
h3 {
  margin: 0 auto;
  font-size: 1.5rem;
  /* text-align: center; */
  width: 86vw;
}
</style>
