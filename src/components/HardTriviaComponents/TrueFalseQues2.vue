<template>
    <div dir="rtl" class="questionDesign">
        <div class="ques">{{trueFalseQues[index].question}}</div>
        <div @click="clickAns(trueFalseQues[index].ans1)" :class="['ans', clicks && trueFalseQues[index].ans1 === trueFalseQues[index].correctAns ? 'right' : '' , trueFalseQues[index].ans1 === trueFalseQues[index].marked && trueFalseQues[index].ans1 !== trueFalseQues[index].correctAns ? 'wrong' : '' , clicks ? 'avoid-clicks' : '' ]">{{trueFalseQues[index].ans1}}</div>
        <div @click="clickAns(trueFalseQues[index].ans2)" :class="['ans', clicks && trueFalseQues[index].ans2 === trueFalseQues[index].correctAns ? 'right' : '' , trueFalseQues[index].ans2 === trueFalseQues[index].marked && trueFalseQues[index].ans2 !== trueFalseQues[index].correctAns ? 'wrong' : '' , clicks ? 'avoid-clicks' : '']">{{trueFalseQues[index].ans2}}</div>
    </div>
</template>

<script>

export default {
    props : ["index","trueFalseQues"],
    data() {
        return {
            result : null,
            clicks : false,
        };
    }, 
    methods : {
        clickAns (ans) {
            this.trueFalseQues[this.index].marked = ans;
            this.clicks = true;
            this.check();
        },
        check () {
            if(this.trueFalseQues[this.index].marked === this.trueFalseQues[this.index].correctAns) {
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

.right {
    background-image: url("@/assets/shortQuesIcons/trueBubbleIcon.png");
    color: #175C79;
}

.wrong {
    background-image: url("@/assets/shortQuesIcons/falseBubbleIcon.png");
    color: #175C79;
}

.avoid-clicks {
    pointer-events: none;
}

</style>