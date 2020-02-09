import * as firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDQxBr9CUBpwU_okZj_UcAmRAgZ1OlL16E',
  authDomain: 'nuxt-ssr-c39bc.firebaseapp.com',
  databaseURL: 'https://nuxt-ssr-c39bc.firebaseio.com',
  projectId: 'nuxt-ssr-c39bc',
  storageBucket: 'nuxt-ssr-c39bc.appspot.com',
  messagingSenderId: '974804223686',
  appId: '1:974804223686:web:995ff2a47f53a342eb39c7'
}
// Initialize Firebase
let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
}

export default firebase
