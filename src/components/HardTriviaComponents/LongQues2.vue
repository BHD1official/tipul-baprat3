<template>
    <div dir="rtl" class="questionDesign">
        <div :class="[longQuestions[index].question.length >= 100 ? 'small' : 'large' , 'ques']">{{longQuestions[index].question}}</div> 
        <div class="container">
            <div @click="clickAns(longQuestions[index].ans1)" :class="['ans', clicks && longQuestions[index].ans1 === longQuestions[index].correctAns ? 'right' : '' , longQuestions[index].ans1 === longQuestions[index].marked && longQuestions[index].ans1 !== longQuestions[index].correctAns ? 'wrong' : '' , index === 3 ? 'bigans' : '' , index === 17 ? 'ans34' : '']">{{longQuestions[index].ans1}}</div>
            <div @click="clickAns(longQuestions[index].ans2)" :class="['ans', clicks && longQuestions[index].ans2 === longQuestions[index].correctAns ? 'right' : '' , longQuestions[index].ans2 === longQuestions[index].marked && longQuestions[index].ans2 !== longQuestions[index].correctAns ? 'wrong' : '' , index === 3 ? 'bigans' : '' , index === 17 ? 'ans34' : '']">{{longQuestions[index].ans2}}</div>
            <div v-if="index!=3" @click="clickAns(longQuestions[index].ans3)" :class="['ans', clicks && longQuestions[index].ans3 === longQuestions[index].correctAns ? 'right' : '' , longQuestions[index].ans3 === longQuestions[index].marked && longQuestions[index].ans3 !== longQuestions[index].correctAns ? 'wrong' : '' , index === 17 ? 'ans34' : '']">{{longQuestions[index].ans3}}</div>
            <div v-if="index!=3" @click="clickAns(longQuestions[index].ans4)" :class="['ans', clicks && longQuestions[index].ans4 === longQuestions[index].correctAns ? 'right' : '' , longQuestions[index].ans4 === longQuestions[index].marked && longQuestions[index].ans4 !== longQuestions[index].correctAns ? 'wrong' : ''  , index === 17 ? 'ans34' : '' ]">{{longQuestions[index].ans4}}</div>
        </div>
    </div>
</template>

<script>

export default {
    props : ["index","longQuestions"],
    data() {
        return {
            result : null,
            clicks : false,
        };
    }, 
    methods : {
        clickAns (ans) {
            this.longQuestions[this.index].marked = ans;
            this.clicks = true;
            this.check();
        },
        check () {
                if(this.longQuestions[this.index].marked === this.longQuestions[this.index].correctAns) {
                    this.result = true ;
                } else {
                    this.result = false ;
                }
                setTimeout(() => {
                    this.clicks = false;
                    this.$emit('finish', this.result)
                }, 1500);
                
            }
        }
}
</script>

<style scoped>
.avoid-clicks {
    pointer-events: none;
}
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
.right {
    background-image: url("@/assets/longQuesIcons/longTrueBubbleIcon.png");
    color: #175C79;
}

.wrong {
    background-image: url("@/assets/longQuesIcons/longFalseBubbleIcon.png");
    color: #175C79;
}

</style>