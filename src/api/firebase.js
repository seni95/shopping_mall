// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,
onAuthStateChanged } from "firebase/auth";
import { get, getDatabase,ref } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth();
const provider = new GoogleAuthProvider();

const database = getDatabase(app);

  export async function login(){
    return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // ...
      return user;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  
  }

  export async function logout(){
    return signOut(auth).then(()=>null);
  
  }

  export function onUserStateChange(callback){
    onAuthStateChanged(auth, async (user) => {
        if (user) {
          const updatedUser = await adminUser(user);
          console.log(user);
          callback(updatedUser)
        } else {
          // User is signed out
          // ...
        }
      });
  }

  async function adminUser(user){
    return get(ref(database,'admins')) //
    .then((snapshot)=>{
      if(snapshot.exists()){
        const admins=snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return {...user, isAdmin};
      }

      return user;
    })
  }