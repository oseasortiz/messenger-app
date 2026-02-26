import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCATFZ_YqRufmFkHrMyCyH25kK_0vxUjrA",
    authDomain: "messenger-app-b232a.firebaseapp.com",
    projectId: "messenger-app-b232a",
    storageBucket: "messenger-app-b232a.firebasestorage.app",
    messagingSenderId: "706161001993",
    appId: "1:706161001993:web:708e50c80a51c771e71ad8"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)