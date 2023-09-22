<template>
    <HeaderBar/>
    <main>
        <RouterView v-slot="{ Component, route }">
            <Transition>
                <Component :is="Component" :key="route.path" />
            </Transition>
        </RouterView>
    </main>
</template>

<script setup>
import HeaderBar from '@/components/Header/HeaderBar.vue';


</script>