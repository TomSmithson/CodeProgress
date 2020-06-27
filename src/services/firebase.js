import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Firebase Config
const config = {
    apiKey: "AIzaSyAwbJ9267PindUe4kEw6t7kUdRp_z9GJ9Y",
    authDomain: "codeprogress-e1ef6.firebaseapp.com",
    databaseURL: "https://codeprogress-e1ef6.firebaseio.com",
  };

  // Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();