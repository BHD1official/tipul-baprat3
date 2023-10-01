<template>
  <transition appear name="fade" mode="out-in">
    <div class="contianer">
    <!-- יוהלם -->
    <router-link :to="{ name: 'learningScreen', params : { subject: 'yuhalam'} }" id="yuhalam" class="textUnderline">
      <div class="divYuhalam">יוהל"ם</div>
      <img class="img1" src="@/assets/pickSubjectIcons/yuhalam.png" alt="yuhalam">
    </router-link>

    <!-- רפואה -->

      <router-link :to="{ name: 'learningScreen', params : { subject: 'medicine'} }" id="medicine" class="textUnderline">
          <div class="divMedicine">רפואה</div>
          <img class="img4" src="@/assets/pickSubjectIcons/medicine.png" alt="medicine">
      </router-link>


    <!-- משמעת -->
    <router-link :to="{ name: 'learningScreen', params : { subject: 'discipline'} }" id="discipline" class="textUnderline">
      <div class="divDiscipline">משמעת</div>
      <img class="img1" src="@/assets/pickSubjectIcons/discipline.png" alt="medicine">
    </router-link>

    <!-- השירות המשותף -->
    <router-link :to="{ name: 'learningScreen', params : { subject: 'meshutaf'} }" id="meshutaf" class="textUnderline fit-img">
      <div class="divMeshutaf1">השירות</div>
      <img class="img3" src="@/assets/pickSubjectIcons/meshutaf.png" alt="medicine">
      <div class="divMeshutaf2">המשותף</div>
    </router-link>

    <!-- משא"ן סדיר -->
    <router-link :to="{ name: 'learningScreen', params : { subject: 'mashan'} }" id="mashan" class="textUnderline">
      <div class="divMashan">משא"ן</div>
      <img class="img1" src="@/assets/pickSubjectIcons/mashan.png" alt="medicine">
      <div class="divMashan">סדיר</div>
    </router-link>

    <!-- ברה"ן -->
    <router-link :to="{ name: 'learningScreen', params : { subject: 'mentalHealth'} }" id="mentalHealth" class="textUnderline">
      <img class="img1" src="@/assets/pickSubjectIcons/mentalHealth.png" alt="medicine">
      <div class="divMentalHealth">ברה"ן</div>
    </router-link>


    <!-- תנאי שירות -->
    <router-link :to="{ name: 'chooseTash'}" id="tash" class="textUnderline fit-img">
      <img class="img1" src="@/assets/pickSubjectIcons/tash.png" alt="medicine">
      <div class="divTash">תנאי שירות</div>
    </router-link>

    <!-- רבנות -->
    <router-link :to="{ name: 'learningScreen', params : { subject: 'rabanut'} }" id="rabanut" class="textUnderline">
      <img class="img1" src="@/assets/pickSubjectIcons/rabanut.png" alt="medicine">
      <div class="divRabanut">רבנות</div>
    </router-link>



    <!-- חינוך -->
    <router-link :to="{ name: 'learningScreen', params : { subject: 'education'} }" id="education" class="textUnderline">
      <img class="img2" src="@/assets/pickSubjectIcons/education.png" alt="medicine">
      <div class="divEducation">חינוך</div>
    </router-link>

    <!-- בחן אותי -->
    <router-link to="/pickTriviaType" id="testMe" class="textUnderline">
      <div class="divTestMe">בחן אותי</div>
      <img class="img3" src="@/assets/pickSubjectIcons/testMeIcon.png" alt="medicine">
    </router-link>

  </div>
</transition>

</template>
<script>
import gsap from 'gsap'
export default{
 data () {

 },
}
</script>


<style scoped>
.contianer{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


.textUnderline {
  text-decoration: none;
  margin-top: -1.5rem;
}

.img1 {
  width: 6rem;
}

.img2 {
  width: 7rem;
}

.img3 {
  width: 4.5rem
}

.img4{
  width: 8rem;
}

#yuhalam{
  width: 100%;
  margin-top: 0rem;
}
.divYuhalam {
  position: relative;
  margin-top: 3%;
  margin-bottom: -2%;
  margin-right: 3%;
}


#medicine{
  width: 40%;
  margin-left: 10%;
  z-index: 1;
}

.divMedicine{
  position: relative;
  margin-bottom: -25%;
  margin-left: 38%;
}


#discipline {
  width: 40%;
  margin-right: 10%;
  z-index: 1;
}


.divDiscipline {

}

#meshutaf {
  margin-top: -5rem;
  width: 100%;
}

.divMeshutaf1 {
  z-index: -1;  
}

.divMeshutaf2 {
  z-index: -1;  
}


#mashan {
  width: 40%;
  margin-left: 10%;
}

.divMashan{
  position: relative;
  margin-right: 5%;
}

#mentalHealth {
  width: 40%;
  margin-right: 10%;
}

.divMentalHealth{
  position: relative;
  margin-top: -13%;
  margin-right: 12%;
}

#tash {
  width: 100%;
  margin-top: -2.5rem;
}

.divTash {
  z-index: -1;  
}

#rabanut {
  width: 40%;
  margin-left: 10%;
}

.divRabanut{
  position: relative;
  margin-top: -1%;
}

#education {
  width: 40%;
  margin-right: 10%;
}

.divEducation {
  position: relative;
  margin-top: -8%;
  margin-right: 10%;
}


#testMe {
  width: 100%;
}

.divTestMe {
  position: relative;
  margin-top: -5%;
}

.fade-enter-active{
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