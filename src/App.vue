<template>
  <div>
    <my-header/>
    <main id="main" style="margin-top: 84 px;">
      <router-view/>
    </main>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';

export default {
  name: 'app',
  components: { MyHeader },
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

</style>
