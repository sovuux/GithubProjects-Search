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
          <img
            :src="SearchIcon"
            class="bi bi-search header-container-img"
            alt="search"
          >
        </template>
      </ButtonBaseComponent>
    </div>
  </header>
</template>

<script setup>
import ButtonBaseComponent from "@/components/BaseComponents/Button/ButtonBaseComponent.vue";
import InputBaseComponent from "@/components/BaseComponents/Input/InputBaseComponent.vue";
import SearchIcon from  "@/assets/SvgIcons/Search.svg"
import { ref } from 'vue';
import { useStore } from '@/stores/store.js';

const emit = defineEmits(['startSearch', 'openPopupAlert'])

const inputSearchText = ref()

const store = useStore()

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
    width: 100%;
    display: flex;
    justify-content: center;
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