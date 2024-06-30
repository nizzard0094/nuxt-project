<template>
    <div class="bg-[#280B37] lg:max-w-96 aspect-[4/2.5] rounded-[4rem] flex flex-col items-center mx-auto">
        <div class="flex items-center gap-4 h-2/4">
            <NuxtImg class="w-16 h-16 rounded-full" :src=imgUrl alt="" />
            <div class="font-medium dark:text-white">
                <div>{{ name }}</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">{{ company }}</div>
            </div>
        </div>
        <p class="">{{ op }}</p>
    </div>
</template>

<script setup>
defineProps({ 'imgUrl': String, 'name': String, 'company': String, 'op': String })
</script>
