<template>
  <div>
    <div class="select">
      <select id="area1" v-model="si" @change="selection">
        <!-- <option selected="disabled">시</option> -->
        <option
          v-for="(item, index) in koreaCategory"
          :key="index"
          :value="index"
        >
          {{ index }}
        </option>
      </select>
      <select id="area2" v-model="gungu" @change="selectgungu">
        <!-- <option selected="disabled">군구</option> -->
      </select>
      <select id="area3" v-model="dong">
        <!-- <option selected="disabled">읍면동</option> -->
      </select>
    </div>
  </div>
</template>

<script>
import koreaCategory from '@/assets/koreaCategory.json';
export default {
  data() {
    return {
      koreaCategory,
      si: '',
      gungu: '',
      dong: '',
    };
  },
  methods: {
    selection() {
      const si = document.getElementById('area1');
      console.log(si);
      const gungu = document.getElementById('area2');

      const area = si.options[si.selectedIndex].value;
      const mainArea = koreaCategory[area];

      gungu.options.length = 0;

      for (var i in mainArea) {
        var opt = document.createElement('option');
        opt.value = mainArea[i];
        opt.text = mainArea[i];

        gungu.appendChild(opt);
      }
      this.$emit('si', this.si);
      // console.log(this.si);
      // this.$emit(this.si);
    },
    selectgungu() {
      console.log(this.gungu);
      this.$emit('gungu', this.gungu);
    },
  },
};
</script>

<style scoped>
select {
  border: 1px solid rgb(233, 233, 222);
  border-radius: 10px;
  width: 25vw;
  height: 5.8vh;
}
.select {
  width: 86vw;
  display: flex;
  justify-content: space-between;
}
</style>
