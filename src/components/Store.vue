<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-dark text-white">
        <a class="navbar-brand">SKLEP SPORTOWY</a>
      </div>
    </div>
    <div class="row">
      <div class="col-3 bg-info p-2">
        <h4 class="text-white m-2">Kategorie</h4>
      </div>
      <div class="col-9 bg-success p-2">
        <h4 class="text-white m-2">Produkty</h4>
      </div>
      <div class="col-9 p-2">
        <product-list/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import ProductList from './ProductList.vue';
export default {
  name: 'Store',
  components: { ProductList }
}
</script>

<style lang="scss" scoped>
</style>
