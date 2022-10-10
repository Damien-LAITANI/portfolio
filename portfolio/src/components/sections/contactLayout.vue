<template>
  <section id="contact" class="section main__contact">
    <h2 class="main__competences__title">Contact</h2>
    <div class="container__contact">
      <form class="form__contact" action="" method="post">
        <div class="form__contact__item">
          <label for="name">Votre nom</label>
          <input type="text" name="name" id="name">
        </div>
        <div class="form__contact__item">
          <label for="email">Votre e-mail</label>
          <input type="text" name="email" id="email">
        </div>
        <div class="form__contact__item">
          <label for="content">Votre message</label>
          <textarea name="content" id="content" cols="30" rows="10"></textarea>
        </div>
        <div class="form__contact__item">
          <button class="btn__contact" type="submit">Envoyer</button>
        </div>
      </form>
      <div class="contact__items">
        <p class="contact__item"><a href="tel:0635551818"><i class="fa-solid fa-phone-volume"></i> 06 35 55 18 18</a></p>
        <p class="contact__item"><a href="mailto:d.laitani@gmail.com"><i class="fa-solid fa-at"></i> d.laitani@gmail.com</a></p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'contactLayout',
}
</script>
<style scoped lang="scss">
.main__contact {
  padding-bottom: 2.5rem;
  .main__competences__title {
    margin-bottom: 2.5rem;
  }

  .form__contact__item {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: auto;

    input,
    textarea {
      margin: 0.5rem 0 1.2rem 0;
      padding: 0.5rem;
      border: 2px solid $tertiary;
      border-radius: 0.3rem;
      outline-color: $secondary;
    }

    .btn__contact {
      width: 50%;
      max-width: 12.1rem;
      padding: 0.2rem 0.6rem;
      border: 2px solid $secondary;
      border-radius: 0.5rem;
      background-color: $primary;

    }
  }

  .contact__items {
    text-align: center;
    .contact__item {
      margin-top: 2rem;
    }
  }
}

@media screen and (min-width:768px) {
  .main__contact {
    .container__contact {
      display: flex;
      justify-content: center;
      align-items: center;

      .form__contact {
        flex: 1.5;

        & input {
          height: 4rem;
        }
      }

      .contact__items {
        flex: 1;
      }
    }
  }
}

@media screen and (min-width:1200px) {
  .contact__item a {
    font-size: 2.5rem;
  }
}

@media (hover: hover) {
  .btn__contact:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  .contact__item {
    & a:hover {
      opacity: 0.5;
    }
  }
}
</style>