<template>
    <div>
        <User/>
    </div>
</template>

<script setup>
import User from '@/components/User/User.vue';
import { onMounted } from 'vue'
import { useStore } from 'vuex';
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useStore()

onMounted(() => {
  store.dispatch('fetchUserData', route.params.id); // Вызывает действие fetchUserData из модуля user
});
</script>