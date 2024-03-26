<template>
  <header class="header">
    <div class="header-container">
      <InputBaseComponent
        :placeholder-content="'Начните вводить текст (не менее трех символов)'"
        @input-text-change="getInputText"
      />
      <ButtonBaseComponent
        class="header-container-button"
        @click="searchProjects"
      >
        <template #buttonContent>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            class="bi bi-search header-container-img"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </template>
      </ButtonBaseComponent>
    </div>
  </header>
</template>

<script setup>
import ButtonBaseComponent from "@/components/BaseComponents/Button/ButtonBaseComponent.vue";
import InputBaseComponent from "@/components/BaseComponents/Input/InputBaseComponent.vue";
import { ref } from 'vue';
import { useStore } from '@/stores/store.js';

const inputSearchText = ref()

const store = useStore()

const emit = defineEmits(['startSearch', 'openPopupAlert'])

const getInputText = (value) => {
  inputSearchText.value = value
}

const searchProjects = () => {
  if (inputSearchText.value && inputSearchText.value.length >= 3) {
    emit('startSearch', true)
    store.foundSubject(inputSearchText.value)
  }
  else {
    emit('openPopupAlert')
  }
}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 147px;
  background-color: rgba(221, 221, 221, 1);
  display: flex;
  align-items: center;
  justify-content: center;

  &-container {
    display: flex;
    margin: 0;

    &-button {
      width: 74px;
      height: 74px;
      align-items: center;
      justify-content: center;
    }

    &-img {
      width: 45px;
      height: 45px;
    }
  }
}
</style>