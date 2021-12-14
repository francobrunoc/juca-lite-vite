<script>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";

import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

export default {
  name: 'Auth',
  components: { Authenticator },
  async mounted() {
    await Auth.signOut()
    Hub.listen('auth', (data) => {
      if (data.payload.event === 'signIn') this.$router.push('/products')
      console.log('A new auth event has happened: ', data.payload.event);
    })
  }
}
</script>

<template>
  <authenticator>
  </authenticator>
</template>
