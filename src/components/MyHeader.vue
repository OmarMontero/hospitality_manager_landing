<template>
  <header>
    <nav id="header" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <logo />
        <p class="text-form">Empieza a controlar tu negocio</p>
        <button class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation">

          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link"
              href="#main">Qué es DataBar <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
              href="#partners">Colaboradores <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
              href="#other-apps">Aplicaciones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
              href="#contact">Contáctanos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-platzi"
              href="log_in.html">Iniciar Sesión</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue';

export default {
  components: { Logo },
};
</script>

<style>
.text-form {
  color: azure;
}
#header img {
    width: 120px
}
</style>
