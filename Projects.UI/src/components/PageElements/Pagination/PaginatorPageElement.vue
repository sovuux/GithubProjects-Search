<template>
  <div class="pagination">
    <ButtonBaseComponent
      class="pagination-arrow"
      @click-action="goToPrevPage"
    >
      <template #buttonContent>
        <img
          :src="ArrowLeftIcon"
          class="pagination-arrow-content"
          alt="arrowLeft"
        >
      </template>
    </ButtonBaseComponent>
    <ButtonBaseComponent
      v-for="(page, index) in pages"
      :key="index"
      class="pagination-button"
      @click-action="getCurrentPage(page)"
    >
      <template #buttonContent>
        <span class="pagination-button-content">
          {{ page }}
        </span>
      </template>
    </ButtonBaseComponent>
    <ButtonBaseComponent
      class="pagination-arrow"
      @click-action="goToNextPage"
    >
      <template #buttonContent>
        <img
          :src="ArrowRightIcon"
          class="pagination-arrow-content"
          alt="arrowRight"
        >
      </template>
    </ButtonBaseComponent>
  </div>
</template>

<script setup>
import ButtonBaseComponent from "@/components/BaseComponents/Button/ButtonBaseComponent.vue";
import ArrowRightIcon from  "@/assets/SvgIcons/ArrowRight.svg";
import ArrowLeftIcon from  "@/assets/SvgIcons/ArrowLeft.svg"
import { useStore } from "@/stores/store.js";
import { computed, watch, ref } from "vue";

const store = useStore()

const pages = ref(0)

const selectedValue = ref(6)

const currentPage = ref(0)

const getCurrentPage = (num) => {
  currentPage.value = (Number(num) - 1) * selectedValue.value
}

const goToNextPage = () => {
  if (currentPage.value <= store.projects.length - selectedValue.value * 2) {
    currentPage.value += selectedValue.value;
  }
}

const goToPrevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value -= selectedValue.value;
  }
}

const buttonToggle = (object) => {
  let index = selectedValue.value
  if (store.projectsOnPageArray.length > 0) {
    index = Number(currentPage.value) + selectedValue.value
  }
  store.projectsOnPageArray = object.slice(currentPage.value, index)
}

const pagination = (count, start) => {
  pages.value = Number(count) / Number(start)
}

computed(() => {
  return store.projectsOnPageArray.value
})

watch(() => store.projects.length, (countProjects) => {
  store.projects.length = countProjects
  buttonToggle(store.projects)
  pagination(countProjects , selectedValue.value)
})

watch(() => currentPage.value, ()   => {
  buttonToggle(store.projects)
})
</script>

<style lang="scss">
.pagination {
  margin-top: 7%;
  display: flex;
  justify-content: center;

  &-button {
    background: white;

    &:focus {
      background: #00A3FF;
      color: white;
    }

    &-content {
      width: 52px;
      height: 52px;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

  &-arrow {
    background: white;
    align-items: center;
    justify-content: center;

    &-content {
      width: 52px;
      height: 52px;
    }
  }
}
</style>