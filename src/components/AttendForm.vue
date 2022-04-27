<template>
  <div class="container">
    <select id="name" @change="myList" class="selectStudy">
      <option selected disabled>스터디 선택</option>
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
    <template v-if="this.onlyName.length != 0">
      <select id="user" v-model="user" @change="user" class="member">
        <option v-for="user in onlyName" :key="user">
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
      studyList: [],
      studyUsers: [],
      onlyName: [],
      // onlyUser: [],
    };
  },
  async created() {
    this.user = JSON.parse(localStorage.getItem('user')).userName;
    await this.$store.dispatch('setAttend', this.user);
    this.studyList = this.$store.state.Bulletin.myStudy;
    this.studyList.filter(e => {
      return this.studyNameLists.push(e.title);
    });
  },
  methods: {
    init() {
      this.studyUsers = [];
      this.onlyUser = [];
    },
    myList() {
      this.init();
      const selecName = document.getElementById('name');
      const selectOption = selecName.options[selecName.selectedIndex].value;
      this.$store.commit('nowAttend', selectOption);
      //   this.$store.dispatch('attendCheck', selectOption) // AttendCheckPage를 위해
      this.studyList.filter(e => {
        if (e.title == selectOption) {
          this.$store.commit('attendId', e.id);
          return this.studyUsers.push(e.user);
        }
      });
      // console.log(this.studyUsers);
      // const alal = this.studyUsers[0];
      //   console.log(this.user);
      const users = this.studyUsers[0];
      for (let i = 0; i < users.length; i++) {
        if (users[i].name == this.user && users[i].manager == true) {
          for (let k = 0; k < users.length; k++) {
            this.onlyName.push(users[k].name);
          }
          return this.$store.commit('studyUser', this.onlyName);
        } else {
          return (this.onlyName = []);
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
