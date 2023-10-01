<template>
    <transition appear name="fade">
        <div v-if="!showQues" >
            <div class="headline">לחץ על שאלה להצגת התשובה</div>
            <div class="questionDesign">
                <div v-for="btn in sumQues" :key="btn" :class="['btn', checkAns[btn] ? 'right' : 'wrong']" @click="picked(btn)">{{btn}}</div>
            </div>
        </div>
    </transition>

    <ShowQuestion  v-if="showQues" :number="number" :lengthArray="lengthArray" :shortQuestions="shortQuestions" :longQuestions="longQuestions" :trueFalseQues="trueFalseQues" :numberQues="numberQues" @back="back"></ShowQuestion>
</template>

<script>
import ShowQuestion from '@/components/EasyTriviaComponents/ShowQuestion.vue'

export default {
    props : ["sumQues","lengthArray", "shortQuestions", "longQuestions", "trueFalseQues", "numberQues"],
    components : {
        ShowQuestion,
    },
    data() {
        return {
            checkAns : [true],
            showQues: false,
            number : '',
        };
    }, 
    methods : {
        picked(ansNum) {
            this.number = (ansNum-1);
            console.log(this.number)
            this.showQues = true;
        },
        back () {
            this.showQues = false;
        }
    },
    mounted () {
        this.lengthArray[0]++;
        this.lengthArray[1]++;
        this.lengthArray[2]++;
        for (let i = 0; i< this.lengthArray[0]; i++) { // check the short questions
                if(this.shortQuestions[i].marked === this.shortQuestions[i].correctAns) {
                    this.checkAns.push(true);
                } else {
                    this.checkAns.push(false);
                }
        }
        for (let i = 0; i< this.lengthArray[1]; i++) { // check the long questions
                if(this.longQuestions[i].marked === this.longQuestions[i].correctAns) {
                    this.checkAns.push(true);
                } else {
                    this.checkAns.push(false);
                }
        }
        for (let i = 0; i< this.lengthArray[2]; i++) { // check the true/false questions
                if(this.trueFalseQues[i].marked === this.trueFalseQues[i].correctAns) {
                    this.checkAns.push(true);
                } else {
                    this.checkAns.push(false);
                }
        }
        this.checkAns.push(true); // check the number question
        for(let i=0; i<4; i++) {
                    if(this.numberQues[0].marked[i] !== this.numberQues[0].correctAns[i]) {
                        this.checkAns[52] = false;
                    }
        }
    }
}
</script>

<style scoped>
.questionDesign {
    text-align: center;
    direction: rtl;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 4%;
}

.btn {
    text-align: center;
    position: relative;
    width: 12.5%;
    font-size: 101%;
    display: inline-block;
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    margin-right: -2%;
    padding: 2%;
    margin-top: 4%;
}

.wrong{
    background-image: url("@/assets/shortQuesIcons/falseBubbleIcon.png");
}

.right{
    background-image: url("@/assets/shortQuesIcons/trueBubbleIcon.png");
}

.headline{
    font-size: 152%;
    margin-top: 20%;
}


.fade-enter-active{
    animation: fadeIn 2s ease;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

</style>