<template>
    <transition appear name="fade"
    @before-enter= "beforeEnter"
    @enter="enter">
        <div class="questionDesign">
            <div class="text1">נגמר הזמן!</div>
            <div class="container-img">
                <img class="answeredOn" src="@/assets/basic/answeredOn.png" alt="answeredOn">
            </div>
            <div class="numberOfTrueAns">{{sumTrueAns}}</div>
            <div class="container-img">
                <img class="ques" src="@/assets/basic/ques.png" alt="ques">
            </div>
            <div class="container">
                <div class="btn" @click="tryAgain">שחק שוב</div>
            </div>
        </div>
    </transition>

</template>

<script>
import gsap from 'gsap'

export default {
    props : ["sumTrueAns"],
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
    padding: 6%;
    margin-top: 5%;
    margin-bottom: 5%;
    font-size: 145%;
}

.text1{
    margin-top: 17%;
    margin-bottom: 5%;
}


.btn {
    background-image: url("@/assets/shortQuesIcons/shortBubbleIcon.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    direction: rtl;
    font-size: 38%;
    padding: 5%;
    width: 16%;
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

.answeredOn {
    width: 16rem;
    height: 7.5rem;
    display: flex;
    margin-bottom: -7%;
}

.container-img {
    display: flex;
    justify-content: center;
}

.ques {
    width: 12rem;
    height: 5.2rem;
}


</style>