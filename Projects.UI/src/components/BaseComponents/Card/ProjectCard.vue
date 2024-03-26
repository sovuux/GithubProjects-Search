<template>
  <div class="subject-container">
    <div
      class="subject-container-head"
      @click="openUrl"
    >
      <span class="subject-container-head-title">
        {{ props.projectName }}
      </span>
    </div>
    <div
      class="subject-container-body"
      @click="openUrl"
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-star-fill subject-container-body-notes-content-img"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <span class="subject-container-body-notes-content-text">
          {{ props.projectStars }}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-eye-fill subject-container-body-notes-content-img"
          viewBox="0 0 16 16"
        >
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
        </svg>
        <span class="subject-container-body-notes-content-text">
          {{ props.projectViews }}
        </span>
      </div>
    </div>
    <div class="subject-container-footer">
      <InputBaseComponent
        :placeholder-content="'Комментарий к проекту'"
        class="subject-container-footer-input"
        @input-text-change="getInputText"
      />
      <ButtonBaseComponent @click-action="saveComment">
        <template #buttonContent>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            class="bi bi-pencil subject-container-footer-img"
            viewBox="0 0 16 16"
          >
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
          </svg>
        </template>
      </ButtonBaseComponent>
    </div>
  </div>
</template>

<script setup>
import InputBaseComponent from "@/components/BaseComponents/Input/InputBaseComponent.vue";
import ButtonBaseComponent from "@/components/BaseComponents/Button/ButtonBaseComponent.vue";
import { openPageInBrowser } from '@/utilits/OpenPageInBrowser.js'
import {ref} from "vue";

const projectComment = ref(localStorage.getItem('projectComment') || "")

const getInputText = (value) => {
  projectComment.value = value
}
const saveComment = () => {
  localStorage.setItem('projectComment', projectComment.value)
  console.log("Комментарий сохранён")
  //просмотр комментария - console.log(localStorage.getItem('projectComment'))
}

const props = defineProps({
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

const openUrl = () => {
  openPageInBrowser(props.projectUrl)
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