<template>
    <HomeBtn></HomeBtn>
    <transition appear name="back">
    <div v-if="subject.substring(0,4) === 'tash'" class="back-btn" >
        <router-link :to="{ name: 'chooseTash'}" >
            <img src="@/assets/easyTriviaIcons/backBtn.png" alt="back" class="btn">
        </router-link>
    </div>
</transition>

<transition appear name="icon">
    <div class="img-container">
        <img v-if="subject.substring(0,4) === 'tash'" src="@/assets/pickSubjectIcons/tash.png" class="img1" alt="img">
        <img v-if="subject === 'discipline' " src="@/assets/pickSubjectIcons/discipline.png" class="img1" alt="img">
        <img v-if="subject === 'education' " src="@/assets/pickSubjectIcons/education.png" class="img3" alt="img">
        <img v-if="subject === 'mashan' " src="@/assets/pickSubjectIcons/mashan.png" class="img1" alt="img">
        <img v-if="subject === 'medicine' " src="@/assets/pickSubjectIcons/medicine.png" class="img3" alt="img">
        <img v-if="subject === 'mentalHealth' " src="@/assets/pickSubjectIcons/mentalHealth.png" class="img3" alt="img">
        <img v-if="subject === 'meshutaf' " src="@/assets/pickSubjectIcons/meshutaf.png" class="img4" alt="img">
        <img v-if="subject === 'rabanut' " src="@/assets/pickSubjectIcons/rabanut.png" class="img5" alt="img">
        <img v-if="subject === 'yuhalam' " src="@/assets/pickSubjectIcons/yuhalam.png" class="img2" alt="img">
    </div>
 
</transition>
    
  <transition  appear 
  name="fade"
  @before-enter= "beforeEnter"
  @enter="enter">
    <div class="big-container">
        <div class="container">
            <!-- כותרת -->
            <div class="title space-under">{{information.headline}}</div>
            <!-- הסבר -->
            <div class="mini-text">לחצו על הנושא שעליו תרצו לקרוא</div>
            <!-- הקדמה -->
            <div class="space-under">
                <div v-if="information.intro.text[0] !== ''" class="subtitle" @click="showIntro=!showIntro">הקדמה</div>
                  <transition name="open1">
                    <div v-if="showIntro" class="container-text">
                        <div class="intro-title" v-if="information.intro.title !=='' ">{{information.intro.title}}</div>
                        <div v-if="information.intro.text[0] !==''">
                            <div class="intro-text" v-for="info in information.intro.text" :key="info">{{info}}</div>
                        </div>
                    </div>
                </transition>  
            </div>
            <!-- הפקודות -->
            <div class="space-under" v-for="(command, index) in information.commands" :key="index">
                <div class="subtitle" @click="show[index]=!show[index]"> {{command.title}}</div>
                <transition name="open2">
                    <div class="container-text" v-if="show[index]" @click="show[index]=!show[index]" >
                        <div class="intro-text" v-if="command.intro !== '' ">{{command.intro}}</div>
                        <div class="space-under-between" v-for="(paragraph, count) in command.text" :key="count">
                            {{letters[count]}}. 
                            <div :class="['text', isNumber(line) ? 'number' : '', !isNumber(line) && line.charAt(1) === ')' ? 'letter' : '' ]" v-for="line in paragraph" :key="line"> {{line}}</div>
                        </div>
                        <div>{{command.ending}}</div>
                    </div>
                </transition>
            </div>

        </div>
    </div>
  </transition>


</template>

<script>
import HomeBtn from '@/components/HomeBtn.vue'
import discipline from '@/data/discipline.json'
import education from '@/data/education.json'
import mashan from '@/data/mashan.json'
import medicine from '@/data/medicine.json'
import mentalHealth from '@/data/mentalHealth.json'
import meshutaf from '@/data/meshutaf.json'
import rabanut from '@/data/rabanut.json'
import tash1 from '@/data/tash1.json'
import tash2 from '@/data/tash2.json'
import tash3 from '@/data/tash3.json'
import tash4 from '@/data/tash4.json'
import yuhalam from '@/data/yuhalam.json'
import gsap from 'gsap'

export default ({
    props : ["subject"],
    components : {
        HomeBtn,
    },
    data() {
     return {
        information : null,
        letters: ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "י''א", "י''ב", "י''ג"],
        show: [],
        showIntro: false,
     };
    },  
    methods : {
        isNumber (line) {
            if (!isNaN(line.charAt(0))) {
                return true;
            } 
            return false;
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
    },
    created () {
        switch(this.subject) {
            case 'discipline' : 
                this.information = discipline;
                break;
            case 'education' : 
                this.information = education;
                break;
            case 'mashan' : 
                this.information = mashan; 
                break;
            case 'medicine' : 
                this.information = medicine;
                break;
            case 'mentalHealth' : 
                this.information = mentalHealth;
                break;
            case 'meshutaf' : 
                this.information = meshutaf;
                break;
            case 'rabanut' : 
                this.information = rabanut;
                break;
            case 'yuhalam' : 
                this.information = yuhalam;
                break;
            case 'tash1' : 
                this.information = tash1;
                break;
            case 'tash2' : 
                this.information = tash2;
                break;
            case 'tash3' : 
                this.information = tash3;
                break;
            default: 
                this.information = tash4;
                break;
            }
            for (let i = 0; i < this.information.length; i++) {
                this.show[i] = flase;
            }
        }
  })
</script>

<style scoped>
* {
    text-align: right;  
    color: #194351;
}
.container {
    overflow-y: scroll;
    background-color:#d1d4eb;
    border-top-right-radius: 1.5rem;
    border-top-left-radius: 1.5rem;
    padding-right: 1rem;
    padding-left: 1rem;
    width: 80%;
}

.big-container {
    display: flex;
    justify-content: center;
    height: 75%;
    margin-top: 5rem;
}
.title {
    text-align: center;
    font-size: 130%;
    margin-top: 0.5rem;
}

.space-under {
    margin-bottom: 0.75rem;
}

.space-under-between {
    margin-bottom: 0.3rem;
}

.btn {
    cursor: pointer;
    display: inline-block;
    height: 2rem;
    position: fixed;
    top: 3.7%;
}

.back-btn {
    position: relative;
    display: flex;
    justify-content: flex-start;
    padding-right: 5rem;
}

.img1 {    
    display: inline-block;
    position: fixed;
    width: 4rem;
    padding-top: 1%;
    top: 2%;
  }

  .img2 {    
    display: inline-block;
    position: fixed;
    width: 3.5rem;
    top: 2%;
  }

  .img3 {    
    display: inline-block;
    position: fixed;
    width: 4rem;
    top: 2%;
  }

  .img4 {    
    display: inline-block;
    position: fixed;
    width: 2.5rem;
    top: 2%;
  }

  .img5 {    
    display: inline-block;
    position: fixed;
    width: 3rem;
    top: 2%;
  }


  .img-container {
    position: relative;
    display: flex;
    justify-content: flex-end;
    padding-left: 2rem;
  }

.intro-title {

}


.intro-text {

}

.subtitle {
    background-color: #8A97C8;
    border-radius: 1rem;
    padding-right: 1.5rem; 
    padding-left: 1rem;
    padding-top: 0.5rem; 
    padding-bottom: 0.5rem; 
    position: relative;
    z-index: 1;
}

.text{
    display: inline;
}

.number {
   padding-right: 1rem; 
   display: block;
}

.letter {
    padding-right: 2rem; 
    display: block; 
}



.back-enter-active{
    animation: enterAniBack 1s ease;
 }
 
 @keyframes enterAniBack {
     0% {
         transform: translateX(5rem); 
         top: 3.7%;
     }
     100% {
         transform: translateX(0);
         top: 3.7%;
        }
 }
 
 @-webkit-keyframes enterAniBack {
    0% {
        transform: translateX(5rem); 
        top: 3.7%;
    }
    100% {
        transform: translateX(0);
        top: 3.7%;
       }
 }

.icon-enter-active{
    animation: enterAniIcon 1s ease;
 }
 
 @keyframes enterAniIcon {
     0% {
         transform: translateX(-5rem);
        top: 2%;
     }
     100% {
         transform: translateX(0);
          top: 2%;
        }
 }
 
 @-webkit-keyframes enterAniIcon {
     0% {
        transform: translateX(-5rem);
        top: 2%; 
     }
     100% {
        transform: translateX(0);
        top: 2%; 
     }
 }

 .mini-text {
    font-size: 1.12rem;
    margin-bottom: 0.5rem;
    margin-top: -0.8rem;
    text-align: center;
 }

 .container-text {
    background-color: #E5E7F3;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    padding-right: 1.5rem; 
    padding-left: 1rem;
    padding-top: 1rem;
    z-index: -1;
    margin-top: -1rem;
}

 @keyframes enterText {
    0% {
        opacity: 0;
        transform: translateY(-2rem);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
       }
}

@-webkit-keyframes enterText {
    0% {
        opacity: 0;
        transform: translateY(-2rem);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
       }
}

.open1-enter-active{
    animation: enterText 0.5s ease;
}

.open1-leave-active{
    animation: exitText 0.5s ease;
}

.open2-enter-active{
    animation: enterText 0.5s ease;
}

.open2-leave-active{
    animation: exitText 0.5s ease;
}

@keyframes exitText {
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-2rem);
       }
}

@-webkit-keyframes exitText {
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-2rem);
       }
}


</style>
