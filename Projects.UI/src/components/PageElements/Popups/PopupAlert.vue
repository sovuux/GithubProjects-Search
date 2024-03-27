<template>
  <PopupBaseComponent>
    <template #popupHeader>
      <span class="popup-title">Ошибка</span>
      <ButtonBaseComponent
        class="popup-header-button"
        @click-action="emit('closePopupAlert')"
      >
        <template #buttonContent>
          <img
            :src="CloseIcon"
            class="bi bi-x popup-header-button-img"
            alt="close"
          >
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
import CloseIcon from  "@/assets/SvgIcons/Close.svg"

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