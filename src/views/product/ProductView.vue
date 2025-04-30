<script setup>
import CarouselView from '@/components/product/CarouselView.vue'
import OrderView from '@/components/product/OrderView.vue'

</script>

<template>
  <div class="mt-[80px] md:mt-[138px] md:bg-base-200 md:rounded-lg">
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4">
      <CarouselView></CarouselView>
      <OrderView></OrderView>
    </div>
  </div>
</template>
