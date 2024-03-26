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
      v-for="project in store.projects"
      :key="project.id"
      class="card-container-section"
    >
      <ProjectCardContainer
        :project-name="project.name"
        :project-url="project.html_url"
        :project-img-url="project.owner ? project.owner.avatar_url : ''"
        :project-author="project.owner ? project.owner.login : ''"
        :project-stars="project.stargazers_count"
        :project-views="project.watchers"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectCardContainer from "@/components/BaseComponents/Card/ProjectCard.vue";
import { useStore } from '@/stores/store.js';

const store = useStore()

const props = defineProps({
  isSearch: {
    type: Boolean,
    default: false
  }
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
  flex-wrap: wrap;
  margin: 0;
  align-items: center;
  justify-content: center;


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
</style>