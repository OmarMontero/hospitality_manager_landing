<template>
  <div>
    <carousel/>
    <partners/>
    <apps-slider/>
    <contact-form/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue';
import Partners from '@/components/Partners.vue';
import AppsSlider from '@/components/AppsSlider.vue';
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
    Partners,
    AppsSlider,
    ContactForm,
  },
};
</script>
