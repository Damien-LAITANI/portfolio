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
    </div>
  </section>
</template>
<script>
import RealisationCardLayout from "@/components/partials/realisationCardLayout";
import { datas } from "@/assets/js/data";
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