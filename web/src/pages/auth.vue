<script>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";

import Amplify, { Auth, Hub } from 'aws-amplify';

const config = {
  aws_project_region: import.meta.env.VITE_AWS_PROJECT_REGION,
  aws_user_pools_id: import.meta.env.VITE_AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id: import.meta.env.VITE_AWS_USER_POOLS_WEB_CLIENT_ID,
}

Amplify.configure(config)

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
  <authenticator />
</template>
