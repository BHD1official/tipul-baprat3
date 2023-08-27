<template>
  <div>{{showMin}}:{{showSec}}</div>
</template>

<script>
export default {
    props : [""],
    data() {
        return {
            min : 20,
            sec : 0,
            showSec : null,
            showMin : null,
            timer : null,
        };
    }, 
    methods : {
        stop () {
            clearInterval(this.time);
        },
        continueTimer () {
            this.time = setInterval(() => {
            this.changeTime()}
            ,1000) 
        },
        startTimer () {
          this.time = setInterval(() => {
            this.changeTime()}
            ,1000) 
        },
        changeTime () {
            if(this.sec == 0 && this.min === 0) {
                clearInterval(this.time);
            } else if (this.sec == 0) {
                    this.sec = 59;
                    this.min--;
            } else {
                this.sec--;
            }
            if(this.sec < 10) {
                    this.showSec = '0'+this.sec;
            } else {
                    this.showSec = this.sec;
            }
            if(this.min < 10) {
                    this.showMin = '0'+this.min;
            } else {
                    this.showMin = this.min;
            }
        }

    },
    mounted() {
        this.showSec = '0'+this.sec;
        this.showMin = this.min;
        this.startTimer();
    }
}
</script>

<style scoped>

</style>