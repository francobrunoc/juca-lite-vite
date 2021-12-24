import { Auth } from 'aws-amplify'
import axios from 'axios'

const API_URL = import.meta.env.VITE_AWS_API_URL

export default {
    async get(path) {
        let token = await this.token()
        return await axios.get(API_URL.concat(path || ''), { headers: { Authorization: token }})
    },
    async post(path, body) {
        let token = await this.token()
        return await axios.post(API_URL.concat(path || ''), body,{ headers: { Authorization: token }})
    },
    async token() {
        return await Auth.currentAuthenticatedUser()
            .then((user) => { return user.signInUserSession.idToken.jwtToken })
            .catch((e) => console.log(e))
    }
}
