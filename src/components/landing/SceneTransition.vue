<template>


<div

class="transition"

:class="{show:active}"

></div>


</template>


<script setup lang="ts">


defineProps<{

active:boolean

}>()


</script>



<style scoped>


.transition{


position:absolute;

inset:0;

background:white;

opacity:0;

pointer-events:none;

z-index:100;


transition:

opacity 1.2s;


}


.show{


opacity:1;


}


</style>