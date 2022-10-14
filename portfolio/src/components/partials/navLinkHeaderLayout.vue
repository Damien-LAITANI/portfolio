<template>
  <li class="nav__menu__item">
    <a :href="link">{{title}}</a>
  </li>
</template>
<script>
export default {
  name: 'navLinkHeaderLayout',
  props: {
    link:String,
    title:String
  }
}
</script>
<style scoped lang="scss">
.nav__menu__item {
  width: 50%;
  background-color: #fff;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  font-size: 1.6rem;
  border-radius: 0 0.2rem 0.2rem 0;
  transition:0.3s ease-out;
  @include box-shadow;

  & a {
    display: inline-block;
    padding: 2rem 1rem;
    width: 100%;
    height: 100%;
  }
}

@media screen and (min-width:768px) {
  .header {
    .header__left-side {
      .nav__menu__item {
        width: 55%;
        line-height: 1.3;
        margin-bottom: 2.5rem;
      }
    }
  }
}

@media screen and (min-width:1024px) {
  .header {
    .header__left-side {
      .nav__menu__item {
        width: 75%;
      }
    }
  }
}

@media screen and (min-width:1440px) {
  .header {
    .header__left-side {
      .nav__menu__item {
        height: 6rem;
        margin-bottom: 2.5rem;

        & a {
          vertical-align: text-top;
        }
      }
    }
  }
}

@media (hover: hover) {
  .nav__menu__item:hover {
    opacity: 0.4;
  }
}
</style>
