<template>
    <div class="staff__card__wrapper" @click="handleClick">
        <div class="staff__card__img">
            <img height="20" width="20" src="https://w7.pngwing.com/pngs/922/837/png-transparent-computer-icons-others-angle-text-rectangle.png"/>
        </div>
        <div class="staff__card__info">
            <h5>{{ staff?.name }}</h5>
            <p class="text-medium-emphasis">{{ staff?.email }}</p>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';

const props = defineProps({
    staff: {
        type: Object,
        required: true
    }
})

const store = useStore();

const handleClick = () => {
    store.commit('setChosenStaffData', props.staff);
};
</script>