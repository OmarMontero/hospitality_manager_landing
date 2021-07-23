<template>
  <section  id="contact" class="pt-4 pb-4">
      <section class="container">
        <section class="row">
          <section class="col text-center" >
            <small>Da el siguiente paso</small>
            <h2 class="col text-uppercase">Contrata</h2>
          </section>
        </section>
        <section class="row">
          <section class="col text-center mb-4">
            ¿Alguna duda? <!--<abbr data-toggle="tooltip" title="Charlas de 5 minutos">charla ignite.</abbr>.-->
            ¡Danos tus datos de contacto y te llamaremos para informarte!
          </section>
        </section>
        <section class="row">
          <section class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <form>
              <div class="form-row">
                <div class="form-group col-12 col-md-6">
                  <input type="text" class="form-control" placeholder="Nombre">
                </div>
                <div class="form-group  col-12 col-md-6">
                  <input type="text" class="form-control" placeholder="Apellido">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-12 col-md-6">
                  <input type="text" class="form-control" placeholder="Correo electrónico"/>
                </div>
                <div class="form-group col-12 col-md-6">
                  <input type="number" class="form-control" placeholder="Número de teléfono"/>
                </div>
              </div>
              <div class="form-row">
                <div class="col">
                  <button type="submit" class="btn  btn-green btn-block" name="button">Enviar</button>
                </div>
              </div>
            </form>
          </section>
        </section>
      </section>
    </section>
</template>

<style scoped>
.btn-green {
    background-color: #97c93e;
    color: white;
}
.btn-platzi:hover {
    background-color: #82ad36;
}
</style>
