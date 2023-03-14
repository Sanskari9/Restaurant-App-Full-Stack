import { getApp, getApps , initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'
import {getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCpiozIf6HF3uWSpa6Agvhlp8maeBu7s9A",
  authDomain: "restaurantapp-dcb77.firebaseapp.com",
  databaseURL: "https://restaurantapp-dcb77-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-dcb77",
  storageBucket: "restaurantapp-dcb77.appspot.com",
  messagingSenderId: "881361002247",
  appId: "1:881361002247:web:bcfd93ac60c1fbf48cafa2"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app , firestore, storage}