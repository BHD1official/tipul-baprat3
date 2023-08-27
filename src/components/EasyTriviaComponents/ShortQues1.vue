<template>
    <div dir="rtl" class="questionDesign">
        <NumberArrow :number="(count+1)" :moveNext="(shortQuestions[this.count].marked != '')" :moveBack="(count>0)" @back="count--" @next="nextQues()"></NumberArrow>
        <div :class="[shortQuestions[count].question.length >= 100 ? 'small' : 'large' , 'ques']"> {{shortQuestions[count].question}}</div>
        <div class="container">
            <div @click="clickAns(shortQuestions[count].ans1)" :class="['ans', shortQuestions[count].ans1 === shortQuestions[this.count].marked ? 'marked' : '' ]"> {{shortQuestions[count].ans1}}</div>
            <div @click="clickAns(shortQuestions[count].ans2)" :class="['ans', shortQuestions[count].ans2 === shortQuestions[this.count].marked ? 'marked' : '' ]"> {{shortQuestions[count].ans2}}</div>
            <div @click="clickAns(shortQuestions[count].ans3)" :class="['ans', shortQuestions[count].ans3 === shortQuestions[this.count].marked ? 'marked' : '' ]"> {{shortQuestions[count].ans3}}</div>
            <div @click="clickAns(shortQuestions[count].ans4)" :class="['ans', shortQuestions[count].ans4 === shortQuestions[this.count].marked ? 'marked' : '' ]"> {{shortQuestions[count].ans4}}</div>
        </div>
    </div>
    <!-- <div>תשובות נכונות : {{countT}}</div>
    <div>תשובות לא נכונות : {{countF}}</div> -->
</template>

<script>
import NumberArrow from '@/components/EasyTriviaComponents/NumberArrow.vue'

export default {
    props : ["count1","shortQuestions"],
    components : {
        NumberArrow
    },
    data() {
        return {
           count: 0,
           maxCount: this.shortQuestions.length-1,
           countT: 0,
           countF: 0,
        };
    }, 
    methods : {
        clickAns (ans) {
            this.shortQuestions[this.count].marked = ans;
            this.check();
        },
        check () {
            this.countT = 0;
            for ( let i = 0; i < this.shortQuestions.length; i++) {
                if(this.shortQuestions[i].marked === this.shortQuestions[i].correctAns) {
                    this.countT++;
                }
            }
            this.countF = this.shortQuestions.length - this.countT;
        },
        nextQues () {
            if (this.count < this.maxCount) {
                this.count++;
            } else {
                this.$emit('finish', this.countT);
            }
        }
    } ,
    beforeMount () {
        this.count = this.count1;
        this.check();
    }
}
</script>

<style scoped>

.questionDesign {
    text-align: right;
    direction: rtl;
    padding: 2%;
    top: -10%;
}

.questionDesign > |*{
    transition: all 0.5s ease;
}
.container{
    position: absolute;
    display: flex;
    flex-wrap: wrap;  
    width: 24rem; 
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);

}
.ans {
    cursor: pointer;
    position: relative;
    background-image: url("@/assets/shortQuesIcons/shortBubbleIcon.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    padding: 2rem;
    font-size: 1.5rem;
    height: 6rem;
    width: 6.5rem;
    margin-top: 1rem;
    margin-right: 0.6rem;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease; 
}

.marked {
    background-image: url("@/assets/shortQuesIcons/pickedBubbleIcon.png");
    color: #175C79;
}

.ques{
    margin-top: 4%;
    margin-left: 4%;
    margin-right: 4%;
}

.small {
    font-size: 100%;
}

.large {
    font-size: 110%;
}

</style>
