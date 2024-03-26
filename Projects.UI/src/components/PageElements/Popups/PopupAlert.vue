<template>
  <PopupBaseComponent>
    <template #popupHeader>
      <span class="popup-title">Ошибка</span>
      <ButtonBaseComponent
        class="popup-header-button"
        @click-action="emit('closePopupAlert')"
      >
        <template #buttonContent>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            class="bi bi-x popup-header-button-img"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </template>
      </ButtonBaseComponent>
    </template>
    <template #popupBody>
      <span class="popup-body-text">Для поиска введите больше 3 символов </span>
    </template>
    <template #popupFooter>
      <ButtonBaseComponent
        class="popup-footer-button"
        @click-action="emit('closePopupAlert')"
      >
        <template #buttonContent>
          <span class="popup-footer-button-text">ОК</span>
        </template>
      </ButtonBaseComponent>
    </template>
  </PopupBaseComponent>
</template>

<script setup>
import PopupBaseComponent from "@/components/BaseComponents/Popup/PopupBaseComponent.vue";
import ButtonBaseComponent from "@/components/BaseComponents/Button/ButtonBaseComponent.vue";

const emit = defineEmits(['closePopupAlert'])
</script>

<style lang="scss">
.popup {
  &-header {
    &-button {
      background: none;
      border: none;
      margin-top: 0;
      margin-left: 8%;
      position: absolute;
      &:hover {
        background: none;
      }
      &-img {
        width: 30px;
      }
    }
  }

  &-footer {
    &-button {
      align-items: center;
      border-radius: 5px;
      &-text {
        font-size: 25px;
        color: white;
      }
    }
  }
}
</style>