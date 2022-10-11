<template>
  <section id="realisation" class="section main__realisation">
    <h2 class="main__competences__title">Réalisations</h2>
    <div class="container__cards">
      <realisationCardLayout
          v-for="data in cardInfos" :key="data.title"
          :picture="data.picture"
          :title="data.title"
          :labels="data.labels"
          :text="data.text"
          :link="data.link"
      />
      <!-- <div class="realisation__card">
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
      </div>-->
    </div>
  </section>
</template>
<script>
import RealisationCardLayout from "@/components/partials/realisationCardLayout";
import { datas } from "@/assets/js/realisation_data";
export default {
  name: 'realisationLayout',
  components: {RealisationCardLayout},
  data() {
    return {
      cardInfos: datas
    }
  }
}
</script>
<style scoped lang="scss">
.main__realisation {
  .main__competences__title {
    margin-bottom: 1rem;
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
</style>