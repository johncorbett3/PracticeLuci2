import { initializeApp } from "firebase/app"
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBp-AkaOOaBq3qnScwCBJCtYenX-OKyu28",
    authDomain: "practiceluci2.firebaseapp.com",
    projectId: "practiceluci2",
    storageBucket: "practiceluci2.appspot.com",
    messagingSenderId: "216119564792",
    appId: "1:216119564792:web:ec142dd6c5dab4fa291e0d"
  };

  initializeApp(firebaseConfig)

//   episode 4 of Getting Started with Firebase 9
  const db = getFirestore()
  const colRef = collection(db, 'Books')
  getDocs(colRef)
    .then((snapshot) => {
        let books = []
        snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id })
        })
        console.log(books)
    })
    .catch(err => {
        console.log(err.message)
    })

