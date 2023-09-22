<template>
    <div class="staff__sidebar">
        <h4>Поиск сотрудников</h4>
        <PlainInput placeholder="Введите Id или имя" @on-update="onSearch($event)"/>
        <StaffSidebarList/>
    </div>
</template>

<script setup>
import StaffSidebarList from './StaffSidebarList.vue';
import PlainInput from '../UI/PlainInput.vue';
import debounce from 'lodash.debounce'
import { useStore } from 'vuex';

const store = useStore()

const onSearch = debounce((input) => {
    store.dispatch('fetchStaffData', input); // Вызывает действие fetchStaffData из модуля staff
}, 700)
</script>