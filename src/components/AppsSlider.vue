<template>
    <div id="slider" class="carousel slide" data-ride="carousel" data-pause="false">
      <div class="carousel-inner">
        <other-apps
        v-for="(other_app, i) in other_apps"
        :key="i"
        :other_app="other_app"
        :index="i" />
      </div>
    </div>
</template>

<script>
import OtherApps from '@/components/OtherApps.vue';

export default {
  components: { OtherApps },
  data() {
    return {
      other_apps: [
        {
          name: 'Control de Presencia',
          description: 'Controle los horarios de forma efectiva y cumpla con las directrices del Real Decreto de 2019',
          url: 'presencecontrol.jpg',
        },
        {
          name: 'TPV',
          description: 'Integra todos los aspectos de tu negocio en una misma ventana',
          url: 'tpv.png',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#main .carousel-inner img {
    max-height: 70vh;
    object-fit: cover;
    filter: grayscale(70%);
}

#carousel {
    position:relative;
}
</style>
