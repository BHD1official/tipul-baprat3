<template>
    <transition appear name="fade"
    @before-enter= "beforeEnter"
    @enter="enter">
        <div class="questionDesign">
            <div class="text1">אופס!</div>
            <div class="text2"> טעית ב3 שאלות</div>
            <div class="text2">נסה שוב</div>
            <div class="container">
                <div class="btn" @click="tryAgain">שחק שוב</div>
            </div>
        </div>
    </transition>


</template>

<script>
import gsap from 'gsap'

export default {
    data() {
        return {
        };
    }, 
    methods : {
        tryAgain () {
            this.$emit('try-again');
        },
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
}
</script>

<style scoped>

.questionDesign {
    text-align: right;
    display: inline-block;
    direction: rtl;
    width: 100%;
    font-size: 269%;
}

.numberOfTrueAns {
    background-image: url("@/assets/shortQuesIcons/shortBubbleIcon.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5%;
    margin-top: 5%;
    margin-bottom: 5%;
}

.text1{
    margin-top: 40%;
    font-size: 150%;
}

.text2 {
    font-size: 69%;
}

.btn {
    background-image: url("@/assets/shortQuesIcons/shortBubbleIcon.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    direction: rtl;
    padding: 5%;
    width: 16%;
    font-size: 38%;
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    margin-top: 10%;
}

.container{
    display: flex;
    width: 100%;
    justify-content: center;

}

</style>