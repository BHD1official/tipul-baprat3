<template>
    <transition appear name="btn">
        <div class="homeBtn">
            <router-link :to="{name : 'homePage'}">
                <img src="@/assets/basic/homeIcon.png" class="btn" alt="homeBtn">
            </router-link>
        </div>
    </transition>

</template>

<script>
import gsap from 'gsap'

export default ({
    data() {
     return {

     };
    },
    methods : {
      
    },
    components : {
    }
  })
</script>

<style scoped>
.btn{
    cursor: pointer;
    display: inline-block;
    position: fixed;
    top: 3%;
    width: 2.5rem;
    z-index: 5;
}

.homeBtn {
    position: relative;
    display: flex;
    justify-content: flex-start;
    padding-right: 2rem;
}


.btn-enter-active{
    animation: enterAni 1s ease;
 }
 
 @keyframes enterAni {
     0% {
         transform: translateX(5rem);
         top: 3%;
     }
     100% {
         transform: translateX(0);
         top: 3%;
     }
 }
 
 @-webkit-keyframes enterAni {
     0% {
        transform: translateX(5rem);
         top: 3%;
     }
     100% {
        transform: translateX(0);
        top: 3%;
     }
 }
 
</style>
