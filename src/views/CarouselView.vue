<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'

const images = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    url: `https://picsum.photos/seed/${Math.random()}/800/600`,
}))

const isMobileBrowser = () => {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const config = {
    height: isMobileBrowser() ? 200 : 400,
    itemsToShow: 2,
    gap: 4,
    autoplay: 4000,
    wrapAround: true,
    pauseAutoplayOnHover: true,
}
</script>

<template>
    <Carousel v-bind="config">
        <Slide v-for="image in images" :key="image.id">
            <img :src="image.url" alt="image" style="width: 100%" />
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>