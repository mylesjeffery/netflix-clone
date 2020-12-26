import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from '../seed'

// set up database

// config here
const config = {
    apiKey: "AIzaSyCJ9-KOuUuYwp-lmox0SVhZFAaX1eaf2KY",
    authDomain: "netflix-20755.firebaseapp.com",
    projectId: "netflix-20755",
    storageBucket: "netflix-20755.appspot.com",
    messagingSenderId: "348931912219",
    appId: "1:348931912219:web:efcadb544d1c1ccb44febe"
}

const firebase = Firebase.initializeApp(config)


export { firebase }

