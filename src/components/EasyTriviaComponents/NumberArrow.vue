<template>
    <div class="place">
    <div class="currentQuesNumber">{{number}}</div>
    <div v-if="!showP" class="progress-bar" :style="{ background: 'radial-gradient(closest-side, rgb(130, 145, 194) 85%, transparent 80% 100%), conic-gradient(#cfd5f9 '+precent+'% , #96a6e4 0)'}"></div>
    </div>
    <div class="btns">
        <img src="@/assets/easyTriviaIcons/backBtn.png" alt="back" id="back" :class="[moveBack? 'btn-ani' : 'hide', 'btn']" @click=" () => {moveBack ? previousQues() : ''}">
        <img src="@/assets/easyTriviaIcons/forward.png" alt="next" id="next" :class="[moveNext ? 'btn-ani' : 'hide', 'btn']"  @click=" () => {moveNext ? nextQues():''}">        
    </div>
</template>

<script>
export default ({
    props : ["number", "moveNext", "moveBack", "showP"],
    data() {
     return {
        precent : 0,
        lastNumber : 0
     };
    },
    methods: {
        previousQues () {
            this.$emit('back');
            this.precent = (this.number-2)/52*100;
        }, 
        nextQues () {
            this.$emit('next');
            this.precent = this.number/52*100;
            // if (this.lastNumber < this.number) {
            //     this.lastNumber = this.number;
            //     this.precent = this.number/52*100;
            // }
        }
    },
    mounted () {
        // console.log(this.number);
        if (this.lastNumber < this.number && this.number != 1) {
                this.lastNumber = this.number;
                this.precent = this.number/52*100;
            }
    }
  })
</script>

<style scoped>
.currentQuesNumber{
    text-align: center;
    background-image: url("@/assets/shortQuesIcons/shortBubbleIcon.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    font-size: 3.1rem;
    padding: 2.4%;
    position: relative;
    z-index: 1;
}

.progress-bar {
    width: 5.5rem;
    height : 5.5rem;
    border-radius: 50%;
    transition: all 0.5s ease; 
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%);  
}

.place {
    position: relative;
    margin-top: 3%;
}

.btns{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 11rem;
    top: 4%;
    display: flex;
    justify-content: space-between;
    z-index: 1;
}

#next {
    left: 25%;
}

#back {
   right: 25%;
}

.btn {
    cursor: pointer;
    display: inline-block;
    height: 2.5rem;
}

.hide {
    opacity: 0;
}

.btn-ani{
    animation: enterAni 1s ease;
 }
 
 @keyframes enterAni {
     0% {
        opacity: 0;
 
     }
     100% {
        opacity: 1;
     }
 }
 
 @-webkit-keyframes enterAni {
    0% {
        opacity: 0;
 
     }
     100% {
        opacity: 1;
     }
 }
</style>