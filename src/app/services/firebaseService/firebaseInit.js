import firebaseConfig from 'app/services/firebaseService/firebaseServiceConfig';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
