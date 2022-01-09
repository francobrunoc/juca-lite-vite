<template>
  Not Authorized, please make your login here:
  <br />
  <button
      class="m-3 text-sm btn"
      @click="$router.push('/auth')"
  >
    Login
  </button>
  <br />
</template>

<script>
export default {
  name: '401',
}
</script>

<style scoped>

</style>
