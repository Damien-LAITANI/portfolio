<template>
  <section id="realisation" class="section main__realisation">
    <h2 class="main__competences__title">Réalisations</h2>
    <div class="container__cards">
      <div class="realisation__card">
        <img class="card__picture" src="../../assets/images/capture_cat_to_home.png" alt="Capture d'écran du site Cat to home" width="200px">
        <h3 class="card__title">Cat to home</h3>
        <div class="card__labels">
          <p class="card__label">API REST Wordpress</p>
          <p class="card__label">Vue.js</p>
        </div>
        <p class="card__text text--hidden">Projet de fin de formation (o'clock), réalisé en 1 mois. <br>Méthode <strong>Scrum</strong>. <br>Architecture <strong>Headless</strong> (API REST de Wordpress / <strong>Vue.js</strong>)</p>
        <a href="https://cat-to-home.fr" class="btn__realisation">Découvrir</a>
      </div>
      <div class="realisation__card">
        <img class="card__picture" src="../../assets/images/photo_profil.jpg" alt="Capture d'écran du Backoffice d'application" width="200px">
        <h3 class="card__title">Backoffice d'application</h3>
        <div class="card__labels">
          <p class="card__label label__laravel">Laravel</p>
        </div>
        <p class="card__text text--hidden">Projet réalisé après la formation, utilisant le Framework <strong>Laravel</strong>. <br>Gestion des produits d'une entreprise fictive, mise en place d'un <strong>CRUD</strong> avec authentification des utilisateurs.</p>
        <a href="#" class="btn__realisation">Découvrir</a>
      </div>
      <div class="realisation__card">
        <img class="card__picture" src="../../assets/images/photo_profil.jpg" alt="Capture d'écran du jeu Mémorie" width="200px">
        <h3 class="card__title">Jeu du Memory</h3>
        <div class="card__labels">
          <p class="card__label label__js">Javascript</p>
        </div>
        <p class="card__text text--hidden">Mini jeu réalisé avant la formation O'clock, en autodidacte, en <strong>Vanilla JS</strong></p>
        <a href="https://damien-laitani.github.io/Memory-game-In-VanillaJS/" class="btn__realisation">Découvrir</a>
      </div>
      <div class="realisation__card">
        <img class="card__picture" src="../../assets/images/photo_profil.jpg" alt="Capture d'écran du jeu du serpent" width="200px">
        <h3 class="card__title">Jeu du serpent</h3>
        <div class="card__labels">
          <p class="card__label label__js">Javascript</p>
        </div>
        <p class="card__text text--hidden">Mini jeu réalisé avant la formation O'clock, en suivant une formation sur Udemy, en <strong>Vanilla JS</strong></p>
        <a href="https://damien-laitani.github.io/Snake-game-In-VanillaJS/" class="btn__realisation">Découvrir</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'realisationLayout',
}
</script>
<style scoped lang="scss">
.main__realisation {
  .main__competences__title {
    margin-bottom: 1rem;
  }

  .realisation__card {
    position: relative;
    background-color: #eaf8f7;
    width: 90%;
    max-width: 30rem;
    margin: 2.5rem auto;
    padding: 1rem;
    text-align: center;
    border-radius: 0.5rem;
    @include box-shadow;

    .card__picture {
      border: 1px solid $secondary;
    }

    .card__picture {
      margin-bottom: 1.5rem;
    }

    .card__title {
      margin-bottom: 0.5rem;
    }

    .card__title a {
      display: inline-block;
      font-size: 2rem;
      color: black;
      line-height: 1.2;
    }

    .card__labels {
      text-align: right;

      & .card__label {
        width: max-content;
        margin-bottom: 0.2rem;
        padding: 0.5rem 1rem;
        text-align: right;
        font-size: 1.5rem;
        border-radius: 1rem;
        color: #fff;
        background-color: $secondary;
      }
    }

    .card__text {
      margin-bottom: 3rem;
      padding: 1rem 0;
      text-align: left;
      line-height: 1.4;
    }

    .btn__realisation {
      position: absolute;
      bottom: 5px;
      display: block;
      text-align: left;
      font-weight: bold;
      letter-spacing: 0.2rem;
      padding: 0.5rem 1rem;
      color: #fff;
      background-color: $secondary;
      border: 2px solid $tertiary;
      border-radius: 2rem;
    }
  }
}

@media screen and (min-width:600px) {
  .main__realisation {
    .container__cards {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
}

@media (hover: hover) {
  .main__realisation {
    .realisation__card {
      height: 38rem;
      max-width: 30rem;
      overflow: hidden;

      & .card__picture {
        width: 25rem;
        transition: width 0.8s ease-out;
      }

      & .card__title {
        margin-bottom: 2rem;
      }

      & .card__labels {
        & .label__laravel {
          margin-top: 4.7rem;
        }

        & .label__js {
          margin-top: 4.7rem;
        }
      }

      & .btn__realisation {
        bottom: -35px;
        transition: bottom 0.2s ease-out;
      }

      &:hover {
        & .card__picture {
          width: 5rem;
          transform-origin: top;
          transition: width 0.6s ease-out;
        }

        & .btn__realisation {
          bottom: 5px;
          transition: bottom 0.2s 0.4s ease-out;
        }
      }
    }
  }
}
</style>