<template>
  <div class="body-container">
    <div 
      v-if="props.isSearch === false" 
      class="body-container-text"
    >
      <span
        class="body-container-text"
      >
        Поиск проектов...
      </span>
    </div>
  </div>
  <div
    v-if="props.isSearch"
    class="card-container"
  >
    <div
      v-for="project in showItems"
      :key="project.id"
      class="card-container-section"
    >
      <ProjectCard
        :project-name="project.name"
        :project-url="project.html_url"
        :project-img-url="project.owner ? project.owner.avatar_url : ''"
        :project-author="project.owner ? project.owner.login : ''"
        :project-stars="project.stargazers_count"
        :project-views="project.watchers"
      />
    </div>
  </div>
  <div
    v-if="props.isSearch"
    class="pagination"
  >
    <ButtonBaseComponent
      class="pagination-arrow"
      @click-action="goToPrevPage"
    >
      <template #buttonContent>
        <svg
          class="pagination-arrow-content"
          viewBox="0 0 227.000000 271.000000"
        >
          <g
            transform="translate(227.000000,0) scale(-0.100000,0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M647 2353 l-137 -138 432 -432 433 -433 -433 -433 -432 -432 140
                -140 140 -140 573 573 572 572 -570 570 c-313 313 -572 570 -575 570 -3 0 -67
              -62 -143 -137z"
            />
          </g>
        </svg>
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
        <svg
          class="pagination-arrow-content"
          viewBox="0 0 227.000000 271.000000"
        >
          <g
            transform="translate(0.000000,271.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M647 2353 l-137 -138 432 -432 433 -433 -433 -433 -432 -432 140
                -140 140 -140 573 573 572 572 -570 570 c-313 313 -572 570 -575 570 -3 0 -67
              -62 -143 -137z"
            />
          </g>
        </svg>
      </template>
    </ButtonBaseComponent>
  </div>
</template>

<script setup>
import ProjectCard from "@/components/BaseComponents/Card/ProjectCard.vue";
import ButtonBaseComponent from "@/components/BaseComponents/Button/ButtonBaseComponent.vue";
import { useStore } from '@/stores/store.js';
import { computed, ref, watch } from "vue";

const store = useStore()

const pages = ref(0)

const currentPage = ref(0)

const projectArrayOnPage = ref([])

const props = defineProps({
  isSearch: {
    type: Boolean,
    default: false
  },
  itemsOnPage: {
    type: Number,
    default: 6
  }
})

const getCurrentPage = (num) => {
  currentPage.value = (Number(num) - 1) * props.itemsOnPage
}

const goToNextPage = () => {
  if (currentPage.value <= store.projects.length - props.itemsOnPage * 2) {
    currentPage.value += props.itemsOnPage;
  }
}

const goToPrevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value -= props.itemsOnPage;
  }
}

const buttonToggle = (object) => {
  let index = props.itemsOnPage
  if (projectArrayOnPage.value.length > 0) {
    index = Number(currentPage.value) + props.itemsOnPage
  }
  projectArrayOnPage.value = object.slice(currentPage.value, index)
}

const pagination = (count, start) => {
  pages.value = Number(count) / Number(start)
}

const showItems = computed(() => {
  return projectArrayOnPage.value
})

watch(() => store.projects.length, (countProjects) => {
  store.projects.length = countProjects
  buttonToggle(store.projects)
  pagination(countProjects , props.itemsOnPage)
})

watch(() => currentPage.value, ()   => {
  buttonToggle(store.projects)
})
</script>

<style lang="scss">
.body {
  &-container {
    position: absolute;
    top: 30%;
    margin-left: 43%;
    text-align: center;
    justify-content: center;
      &-text {
        font-size: 28px;
        user-select: none;
      }
  }
}

.card-container { 
  top: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  &-section {
    padding: 1%;
  }
}

.selector {
  font-size: 16px;
  display: flex;

  &-img {
    width: 52px;
    height: 52px;
  }
}

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