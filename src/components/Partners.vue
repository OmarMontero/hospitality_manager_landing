<template>
  <section id="partners">
    <div class="container">
      <div class="row">
        <div class="col text-center text-uppercase">
          <small>Conoce a nuestros</small>
          <h2 class="h4">Colaboradores</h2>
        </div>
      </div>
      <div class="row">
        <badge 
        v-for="(partner, i) in partners"
        :key="i"
        :partner="partner"/>
        <!-- INSERTAR BADGES AQUÍ -->
      </div>
    </div>
  </section>
</template>
<script>
import Badge from '@/components/Badge.vue';

export default {
  components: { Badge },
  data() {
    return {
      partners: [
        {
          name: 'La Porcinería',
          claim: 'Viaje gastronómico a través del chanchito',
          tag1: 'Meaty',
          tag2: 'Exotic',
          url: 'laporcineria.jpg',
        },
        {
          name: 'MyVeg',
          claim: 'Las mejores verduras de Madrid.',
          tag1: 'Vegan friendly',
          tag2: 'Traditional',
          url: 'myveg.jpg',
        },
        {
          name: 'La Navarrería',
          claim: 'Un auténtico txoco navarro en el centro de Madriz.',
          tag1: 'Veggie friendly',
          tag2: 'Traditional',
          url: 'lanavarreria.jpg',
        },
        {
          name: 'Chuka',
          claim: 'Pásate Japón sin salir de la almendra sentral.',
          tag1: 'Veggie friendly',
          tag2: 'Exotic',
          url: 'chuka.jpg',
        },
      ],
    };
  },
};
</script>
