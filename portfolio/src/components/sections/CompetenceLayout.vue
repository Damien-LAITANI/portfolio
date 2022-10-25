<template>
  <section id="competences" class="section main__competences">
    <h2 class="main__competences__title">Compétences</h2>
    <div class="container__competences">
      <div class="competence competences__logos">
        <h3 class="competences__title competences__title__logos"><i class="fa-solid fa-graduation-cap"></i> Hard Skills</h3>
        <div class="container__logos">
          <div class="container__logo">
            <img src="../../assets/images/Laravel_logo.svg" alt="Logo du Framework Laravel" width="48px">
            <p>Laravel</p>
          </div>
          <div class="container__logo">
            <img src="../../assets/images/Vuejs_logo.svg" alt="Logo du Framework Vue.js" width="50px">
            <p>Vue.js</p>
          </div>
          <div class="container__logo">
            <img src="../../assets/images/PHP_logo.svg" alt="Logo du langage PHP" width="92px">
            <p>PHP</p>
          </div>
          <div class="container__logo">
            <img src="../../assets/images/JavaScript_logo.svg" alt="Logo du langage Javascript" width="50px">
            <p>Javascript</p>
          </div>
          <div class="container__logo">
            <img src="../../assets/images/HTML5_logo.svg" alt="Logo du langage HTML5" width="50px">
            <p>HTML</p>
          </div>
          <div class="container__logo">
            <img src="../../assets/images/CSS3_logo.svg" alt="Logo du langage CSS3" width="50px">
            <p>CSS</p>
          </div>


          <div class="container__logo">
            <img src="../../assets/images/WordPress_logo.svg" alt="Logo du CMS WordPress" width="50px">
            <p>Wordpress</p>
          </div>
          <div class="container__logo">
            <img src="../../assets/images/MySQL_logo.svg" alt="Logo du système de gestion de base de données MySQL" width="98px">
            <p>MySQL</p>
          </div>
          <div class="container__logo">
            <img src="../../assets/images/Bootstrap_logo.svg" alt="Logo de la librairie Bootstrap" width="62px">
            <p>Bootstrap</p>
          </div>
          <div class="container__logo">
            <img src="../../assets/images/Rest_api_logo.svg" alt="Logo de l'API REST" width="62px">
            <p>API REST</p>
          </div>
        </div>
      </div>
      <div class="competence competences__soft-skills">
        <h3 class="competences__title competences__title__soft-skills"><i class="fa-solid fa-gears"></i> Soft Skills</h3>
        <p class="competences__item">Travail en équipe</p>
        <p class="competences__item">Autonomie</p>
        <p class="competences__item">Curiosité</p>
        <p class="competences__item">Rigueur</p>
      </div>
      <div class="competence competences__gestion-projet">
        <h3 class="competences__title competences__title__gestion-projet"><i class="fa-solid fa-file-circle-check"></i> Gestion de projet</h3>
        <p class="competences__item">Wireframes</p>
        <p class="competences__item">User Stories</p>
        <p class="competences__item">Méthode Scrum/Agile</p>
        <p class="competences__item">Versioning - Git/GitHub</p>
      </div>
      <div class="competence competences__languages">
        <h3 class="competences__title competences__title__languages"><i class="fa-solid fa-globe"></i> Langues</h3>
        <p class="competences__item">Français</p>
        <p class="competences__item">Anglais</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'CompetenceLayout',
}
</script>
<style scoped lang="scss">

.main__competences {
  background-color: $primary;
  .main__competences__title {
    margin-bottom: 2.5rem;
  }

  .competence {
    margin: 2.5rem 1rem;
  }

  .container__logos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem 2rem;
    margin: 0 2rem;

    .container__logo {
      text-align: center;

      & p {
        font-size: 1.5rem;
      }
    }
  }

  .competences__title {
    margin: 2rem 0 1rem 0;
  }

  .competences__item {
    margin-left: 2.5rem;
    line-height: 1.3;
  }
}

@media screen and (min-width:768px) {
  .main__competences {
    .container__competences {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0 6rem;

      .competence,
      .competences__title {
        margin-top: 0;
      }

      .competences__item {
        margin-left: 1.5rem;
      }
    }
  }
}
</style>