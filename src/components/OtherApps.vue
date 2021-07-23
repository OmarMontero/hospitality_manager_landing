<template>
  <section id="other-apps" class="carousel-item" :class="{'active': index === 0}">
    <div class="container-fluid">
      <div class="row">
      <div class="col-12 col-lg-6 pl-0 pr-0">
        <div class="otherapps-background" :style="{backgroundImage: `url(/img/${other_app.url})`}"></div>
        <!-- <img :src="`/img/${other_app.url}`" :alt="other_app.name"> presence_control.jpg -->
      </div>
      <div class="col-12 col-lg-6 pt-4 pb-4">
        <h2>{{other_app.name}}</h2> <!--Control de Presencia-->
        <p>
        {{other_app.description}}  
        </p> <!--Controle los horarios de forma efectiva y cumpla con las directrices del Real Decreto de 2019-->
        <a class="btn btn-outline-light" href="#">Ver más</a>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    other_app: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: Number,
    },
  },
};
</script>

<style ang="scss">

.otherapps-background {
  display: block;
  width: 100%;
  height: 456px;
  background-size: cover;
  background-position: center;
}

#other-apps {
    background-color: #343a40;
    color: white;
  }
  
#other-apps img {
    max-width: 100%;
  }
</style>
