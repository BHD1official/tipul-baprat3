<template>
    <HomeBtn></HomeBtn>
    <Explain v-if="quesType === -1" @start-test="startTest"></Explain>
    <shortQues1 v-if="quesType === 0" :count1="count[0]" :shortQuestions="shortQues" @finish="nextQuestionType"></shortQues1>
    <longQues1 v-if="quesType === 1" :count1="count[1]" :longQuestions="longQues" :startPoint="shortQues.length" @finish="nextQuestionType" @go-back="previousQuestionType"></longQues1>
    <trueFalseQues1 v-if="quesType === 2" :count1="count[2]" :trueFalseQues="trueFalseQues" :startPoint="shortQues.length+longQues.length" @finish="nextQuestionType" @go-back="previousQuestionType" ></trueFalseQues1>
    <numberQues1 v-if="quesType === 3" :numberQues="numberQues" :startPoint="shortQues.length+longQues.length+trueFalseQues.length" @go-back="previousQuestionType" @submitTrivia="nextQuestionType"></numberQues1>
    <resultsEasyTrivia v-if="quesType === 4" :sumTrueAns="sumTrueAns" :lengthArray="lengthArray" :shortQuestions="shortQues" :longQuestions="longQues" :trueFalseQues="trueFalseQues" :numberQues="numberQues" @try-again="tryAgain"></resultsEasyTrivia>


</template>

<script>
import easyQuestion from '@/data/easyQuestion.json'
import ShortQues1 from '@/components/EasyTriviaComponents/ShortQues1.vue'
import LongQues1 from '@/components/EasyTriviaComponents/LongQues1.vue'
import TrueFalseQues1 from '@/components/EasyTriviaComponents/TrueFalseQues1.vue'
import NumberQues1 from '@/components/EasyTriviaComponents/NumberQues1.vue'
import ResultsEasyTrivia from '@/components/EasyTriviaComponents/ResultsEasyTrivia.vue'
import Explain from '@/components/EasyTriviaComponents/Explain.vue'
import HomeBtn from '@/components/HomeBtn.vue'
import gsap from 'gsap'


export default ({
    data() {
        return {
            shortQues : easyQuestion.shortQues,
            longQues : easyQuestion.longQues,
            trueFalseQues : easyQuestion.trueFalseQues,
            numberQues : easyQuestion.numberQues,
            quesType : -1,
            sumTrueAns : ['','','',''],
            count: [0,0,0],
            lengthArray : [],
        };
    },
    components: {
        ShortQues1,
        LongQues1,
        TrueFalseQues1,
        NumberQues1,
        ResultsEasyTrivia,
        HomeBtn,
        Explain
    },
    methods : {
        startTest() {
            this.quesType++;
        },
        nextQuestionType (countT) {
            this.sumTrueAns[this.quesType] = countT;
            this.quesType++;
            this.count[this.quesType] = 0;
        },
        previousQuestionType () {
            this.quesType--;
            this.count[this.quesType] = this.lengthArray[this.quesType];
        },
        tryAgain () {
            this.quesType = 0;
            this.count = [0,0,0];
            this.sumTrueAns = ['','','',''];
            this.numberQues[0].marked = ["","","",""];
            this.resetToNull(this.shortQues);
            this.resetToNull(this.longQues);
            this.resetToNull(this.trueFalseQues);
        },
        resetToNull (array) {
            for ( let i = 0; i < array.length; i++ ) {
                array[i].marked = "";
            }
        },
    },
    mounted() {
        this.lengthArray[0] = this.shortQues.length-1;
        this.lengthArray[1] = this.longQues.length-1;
        this.lengthArray[2] = this.trueFalseQues.length-1;
        this.tryAgain(); // אם לוחצים על עמוד הבית ויצאים מהמבחן כשחוזרים זה מתחיל מההתחלה
        this.quesType = -1; // מחזיר את ההוראות כי בפונקציה זה מעלים את ההוראות
    }
})
</script>

<style scoped>

</style>