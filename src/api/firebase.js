// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,
onAuthStateChanged } from "firebase/auth";
import { get, getDatabase,ref,set,orderByChild,orderByKey,orderByValue, query, limitToLast, limitToFirst, equalTo } from "firebase/database";
import {v4 as uuid } from 'uuid';
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

  export async function addNewProduct(product,imageURL){
    const id=uuid();
    const date = new Date().getTime();
    return set(ref(database,`products/${id}`),{
      ...product,
      id,
      price:parseInt(product.price),
      image:imageURL,
      option:product.option.split(','),
      uploadingDate:date
    })
  }


  export async function getProducts(kind){
    return get(query(ref(database,'products'), orderByChild('uploadingDate'))).then(snapshot=>{
      if(snapshot.exists()){
        var result=[];
        
        snapshot.forEach((item)=>{
          if(item.val().category===kind || kind==="All"){
            const arrangedData = item.val();
            result.push(arrangedData);
          }
        });
        return Object.values(result.reverse()); //reverse한 이유는 갓 등록한 최신item 순으로 받아오려고! (최신일수록 숫자가 크니까)
      }

      return [];
    })
  }