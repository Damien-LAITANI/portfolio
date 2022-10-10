<template>
  <section id="a-propos" class="section main__apropos">
    <h2 class="main__apropos__title">à propos</h2>
    <p class="main__apropos__text">Après 10 ans comme Pâtissier, me voilà maintenant développeur Web junior.</p>
    <p class="main__apropos__text">Je suis actuellement à la recherche d'une alternance pour engranger ma première expérience en entreprise. Grâce à un projet de groupe (5 membres) élaboré lors de ma formation chez O'clock, j'ai pu entrapercevoir le monde du développement web durant un mois. Nous avons travaillé avec la méthode Scrum suivant le développement Agile. Un mois divisé en 4 sprints pour créer une application web en partant d'une simple idée, en passant par un MVP et jusqu'à sa mise en ligne.</p>
  </section>
</template>
<script>
export default {
  name: 'aProposLayout',
}
</script>
<style scoped lang="scss">
.main__apropos {

  .main__apropos__title {
    margin-bottom: 1rem;
  }

  .main__apropos__text {
    padding: 0.2rem 2rem;
    line-height: 1.6;
  }
}
</style>