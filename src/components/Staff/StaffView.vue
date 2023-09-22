<template>
    <div class="staff__view">
        <div class="staff__view__container" v-if="chosenStaffData">
            <div class="staff__view__img">
                <img src="https://w7.pngwing.com/pngs/922/837/png-transparent-computer-icons-others-angle-text-rectangle.png" alt="">
            </div>
            <div class="staff__view__info">
                <h4>{{ chosenStaffData.name }}</h4>
                <p><span>email:</span> {{ chosenStaffData.email }}</p>
                <p><span>phone:</span> {{ chosenStaffData.phone }}</p>
                <h4>О себе:</h4>
                <p>{{ chosenStaffData?.company?.catchPhrase }}, {{ chosenStaffData?.company?.bs }}</p>
            </div>
        </div>
        <p v-else class="grid-centered text-medium-emphasis staff__view__placeholder">
            Выберите сотрудника, чтобы посмотреть его профиль
        </p>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const chosenStaffData = computed(() => {
    return store.getters.getChosenStaffData;
});
</script>