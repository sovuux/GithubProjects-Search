<template>
  <div class="subject-container">
    <a
      :href="props.projectUrl"
      target="_blank"
      class="subject-container-url"
    >
      <div
        class="subject-container-head"
      >
        <span class="subject-container-head-title">
          {{ props.projectName }}
        </span>
      </div>
      <div
        class="subject-container-body"
      >
        <div class="subject-container-body-author">
          <img
            :src="props.projectImgUrl"
            alt="author"
            class="subject-container-body-author-img"
          >
          <span class="subject-container-body-author-text">
            {{ props.projectAuthor }}
          </span>
        </div>
        <div class="subject-container-body-notes">
          <img
            :src="StarIcon"
            class="bi bi-star-fill subject-container-body-notes-content-img"
            alt="star"
          >
          <span class="subject-container-body-notes-content-text">
            {{ props.projectStars }}
          </span>
          <img
            :src="EyeIcon"
            class="bi bi-eye-fill subject-container-body-notes-content-img"
            alt="eye"
          >
          <span class="subject-container-body-notes-content-text">
            {{ props.projectViews }}
          </span>
        </div>
      </div>
    </a>
    <div class="subject-container-footer">
      <InputBaseComponent
        :placeholder-content="'Комментарий к проекту'"
        class="subject-container-footer-input"
        @input-text-change="getInputText"
      />
      <ButtonBaseComponent @click-action="saveComment">
        <template #buttonContent>
          <img
            :src="PencilIcon"
            class="bi bi-pencil subject-container-footer-img"
            alt="pencil"
          >
        </template>
      </ButtonBaseComponent>
    </div>
  </div>
</template>

<script setup>
import InputBaseComponent from "@/components/BaseComponents/Input/InputBaseComponent.vue";
import ButtonBaseComponent from "@/components/BaseComponents/Button/ButtonBaseComponent.vue";
import StarIcon from "@/assets/SvgIcons/Star.svg";
import EyeIcon from "@/assets/SvgIcons/Eye.svg";
import PencilIcon from "@/assets/SvgIcons/Pencil.svg"
import { ref } from "vue";

const props = defineProps({
  projectId: {
    type: Number,
    default: 0
  },

  projectName: {
    type: String,
    default: "Название"
  },

  projectImgUrl: {
    type: String,
    default: "imgUrl"
  },

  projectUrl: {
    type: String,
    default: "url"
  },

  projectAuthor: {
    type: String,
    default: "Автор"
  },

  projectStars: {
    type: Number,
    default: 0
  },

  projectViews: {
    type: Number,
    default: 0
  }
})

const projectComment = ref(localStorage.getItem('projectComment') || "")

const getInputText = (value) => {
  projectComment.value = value
}
const saveComment = () => {
  localStorage.setItem('projectComment', `Id проекта:${props.projectId}, Название проекта:${props.projectName}, Автор:${props.projectAuthor} Комментарий: ${projectComment.value}`)
  console.log("Комментарий сохранён")
  //просмотр комментария - console.log(localStorage.getItem('projectComment'))
}
</script>

<style lang="scss">
.subject-container {
  margin: 3%;
  width: 550px;
  height: 240px;
  border: 1px solid #A2A3A4;
  -webkit-box-shadow: 0 5px 5px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0 5px 5px -5px rgba(34, 60, 80, 0.6);
  box-shadow: 0 5px 5px -5px rgba(34, 60, 80, 0.6);

  &-url {
    text-decoration: none;
    color: black
  }

  &-head {
    margin: 2%;

    &-title {
      font-size: 20px;
    }
  }

  &-body {
    margin-top: 20px;

    &-author {
      display: flex;
      align-items: center;

      &-text {
        margin-left: 5%;
        font-size: 18px;
      }

      &-img {
        width: 50px;
        height: 50px;
        border-radius: 30px;
        margin-left: 5%;
      }
    }

    &-notes {
      margin-top: 2%;
      display: flex;
      align-items: center;

      &-content {
        &-img {
          width: 25px;
          padding-left: 5%;
        }
        &-text {
          padding-left: 1%;
        }
      }
    }
  }

  &-footer {
    display: flex;
    padding: 0;
    margin-top: 20px;
    margin-left: 27px;

    &-input {
      font-size: 18px;
      width: 410px;
      height: 54px;
    }

    &-img {
      width: 40px;
      height: 40px;
    }
  }
}
</style>