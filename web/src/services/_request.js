import { Auth } from 'aws-amplify'
import axios from 'axios'

const API_URL = 'https://ar8dcjei95.execute-api.us-east-1.amazonaws.com/dev/'

export default {
    async get(path) {
        let token = await this.token()
        let config = {
            headers: {
                // 'Accept': '*/*',
                // 'Access-Control-Request-Method': 'GET',
                // 'Access-Control-Request-Headers': 'authorization'
            }
        }
        config.headers.Authorization = token
        return await axios.get(API_URL.concat(path || ''), config).then((res) => { return res }).catch((err) => console.error(err))
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
