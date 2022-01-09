import { Auth } from 'aws-amplify'

export default async function () {
  try {
    // if (window.sessionStorage.getItem('token')) return true
    await Auth.currentAuthenticatedUser()
    return true
  }
  catch (err) {
    console.log(err)
    return false
  }
}
