<template>
  <div class="popup-background popup-show">
    <div class="popup">
      <div class="popup-header">
        <slot name="popupHeader" />
      </div>
      <div class="popup-body">
        <slot name="popupBody" />
      </div>
      <div class="popup-footer">
        <slot
          name="popupFooter"
          class="actions"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.popup {
  background-color: white;
  width: 500px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  animation: popup-button-anim 0.3s ease-in-out;

  @keyframes popup-button-anim {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  &-background {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &-show {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-title {
    font-size: 30px;
    color: rgba(0, 163, 255, 0.7);
    border-bottom: 1px solid rgba(0, 163, 255, 0.7);
    text-align: center;

    &-section {
      font-size: 18px;
      color: rgba(0, 163, 255, 0.7);
      border-bottom: 1px solid rgba(0, 163, 255, 0.7);
      margin: 1%;
      user-select: none;
    }
  }

  &-header {
    text-align: center;
    user-select: none;
  }

  &-body {
    margin-top: 2%;
    display: flex;
    justify-content: center;

    &-text {
      color: rgba(0, 163, 255, 0.7);
      user-select: none;
      font-size: 25px;
    }

    &-container {
      display: block;
      width: 100%;

      &-section {
        background-color: rgb(221, 221, 221);
        margin: 1%;
        border-radius: 5px;

        &-content {
          display: flex;
        }
      }
    }
  }

  &-footer {
    margin-top: 4%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>