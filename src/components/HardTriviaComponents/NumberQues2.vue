<template>
    <div dir="rtl" class="questionDesign">
        <form>
            <div class="ques">{{numberQues[0].question}}</div>
            <br>
            <div class="container">
                <div class="mini-container">
                    <label>{{numberQues[0].ans1}} {{space}}</label>
                    <select v-model="order[0]" :class="['selectDesign' , !checkMarkAll ? '' : numberQues[0].correctAns[0]===order[0] ? 'right' : 'wrong']"  @click="check">
                        <!-- ,numberQues[0].correctAns[0]===numberQues[0].marked[0] ? 'right' : 'wrong' -->
                        <!-- :disabled="marked" -->
                        <option class="selectNumberColorDesign" value="1">1</option>
                        <option class="selectNumberColorDesign" value="2">2</option>
                        <option class="selectNumberColorDesign" value="3">3</option>
                        <option class="selectNumberColorDesign" value="4">4</option>
                    </select>
                </div>
                <div class="mini-container">
                    <label>{{numberQues[0].ans2}} {{space}}</label>
                    <select v-model="order[1]" :class="['selectDesign' , !checkMarkAll ? '' : numberQues[0].correctAns[1]===order[1] ? 'right' : 'wrong' ]"  @click="check" >
                        <!-- ,numberQues[0].correctAns[1]===numberQues[0].marked[1] ? 'right' : 'wrong' -->
                        <!-- :disabled="marked" -->
                        <option class="selectNumberColorDesign" value="1">1</option>
                        <option class="selectNumberColorDesign" value="2">2</option>
                        <option class="selectNumberColorDesign" value="3">3</option>
                        <option class="selectNumberColorDesign" value="4">4</option>
                    </select>
                </div>
                <div class="mini-container">
                    <label>{{numberQues[0].ans3}} {{space}}</label>
                    <select v-model="order[2]" :class="['selectDesign' , !checkMarkAll ? '' : numberQues[0].correctAns[2]===order[2] ? 'right' : 'wrong']" @click="check">
                        <!-- , numberQues[0].correctAns[2]===numberQues[0].marked[2] ? 'right' : 'wrong' -->
                        <!-- :disabled="marked" -->
                        <option class="selectNumberColorDesign" value="1">1</option>
                        <option class="selectNumberColorDesign" value="2">2</option>
                        <option class="selectNumberColorDesign" value="3">3</option>
                        <option class="selectNumberColorDesign" value="4">4</option>
                    </select>
                </div>
                <div class="mini-container">
                    <label>{{numberQues[0].ans4}} {{space}}</label>
                    <select v-model="order[3]" :class="['selectDesign' , !checkMarkAll ? '' : numberQues[0].correctAns[3]===order[3] ? 'right' : 'wrong']" @click="check" >
                        <!-- , numberQues[0].correctAns[3]===numberQues[0].marked[3] ? 'right' : 'wrong' -->
                        <!-- :disabled="marked" -->
                        <option class="selectNumberColorDesign" value="1">1</option>
                        <option class="selectNumberColorDesign" value="2">2</option>
                        <option class="selectNumberColorDesign" value="3">3</option>
                        <option class="selectNumberColorDesign" value="4">4</option>
                    </select>
                </div>
            </div>
        </form>
    </div>

</template>

<script>


export default {
    props : ["numberQues"],
    data() {
        return {
            result: true,
           order: ["","","",""],
           space: "           ",
           marked : false,
        };
    }, 
    methods : {
        check(){
            if(this.checkMarkAll) {
                for(let i=0; i<4; i++) {
                    if(this.order[i] !== this.numberQues[0].correctAns[i]) {
                        this.result = false;
                    }
                }
                setTimeout(() => {
                    this.$emit('finish', this.result)
                }, 1500);
            }
        },
    }, 
    computed: {
        checkMarkAll() {
            if (this.order[0] !== "" && this.order[1] !== "" && this.order[2] !== "" && this.order[3] !== "") {
                return true ;
            }
            return false;
        }
    },
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

.largeLetter {
    font-size: larger;
}

.right {
    color: black;
   background: #3bf35d;
   z-index: 10;
}

.wrong {
    color: black;
    background: #fd82d2;
    z-index: 10;
}

</style>