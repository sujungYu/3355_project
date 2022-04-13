<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="" class="label">이름</label>
        <input type="text" v-model="userName" />
      </div>
      <div>
        <label for="" class="label">아이디(닉네임)</label>
        <input class="id" type="text" v-model="userNickname" />
        <button class="idCheck" @click.prevent="idCheck">중복확인</button>
      </div>
      <div>
        <label for="" class="label">비밀번호</label>
        <input type="password" v-model="userPw" />
      </div>
      <div>
        <label for="" class="label">비밀번호 확인</label>
        <input type="password" v-model="checkPw" />
      </div>
      <div>
        <label for="" class="label">지역 선택</label>
        <div class="select">
          <select id="select1" v-model="si" @change="selection()">
            <!-- <option selected disabled>시</option> -->
            <option
              v-for="(item, index) in koreaCategory"
              :key="index"
              :value="index"
            >
              {{ index }}
            </option>
          </select>
          <select id="select2" v-model="gungu">
            <!-- <option selected disabled>군구</option> -->
          </select>
          <select id="select3" v-model="dong">
            <!-- <option selected disabled>읍면동</option> -->
          </select>
        </div>
      </div>
      <button class="submit" type="submit">가입하기</button>
    </form>
  </div>
</template>

<script>
import koreaCategory from '@/assets/koreaCategory.json';
import { signUp } from '@/api/index.js';
export default {
  data() {
    return {
      userName: '',
      userNickname: '',
      userPw: '',
      checkPw: '',
      si: '',
      gungu: '',
      dong: '',
      koreaCategory,
    };
  },
  methods: {
    submitForm() {
      const newUser = {
        name: this.userName,
        nickname: this.userNickname,
        pw: this.userPw,
        area: { 시: this.si, 군구: this.gungu, 동: this.dong },
      };
      signUp(newUser);
      this.$router.push('./login');
    },
    selection() {
      const si = document.getElementById('select1');
      const gungu = document.getElementById('select2');

      const area = si.options[si.selectedIndex].value;
      const mainArea = koreaCategory[area];
      // console.log(a.options[a.selectedIndex]);

      // console.log(koreaCategory[main]);

      gungu.options.length = 0;

      // for (var i = 0; i < rr; i++) {
      //   var opt = document.createElement('option');
      //   opt.value = rr[i];
      //   b.append(opt);
      // }

      for (var i in mainArea) {
        var opt = document.createElement('option');
        opt.value = mainArea[i];
        opt.text = mainArea[i];

        gungu.appendChild(opt);
        // b.append(opt);
        // console.log(b.appendChild(opt));
      }
      // console.log(opt);

      // opt.value = koreaCategory[main];
      // console.log(opt.value);

      // for (x in rr) {
      //   var opt = document.createElement('option');
      //   opt.value = rr[x];
      //   b.appendChild(opt);
      // }

      // koreaCategory.filter(e => {
      //   return e == '서울특별시';
      // });

      // koreaCategory.filter(e => {
      //   // console.log(main);
      //   // console.log(e == main);
      //   console.log(e);
      // });

      // koreaCategory.forEach(e => {
      //   console.log(e);
      // });

      // console.log(koreaCategory == main);

      // b.options.length = 0;

      // console.log(main);
      // font (var i=0; i<)
      // b.append('가가');

      // this.koreaCategory.forEach(e => {
      //   console.log(e);
      // });

      // console.log(a.options[a.selectedIndex].value);
      // var target = document.getElementById('select1');
      // console.log(target.options[target.sele]);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@500&display=swap');
div {
  margin: 0 auto;
  font-family: 'Gothic A1', sans-serif;
}
.label {
  display: block;
}
form {
  width: 88vw;
  margin: 5vh auto;
}
input {
  border: 1px solid rgb(233, 233, 222);
  border-radius: 10px;
  height: 5.8vh;
  margin-bottom: 3vh;
  margin-top: 1.4vh;
  width: 86vw;
}
label {
  font-size: 1.4rem;
  color: rgb(63, 51, 81);
}
.id {
  width: 61vw;
  margin-right: 1vw;
}
.idCheck {
  border-radius: 10px;
  border: 1px solid rgb(245, 109, 145);
  height: 5.8vh;
  width: 24vw;
  background-color: white;
  color: rgb(245, 109, 145);
  font-family: 'Gothic A1', sans-serif;
  font-size: 1.4rem;
}
select {
  margin-top: 1.4vh;
  /* margin-right: 4vw; */
  border: 1px solid rgb(233, 233, 222);
  border-radius: 10px;
  width: 25vw;
  height: 5.8vh;
}
.select {
  display: flex;
  justify-content: space-between;
}
.submit {
  margin-top: 4vh;
  width: 86vw;
  height: 9vh;
  font-size: 2.4rem;
  border-radius: 10px;
  background-color: rgb(245, 109, 145);
  border: none;
  color: white;
  font-family: 'Gothic A1', sans-serif;
}
</style>
