<template>
  <div class="container">
    <HeaderLayout />
    <main class="main">
      <AboutLayout />
      <RealisationLayout />
      <CompetenceLayout />
      <ContactLayout />
    </main>
    <FooterLayout />
    <topButtonLayout />
  </div>
</template>

<script>
import './assets/scss/base/_reset.scss';
import HeaderLayout from "@/components/templates/HeaderLayout";
import FooterLayout from "@/components/templates/FooterLayout";
import AboutLayout from "@/components/sections/AboutLayout";
import RealisationLayout from "@/components/sections/RealisationLayout";
import CompetenceLayout from "@/components/sections/CompetenceLayout";
import ContactLayout from "@/components/sections/ContactLayout";
import TopButtonLayout from "@/components/partials/TopButtonLayout";
export default {
  name: 'App',
  components: {
    TopButtonLayout,
    ContactLayout,
    CompetenceLayout,
    RealisationLayout,
    AboutLayout,
    FooterLayout,
    HeaderLayout
  }
}
</script>

<style lang="scss">

* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

.header,
.main__competences {
  position: relative;
  z-index: 999;
}

.main {
  .section {
    padding: 2.5rem 1rem;
  }
}

p,
a,
li,
label,
input,
textarea,
button{
  font-size: 1.6rem;
  font-family: $text;
}

strong {
  font-weight: bold;
}

a {
  color: black;
  text-decoration: none;
}

h1,
h2,
h3 {
  font-family: $title;
  text-transform: uppercase;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.2rem;
}

h3 {
  font-size: 1.8rem;
}

.loading {
  cursor: progress !important;
}

.swiper-button-next,
.swiper-button-prev {
  color: $secondary;
}

.swiper-pagination-bullet-active {
  background-color: $secondary;
}

@media screen and (min-width:768px) {
  p,
  a,
  li,
  label,
  button{
    font-size: 1.8rem;
  }
}
</style>
