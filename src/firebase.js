import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBN9giAiGQWwG9xKmynODr2eoDd1Lv9fk0",
    authDomain: "library-5ca5c.firebaseapp.com",
    databaseURL: "https://library-5ca5c.firebaseio.com",
    projectId: "library-5ca5c",
    storageBucket: "library-5ca5c.appspot.com",
    messagingSenderId: "632525211780",
    appId: "1:632525211780:web:4ce3a72b87b3a1bdc69ad1",
    measurementId: "G-YFCW5452B6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();


  // db.collection("books").add({
    
  //   id: "941773af-05a7-4685-a214-ef3fb6e4e2a1",
  //   title: "Elon Musk. Biografia twórcy PayPala, Tesli, SpaceX",
  //   author: "Vance Ashlee",
  //   description:
  //   "W zaktualizowanym wydaniu Ashlee Vance opisuje najnowsze dokonania Elona Muska i ujawnia jego plany na przyszłość. Steve Jobs chciał waszych pieniędzy. Mark Zuckerberg pragnie wam pomóc udostępnić zdjęcia bobasów. Elon Musk zamierza uratować świat przed zagładą. Wizjoner, geniusz, nieznośny szef, najbardziej zuchwały przedsiębiorca Doliny Krzemowej, jeden z najbogatszych ludzi na ziemi. Człowiek stawiany w jednym szeregu z Thomasem Edisonem, Henrym Fordem i Stevem Jobsem. Każdy start-up w jego rękach zmienia się w złoto.",
  //   isBorrowed: false,
  //   image:
  //     "https://ecsmedia.pl/c/elon-musk-biografia-tworcy-paypala-tesli-spacex-w-iext51085456.jpg",
  //   category: "Biografie",
  //   reservations:[] ,
  // popularity: 0,
    
  // })

  

  export {db , auth};
