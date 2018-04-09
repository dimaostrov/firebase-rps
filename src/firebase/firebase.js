import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD87ABY42eH9EhRHwxAKlSOgWkdQyF0buM",
    authDomain: "personality-testicle.firebaseapp.com",
    databaseURL: "https://personality-testicle.firebaseio.com",
    projectId: "personality-testicle",
    storageBucket: "personality-testicle.appspot.com",
    messagingSenderId: "791310029367"
  };
  firebase.initializeApp(config);

  if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }


