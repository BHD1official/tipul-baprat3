<template>
    <div dir="rtl" class="questionDesign">
        <NumberArrow :number="(count+1+startPoint)" :moveNext="trueFalseQues[this.count].marked != ''" :moveBack="true" @back="previousQues" @next="nextQues"></NumberArrow>
        <div class="ques">{{trueFalseQues[count].question}}</div>
        <div @click="clickAns(trueFalseQues[count].ans1)" :class="['ans', trueFalseQues[count].ans1 === trueFalseQues[this.count].marked ? 'marked' : '' ]">{{trueFalseQues[count].ans1}}</div>
        <div @click="clickAns(trueFalseQues[count].ans2)" :class="['ans', trueFalseQues[count].ans2 === trueFalseQues[this.count].marked ? 'marked' : '' ]">{{trueFalseQues[count].ans2}}</div>
    </div>
    <!-- <div>תשובות נכונות : {{countT}}</div>
    <div>תשובות לא נכונות : {{countF}}</div> -->

</template>

<script>
import NumberArrow from '@/components/EasyTriviaComponents/NumberArrow.vue'

export default {
    props : ["count1","trueFalseQues","startPoint"],
    components : {
        NumberArrow
    },
    data() {
        return {
           count: 0,
           maxCount: this.trueFalseQues.length-1,
           countT: 0,
           countF: 0,
        };
    }, 
    methods : {
        clickAns (ans) {
            this.trueFalseQues[this.count].marked = ans;
            this.check();
        },
        check () {
            this.countT = 0;
            for ( let i = 0; i < this.trueFalseQues.length; i++) {
                if(this.trueFalseQues[i].marked === this.trueFalseQues[i].correctAns) {
                    this.countT++;
                }
            }
            this.countF = this.trueFalseQues.length - this.countT;
        },
        nextQues () {
            if (this.count < this.maxCount) {
                this.count++;
            } else {
                this.$emit('finish', this.countT);
            }
        },
        previousQues () {
            if (this.count === 0) {
                this.$emit('go-back');
            } else {
                this.count--;
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
}

.questionDesign > |*{
    transition: all 0.5s ease;
}

.ans {
    display: inline-block;
    cursor: pointer;
    background-image: url("@/assets/shortQuesIcons/shortBubbleIcon.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    padding: 12%;
    font-size: xx-large;
    height: 40%;
    width: 25%;
    margin-top: 8%;
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
    font-size: 120%;
}



</style>