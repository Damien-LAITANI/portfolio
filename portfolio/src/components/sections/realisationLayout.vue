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
.main {
  .main__realisation {
    padding: 2.5rem 0;
    .main__competences__title {
      margin-bottom: 1rem;
      padding-left: 1rem;
    }

    .container__cards {
      display: flex;
      gap: 1rem;
      overflow: auto;

      .realisation__card {
        min-width: 80vw;
        margin: 1rem;
      }
    }
  }
}

@media screen and (min-width:600px) {
  .main {
    .main__realisation {
      .container__cards {
        gap: 2rem;

        .realisation__card {
          min-width: 50vw;
        }
      }
    }
  }
}

@media screen and (min-width:1024px) {
  .main {
    .main__realisation {
      .container__cards {
        .realisation__card {
          min-width: 33vw;
        }
      }
    }
  }
}

@media screen and (min-width:1440px) {
  .main {
    .main__realisation {
      .container__cards {
        justify-content: center;
        .realisation__card {
          min-width: 20vw;
        }
      }
    }
  }
}
</style>