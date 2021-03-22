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
            <div class="input-form w-full md:w-1/2 mr-4">
              <input
                type="text"
                class="input-control w-full mb-4"
                placeholder="Nombre"
                aria-label="Nombre"
              />
            </div>
            <div class="input-form w-full md:w-1/2">
              <input
                type="email"
                class="input-control w-full mb-4"
                placeholder="Correo"
                aria-label="Correo"
              />
            </div>
          </div>
          <div class="input-form w-full">
            <input
              type="text"
              class="input-control w-full mb-4"
              placeholder="Asunto"
              aria-label="Asunto"
            />
          </div>
          <div class="input-form w-full">
            <textarea
              placeholder="Mensaje"
              class="input-control w-full mb-4 resize-none"
              aria-label="Escribe tu mensaje"
              rows="5"
            ></textarea>
          </div>
          <div class="flex justify-center mt-8">
            <VButton
              text="Enviar"
              :hasIcon="true"
              icon="send-1"
              :hasExtraClasses="true"
              classes="justify-center w-full md:w-1/3"
            ></VButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>
