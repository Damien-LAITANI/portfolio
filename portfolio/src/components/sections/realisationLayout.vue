<template>
  <section id="realisation" class="section main__realisation">
    <h2 class="main__competences__title">Réalisations</h2>
    <div class="container__cards">
      <swiper
        :slides-per-view="1"
        :space-between="5"
        :navigation="{
          clickable: true,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        :breakpoints="swiperOptions.breakpoints"
      >
        <swiper-slide
          v-for="(data) in cardInfos" :key="data.title">
          <realisationCardLayout
            :picture="data.picture"
            :title="data.title"
            :labels="data.labels"
            :text="data.text"
            :link="data.link"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
import RealisationCardLayout from "@/components/partials/realisationCardLayout";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { datas } from "@/assets/js/data";

export default {
  name: 'realisationLayout',
  components: {
    RealisationCardLayout,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Navigation, Pagination],
      cardInfos: datas,
      swiperOptions: {
        breakpoints: {
      0: {
        slidesPerView: 1,
            spaceBetween: 10,
      },
      620: {
        slidesPerView: 2,
            spaceBetween: 10,
      },
      1040: {
        slidesPerView: 3,
            spaceBetween: 15,
      },
      1440: {
        slidesPerView: 4,
        //spaceBetween: 20,
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }
      }
    }
  },
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
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      //gap: 1rem;
      //overflow: auto;
      scroll-behavior: smooth;



      .btn__scrollTo {
        position: sticky;
        top: 50%;

        &--previous {
          left: 10px;
          z-index: 9;
        }

        &--next {
         right: 10px;
        }
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}

@media screen and (min-width:600px) {
  .main {
    .main__realisation {
      .container__cards {
        //gap: 2rem;

        .realisation__card {
          min-width: 40vw;
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
          min-width: 30vw;
        }
      }
    }
  }
}

@media screen and (min-width:1440px) {
  .main {
    .main__realisation {
      .container__cards {
        //justify-content: center;
        .realisation__card {
          min-width: 20vw;
        }
      }
    }
  }
}
</style>