<template>


<div

class="eye-hotspot"

@mouseenter="hover=true"

@mouseleave="hover=false"

@click="$emit('enter')"

:class="{active:hover}"

>


</div>


</template>



<script setup lang="ts">

import {ref} from "vue"


const hover=ref(false)


defineEmits([
"enter"
])


</script>



<style scoped>


.eye-hotspot{


position:absolute;


width:280px;

height:180px;


left:18%;

top:22%;


z-index:20;


cursor:pointer;


}



.eye-hotspot.active{


background:

radial-gradient(

circle,

rgba(255,255,255,.18),

transparent

);


transform:scale(1.05);


transition:.5s;


}



</style>