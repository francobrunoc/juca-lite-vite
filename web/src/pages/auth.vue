<script>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";

import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from '../aws-exports';

const config = {
  aws_project_region: 'us-east-1',
  aws_user_pools_id: 'us-east-1_kypBgJ5qs',
  aws_user_pools_web_client_id: '1agga45a8bllhd78t5t1oin5ke',
}
Amplify.configure(config)
// Amplify.configure(awsconfig);

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
