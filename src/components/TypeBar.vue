<template>
  <nav>
    <ul class="menu">
      <li id="language" name="menu">언어</li>
      <li id="project" name="menu">프로젝트</li>
      <li id="certificate" name="menu">자격증</li>
      <li id="job" name="menu">취업</li>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted() {
    const menu = document.querySelector('.menu');

    menu.addEventListener('click', e => {
      const selected = e.target;
      this.changeType(selected.id);
      this.select(menu, selected);
    });

    // for (let i = 0; i < 4; i++) {
    //   selectType[i].addEventListener('click', e => {
    //     const selected = e.target;
    //     console.log(e.target);
    //     this.select(selectType, selected);
    //   });
    // }

    // for (let i = 0; i < li.length; i++) {
    //   console.log(li[i]);
    //   li[i].addEventListener('click', e => {
    //     console.log('1');
    //     console.log(e.target.innerText);
    //     console.log(li.length);
    //   });
    // }
  },
  // beforeDestroy() {
  //   const selectType = document.querySelectorAll('.menu li');

  //   selectType.addEventListener('click', e => {
  //     console.log('5');
  //     const selected = e.target;
  //     this.select(selectType, selected);
  //   });
  // },
  methods: {
    data() {
      return {};
    },
    select(ulEl, liEl) {
      Array.from(ulEl.children).forEach(v => {
        v.classList.remove('selected');
      });
      if (liEl) {
        liEl.classList.add('selected');
      }
    },
    async changeType(type) {
      console.log(type);
      await this.$store.dispatch('setBulletin', type);
    },

    // menu() {
    //   const li = document.querySelectorAll('.menu li');

    //   for (let i = 0; i < li.length; i++) {
    //     console.log(li[i]);
    //     li[i].addEventListener('click', e => {
    //       console.log('1');
    //       console.log(e.target.innerText);
    //       console.log(li.length);
    //     });
    //   }

    //   function select(ulEl, liEl) {
    //     console.log('2');
    //     Array.from(ulEl.children).forEach(v => {
    //       console.log('3');
    //       v.classList.remove('selected');
    //     });
    //     if (liEl) {
    //       console.log('4');
    //       liEl.classList.add('selected');
    //     }
    //   }
    //   selectType.addEventListener('click', e => {
    //     console.log('5');
    //     const selected = e.target;
    //     select(selectType, selected);
    //   });

    //   const select = document.getElementsByName('menu').length;
    //   console.log(document.getElementsByName('menu').length);

    //   for (var i = 0; i < select; i++) {
    //     console.log(document.getElementsByName('menu')[i].value);
    //     if (document.getElementsByName('menu')[i].click == true) {
    //       console.log('1');
    //       //   this.type = document.getElementsByName('shop')[i].value;
    //       console.log(document.getElementsByName('menu')[i].value);
    //     }
    //   }
    // },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@300&display=swap');
.menu {
  margin: 0 auto;
  height: 4vh;
  width: 86vw;
}
ul {
  padding: 0;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
li {
  display: inline-block;
}

ul li {
  list-style: none;
  color: rgb(63, 51, 81);
  font-size: 1.6rem;
  font-family: 'Gothic A1', sans-serif;
  font-weight: bold;
}
/* nav {
  margin-bottom: 2vh;
} */
.menu li:hover {
  color: rgb(245, 109, 145);
}
.menu li.selected {
  color: rgb(245, 109, 145);
}
/* .menu li.active {
  color: rgb(245, 109, 145);
} */
</style>
