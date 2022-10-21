<template>
  <header class="header">
    <div class="header__left-side">
      <nav class="header__nav-menu">
        <ul class="nav__menu">
          <navLinkHeaderLayout
            v-for="navItem in navItems" :key="navItem.title"
            :link="navItem.link"
            :title="navItem.title"
          />
        </ul>
      </nav>
      <div class="arrow__bottom">
        <a href="#a-propos"><i class="fa-solid fa-angle-down"></i></a>
      </div>
    </div>
    <div class="header__right-side">
      <div class="header__picture">
        <img src="../../assets/images/photo_profil.jpg" alt="photo de profil - damien laitani" width="150px">
      </div>
      <div class="header__description">
        <h1 class="job">Développeur web et web mobile</h1>
        <p class="full-name">Damien LAITANI</p>
      </div>
    </div>
  </header>
</template>

<script>

import {navItems} from "@/assets/js/data";
import NavLinkHeaderLayout from "@/components/partials/navLinkHeaderLayout";

export default {
  name: 'HeaderLayout',
  components: {NavLinkHeaderLayout},
  data() {
    return {
      navItems: navItems
    }
  }
}
</script>

<style scoped lang="scss">

@keyframes animation_header {
  0% {transform: translateX(-290px)}
  60% {transform: translateX(40px)}
  80% {transform: translateX(-15px)}
  100% {transform: translateX(0)}
}

@keyframes animation_header--md {
  0% {transform: translateX(-1000px)}
  60% {transform: translateX(45px)}
  80% {transform: translateX(-20px)}
  100% {transform: translateX(0)}
}

@keyframes animation_header--lg {
  0% {transform: translateX(-1500px)}
  60% {transform: translateX(45px)}
  80% {transform: translateX(-20px)}
  100% {transform: translateX(0)}
}

.header {
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  background-color: $primary;

  .header__left-side {
    flex: 1;

    .arrow__bottom {
      position: absolute;
      bottom: 10px;
      right: 20px;

      .fa-angle-down {
        font-size: 5rem;
        color: black;
      }
    }

  }

  .header__right-side {
    display: grid;
    grid-template-rows: 1fr 2fr;
    align-items: center;
    flex: 2;
    margin: 2rem 1rem 0 1rem;

    .header__picture {
      align-self: start;
      img {
        margin-left: 1rem;
        border-radius: 5%;
        @include box-shadow;
      }
    }

    .header__description {
      padding: 0.5rem;
      text-align: right;

      .job {
        margin: 3.9rem 0 2rem 0;
        line-height: 1.4;
      }
    }
  }
}

@media screen and (min-width:768px){
  .header {

    .header__right-side {
      grid-template-columns: 1fr 30rem;
      grid-template-rows: 1fr;
      text-align: right;

      .header__picture img {
        margin-right: 1rem;
        width: 20rem;
      }

      .header__description {
        grid-row: 1;

        .full-name {
          font-size: 2rem;
        }

        .job {
          font-size: 3rem;
          animation-name: animation_header--md;
        }
      }
    }

    .header__left-side {
      .nav__menu {
        margin-bottom: 8rem;
      }
    .arrow__bottom {
      .fa-angle-down {
        right: 35px;
        bottom: 15px;
        font-size: 7rem;
        transition: 0.3s ease-out;
      }
    }

    }
  }
}

@media screen and (min-width:1024px) {
  .header {
    .header__left-side {
      .nav__menu {
        margin-bottom: 8rem;
      }
    }

    .header__right-side {
      .header__description {
        //margin-top: 14rem;

        .full-name {
          //padding-left: 19rem;
          font-size: 3rem;
        }

        .job {
          //text-align: center;
          margin-top: 4.5rem;
          font-size: 4rem;
        }
      }
    }
  }
}

@media screen and (min-width:1440px) {
  .header {
    .header__left-side {
      .nav__menu {
        margin-bottom: 10rem;
      }
    }

    .header__right-side {
      .header__picture {
        img {
          width: 250px;
        }
      }

      .header__description {
        justify-self: center;
        margin-bottom: 3rem;
        max-width: max-content;
        .job {
          font-size: 5rem;
          animation-name: animation_header--lg;
        }
      }
    }
  }
}

@media (hover: hover) {
  .fa-angle-down:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease-out;
  }
}
</style>