<template>
  <div class="col-lg-4 col-xl-3 mb-4">  <!--col-12 col-md-6 col-lg-4 mb-4-->
    <div class="card">
      <div class="badge-background" :style="{backgroundImage: `url(/img/${partner.url})`}"></div>
      <!-- <img :src="" class="card-img-top" :alt="partner.name"> -->
      <div class="card-body">
        <div class="badges">
          <span class="badge badge-info">{{partner.tag1}}</span>
          <span class="badge badge-secondary">{{partner.tag2}}</span>
        </div>
        <h5 class="card-title mb-0">{{partner.name}}</h5>
        <p class="card-text">{{partner.claim}}</p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    partner: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss">
.badge-background {
  display: block;
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
}
</style>
