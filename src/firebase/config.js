import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA59BQu37lZ1XPWhWb58BKXZJvO56cx-ks",
    authDomain: "financetracker-d42d3.firebaseapp.com",
    projectId: "financetracker-d42d3",
    storageBucket: "financetracker-d42d3.appspot.com",
    messagingSenderId: "105458903914",
    appId: "1:105458903914:web:43b5f1b3ff7130e93f1313"
  };


//initialize firebase

firebase.initializeApp(firebaseConfig)

//initialize service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
//projectAuth send requets on backend for authentication, when request reaches firebase it evaluates it once validate it authenticate user and create json token and send it to browser about this user.

//timestamp
const timestamp = firebase.firestore.Timestamp
 
export { projectFirestore,projectAuth,timestamp }