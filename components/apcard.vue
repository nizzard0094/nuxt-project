<script setup>
defineProps({'text':String,'imgUrl':String})
</script>
[
<template>
        <div class="bg-[#FEFEFE]  p-4  aspect-square flex flex-col justify-center space-y-10 rounded-lg">
            <div class=" h-2/4 flex justify-center">
                <NuxtImg :src="imgUrl" fit="contain"/>
            </div>
            <p class=" text-xl font-medium whitespace-pre-wrap">{{text}}</p>
        </div>
</template>

