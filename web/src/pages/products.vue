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
      products: []
    }
  },
  async mounted() {
    const { data } = await productsService.listProducts()
    this.products = data
  }
}
</script>

<style scoped>

</style>
