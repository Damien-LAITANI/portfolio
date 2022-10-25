<template>
  <section id="contact" class="section main__contact">
    <h2 class="main__competences__title">Contact</h2>
    <div class="container__contact">
      <form @submit="handleSubmitFormReCaptcha" class="form__contact" action="http://portfolio.local/" method="post">
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
          <button class="btn__contact g-recaptcha"
                  data-sitekey="reCAPTCHA_site_key"
                  data-callback='onSubmit'
                  data-action='submit' type="submit">
            Envoyer
          </button>
        </div>
        <div class="form__contact__item container__response_message">
          <p class="response_message">{{response_message}}</p>
        </div>
      </form>
      <div class="contact__items">
        <p class="contact__item"><a href="tel:0635551818">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1.5rem" height="1.5rem" class="icon--contact">
            <path d="M188.8 39.3c13.8 8.5 19.6 26.8 13.6 42.7L174.2 156c-5.3 14-18.5 22.5-32.4 21l-42.6-4.6c-17.4 54.1-17.4 113.2 0 167.3l42.6-4.6c13.9-1.5 27.1 7 32.4 21L202.4 430c6.1 15.9 .3 34.2-13.6 42.7l-56.4 34.8c-12.4 7.7-28 5.4-38.1-5.5C-31.4 366.1-31.4 145.9 94.3 10C104.4-.9 120.1-3.1 132.5 4.5l56.4 34.8zm218.4-5.5C471.2 86.6 512 166.6 512 256s-40.8 169.4-104.7 222.2c-10.2 8.4-25.3 7-33.8-3.2s-7-25.3 3.2-33.8C430.1 397.1 464 330.5 464 256s-33.9-141.1-87.3-185.2c-10.2-8.4-11.7-23.6-3.2-33.8s23.6-11.7 33.8-3.2zm-64.4 71.4C387.4 140.4 416 194.8 416 256s-28.6 115.6-73.1 150.8c-10.4 8.2-25.5 6.4-33.7-4s-6.4-25.5 4-33.7C346.6 342.7 368 301.8 368 256s-21.4-86.7-54.8-113.1c-10.4-8.2-12.2-23.3-4-33.7s23.3-12.2 33.7-4zm-65.4 71C303.1 193.5 320 222.8 320 256s-16.9 62.5-42.5 79.7c-11 7.4-25.9 4.5-33.3-6.5s-4.5-25.9 6.5-33.3c12.9-8.7 21.3-23.3 21.3-39.9s-8.4-31.2-21.3-39.9c-11-7.4-13.9-22.3-6.5-33.3s22.3-13.9 33.3-6.5z"/>
          </svg>
          06 35 55 18 18</a>
        </p>
        <p class="contact__item"><a href="mailto:d.laitani@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1.5rem" height="1.5rem" class="icon--contact">
            <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64z"/>
          </svg>
          d.laitani@gmail.com</a>
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import ContactService from '@/services/ContactService';
export default {
  name: 'ContactLayout',
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
    // Méthode qui permet de récupérer le token qui sera envoyé à l'API de google reCaptcha pour valider le fait que le formulaire et bien envoyé par un utilisateur
    handleSubmitFormReCaptcha(event) {
      const self = this;
      event.preventDefault();
      window.grecaptcha.ready(function() {
        window.grecaptcha.execute('6Ldop5YiAAAAAGpWCOKUi29soCzc5TVBMuMIeJi8', {action: 'submit'}).then(async function(token) {
          const response = await ContactService.reCaptcha({
            response: token
          })
          if (response.success) {
            await self.handleSubmitForm();
          }
        });
      });
    },
    // Méthode qui vérifie la validité des champs et envoie la requête pour envoyer le mail
    async handleSubmitForm() {
      this.error_messages = {};

      if (!this.name) {
        this.error_messages = {...this.error_messages, name: 'Veuillez renseigner votre nom'};
      } else if (this.name.length < 3 || this.name.length >= 64) {
        this.error_messages = {...this.error_messages, name: 'Le nom doit contenir entre 3 et 64 caractères'};
      }

      if (!this.email) {
        this.error_messages = {...this.error_messages, email: 'Veuillez renseigner votre email'};
      } else if (!this.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        this.error_messages = {...this.error_messages, email: 'Veuillez renseigner votre email au format test@test.test'};
      }

      if (!this.message) {
        this.error_messages = {...this.error_messages, message: 'Veuillez renseigner votre message'};
      } else if (this.message.length < 3) {
        this.error_messages = {...this.error_messages, message: 'Le message doit contenir au moins 3 caractères'};
      }

      if (Object.keys(this.error_messages).length === 0) {
        this.toggleClass('body', 'loading');
        this.toggleClass('btn__contact', 'btn--disabled', '.');
        const btnElement = document.querySelector('.btn__contact');
        btnElement.disabled = true;
        const response = await ContactService.sendMail({
          name: this.name,
          email: this.email,
          content: this.message
        });

        if (response) {
          this.toggleClass('body', 'loading');
          this.toggleClass('btn__contact', 'btn--disabled', '.');
          btnElement.disabled = false;
          const containerMessage = document.querySelector('.container__response_message');
          const responseMessage = containerMessage.querySelector('.response_message');
          containerMessage.style.display = 'block';

          if (response.sent) {
            this.name = '';
            this.email ='';
            this.message = '';
            containerMessage.classList.add('container__response_message--success');
            responseMessage.textContent = 'Votre message a bien été envoyé.';
          } else {
            containerMessage.classList.add('container__response_message--error');
            responseMessage.textContent = 'Votre message n\'a pas pu être envoyé, mais vous pouvez m\'envoyer un e-mail.';
          }
        }
      }
    },
    // Méthode qui récupère un element du DOM et lui ajoute ou retire une classe
    toggleClass(elementName, className, prefix = '') {
      const element = document.querySelector(prefix + elementName);
      element.classList.toggle(className);
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

    .btn--disabled {
      cursor: progress;
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

    .icon--contact {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
}

@media (hover: hover) {
  .btn__contact:hover {
    opacity: 0.7;
  }

  .btn--disabled:hover {
    opacity: 1;
  }

  .contact__item {
    & a:hover {
      opacity: 0.5;
    }
  }
}
</style>