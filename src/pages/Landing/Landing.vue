<template>

<div class="landing-page">

    <!-- Background -->
    <div class="background-scene"></div>


    <!-- Atmosphere -->
    <div class="atmosphere"></div>


    <!-- Curtain -->
    <CurtainLayer />


    <!-- Logo -->
    <LunaLogo />


    <!-- Interactive Eye -->
    <EyePortal
        @enter="enterProfile"
    />


    <!-- Transition -->
    <SceneTransition
        :active="transitionActive"
    />

</div>


</template>



<script setup lang="ts">

import {ref} from "vue"

import CurtainLayer from "@/components/landing/CurtainLayer.vue"
//import LunaLogo from "@/components/landing/LunaLogo.vue"
import EyePortal from "@/components/landing/EyePortal.vue"
import SceneTransition from "@/components/landing/SceneTransition.vue"

import {useRouter} from "vue-router"



const router = useRouter()


const transitionActive = ref(false)



const enterProfile = ()=>{


    transitionActive.value=true


    setTimeout(()=>{

        router.push("/profile")

    },1200)


}



</script>




<style scoped>


.landing-page{

position:relative;

width:100vw;

height:100vh;

overflow:hidden;

background:black;

}



/* surreal background */

.background-scene{

position:absolute;

inset:0;

background-image:url("@/assets/landing/landing-bg.webp");

background-size:cover;

background-position:center;

}



/* blue atmosphere */

.atmosphere{

position:absolute;

inset:0;

background:

linear-gradient(

180deg,

rgba(7,15,60,.35),

rgba(0,0,0,.25)

);


}




</style>