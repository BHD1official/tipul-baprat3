<template>
    <transition appear name="fade"
    @before-enter= "beforeEnter"
    @enter="enter">    
        <div v-if="stage === 0" class="questionDesign">
            <div class="container-img">
                <img class="answeredOn" src="@/assets/basic/answeredOn.png" alt="answeredOn">
            </div>
            <div class="numberOfTrueAns">{{sumCorrectAns}}</div>
            <div class="container-img">
                <img class="ques" src="@/assets/basic/ques.png" alt="ques">
            </div>
            <div class="container">
                <div id="tryAgain" class="btn" @click="tryAgain">אני רוצה לנסות שוב</div>
                <div id="learn" class="btn" @click="learn">בא לי ללמוד מהטעויות שלי!</div>
            </div>
        </div>
    </transition>

    <pickQuestion v-if="stage === 1" :sumQues="sumQues" :lengthArray="lengthArray" :shortQuestions="shortQuestions" :longQuestions="longQuestions" :trueFalseQues="trueFalseQues" :numberQues="numberQues"></pickQuestion>

</template>

<script>
import PickQuestion from '@/components/EasyTriviaComponents/PickQuestion.vue'
import gsap from 'gsap'

export default {
    props : ["sumTrueAns","lengthArray", "shortQuestions", "longQuestions", "trueFalseQues", "numberQues"],
    components: {
        PickQuestion,
    },
    data() {
        return {
            sumCorrectAns : 0,
            sumQues: 0,
            stage : 0,
        };
    }, 
    methods : {
        sumArray (arr) {
            let sum = 0;
            for(let i = 0; i<arr.length; i++) {
                sum+=Number(arr[i]);
            }
            return sum;
        },
        tryAgain () {
            this.$emit('try-again');
        },
        learn () {
            this.stage++;
        },
        startTest () {
            this.$emit('start-test');
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
    mounted() {
        this.sumCorrectAns = this.sumArray(this.sumTrueAns);
        this.sumQues = this.sumArray(this.lengthArray)+4;
    }
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
    margin-top: 40%;
}


.btn {
    background-image: url("@/assets/shortQuesIcons/shortBubbleIcon.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    direction: rtl;
    font-size: 32%;
    padding: 9%;
    width: 16%;
    margin-top: 8%;
    margin-right: 10%;
    display: flex;
    align-items: center;
}

.container{
    display: flex;
}

.answeredOn {
    width: 16rem;
    height: 7.5rem;
    display: flex;
    margin-bottom: -7%;
    margin-top: 15%;
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