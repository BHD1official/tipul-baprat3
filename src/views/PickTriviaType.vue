<template>
  <HomeBtn></HomeBtn>
  <transition  appear 
  name="fade"
  @before-enter= "beforeEnter"
  @enter="enter">
    <div class="big-container">
      <div class="container">
        <router-link to="/easyTrivia" class="textUnderline">
          <div class="btn">מבחן רגיל</div>
        </router-link>
      </div>
    
      <div class="container">
        <router-link to="/hardTrivia" class="textUnderline">
          <div class="btn">מבחן על זמן</div>
        </router-link>
      </div>
    </div>
  </transition>
  


</template>

<script>
import HomeBtn from '@/components/HomeBtn.vue'
import gsap from 'gsap'

export default ({
  data() {
   return {
   };
  },
  methods : {
        beforeEnter (el) {
            el.style.transform = 'translateY(60px)';
            el.style.opacity = 0;
        },
        enter (el, done) {
            gsap.to(el, {
            duration: 1,
            y: 0, 
            opacity: 1,
            onComplete: done
            })
        },
  },
  components : {
    HomeBtn
  }
})

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
</script>
<style scoped>
.textUnderline {
  text-decoration: none;
}

.container {
  position: relative;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
}

.big-container {
  margin-top: 15%;
}

.img {
  padding: 1rem;
  width: 10rem;
}

.btn {
  cursor: pointer;
  position: relative;
  background-image: url("@/assets/shortQuesIcons/shortBubbleIcon.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  background-position-y: center;
  padding: 2rem;
  font-size: 2.5rem;
  height: 7rem;
  width: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  margin-top: 1rem;
}
</style>
