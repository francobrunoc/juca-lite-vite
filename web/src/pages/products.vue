<template>
  <br />
  List of best products:
  <br />
  <div align='center' mt-10>
    <table v-for='product in products'>
      <th>Família</th><th>Nome</th><th>Preço</th>
      <tr>
        <td>{{ product.family }}</td><td>{{ product.name }}</td><td>{{ product.price }}</td>
      </tr>
    </table>
  </div>
  <br />
  <button
    class="m-3 text-sm btn"
    @click="signOut"
  >
    Logout
  </button>
  <br />
</template>

<script>
import productsService from '../services/products'
import { useHead } from '@vueuse/head'
import { Auth, Hub } from 'aws-amplify'
import Authenticated from '../middleware/authenticated'

export default {
  name: "products",
  setup() {
    const signOut = async () => {
      sessionStorage.removeItem('token')
      await Auth.signOut()
    }

    useHead({
      title: 'Products Title',
      meta: [
        {
          name: `description`,
          content: `Product description`,
        },
      ],
    })

    return { signOut }
  },
  data() {
    return {
      products: null
    }
  },
  async mounted() {
    Hub.listen('auth', (data) => {
      console.log('A new auth event has happened: ', data.payload.event)
      if (data.payload.event === 'signOut') {
        this.$router.push('/')
      }
    })

    const { data } = await productsService.listProducts()
    this.products = data
  },
  async beforeCreate() {
    if (!await Authenticated()) this.$router.push('/error/401')
  },
}
</script>

<style scoped>

</style>
