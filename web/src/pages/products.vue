<template>
  List of best products:
  <br />
  {{ products }}
  <br />
</template>

<script>
import productsService from '../services/products'

export default {
  name: "products",
  data() {
    return {
      products: Object
    }
  },
  async mounted() {
    this.products = await productsService.listProducts()
  }
}
</script>

<style scoped>

</style>
