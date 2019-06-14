import * as firebase from "firebase";

// @flow
const firebaseConfig = {
    apiKey: "AIzaSyANanFaw3HkzRi2gfQGetEw7PZb38tetnk",
    authDomain: "stemapp-d0db8.firebaseapp.com",
    databaseURL: "https://stemapp-d0db8.firebaseio.com",
    projectId: "stemapp-d0db8",
    storageBucket: "stemapp-d0db8.appspot.com",
    messagingSenderId: "203953989673",
    appId: "1:203953989673:web:ed3015ec6f1dc8c1"
  };

export default class Firebase {
    static auth;

    static init(){
        // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  Firebase.auth = firebase.auth();
    }
}