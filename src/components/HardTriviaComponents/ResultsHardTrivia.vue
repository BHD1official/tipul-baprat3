<template>
    <div class="questionDesign">
        <div class="text1">ענית נכון על</div>
        <div class="numberOfTrueAns">{{sumTrueAns}}</div>
        <div>שאלות!</div>
        <div class="container">
            <div class="btn" @click="tryAgain">שחק שוב</div>
        </div>
    </div>

</template>

<script>

export default {
    props : ["sumTrueAns"],
    data() {
        return {
        };
    }, 
    methods : {
        tryAgain () {
            this.$emit('try-again');
        },

    },
}
</script>

<style scoped>

.questionDesign {
    text-align: right;
    display: inline-block;
    direction: rtl;
    width: 100%;
    font-size: 269%;
}

.numberOfTrueAns {
    background-image: url("@/assets/shortQuesIcons/shortBubbleIcon.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5%;
    margin-top: 5%;
    margin-bottom: 5%;
}

.text1{
    margin-top: 40%;
}


.btn {
    background-image: url("@/assets/shortQuesIcons/shortBubbleIcon.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    direction: rtl;
    font-size: 38%;
    padding: 5%;
    width: 16%;
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    margin-top: 10%;
}

.container{
    display: flex;
    width: 100%;
    justify-content: center;

}

</style>