<template>
  <button
    class="button" 
    @click="emit('clickAction')"
  >
    <slot name="buttonContent">
      {{ props.buttonName }}
    </slot>
  </button>
</template>

<script setup>
const emit = defineEmits(['clickAction'])

const props = defineProps({
  buttonName: {
    type: String,
    default: ""
  }
})
</script>

<style lang="scss">
.button {
  background-color: rgba(0, 163, 255, 1);
  border: 0.1px solid rgb(121, 121, 121);
  user-select: none;

  &:hover {
    background-color: rgba(0, 163, 255, 0.7);
    cursor: pointer;
  }
}
</style>