import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={

    apiKey: "AIzaSyB2mmnFPceJox6eiIEn_vg5M5cXFKJryH8",
    authDomain: "crwn-db-a853d.firebaseapp.com",
    databaseURL: "https://crwn-db-a853d.firebaseio.com",
    projectId: "crwn-db-a853d",
    storageBucket: "crwn-db-a853d.appspot.com",
    messagingSenderId: "567993328244",
    appId: "1:567993328244:web:575fe26b0a446363a56721"
};


export const createUserProfileDocument= async (userAuth, additionalData)=>{
    if(!userAuth) return;
    //console.log(firestore.doc('users/128dahaah'));

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};


firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

