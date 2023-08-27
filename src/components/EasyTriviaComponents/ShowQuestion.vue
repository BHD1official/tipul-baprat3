<template>
    <div v-if="type === 0" class="questionDesign">
        <NumberArrow :number="(number1+1)" :moveNext="true" :moveBack="(number1!=0)" :showP="true" @next="next" @back="backQues" ></NumberArrow>
        <div :class="[shortQuestions[index].question.length >= 100 ? 'small' : 'large' , 'ques1']">{{shortQuestions[index].question}}</div>
        <div class="container1">
            <div :class="['ans1' , shortQuestions[index].ans1 === shortQuestions[index].correctAns ? 'right1' : '' , shortQuestions[index].ans1 === shortQuestions[index].marked && shortQuestions[index].ans1 !== shortQuestions[index].correctAns ? 'wrong1' : '']">{{shortQuestions[index].ans1}}</div>
            <div :class="['ans1' , shortQuestions[index].ans2 === shortQuestions[index].correctAns ? 'right1' : '' , shortQuestions[index].ans2 === shortQuestions[index].marked && shortQuestions[index].ans2 !== shortQuestions[index].correctAns ? 'wrong1' : '']">{{shortQuestions[index].ans2}}</div>
            <div :class="['ans1' , shortQuestions[index].ans3 === shortQuestions[index].correctAns ? 'right1' : '' , shortQuestions[index].ans3 === shortQuestions[index].marked && shortQuestions[index].ans3 !== shortQuestions[index].correctAns ? 'wrong1' : '']">{{shortQuestions[index].ans3}}</div>
            <div :class="['ans1' , shortQuestions[index].ans4 === shortQuestions[index].correctAns ? 'right1' : '' , shortQuestions[index].ans4 === shortQuestions[index].marked && shortQuestions[index].ans4 !== shortQuestions[index].correctAns ? 'wrong1' : '']">{{shortQuestions[index].ans4}}</div>
        </div>
    </div>

    <div v-if="type === 1" class="questionDesign">
        <NumberArrow :number="(number1+1)" :moveNext="true" :moveBack="true" :showP="true" @next="next" @back="backQues"></NumberArrow>
        <div :class="[longQuestions[index].question.length >= 100 ? 'small' : 'large' , 'ques4']">{{longQuestions[index].question}}</div>
        <div class="container2">
            <div :class="['ans2' , longQuestions[index].ans1 === longQuestions[index].correctAns ? 'right2' : '' , longQuestions[index].ans1 === longQuestions[index].marked && longQuestions[index].ans1 !== longQuestions[index].correctAns ? 'wrong2' : '' , index === 3 ? 'bigans' : '' , index === 17 ? 'ans34' : '']">{{longQuestions[index].ans1}}</div>
            <div :class="['ans2' , longQuestions[index].ans2 === longQuestions[index].correctAns ? 'right2' : '' , longQuestions[index].ans2 === longQuestions[index].marked && longQuestions[index].ans2 !== longQuestions[index].correctAns ? 'wrong2' : '' , index === 3 ? 'bigans' : '' , index === 17 ? 'ans34' : '']">{{longQuestions[index].ans2}}</div>
            <div v-if="index!=3" :class="['ans2' , longQuestions[index].ans3 === longQuestions[index].correctAns ? 'right2' : '' , longQuestions[index].ans3 === longQuestions[index].marked && longQuestions[index].ans3 !== longQuestions[index].correctAns ? 'wrong2' : '' , index === 17 ? 'ans34' : '']">{{longQuestions[index].ans3}}</div>
            <div v-if="index!=3" :class="['ans2' , longQuestions[index].ans4 === longQuestions[index].correctAns ? 'right2' : '' , longQuestions[index].ans4 === longQuestions[index].marked && longQuestions[index].ans4 !== longQuestions[index].correctAns ? 'wrong2' : '' , index === 17 ? 'ans34' : '']">{{longQuestions[index].ans4}}</div>
        </div>
    </div>

    <div v-if="type === 2" class="questionDesign">
        <NumberArrow :number="(number1+1)" :moveNext="true" :moveBack="true" :showP="true" @next="next" @back="backQues"></NumberArrow>
        <div class="ques2">{{trueFalseQues[index].question}}</div>
        <div :class="['ans3' , trueFalseQues[index].ans1 === trueFalseQues[index].correctAns ? 'right1' : '' , trueFalseQues[index].ans1 === trueFalseQues[index].marked && trueFalseQues[index].ans1 !== trueFalseQues[index].correctAns ? 'wrong1' : '' , trueFalseQues[index].ans1 !== trueFalseQues[index].correctAns && trueFalseQues[index].ans1 !== trueFalseQues[index].marked ? 'regular1' : '']">{{trueFalseQues[index].ans1}}</div>
        <div :class="['ans3' , trueFalseQues[index].ans2 === trueFalseQues[index].correctAns ? 'right1' : '' , trueFalseQues[index].ans2 === trueFalseQues[index].marked && trueFalseQues[index].ans2 !== trueFalseQues[index].correctAns ? 'wrong1' : '' , trueFalseQues[index].ans2 !== trueFalseQues[index].correctAns && trueFalseQues[index].ans2 !== trueFalseQues[index].marked ? 'regular1' : '']">{{trueFalseQues[index].ans2}}</div>
    </div>

    <div v-if="type === 3" class="questionDesign">
        <NumberArrow :number="(number1+1)" :moveNext="false" :moveBack="true" :showP="true" @back="backQues"></NumberArrow>
        <form>
            <div class="ques3">{{numberQues[0].question}}</div>
            <br>
            <div class="container3">
                <div class="mini-container">
                    <label>{{numberQues[0].ans1}} {{space}}</label>
                    <select :class="['selectDesign' , numberQues[0].correctAns[0]===numberQues[0].marked[0] ? 'rightOp' : 'wrongOp']" disabled>
                        <option>{{numberQues[0].marked[0] }}</option>
                    </select>
                </div>
                <div class="mini-container">
                    <label>{{numberQues[0].ans2}} {{space}}</label>
                    <select :class="['selectDesign' ,numberQues[0].correctAns[1]===numberQues[0].marked[1] ? 'rightOp' : 'wrongOp']" disabled>
                        <option>{{numberQues[0].marked[1] }}</option>
                    </select>
                </div>
                <div class="mini-container">
                    <label>{{numberQues[0].ans3}} {{space}}</label>
                    <select :class="['selectDesign' ,numberQues[0].correctAns[2]===numberQues[0].marked[2] ? 'rightOp' : 'wrongOp']" disabled>
                        <option>{{numberQues[0].marked[2]}}</option>
                    </select>
                </div>
                <div class="mini-container">
                    <label>{{numberQues[0].ans4}} {{space}}</label>
                    <select :class="['selectDesign' ,numberQues[0].correctAns[3]===numberQues[0].marked[3] ? 'rightOp' : 'wrongOp']" disabled>
                        <option>{{numberQues[0].marked[3]}}</option>
                    </select>
                </div>
            </div>
        </form>  
    </div>

    <div class="backBtn" @click="back">חזור</div>
</template>

<script>
import NumberArrow from '@/components/EasyTriviaComponents/NumberArrow.vue'

export default {
    props : ["number" ,"lengthArray", "shortQuestions", "longQuestions", "trueFalseQues", "numberQues", "order"],
    components : {
        NumberArrow
    },
    data () {
        return {
            index : '',
            type: '',
            number1:'',
            space: "           ",
        };
    },
    methods : {
        back () {
            this.$emit('back');
        },
        backQues() {
            this.index--;
            this.number1--;
            this.checkType();
        },
        next() {
            this.index++;
            this.number1++;
            this.checkType();
        },
        checkType() {
            if (this.number1 < this.lengthArray[0] ) { // short questions
                this.index = this.number1;
                this.type = 0;
            } else if (this.number1 < (this.lengthArray[1]+this.lengthArray[0])) { // long questions
                this.index = this.number1 - this.lengthArray[0];
                this.type = 1;
            } else if (this.number1 < (this.lengthArray[2]+this.lengthArray[1]+this.lengthArray[0])) { // true/false questions
                this.index = this.number1 - this.lengthArray[1]- this.lengthArray[0];
                this.type = 2;

            } else { // number question
                this.index = 51;
                this.type = 3;
            }
        }
    },
    mounted () {
        console.log(this.lengthArray);
        console.log(this.number);
        if (this.number < this.lengthArray[0] ) { // short questions
            this.index = this.number;
            this.type = 0;
        } else if (this.number < (this.lengthArray[1]+this.lengthArray[0])) { // long questions
            this.index = this.number - this.lengthArray[0];
            this.type = 1;
        } else if (this.number < (this.lengthArray[2]+this.lengthArray[1]+this.lengthArray[0])) { // true/false questions
            this.index = this.number - this.lengthArray[1]- this.lengthArray[0];
            this.type = 2;

        } else { // number question
            this.index = 51;
            this.type = 3;
        }
        console.log(this.type);
        this.number1 = this.number;
    }

};
</script>

<style scoped>

/* common*/

.questionDesign {
    text-align: right;
    direction: rtl;
    padding: 2%;
    top: -10%;
}

.questionDesign > |*{
    transition: all 0.5s ease;
}

.sumQuesNumber{
    text-align: center;
    background-image: url("@/assets/shortQuesIcons/shortBubbleIcon.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    font-size: 170%;
    padding: 3.5%;
    position: relative;
    display: inline-block;
    margin-top: 0%;
    right: 30%;
}
.currentQuesNumber{
    text-align: center;
    background-image: url("@/assets/shortQuesIcons/shortBubbleIcon.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    font-size: 258%;
    padding: 2%;
    position: relative;
    margin-top: 6%;
}




.backBtn{
    background-image: url("@/assets/shortQuesIcons/shortBubbleIcon.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    font-size: 140%;
    padding: 3%;
    width: 10%;
    height: -moz-fit-content;
    height: fit-content;
    position: absolute;
    bottom: 8%; 
    left: 50%;
    transform: translateX(-50%);

}


/* short questions*/

.ques1{
    margin-top: 4%;
    margin-left: 4%;
    margin-right: 4%;
}

.small {
    font-size: 110%;
}

.large {
    font-size: 120%;
}

.container1{
    position: absolute;
    display: flex;
    flex-wrap: wrap;  
    width: 24rem; 
    justify-content: center;
    left: 50%;
    transform: translateX(-50%); 
}

.ans1 {
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






/* long questions*/

.container2{
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
}
.ans2 {
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

.ques4{
    margin-top: 4%;
    margin-left: 4%;
    margin-right: 4%;
    margin-bottom: -4%;
}

.right2 {
    background-image: url("@/assets/longQuesIcons/longTrueBubbleIcon.png");
    color: #175C79;
    font-weight: 600;
}

.wrong2 {
    background-image: url("@/assets/longQuesIcons/longFalseBubbleIcon.png");
    color: #175C79;
    font-weight: 600;
}


/* true false questions*/

.ques2{
    margin-top: 4%;
    margin-left: 4%;
    margin-right: 4%;
    font-size: xx-large;
}

.right1 {
    background-image: url("@/assets/shortQuesIcons/trueBubbleIcon.png");
    color: #175C79;
    font-weight: 600;
}

.wrong1 {
    background-image: url("@/assets/shortQuesIcons/falseBubbleIcon.png");
    color: #175C79;
    font-weight: 600;
}

.regular1 {
    background-image: url("@/assets/shortQuesIcons/shortBubbleIcon.png");
}

.ans3 {
    display: inline-block;
    cursor: pointer;
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






/* number question*/
.ques3{
    margin-top: 4%;
    margin-left: 4%;
    margin-right: 4%;
    margin-bottom: -6%;
    font-size: xx-large;
}

.container3 {
    position: relative;
    margin-top: -1%;
    font-size: 80.5%;
    line-height: 150%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.mini-container {
    background-image: url("@/assets/longQuesIcons/longBubbleIcon.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    width: 21rem;
    padding: 3rem 2rem 3.8rem 2rem;
    margin-bottom: -1%;
    height: 0rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

label{
    width: 21rem;
    text-align: right;
    padding-right: 6%;
    padding-left: 10%;
}

.largeLetter{
    font-size: larger;
}

.selectDesign{
    font-size: x-large;
    border-radius: 40%;
    background-color: rgba(255, 255, 255, 0);
    border-style: solid;
    border-color: white;
    color: white;
    position: relative;
    top: 0.1rem;
    left: 1.5rem;
    width: 3rem;
    padding-right: 1%;
}
.rightOp{
    color: black;
   background: #3bf35d;
   z-index: 10;
}

.wrongOp {
    color: black;
    background: #fd82d2;
    z-index: 10;
}
</style>