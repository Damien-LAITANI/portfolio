<template>
  <footer class="footer">
    <div class="socials__links">
      <a href="https://linkedin.com/in/damien-laitani"><i class="fa-brands fa-linkedin-in"></i></a>
      <a href="https://github.com/Damien-LAITANI"><i class="fa-brands fa-github"></i></a>
      <a href="https://twitter.com/DLaitani"><i class="fa-brands fa-twitter"></i></a>
    </div>
    <p>&copy; 2022. Damien Laitani - portfolio</p>
  </footer>
</template>
<script>
export default {
  name: 'FooterLayout'
}
</script>
<style scoped lang="scss">

.footer {
  background-color: $secondary;
  text-align: center;
  padding: 1rem 0;
  margin-top: 2.5rem;

  .socials__links {
    & a {
        padding: 0 1rem;
        font-size: 2.5rem;
        color: black;
      }
  }

  p {
    margin-top: 1.5rem;
    font-size: 1rem;
  }
}

@media screen and (min-width:1024px) {
  .footer {
    .socials__links {
      & a {
        font-size: 3rem;
      }
    }
    p {
      font-size: 1.3rem;
    }
  }
}

@media (hover: hover) {
  .socials__links {
    & a:hover {
      opacity: 0.7;
    }
  }
}
</style>