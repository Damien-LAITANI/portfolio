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
        <a href="#a-propos">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon__arrow__bottom" width="5rem" height="5rem">
            <title>Flèche pour atteindre la section à propos</title>
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
          </svg>
        </a>
      </div>
    </div>
    <div class="header__right-side">
      <div class="header__picture">
        <img src="../../assets/images/photo_profil.webp" alt="Photo de profil - Damien Laitani" width="180px" height="180px">
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
import NavLinkHeaderLayout from "@/components/partials/NavLinkHeaderLayout";

export default {
  name: 'HeaderLayout',
  components: {
    NavLinkHeaderLayout
  },
  data() {
    return {
      navItems: navItems
    }
  },

}
</script>

<style scoped lang="scss">

.header {
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  background-color: $primary;

  .header__left-side {
    flex: 1;

    .header__nav-menu {
      margin: 5rem 0;
    }
    .arrow__bottom {
      position: absolute;
      bottom: 10px;
      right: 20px;
    }
  }

  .header__right-side {
    margin: 2rem 1rem 0 1rem;

    .header__picture {
      margin: 1rem;
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
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 30rem;
      grid-template-rows: 1fr;
      text-align: right;
      flex: 2;

      .header__picture img {
        margin-right: 1rem;
        width: 20rem;
        height: 20rem;
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
        .icon__arrow__bottom {
          right: 35px;
          bottom: 15px;
          width: 7rem;
          height: 7rem;
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
        .full-name {
          font-size: 3rem;
        }

        .job {
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
          height: 250px;
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
  .icon__arrow__bottom:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease-out;
  }
}
</style>