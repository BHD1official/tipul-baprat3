<template>
    <div dir="rtl" class="questionDesign">
        <div :class="[shortQuestions[index].question.length >= 100 ? 'small' : 'large' , 'ques']"> {{shortQuestions[index].question}}</div>
        <div class="container">
            <div @click="clickAns(shortQuestions[index].ans1)" :class="['ans', clicks && shortQuestions[index].ans1 === shortQuestions[index].correctAns ? 'right' : '' , shortQuestions[index].ans1 === shortQuestions[index].marked && shortQuestions[index].ans1 !== shortQuestions[index].correctAns ? 'wrong' : '' , clicks ? 'avoid-clicks' : '']"> {{shortQuestions[index].ans1}}</div>
            <div @click="clickAns(shortQuestions[index].ans2)" :class="['ans', clicks && shortQuestions[index].ans2 === shortQuestions[index].correctAns ? 'right' : '' , shortQuestions[index].ans2 === shortQuestions[index].marked && shortQuestions[index].ans2 !== shortQuestions[index].correctAns ? 'wrong' : '' , clicks ? 'avoid-clicks' : '']"> {{shortQuestions[index].ans2}}</div>
            <div @click="clickAns(shortQuestions[index].ans3)" :class="['ans', clicks && shortQuestions[index].ans3 === shortQuestions[index].correctAns ? 'right' : '' , shortQuestions[index].ans3 === shortQuestions[index].marked && shortQuestions[index].ans3 !== shortQuestions[index].correctAns ? 'wrong' : '' , clicks ? 'avoid-clicks' : '']"> {{shortQuestions[index].ans3}}</div>
            <div @click="clickAns(shortQuestions[index].ans4)" :class="['ans', clicks && shortQuestions[index].ans4 === shortQuestions[index].correctAns ? 'right' : '' , shortQuestions[index].ans4 === shortQuestions[index].marked && shortQuestions[index].ans4 !== shortQuestions[index].correctAns ? 'wrong' : '' , clicks ? 'avoid-clicks' : '']"> {{shortQuestions[index].ans4}}</div>
        </div>
    </div>
</template>

<script>

export default {
    props : ["index","shortQuestions"],
    data() {
        return {
            result : null,
            clicks : false,
        };
    }, 
    methods : {
        clickAns (ans) {
            this.shortQuestions[this.index].marked = ans;
            this.clicks = true;
            this.check();
        },
        check () {
            if(this.shortQuestions[this.index].marked === this.shortQuestions[this.index].correctAns) {
                this.result = true;
            } else {
                this.result = false;
            }
            setTimeout(() => {
                this.clicks = false;
                this.$emit('finish', this.result)
            }, 1500);
        }
    },

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

.right {
    background-image: url("@/assets/shortQuesIcons/trueBubbleIcon.png");
    color: #175C79;
}

.wrong {
    background-image: url("@/assets/shortQuesIcons/falseBubbleIcon.png");
    color: #175C79;
}

</style>
