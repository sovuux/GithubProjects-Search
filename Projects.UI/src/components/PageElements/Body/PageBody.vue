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
      v-for="project in store.projectsOnPageArray"
      :key="project.id"
      class="card-container-section"
    >
      <ProjectCard
        :project-id="project.id"
        :project-name="project.name"
        :project-url="project.html_url"
        :project-img-url="project.owner ? project.owner.avatar_url : ''"
        :project-author="project.owner ? project.owner.login : ''"
        :project-stars="project.stargazers_count"
        :project-views="project.watchers"
      />
    </div>
    <div>
      <PaginatorPageElement v-if="props.isSearch" />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "@/components/PageElements/Card/ProjectCard.vue";
import PaginatorPageElement from "@/components/PageElements/Pagination/PaginatorPageElement.vue";
import { useStore } from "@/stores/store.js";

const props = defineProps({
  isSearch: {
    type: Boolean,
    default: false
  }
})

const store = useStore()
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
</style>