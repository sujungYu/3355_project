<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="title-container">
        <input type="text" placeholder="제목" v-model="title" class="title" />
      </div>

      <div>
        <h2>카테고리 선택</h2>
        <div class="select" @change="select">
          <input type="radio" id="select1" name="shop" value="language" />
          <label for="select1">언어</label>
          <input type="radio" id="select2" name="shop" value="project" />
          <label for="select2">프로젝트</label>
          <input type="radio" id="select3" name="shop" value="certificate" />
          <label for="select3">자격증</label>
          <input type="radio" id="select4" name="shop" value="job" />
          <label for="select4">취업</label>
        </div>
        <hr
          style="width:88vw; height:1px; border:none; background-color:rgb(233, 233, 222);"
        />
      </div>

      <div>
        <h2>스터디 기간</h2>
        <!-- <select id="date" @change="date" class="date">
          <option value="7일">월</option>
          <option value="10일">화</option>
        </select> -->
        <section>
          <!-- eslint-disable-next-line prettier/prettier -->
        <date-picker v-model="start" :lang="lang" placeholder="시작일" valueType="format"></date-picker>
          <!-- eslint-disable-next-line prettier/prettier -->
        <date-picker v-model="end" :lang="lang" placeholder="종료일" valueType="format"></date-picker>
        </section>
        <hr
          style="width:88vw; height:1px; border:none; background-color:rgb(233, 233, 222);"
        />
      </div>

      <div class="select-container">
        <h2>스터디 지역</h2>
        <select-area @si="selectSi" @gungu="selectGunGu"></select-area>
        <hr
          style="width:88vw; height:1px; border:none; background-color:rgb(233, 233, 222);"
        />
      </div>

      <div class="textarea-container">
        <h2 class="text-container">스터디 소개</h2>
        <select id="period" @change="period" class="period">
          <option selected="disabled">모집마감일</option>
          <option value="7">7일 후</option>
          <option value="10">10일 후</option>
          <option value="15">15일 후</option>
          <option value="30">30일 후</option>
        </select>
        <textarea v-model="studyRule"> </textarea>
      </div>
      <i class="fa-solid fa-circle-check submit" @click="submitForm"></i>
    </form>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import { addBulletin } from '@/api/index.js';
import SelectArea from './common/SelectArea.vue';
export default {
  components: { DatePicker, SelectArea },
  data() {
    return {
      title: '',
      type: '',
      start: null,
      end: null,
      studyRule: '',
      studyPeriod: '',
      si: '',
      gungu: '',

      lang: {
        days: ['일', '월', '화', '수', '목', '금', '토'],
        months: [
          '1월',
          '2월',
          '3월',
          '4월',
          '5월',
          '6월',
          '7월',
          '8월',
          '9월',
          '10월',
          '11월',
          '12월',
        ],
        yearFormat: 'YYYY년',
        monthFormat: 'MM월',
        monthBeforeYear: false,
      },

      //   value2: [],
    };
  },
  methods: {
    selectSi(si) {
      console.log(si);
      this.si = si;
    },
    selectGunGu(gungu) {
      console.log(gungu);
      this.gungu = gungu;
    },
    select() {
      const sl = document.getElementsByName('shop').length;

      for (var i = 0; i < sl; i++) {
        if (document.getElementsByName('shop')[i].checked == true) {
          this.type = document.getElementsByName('shop')[i].value;
          console.log(document.getElementsByName('shop')[i].value);
        }
      }
    },
    period() {
      const select = document.getElementById('period');
      this.studyPeriod = select.options[select.selectedIndex].value;
      console.log(this.studyPeriod);
    },
    submitForm() {
      const newBulletin = {
        title: this.title,
        type: this.type,
        start: this.start,
        end: this.end,
        rule: this.studyRule,
        period: this.studyPeriod,
        do: this.si,
        sigungu: this.gungu,
        // gungu: this.gungu,
      };
      addBulletin(newBulletin);
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@300&display=swap');
/* div안 h 태그에 margin 안먹힘 */
h2 {
  margin: 0 auto;
  width: 86vw;
  font-family: 'Gothic A1', sans-serif;
  color: rgb(141, 141, 170);
  font-size: 1.6rem;
}
.title-container {
  text-align: center;
}
.title {
  border: 1px solid rgb(233, 233, 222);
  border-top: 0;
  border-left: 0;
  border-right: 0;
  height: 5.8vh;
  width: 86vw;
  outline-color: rgb(245, 109, 145);
}
.title::placeholder {
  color: rgb(223, 223, 222);
  font-family: 'Gothic A1', sans-serif;
}
.select {
  width: 86vw;
  display: flex;
  justify-content: space-between;
}
/* 실제 체크박스를 화면에서 숨김*/
.select input[type='radio'] {
  display: none;
}
/* 가짜 체크박스 */
.select input[type='radio'] + label {
  display: inline-block;
  cursor: pointer;
  height: 5vh;
  width: 19vw;
  border: 2px solid rgb(245, 109, 145);
  border-radius: 15px;
  line-height: 5vh; /* 세로 정렬을 위해 높이값과 일치*/
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
}
.select input[type='radio'] + label {
  background-color: white;
  color: rgb(245, 109, 145);
}
/* 체크박스를 체크 했을 때 */
.select input[type='radio']:checked + label {
  background-color: rgb(245, 109, 145);
  color: white;
}
section {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 86vw;
  /* height: 9vh; */
}
.mx-calendar {
  border: 3px solid rgb(245, 109, 145);
}
.mx-datepicker {
  margin: 0;
  width: 41vw;
  height: 9vh;
}
.mx-icon-calendar {
  color: rgb(245, 109, 145);
}
/* td.cell:nth-child(1) {
  color: red;
}
td.cell:nth-child(7) {
  color: blue;
}
td.cell.today {
  color: red;
}
td.cell.active {
  background-color: rgb(245, 109, 145) !important;
} */
.textarea-container {
  margin: 0 auto;
  width: 86vw;
}
.text-container {
  width: 57vw;
  display: inline-block;
  margin-bottom: 1vh;
}
textarea {
  margin: 0 auto;
  width: 86vw;
  height: 35vh;
  border: none;
  outline-color: rgb(245, 109, 145);
}
textarea::placeholder {
  width: 86vw;
  font-family: 'Gothic A1', sans-serif;
  color: rgb(141, 141, 170);
  font-size: 1.6rem;
  font-weight: bold;
}
.period {
  position: absolute;
  border: 1px solid rgb(233, 233, 222);
  border-radius: 10px;
  width: 30vw;
  height: 4vh;
}
.submit {
  font-size: 3.2rem;
  position: relative;
  left: 85vw;
  /* top: 93vh;
  left: 85vw; */
  color: rgb(245, 109, 145);
}
</style>
