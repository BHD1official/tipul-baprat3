<template>
  <HomeBtn></HomeBtn>
  <div class="container">
    <router-link to="/easyTrivia" class="textUnderline">
      <div>מבחן רגיל</div>
      <img class="img" src="@/assets/shortQuesIcons/shortBubbleIcon.png" alt="bubble">
    </router-link>
  </div>

  <div class="container">
    <router-link to="/hardTrivia" class="textUnderline">
      <img class="img" src="@/assets/hardTriviaIcons/heartIcon.png" alt="heart">
      <div>מבחן על זמן</div>
    </router-link>
  </div>


</template>

<script>
import HomeBtn from '@/components/HomeBtn.vue'

export default ({
  data() {
   return {
   };
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
  top: 10%;
}

.img {
  padding: 1rem;
  width: 10rem;
}
</style>
