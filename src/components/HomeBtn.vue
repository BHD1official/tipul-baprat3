<template>
    <router-link to="/">
        <img src="@/assets/basic/homeIcon.png" class="btn" alt="homeBtn">
    </router-link>
</template>

<script>
export default ({
    data() {
     return {

     };
    },
    components : {
    }
  })
</script>

<style scoped>
.btn{
    cursor: pointer;
    display: inline-block;
    position: fixed;
    top: 1%;
    width: 2rem;
    right: 2%;
    z-index: 5;
}
</style>
