<template>
  <div class="container__btn--goTop" @click="goTop">
    <i class="fa-regular fa-square-caret-up btn--goTop"></i>
  </div>
</template>
<script>
export default {
  name: 'backButtonLayout'
}
</script>
<style scoped lang="scss">

.container__btn--goTop {
  background-color: $tertiary;
  position: fixed;
  bottom: 14px;
  right: 80px;
  z-index: 1000;
  box-shadow: 0 1px 8px 1px $secondary, 0 0 2px 1px $secondary;
  border-radius: 10%;
  padding: 1rem;
  color: $secondary;
  cursor: pointer;
  transition: transform 0.3s ease-out;

  .btn--goTop {
    text-shadow: 1px 2px 3px $secondary;
    font-size: 4rem;
  }
}

@media (hover: hover) {
  .container__btn--goTop:hover {
    opacity: 0.7;
    transform: scale(1.1);
    transition: transform 0.3s ease-out;
  }
}
</style>
