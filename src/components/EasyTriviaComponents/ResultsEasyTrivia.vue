<template>
    <div v-if="stage === 0" class="questionDesign">
        <div class="text1">ענית נכון על</div>
        <div class="numberOfTrueAns">{{sumCorrectAns}}</div>
        <div>שאלות</div>
        <!-- <div>sumQues: {{sumQues}}</div> -->
        <div class="container">
            <div id="tryAgain" class="btn" @click="tryAgain">אני רוצה לנסות שוב</div>
            <div id="learn" class="btn" @click="learn">בא לי ללמוד מהטעויות שלי!</div>
        </div>
    </div>
    <pickQuestion v-if="stage === 1" :sumQues="sumQues" :lengthArray="lengthArray" :shortQuestions="shortQuestions" :longQuestions="longQuestions" :trueFalseQues="trueFalseQues" :numberQues="numberQues"></pickQuestion>

</template>

<script>
import PickQuestion from '@/components/EasyTriviaComponents/PickQuestion.vue'

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
        }

    },
    mounted() {
        this.sumCorrectAns = this.sumArray(this.sumTrueAns);
        console.log(this.sumCorrectAns);
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
    padding: 5%;
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

</style>