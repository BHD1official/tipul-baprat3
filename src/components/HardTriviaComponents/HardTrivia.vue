<template>

    <HomeBtn></HomeBtn>
    <Explain2 v-if="quesType === -1" @start-test="randomQuestionNumber"></Explain2>
    <div class="hearts-and-timer" v-if="quesType > -1 && quesType < 4">
        <Timer class="timer" @time-out="timerFinished"></Timer>
        <div class="hearts">
            <Hearts :lives="lives"></Hearts>
        </div>
    </div>
    <ShortQues2 class="questions" v-if="quesType === 0" :index="numToSend" :shortQuestions="shortQues" @finish="nextQues"></ShortQues2>
    <LongQues2 class="questions" v-if="quesType === 1" :index="numToSend" :longQuestions="longQues" @finish="nextQues"></LongQues2>
    <TrueFalseQues2 class="questions" v-if="quesType === 2" :index="numToSend" :trueFalseQues="trueFalseQues" @finish="nextQues"></TrueFalseQues2>
    <NumberQues2 class="questions" v-if="quesType === 3" :numberQues="numberQues" @finish="nextQues"></NumberQues2>
    <ResultsHardTrivia v-if="quesType === 4" :sumTrueAns="countTrueAns" @try-again="tryAgain"></ResultsHardTrivia>
    <OutOfLives v-if="quesType === 5" @try-again="tryAgain"></OutOfLives>
    <OutOfTime v-if="quesType === 6" :sumTrueAns="countTrueAns" @try-again="tryAgain"></OutOfTime>


</template>


<script>
import easyQuestion from '@/data/easyQuestion.json'
import HomeBtn from '@/components/HomeBtn.vue'
import Explain2 from '@/components/HardTriviaComponents/Explain2.vue'
import ShortQues2 from '@/components/HardTriviaComponents/ShortQues2.vue'
import LongQues2 from '@/components/HardTriviaComponents/LongQues2.vue'
import TrueFalseQues2 from '@/components/HardTriviaComponents/TrueFalseQues2.vue'
import NumberQues2 from '@/components/HardTriviaComponents/NumberQues2.vue'
import ResultsHardTrivia from '@/components/HardTriviaComponents/ResultsHardTrivia.vue'
import Timer from '@/components/HardTriviaComponents/Timer.vue'
import Hearts from '@/components/HardTriviaComponents/Hearts.vue'
import OutOfLives from '@/components/HardTriviaComponents/OutOfLives.vue'
import OutOfTime from '@/components/HardTriviaComponents/OutOfTime.vue'


export default ({
    components: {
        HomeBtn,
        Explain2,
        ShortQues2,
        LongQues2,
        TrueFalseQues2,
        NumberQues2,
        ResultsHardTrivia,
        Timer,
        Hearts,
        OutOfLives,
        OutOfTime
    },
    data() {
     return {
        shortQues : easyQuestion.shortQues,
        longQues : easyQuestion.longQues,
        trueFalseQues : easyQuestion.trueFalseQues,
        numberQues : easyQuestion.numberQues,
        quesType : -1,
        lengthArray : [],
        numbersArray : [],
        countTrueAns : 0,
        countQuestionsAnswered : 0,
        quesNumber : null,
        numToSend : null,
        lives : 3,
     };
    },
    methods: {
        randomQuestionNumber () { // מגרילה מספר שאלה רנדומלי ומכניסה אותו למערך אם הוא לא הופיע כבר
            this.quesNumber = Math.round(Math.random () * (51));
            while (this.checkInArray(this.numbersArray, this.quesNumber)) {
                this.quesNumber = Math.round(Math.random () * (51));
            }
            this.numbersArray.push(this.quesNumber);
            this.checkQuesType();
        },
        checkInArray (arr, num) { // בודק אם המספר מופע כבר במערך אם כן שולח נכון על מנת שהלולאה תמשיך
            for (let i = 0 ; i < arr.length; i++) {
                if(this.numbersArray[i] === num) {
                    return true;
                }
            }
            return false;
        },
        checkQuesType () { // בודק מה סוג השאלה שיש להציג בהתאם למספר שהוגרל ומעדכן את המספר ששולחים לקומפוננטת השאלה
            if (this.quesNumber < this.lengthArray[0]) {
                this.quesType = 0;
                this.numToSend = this.quesNumber;
            } else  if (this.quesNumber < this.lengthArray[0]+this.lengthArray[1]) {
                this.quesType = 1;
                this.numToSend = this.quesNumber - this.lengthArray[0];
            } else  if (this.quesNumber < this.lengthArray[0]+this.lengthArray[1]+this.lengthArray[2]) {
                this.quesType = 2;
                this.numToSend = this.quesNumber - this.lengthArray[0] - this.lengthArray[1];
            } else {
                this.quesType = 3;
                this.numToSend = 0;
            }
        },
        nextQues (ans) {
            this.countQuestionsAnswered++;
            if (ans) {
                this.countTrueAns++;
            } else{
                this.lives--;
            }
            if(this.numbersArray.length < 30  && this.lives !== 0 ) {
                this.randomQuestionNumber();
            } else {
                if (this.lives === 0){
                    this.quesType = 5; //מעביר למסך שאומר שטעה ביותר מ3 שאלות 
                } else {
                    this.quesType = 4; // מעביר למסך הסיום הרגיל
                }
            }
        },
        timerFinished () { // עביר למסך שאומר שנגמר הזמן 
            this.quesType = 6; 
        },
        tryAgain () { // מאפס את המשתנים עת התחלת המבחן מההתחלה
            this.quesType = -1;
            this.countTrueAns = 0;
            this.countQuestionsAnswered =0;
            this.numberQues[0].marked = ["","","",""];
            this.resetToNull(this.shortQues);
            this.resetToNull(this.longQues);
            this.resetToNull(this.trueFalseQues);
            this.numbersArray = [];
            this.quesNumber = null;
            this.lives = 3;
        },
        resetToNull (array) { // מאפס את הסימונים במערכי השאלות
            for ( let i = 0; i < array.length; i++ ) {
                array[i].marked = "";
            }
        },
    },
    mounted() {
        this.lengthArray[0] = this.shortQues.length;
        this.lengthArray[1] = this.longQues.length;
        this.lengthArray[2] = this.trueFalseQues.length;
        this.tryAgain(); // אם לוחצים על עמוד הבית ויצאים מהמבחן כשחוזרים זה מתחיל מההתחלה
        this.quesType = -1; // מחזיר את ההוראות כי בפונקציה זה מעלים את ההוראות
    }
  })
</script>

<style scoped>
.questions {
    position: relative;
    top: 7%;   
}

.hearts-and-timer{
    position: relative;
    margin-top: 4rem;
    margin-bottom: -4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.timer {
    position: relative;
    font-size: 2rem;
    padding-right: 2rem;
    margin-top: 1rem;
}

.hearts {
    position: relative;
    padding-left: 2rem;
    margin-top: 1rem;
}



</style>