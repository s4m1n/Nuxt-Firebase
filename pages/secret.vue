<template>
  <div>
    <h1>This is secret info</h1>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { getUserFromCookie } from '../helpers/index'
export default {
  asyncData({ req, redirect }) {
    //whether it's on the server so process.server
    if (process.server) {
      const user = getUserFromCookie(req)
      console.log(user)
      if (!user) {
        redirect('/login')
      }
    } else {
      // when not on the server
      let user = firebase.auth().currentUser
      if (!user) {
        // using redirect instead of $router.push
        redirect('/login')
      }
    }
  }
}
</script>

<style></style>
