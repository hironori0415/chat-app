import firebase from 'firebase'
// import * as firebase from 'firebase/app'
import 'firebase/auth'


const firebaseConfig = {
    // 各人の認証情報を記述
    apiKey: "AIzaSyCfXozJHy9w4EeyTV77xOaTj715xfo86qg",
    authDomain: "chat-app-a1f19.firebaseapp.com",
    projectId: "chat-app-a1f19",
    storageBucket: "chat-app-a1f19.appspot.com",
    messagingSenderId: "721406699608",
    appId: "1:721406699608:web:1abbd02cd25993fb36822d"
}

firebase.initializeApp(firebaseConfig)

// export const providerGoogle = new firebase.auth.GoogleAuthProvider();
// export const providerFacebook = new firebase.auth.FacebookAuthProvider();
// export const providerTwitter = new firebase.auth.TwitterAuthProvider();

export default firebase