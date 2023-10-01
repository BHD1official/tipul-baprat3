<template>
<transition appear name="fade"
@before-enter= "beforeEnter"
@enter="enter">
    <div>
        <div class="text">
            <div class="headline">צוער/ת יקר/ה,</div>
            <div class="center">לפניך מבחן על זמן בנושא טיפול בפרט.</div>
            <div class="center">משך המבחן הוא כ-20 דקות ובמבחן יש 30 שאלות, מתוכן:  </div>
            <ul class="list">
                <li>שאלות אמריקאיות</li>
                <li>שאלות נכון/ לא נכון</li>
                <li>שאלת מספור פעולות</li>
            </ul>
            <div class="center">לאחר שענית על שאלה המבחן אוטמטית עובר לשאלה הבאה ואין אופציה לחזור לשאלות שכבר ענית עליהן</div>
            <!-- <div class="center">בסוף המבחן אפשר ללמוד מהטעויות. </div> -->
             <div> ניתן להיבחן יותר פעם אחת.</div>
        </div>
        <div class="goodluck">בהצלחה!</div>
        <div @click="startTest" class="startBtn">שנתחיל?</div>
    </div>
</transition>
</template>

<script>
import gsap from 'gsap'

export default ({
    data() {
     return {

     };
    },
    methods: {
        startTest () {
            this.$emit('start-test');
        },
        beforeEnter (el) {
            el.style.transform = 'translateY(60px)';
            el.style.opacity = 0;
        },
        enter (el, done) {
            gsap.to(el, {
            duration: 1,
            y: 0, 
            opacity: 1,
            onComplete: done
            })
        },
    }

  })
</script>

<style scoped>
.startBtn{
    background-image: url("@/assets/shortQuesIcons/shortBubbleIcon.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    font-size: 170%;
    padding: 15%;
    height: fit-content;
    position: relative;
    top: 1%;
    left: 50%;
    transform: translateX(-50%);
}


.text{
    margin-top: 10%;
    font-size: 100%;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.goodluck{
    margin-bottom: 2%;
    font-size: 2.3rem;
}

.headline{
    margin-top: -15%;
    font-size: 3rem ;
    line-height: 140%;
}

.list{
    margin-top: 4%;
    margin-bottom: 4%;
    font-size: 1.7rem;
}
</style>