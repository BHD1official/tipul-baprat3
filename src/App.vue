<template>
  <div id="content" ref="appView">
      <!-- <router-link to="/">fff</router-link> |
      <router-link to="/about">About</router-link> -->
    <router-view/>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
   return {
   };
  },

    mounted() {
    this.resizeHandler();
    window.addEventListener("resize", this.resizeHandler);
  },
  unmounted() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    resizeHandler() {
   let width= window.innerWidth
   let height= window.innerHeight
   
   if(!(width <= 600 && height<= 1000 && (height/width) <= 2.5 && (height/width) >=1.5)) {
      this.$refs.appView.style.height = `${Math.min(height, (width*2))}px`
      this.$refs.appView.style.width= `${Math.min(width, (height*0.5))}px`
   }

      this.$refs.appView.style.margin= `auto`
    },
  },
})
</script>


<style>

@font-face {
  font-family: "galacti";
  src: url(./assets/font/GalactiCondensed-Regular-FFC.otf);
}

* {
  direction: rtl;
  text-align: start;
  font-family: "galacti";
  user-select: none;
  text-align: center;
  color: #f9f6ec;
}

html,
body {
  height: 100vh;
  width: 100vw;
  scroll-behavior: smooth;
  overflow: hidden;
  background-color: aliceblue;
}

html {
  display: table;
  margin: auto;
}

body {
  position: relative;
  vertical-align: middle;
  background-color: var(--ion-color-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-weight: 500;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  user-select: none;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#content {
  display: block;
  height: 100%;
  width: 100%;
  background-image: url("./assets/basic/background.png");
}
</style>
