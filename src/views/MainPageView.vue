<script setup>
import { onMounted } from 'vue';
import { RouterLink } from "vue-router";

// components
import CarouselView from './CarouselView.vue';

// composables
import { useMainService } from '../composables/useMain'

const { 
    fnGetProduct,
    productList
 } = useMainService()

onMounted(() => {    
    fnGetProduct()
})
</script>

<template>
    <div class="mt-[60px] md:mt-[12%]">
        <CarouselView></CarouselView>
    </div>

    <div class="navbar bg-base-100 md:rounded-lg mt-2 shadow-[0_10px_15px_-5px_rgba(0,0,0,0.2),0_-10px_15px_-5px_rgba(0,0,0,0.2)]">
        <span class="text-xl font-bold"><font-awesome-icon :icon="['fas', 'tag']" class="mr-1 text-warning" /> สินค้าขายดี</span>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mt-2 p-2 md:p-0">
        <div v-for="(item, index) in productList" :key="index" class="grid-col-1 card-compact bg-base-100 shadow-xl mt-2 rounded-lg">
            <figure><img :src="item.img" alt="image" class="rounded-t-lg" /></figure>
            <div class="card-body">
                <b class="text-lg truncate w-auto font-bold">{{ item.name }}</b>
                <div class="card-actions grid grid-cols-4 gap-4 items-center">
                    <div>
                        <RouterLink :to="{ name: 'product-page', params: { id: item.id } }">
                            <button class="btn btn-square btn-success btn-sm text-white">
                                <font-awesome-icon :icon="['fas', 'plus']" class="text-[22px]" />
                            </button>
                        </RouterLink>
                    </div>
                    <div class="text-end col-span-3">
                        <div class="stat-title text-success font-bold text-[20px] md:text-[18px]">
                            <small>฿</small>{{ Math.floor(item.price).toLocaleString() }}.-
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid sm:grid-rows-2 sm:grid-flow-col gap-4 mt-4">
        <div class="sm:row-span-2 flex">
            <div class="carousel-item w-full">
                <img src="https://cdn.ranjaeleng.com/download/productpro/650x650/20250115_650px-01.jpg?_t=v-Hotfix-202504131745821466" class="w-full sm:rounded-lg" />
            </div> 
        </div>
        <div class="carousel-item w-full">
            <img src="https://cdn.ranjaeleng.com/download/productpro/768x450/UV-2025.jpg?_t=v-Hotfix-202504131745821466" class="w-full sm:rounded-lg" />
        </div> 
        <div class="carousel-item w-full">
            <img src="https://cdn.ranjaeleng.com/download/productpro/768x450/Maxmate-2025.jpg?_t=v-Hotfix-202504131745821466" class="w-full sm:rounded-lg" />
        </div> 
    </div>
</template>