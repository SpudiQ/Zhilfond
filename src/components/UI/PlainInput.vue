<template>
    <input :type="type" :placeholder="placeholder" @input="emitInput" class="input__plain">
</template>

<script setup>
defineProps({
    placeholder: {
        type: String,
    },
    type: {
        type: String,
        default: 'text'
    }
})

const emit = defineEmits(['onUpdate'])

const emitInput = (event) => {
    const inputValue = event.target.value;
    emit('onUpdate', inputValue)
}
</script>