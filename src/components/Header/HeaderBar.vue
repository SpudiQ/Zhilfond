<template>
    <header class="header__container">
        <h1 class="header__logo" @click="router.push('/')">Жилфонд</h1>
        <h4 class="header__user" @click="router.push('/user/1')">Пользователь</h4>
    </header>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>