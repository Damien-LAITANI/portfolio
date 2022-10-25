<template>
  <div class="container__btn--goTop" @click="goTop">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="3.7rem" height="3.7rem" class="btn--goTop">
      <path stroke="#74c2c6" fill="#74c2c6" d="M241.6 175.7C237.1 170.8 230.7 168 224 168S210.9 170.8 206.4 175.7l-96 104c-6.469 7-8.188 17.19-4.375 25.91C109.8 314.3 118.5 320 127.1 320h192c9.531 0 18.16-5.656 22-14.38c3.813-8.719 2.094-18.91-4.375-25.91L241.6 175.7zM384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM400 416c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V96c0-8.82 7.178-16 16-16h320c8.822 0 16 7.18 16 16V416z"/>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'TopButtonLayout',
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
  bottom: 10px;
  left: 10px;
  z-index: 1000;
  box-shadow: 0 1px 8px 1px $secondary, 0 0 2px 1px $secondary;
  border-radius: 10%;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease-out;

  .btn--goTop {
    -webkit-filter: drop-shadow(1px 2px 2px $secondary);
  }
}

@media screen and (min-width:768px) {
  .container__btn--goTop {
    bottom: 14px;
    left: initial;
    right: 80px;
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
