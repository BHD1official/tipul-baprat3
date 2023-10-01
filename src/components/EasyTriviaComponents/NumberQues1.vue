<template>
    <div dir="rtl" class="questionDesign">
        <NumberArrow :number="(startPoint+1)" :moveNext="false" :moveBack="true" @back="previousQues" ></NumberArrow>
        <form>
            <div class="ques">{{numberQues[0].question}}</div>
            <br>
            <div class="container">
                <div class="mini-container">
                    <label>{{numberQues[0].ans1}} {{space}}</label>
                    <select v-model="order[0]" class="selectDesign" >
                        <option class="selectNumberColorDesign" value="1">1</option>
                        <option class="selectNumberColorDesign" value="2">2</option>
                        <option class="selectNumberColorDesign" value="3">3</option>
                        <option class="selectNumberColorDesign" value="4">4</option>
                    </select>
                </div>
                <div class="mini-container">
                    <label>{{numberQues[0].ans2}} {{space}}</label>
                    <select v-model="order[1]" class="selectDesign"  >
                        <option class="selectNumberColorDesign" value="1">1</option>
                        <option class="selectNumberColorDesign" value="2">2</option>
                        <option class="selectNumberColorDesign" value="3">3</option>
                        <option class="selectNumberColorDesign" value="4">4</option>
                    </select>
                </div>
                <div class="mini-container">
                    <label>{{numberQues[0].ans3}} {{space}}</label>
                    <select v-model="order[2]" class="selectDesign" >
                        <option class="selectNumberColorDesign" value="1">1</option>
                        <option class="selectNumberColorDesign" value="2">2</option>
                        <option class="selectNumberColorDesign" value="3">3</option>
                        <option class="selectNumberColorDesign" value="4">4</option>
                    </select>
                </div>
                <div class="mini-container">
                    <label>{{numberQues[0].ans4}} {{space}}</label>
                    <select v-model="order[3]" class="selectDesign" >
                        <option class="selectNumberColorDesign" value="1">1</option>
                        <option class="selectNumberColorDesign" value="2">2</option>
                        <option class="selectNumberColorDesign" value="3">3</option>
                        <option class="selectNumberColorDesign" value="4">4</option>
                    </select>
                </div>
            </div>
        </form>
        <img src="@/assets/easyTriviaIcons/doneIcon.png" id="next" v-if="checkMarkAll" @click="finished">
        <!-- <div>count t: {{countT}}</div> -->
    </div>
    <!-- <div>תשובות נכונות : {{countT}}</div>
    <div>תשובות לא נכונות : {{countF}}</div> -->
    <!-- @click="check" הורדתי את זה מהוי מודל -->
</template>

<script>
import NumberArrow from '@/components/EasyTriviaComponents/NumberArrow.vue'


export default {
    props : ["numberQues","startPoint"],
    components : {
        NumberArrow,
    },
    data() {
        return {
           countT: 1,
           order: ["","","",""],
           space: "           ",
        };
    }, 
    methods : {
        previousQues () {
            this.$emit('go-back');
        },
        check(){
            // this.countT = 1;
            // if(this.checkMarkAll) {
                for(let i=0; i<4; i++) {
                    if(this.order[i] !== this.numberQues[0].correctAns[i]) {
                        this.countT = 0;
                    }
                // }
            }
        }, 
        finished () {
            this.check();
            this.$emit('submitTrivia', this.countT);
        }
    }, 
    computed: {
        checkMarkAll() {
            if (this.order[0] !== "" && this.order[1] !== "" && this.order[2] !== "" && this.order[3] !== "") {
                return true ;
            }
            return false;
        }
    },
    beforeMount () {
        this.order = this.numberQues[0].marked;
        // this.check();
    }
}
</script>

<style scoped>
.container {
    position: relative;
    margin-top: -1%;
    font-size: 80.5%;
    line-height: 150%;
    /*background-image: url("@/assets/basic/bigBubble.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;*/
   /* right: 50%;
    transform: translateX(50%);*/
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
    padding: 3rem 2rem 3.8rem 2rem;;
    height: 0rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: -1rem;
    /*padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;*/
}

label{
    width: 21rem;
    text-align: right;
    padding-right: 6%;
    padding-left: 10%;
}
.ques{
    margin-top: 4%;
    margin-left: 4%;
    margin-right: 4%;
    margin-bottom: -6%;
    font-size: 120%;
    transition: all 0.5s ease; 
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

.selectNumberColorDesign{
    color: #6c85b3;
}
.questionDesign {
    text-align: right;
    direction: rtl;
    padding: 2%;
}

.questionDesign > |*{
    transition: all 0.5s ease;
}

#next {
    width: 25%;
    position: relative;
    margin-right: 37.5%;
    margin-top: 2%;
}

.largeLetter{
    font-size: larger;
}

</style>