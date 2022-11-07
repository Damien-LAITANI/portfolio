<template>
  <div class="realisation__card">
    <img class="card__picture" :src="picture.src" :alt="picture.alt" width="200" height="200">
    <h3 class="card__title">{{title}}</h3>
    <div class="card__labels">
      <p class="card__label" v-for="label in labels.name" :key="label" :class="labels.class">{{label}}</p>
    </div>
    <p class="card__text text--hidden" v-html="text"></p>
    <a v-for="linkItem in links" :key="linkItem.name" :href="linkItem.link" :class="[isBoth ? 'btn__realisation btn__'+linkItem.name : 'btn__realisation']">{{linkItem.name}}</a>
  </div>
</template>
<script>

export default {
  name: 'RealisationCardLayout',
  props: {
    picture: Object,
    title: String,
    labels: Object,
    text: String,
    links: Array
  },
  data() {
    return {
      isBoth: this.links.length > 1,
    }
  }
}
</script>
<style scoped lang="scss">

.realisation__card {
  position: relative;
  background-color: #eaf8f7;
  width: 90%;
  max-width: 30rem;
  min-width: 80vw;
  min-height: 50rem;
  margin: 2.5rem auto;
  padding: 1rem;
  text-align: center;
  border-radius: 0.5rem;
  @include box-shadow;

  .card__picture {
    border: 1px solid $secondary;
    margin-bottom: 1.5rem;
    width: 20rem;
    min-height: 20rem;
    transition: width 0.8s cubic-bezier(0.5,0.3,0.1,1);
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
    display: flex;
    flex-direction: row-reverse;
    justify-content: left;
    gap: 1rem;
    margin-top: 2rem;
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

  .btn__Github {
    left: 135px;
  }
}

@media screen and (min-width:768px) {
  .realisation__card {
    max-width: 38rem;
  }
}

@media (pointer: fine) and (hover: hover) {
  .main__realisation {
    .realisation__card {
      height: 38rem;
      max-width: 30rem;
      min-height: 38rem;
      overflow: hidden;

      & .card__picture {
        width: 25rem;
        height: auto;
        min-height: auto;
        transition: width 0.8s cubic-bezier(0.5,0.3,0.1,1);
      }

      & .card__title {
        margin-bottom: 2rem;
      }

      & .card__labels {
          margin-top: 4.7rem;
      }

      & .btn__realisation {
        bottom: -35px;
        transition: bottom 0.2s ease-out;
      }

      & .btn__realisation:hover {
        opacity: 0.7;
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