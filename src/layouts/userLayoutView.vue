<script setup>
import AppNavbar from '@/components/partials/AppNavbar.vue'
import AppFooter from '@/components/partials/AppFooter.vue'
</script>

<template>
    <AppNavbar></AppNavbar>

    <div class="container md:w-[70%] mx-auto mt-2 mb-4">
        <RouterView />
    </div>

    <AppFooter></AppFooter>
</template>