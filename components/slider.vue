<script setup lang="ts">
import { Navigation } from 'swiper/modules';


</script>

<template>
    <Swiper :navigation="true" :modules="[Navigation]" :loop="true" :breakpoints="{ 992: { slidesPerView: 2 } }"
        :spaceBetween="20">
        <swiper-slide>
            <customeropinine imgUrl="/profile-picture-5.jpg" name="Jese Leos" company="wwadad wefege"
                op="oiahwodiahwodiawoidowaidjoaiwdoiawhdoi awhdoiawhodiwahawoidh" />
        </swiper-slide>
        <swiper-slide>
            <customeropinine imgUrl="/profile-picture-5.jpg" name="Jese Leos2" company="wwadad wefege"
                op="oiahwodiahwodiawoidowaidjoaiwdoiawhdoi awhdoiawhodiwahawoidh" />
        </swiper-slide>
        <swiper-slide>
            <customeropinine imgUrl="/profile-picture-5.jpg" name="Jese Leos3" company="wwadad wefege"
                op="oiahwodiahwodiawoidowaidjoaiwdoiawhdoi awhdoiawhodiwahawoidh" />
        </swiper-slide>
        <swiper-slide>
            <customeropinine imgUrl="/profile-picture-5.jpg" name="Jese Leos4" company="wwadad wefege"
                op="oiahwodiahwodiawoidowaidjoaiwdoiawhdoi awhdoiawhodiwahawoidh" />
        </swiper-slide>
        <swiper-slide>
            <customeropinine imgUrl="/profile-picture-5.jpg" name="Jese Leos5" company="wwadad wefege"
                op="oiahwodiahwodiawoidowaidjoaiwdoiawhdoi awhdoiawhodiwahawoidh" />
        </swiper-slide>
        <swiper-slide>
            <customeropinine imgUrl="/profile-picture-5.jpg" name="Jese Leos6" company="wwadad wefege"
                op="oiahwodiahwodiawoidowaidjoaiwdoiawhdoi awhdoiawhodiwahawoidh" />
        </swiper-slide>

    </Swiper>
</template>

<style>
:root {
    --swiper-navigation-color: while;
    --swiper-pagination-color: while;
}

.swiper-slide {
    width: fit-content;
}
</style>