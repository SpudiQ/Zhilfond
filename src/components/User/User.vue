<template>
    <div>
        {{ getUserData }}
        <br><br><br><br>
        <p>Можно было бы что-нибудь накидать, в макете нет, а переиспользовать StaffView тоже можно при желании.</p>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()

const getUserData = computed(() => {
    const userData = store.getters.getUserData;

    return userData
});

onMounted(() => {
    store.dispatch('fetchUserData', route.params.id)
})
</script>