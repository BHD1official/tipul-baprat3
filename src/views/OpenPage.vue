<template>
    <transition appear name="icon1">
        <img class="bhd1Icon" src="../assets/openPagePic/bhd1Icon.png" alt="bhd1Icon">
    </transition>
    <transition appear name="icon5">
        <div class="bbl-container1">
            <img class="bbl1" src="../assets/shortQuesIcons/shortBubbleIcon.png" alt="bbl">
            <img class="bbl2" src="../assets/shortQuesIcons/shortBubbleIcon.png" alt="bbl">
        </div>
    </transition>
    <transition appear name="icon2">
        <img class="lomdat" src="../assets/openPagePic/lomdat.png" alt="lomdat">
    </transition>
    <transition appear name="icon3">
        <img class="tipul" src="../assets/openPagePic/tipul.png" alt="tipul">
    </transition>
    <transition appear name="icon4">
        <img class="baprat" src="../assets/openPagePic/baprat.png" alt="baprat">
    </transition>
    <transition appear name="icon6">
        <div class="bbl-container2">
            <img class="bbl3" src="../assets/shortQuesIcons/shortBubbleIcon.png" alt="bbl">
            <img class="bbl4" src="../assets/shortQuesIcons/shortBubbleIcon.png" alt="bbl">
        </div>
    </transition>
</template>

<script>
export default ({
    data() {
     return {
     };
    },  
    mounted() {
        setTimeout(() => {
            this.$router.push("homePage");
        }, 4000);
    }
    
  })
</script>

<style scoped>
.lomdat{
    width: 22rem;
    margin-top: -2rem;
}

.tipul {
    width: 22rem;
}

.baprat{
    width: 22rem;
}

.bhd1Icon {
    width: 7rem;
    margin-top: 1rem;
}

.bbl1 {
    width: 4.5rem;
    height: 4.5rem;
}

.bbl2{
    width: 2.5rem;
    height: 2.5rem;
    margin-right: -1rem;
    padding-top: 2.5rem;
}

.bbl-container1 {
    margin-top: -5rem;
    display: flex;
    justify-content: left;
    padding-left: 1rem;
}

.bbl3 {
    width: 4.5rem;
    height: 4.5rem;
}

.bbl4{
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
    padding-top: 3rem;
}

.bbl-container2 {
    margin-top: 1rem;
    display: flex;
    justify-content: right;
    padding-right: 1rem;
}

.icon1-enter-active{
    animation: enterAniIcon 4s ease;
 }

 .icon2-enter-active{
    animation: enterAniIcon 3s ease;
 }
 .icon3-enter-active{
    animation: enterAniIcon 2s ease;
 }
 .icon4-enter-active{
    animation: enterAniIcon 1s ease;
 }

 .icon5-enter-active{
    animation: enterAniIcon 3.5s ease;
 }
 .icon6-enter-active{
    animation: enterAniIcon 2.5s ease;
 }
 
 
 @keyframes enterAniIcon {
     0% {
         transform: translateY(5rem);
        top: 2%;
        opacity: 0;
     }
     100% {
         transform: translateX(0);
          top: 2%;
        opacity: 1;
        }
 }
 
 @-webkit-keyframes enterAniIcon {
     0% {
        transform: translateY(5rem);
        top: 2%; 
     }
     100% {
        transform: translateX(0);
        top: 2%; 
     }
 }

</style>