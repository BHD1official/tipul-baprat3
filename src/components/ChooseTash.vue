<template>
    <HomeBtn></HomeBtn>
    <transition  appear 
    name="fade"
    @before-enter= "beforeEnter"
    @enter="enter">
        <div class="big-container">
            בחרו בפרק שאתם רוצים לקרוא:
            <router-link class="container" :to="{ name: 'learningScreen', params : { subject: 'tash1'} }">
                <div class="mini-container">
                    <div class="episode">פרק 1</div>
                    <div class="title">חיילי או''י (אוכלוסיות מיחדות)</div>
                </div>
            </router-link>
            <router-link class="container" :to="{ name: 'learningScreen', params : { subject: 'tash2'} }">
                <div class="mini-container">
                    <div class="episode">פרק 2</div>
                    <div class="title">הת''ש (הקלות בתנאי שירות)</div>
                </div>
            </router-link>
            <router-link class="container" :to="{ name: 'learningScreen', params : { subject: 'tash3'} }">
                <div class="mini-container">
                    <div class="episode">פרק 3</div>
                    <div class="title">חיילי תחום אפור</div>
                </div>
            </router-link>
            <router-link class="container" :to="{ name: 'learningScreen', params : { subject: 'tash4'} }">
                <div class="mini-container">
                    <div class="episode">פרק 4</div>
                    <div class="title">חופשות מיוחדות</div>
                </div>
            </router-link>
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
</script>

<style scoped>

.big-container {
    margin-top: 5rem;
}

.episode {
    width: 21.5rem;
    font-size: 1.1rem;
}

.title {
    width: 21.5rem;
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
}


.container{
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    text-decoration: none;
}
.mini-container {
    cursor: pointer;
    background-image: url("@/assets/longQuesIcons/longBubbleIcon.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    padding: 2rem 2.2rem 3rem 2.2rem;
    width: 19rem;
    height: 3rem;
    margin-bottom: -1.6rem;
    margin-top: 0.5rem;
    font-size: 1.2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    transition: all 0.5s ease; 
}


</style>
