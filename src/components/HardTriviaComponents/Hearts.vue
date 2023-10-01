<template>
    <transition name="heart1">
        <img  v-if="lives > 2" class="img" src="@/assets/hardTriviaIcons/heartIcon.png" alt="hearts">    
    </transition>
     <transition  name="heart2">
        <img  v-if="lives > 1" class="img" src="@/assets/hardTriviaIcons/heartIcon.png" alt="hearts">    
    </transition>
    <transition   name="heart3">
        <img v-if="lives > 0" class="img" src="@/assets/hardTriviaIcons/heartIcon.png" alt="hearts">    
    </transition>



</template>

<script>
export default {
    props : ["lives"],
    data() {
        return {
            
        };
    }, 
    methods : {

    },
    mounted() {

    }
}
</script>

<style scoped>
.img {
    width: 2.5rem;
    margin-left: 0.5rem;
}

.heart1-leave-active{
    animation: exitHeart 0.5s ease;
}
.heart2-leave-active{
    animation: exitHeart 0.5s ease;
}
.heart3-leave-active{
    animation: exitHeart 0.5s ease;
}

@keyframes exitHeart {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
       }
}

@-webkit-keyframes exitHeart {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
       }
}
</style>