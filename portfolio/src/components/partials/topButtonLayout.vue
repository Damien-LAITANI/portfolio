<template>
  <div class="container__btn--goTop" @click="goTop">
    <i class="fa-regular fa-square-caret-up btn--goTop"></i>
  </div>
</template>
<script>
export default {
  name: 'topButtonLayout',
  mounted() {
    const headerElement = document.querySelector('.header');
    this.createObserver(headerElement);
  },
  methods: {
    goTop() {
      window.scrollTo(0, 0);
    },
    // Création d'un objet IntersectionOberver, pour observer l'intersection d'un element
    createObserver(element) {
      const observer = new IntersectionObserver(this.handleIntersect);
      observer.observe(element);
    },
    // Méthode qui rend visible le bouton si le header n'est plus dans l'écran
    handleIntersect(entries) {
      const goTopButton = document.querySelector('.container__btn--goTop');
      const intersectElement = entries[0];

      if (!intersectElement.isIntersecting) {
        goTopButton.style.visibility = 'visible';
      } else {
        goTopButton.style.visibility = 'hidden';
      }
    }
  }
}
</script>
<style scoped lang="scss">

.container__btn--goTop {
  visibility: hidden;
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
