<template>
  <input
    v-model="inputValue"
    type="text"
    :placeholder="`${props.placeholderContent}`"
    class="input"
    @input="onChange"
  >
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['inputTextChange'])

const props = defineProps({
  placeholderContent: {
    type: String,
    default: ""
  }
})

const inputValue = ref()

const onChange = (event) => {
  const value = event.target.value
  inputValue.value = value
  emit('inputTextChange', value)
}
</script>

<style lang="scss">
.input {
  width: 70%;
  height: 68px;
  font-weight: 400;
  font-size: 14px;
  padding-left: 23px;
}

::placeholder {
  color: #000000;
  opacity: 1;
}
</style>