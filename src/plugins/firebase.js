import firebase from 'firebase'
import Vue from 'vue'
import config from '../config/index.js' 

firebase.initializeApp(config.firebaseConfig)

export const db = firebase.firestore()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export default async () => {
  Vue.prototype.$firebase = firebase
  Vue.prototype.$db = db
  Vue.prototype.$timestamp = timestamp
}
