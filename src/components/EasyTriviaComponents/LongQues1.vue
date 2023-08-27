<template>
    <div dir="rtl" class="questionDesign">
        <NumberArrow :number="(count+1+startPoint)" :moveNext="longQuestions[this.count].marked != ''" :moveBack="true" @back="previousQues" @next="nextQues"></NumberArrow>
        <div :class="[longQuestions[count].question.length >= 100 ? 'small' : 'large' , 'ques']">{{longQuestions[count].question}}</div> 
        <div class="container">
            <div @click="clickAns(longQuestions[count].ans1)" :class="['ans', longQuestions[count].ans1 === longQuestions[this.count].marked ? 'marked' : '' , count === 3 ? 'bigans' : '' , count === 17 ? 'ans34' : '']">{{longQuestions[count].ans1}}</div>
            <div @click="clickAns(longQuestions[count].ans2)" :class="['ans', longQuestions[count].ans2 === longQuestions[this.count].marked ? 'marked' : '' , count === 3 ? 'bigans' : '' , count === 17 ? 'ans34' : '']">{{longQuestions[count].ans2}}</div>
            <div v-if="count!=3" @click="clickAns(longQuestions[count].ans3)" :class="['ans', longQuestions[count].ans3 === longQuestions[this.count].marked ? 'marked' : '' , count === 17 ? 'ans34' : '']">{{longQuestions[count].ans3}}</div>
            <div v-if="count!=3" @click="clickAns(longQuestions[count].ans4)" :class="['ans', longQuestions[count].ans4 === longQuestions[this.count].marked ? 'marked' : '' , count === 17 ? 'ans34' : '' ]">{{longQuestions[count].ans4}}</div>
        </div>
    </div>
    <!-- <div>תשובות נכונות : {{countT}}</div>
    <div>תשובות לא נכונות : {{countF}}</div> -->

</template>

<script>
import NumberArrow from '@/components/EasyTriviaComponents/NumberArrow.vue'

export default {
    props : ["count1","longQuestions","startPoint"],
    components : {
        NumberArrow
    },
    data() {
        return {
           count: 0,
           maxCount: this.longQuestions.length-1,
           countT: 0,
           countF: 0,
        };
    }, 
    methods : {
        clickAns (ans) {
            this.longQuestions[this.count].marked = ans;
            this.check();
        },
        check () {
            this.countT = 0;
            for ( let i = 0; i < this.longQuestions.length; i++) {
                if(this.longQuestions[i].marked === this.longQuestions[i].correctAns) {
                    this.countT++;
                }
            }
            this.countF = this.longQuestions.length - this.countT;
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

.container{
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
}
.ans {
    cursor: pointer;
    background-image: url("@/assets/longQuesIcons/longBubbleIcon.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    padding: 3rem 2.75rem 3rem 2.75rem;
    width: 21.5rem;
    height: 3rem;
    margin-bottom: -3.6rem;
    margin-top: 0.5rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease; 
}

.bigans {
    background-size: 25rem 18.5rem;
    padding-top: 6.5rem;
    padding-bottom: 8rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    width: 19rem;
    height: 6rem;
    margin-bottom: -5rem;
    margin-top: -1rem;
}

.ans34 {
    background-size: 25rem 9rem;
    padding: 4rem 2.75rem 4.5rem 2.75rem;
    width: 21.5rem;
    height: 4rem;
    margin-bottom: -4.5rem;
    margin-top: -0.5rem;
    font-size: 1.1rem;
}
.marked {
    background-image: url("@/assets/longQuesIcons/longPickedBubbleIcon.png");
    color: #175C79;
}

.ques{
    margin-top: 4%;
    margin-left: 4%;
    margin-right: 4%;
    margin-bottom: -6%;
}

.small {
    font-size: 110%;
}

.large {
    font-size: 120%;
}

</style>