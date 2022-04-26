<template>
  <div class="container">
    <select id="name" @change="myList" class="selectStudy">
      <option v-for="studyNameList in studyNameLists" :key="studyNameList">
        {{ studyNameList }}
      </option>
    </select>
    <attend>
      <template v-slot:title>
        내 출석부
      </template>
      <template v-slot:attend>
        1회
      </template>
      <template v-slot:late>
        1회
      </template>
      <template v-slot:absence>
        1회
      </template>
    </attend>
    <template v-if="this.useruser.length != 0">
      <select id="user" v-model="user" @change="user" class="member">
        <option v-for="user in useruser" :key="user">
          {{ user }}
        </option>
      </select>
      <attend>
        <template v-slot:title>
          스터디 출석부
        </template>

        <template v-slot:attend>
          1회
        </template>
        <template v-slot:late>
          1회
        </template>
        <template v-slot:absence>
          1회
        </template>
      </attend>
      <!-- <div>
        <attend>스터디 출석부</attend>
      </div> -->
      <button class="attend-check" @click="check">출석 체크</button>
    </template>
  </div>
</template>

<script>
import Attend from '../components/common/Attend.vue';
export default {
  components: { Attend },
  data() {
    return {
      user: '',
      studyNameLists: [],
      allStudy: [],
      studyUsers: [],
      useruser: [],
      onlyUser: [],
    };
  },
  async created() {
    this.user = JSON.parse(localStorage.getItem('user')).userName;
    await this.$store.dispatch('attendUser', this.user);
    this.allStudy = this.$store.state.Bulletin.attendStudy;
    this.allStudy.filter(e => {
      return this.studyNameLists.push(e.title);
    });
  },
  methods: {
    myList() {
      this.studyUsers = [];
      this.onlyUser = [];
      const selecName = document.getElementById('name');
      const selectOption = selecName.options[selecName.selectedIndex].value;
      this.$store.commit('nowAttend', selectOption);
      //   this.$store.dispatch('attendCheck', selectOption) // AttendCheckPage를 위해
      this.allStudy.filter(e => {
        if (e.title == selectOption) {
          return this.studyUsers.push(e.user);
        }
      });
      const alal = this.studyUsers[0];
      //   console.log(this.user);
      for (let i = 0; i < alal.length; i++) {
        if (alal[i].name == this.user && alal[i].manager == true) {
          for (let k = 0; k < alal.length; k++) {
            console.log(alal[k].name);
            this.useruser.push(alal[k].name);
          }
          console.log(this.useruser);
          return this.useruse;
        } else {
          return (this.useruser = []);
        }
      }
    },
    check() {
      this.$router.push('./attend/check');
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 5.5vh;
  width: 86vw;
}
.selectStudy {
  margin-bottom: 5.5vh;
  width: 86vw;
  height: 4.5vh;
  border: 1px solid rgb(245, 109, 145);
}
.attend-check {
  /* margin-top: 4vh; */
  width: 86vw;
  height: 8vh;
  font-size: 2rem;
  background-color: white;
  border: 1px solid rgb(245, 109, 145);
  color: rgb(245, 109, 145);
  font-family: 'Gothic A1', sans-serif;
}
.member {
  position: absolute;
  left: 72vw;
}
</style>
