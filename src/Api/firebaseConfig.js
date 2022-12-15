import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyDsu08hicP0N9UdRNNNzO3BKgtQHPRDSTQ",
    authDomain: "fir-tonode.firebaseapp.com",
    databaseURL: "https://fir-tonode-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-tonode",
    storageBucket: "fir-tonode.appspot.com",
    messagingSenderId: "593129055193",
    appId: "1:593129055193:web:fa4d57b1133f3883aaafc8",
    measurementId: "G-T64J6BTF68"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;