<template>
  <div>
    <h1 class="text-3xl border-line font-medium text-blakc-300 font-mitr">
      Contacto
    </h1>
    <div class="flex flex-col md:flex-row mt-8 md:py-8">
      <div class="w-full md:w-1/3">
        <img
          src="~/assets/images/contact-form.jpg"
          alt="Ilustration contact form"
        />
      </div>
      <div class="w-full md:w-2/3 border-black">
        <div class="form-contact md:p-4">
          <div class="flex flex-col md:flex-row">
            <div class="input-form w-full md:w-1/2 mr-4 mb-4">
              <input
                ref="name"
                v-model="contact.name"
                type="text"
                class="input-control w-full"
                placeholder="Nombre"
                aria-label="Nombre"
              />
              <span
                v-if="!isValid && errors.name"
                class="text-sm text-red-600 font-normal"
                >{{ errors.name }}</span
              >
            </div>
            <div class="input-form w-full md:w-1/2 mb-4">
              <input
                ref="email"
                v-model="contact.email"
                type="email"
                class="input-control w-full"
                placeholder="Correo"
                aria-label="Correo"
              />
              <span
                v-if="!isValid && errors.email"
                class="text-sm text-red-600 font-normal"
                >{{ errors.email }}</span
              >
            </div>
          </div>
          <div class="input-form w-full mb-4">
            <input
              ref="subject"
              v-model="contact.subject"
              type="text"
              class="input-control w-full"
              placeholder="Asunto"
              aria-label="Asunto"
            />
            <span
              v-if="!isValid && errors.subject"
              class="text-sm text-red-600 font-normal"
              >{{ errors.subject }}</span
            >
          </div>
          <div class="input-form w-full mb-4">
            <textarea
              ref="message"
              v-model="contact.message"
              placeholder="Mensaje"
              class="input-control w-full resize-none"
              aria-label="Escribe tu mensaje"
              rows="5"
            ></textarea>
            <span
              v-if="!isValid && errors.message"
              class="text-sm text-red-600 font-normal"
              >{{ errors.message }}</span
            >
          </div>
          <div class="flex justify-center mt-8">
            <VButton
              text="Enviar"
              :hasIcon="true"
              icon="send-1"
              type="submit"
              @send="sendMessage"
            ></VButton>
          </div>
        </div>
      </div>
    </div>

    <VModal
      v-if="showModal"
      title="Mensaje enviado"
      message="Su mensaje se ha enviado con éxito. Muchas gracias. En breve recibirá una respuesta."
      image="message.svg"
      alt="Imagen de mensaje exitoso"
      @close="showModal = false"
    ></VModal>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      isValid: true,
      showModal: false,
      errors: {},
      contact: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    }
  },
  methods: {
    async sendMessage() {
      this.validateFields()

      if (this.isValid) {
        try {
          const response = await this.$axios.post("/messages", this.contact)
          if (response.status === 200) {
            this.clean()
            this.showModal = true
          }
        } catch (error) {
          console.log(error)
        }
      }
    },
    validateFields() {
      this.isValid = true
      Object.keys(this.contact).forEach((input) => {
        if (!this.contact[input]) {
          this.isValid = false
          this.$set(this.errors, input, "Este campo es obligatorio")
          this.$refs[input].classList.add("error")
        } else {
          this.$delete(this.errors, input)
          this.$refs[input].classList.remove("error")
          if (
            this.$refs[input].type === "email" &&
            !this.validEmail(this.contact[input])
          ) {
            this.isValid = false
            this.$set(this.errors, input, "Ingrese un correo válido")
            this.$refs[input].classList.add("error")
          }
        }
      })
    },
    validEmail(email) {
      // eslint-disable-next-line
      const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      return pattern.test(email)
    },
    clean() {
      Object.keys(this.contact).forEach((input) => {
        this.contact[input] = ""
      })
    }
  }
}
</script>
