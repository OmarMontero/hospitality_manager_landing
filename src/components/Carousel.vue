<template>
  <main id="main">
    <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/img/laporcineria.jpg" 
          class="d-block w-100" 
          alt="Foto de restaurante La Porcinería">
        </div>
        <div class="carousel-item">
          <img src="/img/lanavarreria.jpg" 
          class="d-block w-100" 
          alt="Foto de restaurante La Navarrería">
        </div>
        <div class="overlay">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6 offset-md-6 text-center text-md-right">
                <h1>DataBar</h1>
                <p class="d-none d-md-block">
                  Comienza a controlar de manera efectiva tu negocio.
                  Las mejores funcionalidades con una gran accesibilidad y un manejo intuitivo.
                  Ya tu sabe!
                </p>
                <a href="#" class="btn btn-outline-light">¿Te llamamos?</a>
                <button type="button" class="btn btn-platzi">
                  Quiero contratar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.btn-platzi {
    background-color: #97c93e;
    color: white;
}

.btn-platzi:hover {
    background-color: #82ad36;
}

#main .carousel-inner img {
    max-height: 70vh;
    object-fit: cover;
    filter: grayscale(70%);
}

#carousel {
    position:relative;
}

#carousel .overlay {
    z-index: 1;
    position:absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    color: white;
}

#carousel .overlay .container,
#carousel .overlay .row {
    height: 100%;
}

</style>
