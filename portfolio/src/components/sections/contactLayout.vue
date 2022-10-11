<template>
  <section id="contact" class="section main__contact">
    <h2 class="main__competences__title">Contact</h2>
    <div class="container__contact">
      <form @submit="handleSubmitForm" class="form__contact" action="http://portfolio.local/" method="post">
        <div class="form__contact__item">
          <label for="name">Votre nom</label>
          <input v-model="name" type="text" name="name" id="name">
          <p class="form__contact__error">{{error_messages.name}}</p>
        </div>
        <div class="form__contact__item">
          <label for="email">Votre e-mail</label>
          <input v-model="email" type="text" name="email" id="email">
          <p class="form__contact__error">{{error_messages.email}}</p>
        </div>
        <div class="form__contact__item">
          <label for="content">Votre message</label>
          <textarea v-model="message" name="content" id="content" cols="30" rows="10"></textarea>
          <p class="form__contact__error">{{error_messages.message}}</p>
        </div>
        <div class="form__contact__item">
          <button class="btn__contact" type="submit">Envoyer</button>
        </div>
        <div class="form__contact__item container__response_message">
          <p class="response_message">{{response_message}}</p>
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
import ContactService from '@/services/contact/contactService';
export default {
  name: 'contactLayout',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      error_messages: {},
      response_message: ''
    }
  },
  methods: {
    async handleSubmitForm(e) {
      e.preventDefault();

      this.error_messages = {};

      if (!this.name) {
        this.error_messages = {...this.error_messages, name: 'Veuillez renseigner votre nom'};
      } else if (this.name.length < 3 || this.name.length >= 255) {
        this.error_messages = {...this.error_messages, name: 'Le nom doit contenir entre 3 et 255 caractères'};
      }

      if (!this.email) {
        this.error_messages = {...this.error_messages, email: 'Veuillez renseigner votre email'};
      } else if (!this.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        this.error_messages = {...this.error_messages, email: 'Veuillez renseigner votre email au format test@test.test'};
      }

      if (!this.message) {
        this.error_messages = {...this.error_messages, message: 'Veuillez renseigner votre message'};
      } else if (this.message.length < 3 || this.message.length >= 255) {
        this.error_messages = {...this.error_messages, message: 'Le message doit contenir aux moins 3 caractères'};
      }

      if (Object.keys(this.error_messages).length === 0) {
        const bodyElement = document.querySelector('body');
        const btnElement = document.querySelector('.btn__contact');
        bodyElement.classList.toggle('loading');
        btnElement.classList.toggle('loading');
        const response = await ContactService.sendMail({
          name: this.name,
          email: this.email,
          content: this.message
        });

        if (response) {
          bodyElement.classList.toggle('loading');
          btnElement.classList.toggle('loading');
          const containerMessage = document.querySelector('.container__response_message');
          const responseMessage = containerMessage.querySelector('.response_message');
          containerMessage.style.display = 'block';
          if (response.sent) {
            this.name = '';
            this.email ='';
            this.message = '';
            containerMessage.classList.add('container__response_message--success');
            responseMessage.textContent = 'Votre message a bien été envoyé';
          } else {
            containerMessage.classList.add('container__response_message--error');
            responseMessage.textContent = 'Votre message n\'a pas pu être envoyé, vous pouvez m\'envoyer un e-mail';
          }
        }
      }
    }
  }
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
    margin: 1.2rem auto;

    input,
    textarea {
      margin: 0.2rem 0;
      padding: 0.5rem;
      border: 2px solid $tertiary;
      border-radius: 0.3rem;
      outline-color: $secondary;
    }

    .form__contact__error {
      color: $error;
      font-size: 1.3rem;
    }

    .btn__contact {
      width: 50%;
      cursor: pointer;
      max-width: 12.1rem;
      padding: 0.2rem 0.6rem;
      border: 2px solid $secondary;
      border-radius: 0.5rem;
      background-color: $primary;
    }

  }
  .container__response_message {
    display: none;
    border: 1px solid;
    border-radius: 0.5rem;
    padding: 1.5rem;
  }
  .container__response_message--success {
    color: #4f8a10;
    background-color: #dff2bf;
  }
  .container__response_message--error {
    color: $error;
    background-color: #ffbaba;
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
    opacity: 0.7;
  }

  .contact__item {
    & a:hover {
      opacity: 0.5;
    }
  }
}
</style>