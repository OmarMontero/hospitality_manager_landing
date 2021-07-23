<template>
  <div>
    <carousel/>
    <partners/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue';
import Partners from '@/components/Partners.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
    Partners,
  },
};
</script>
