<template>
    <div class="staff__list__container">
        <h4>Результаты</h4>
        <!-- можно было бы реализовать через resolveComponent -->
        <Loader class="mx-auto" v-if="isGettingData">Gets data</Loader>
        <div v-else>
            <div class="staff__list__wrapper" v-if="hasStaffData === true">
                <StaffSidebarListCard v-for="staff in getStaffData" :staff="staff"/>
            </div>
            <p class="text-medium-emphasis" v-else-if="hasStaffData === false">ничего не найдено</p>
            <p class="text-medium-emphasis" v-else>начните поиск</p>
        </div> 
    </div>
</template>

<script setup>
import Loader from '../Loader.vue';
import StaffSidebarListCard from './StaffSidebarListCard.vue';
import { computed, ref } from 'vue'
import { useStore } from 'vuex';

const store = useStore()

const hasStaffData = computed(() => {
    const staffData = store.getters.getStaffData;

    if (staffData && staffData.length > 0) {
        return true;
    } else if (staffData && staffData.length === 0) {
        return false;
    } else {
        return null;
    }
});

const getStaffData = computed(() => {
    const staffData = store.getters.getStaffData;

    return staffData
});

const isGettingData = computed(() => {
    const isGettingData = store.getters.isGettingData;

    return isGettingData
});
</script>