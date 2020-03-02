
// firebase.initializeApp(firebaseConfig);

// const firestore = firebase.firestore();
// const storage = firebase.storage();
// const functions = firebase.functions();

// export default firebase;


// import firebase from 'firebase/app';
// import firebaseConfig from './firebaseServiceConfig';
// import 'firebase/auth';
// import 'firebase/database';
// import 'firebase/functions';
// import 'firebase/firestore';

// const config = firebaseConfig

// class FirebaseService {
// 	init(success) {
//     console.log("ENV=>",process.env.NODE_ENV)
// 		if (Object.entries(config).length === 0 && config.constructor === Object) {
// 			if (process.env.NODE_ENV === 'development') {
// 				console.log(
// 					'Missing Firebase Configuration at src/app/services/firebaseService/firebaseServiceConfig.js'
// 				);
// 			}
// 			success(false);
// 			return;
// 		}

// 		if (firebase.apps.length) {
//       // console.log('apps lenght',firebase.apps)
// 			return;
// 		}
// 		firebase.initializeApp(config);
// 		this.db = firebase.database();
// 		this.auth = firebase.auth();
// 		this.functions = firebase.functions();
// 		this.auth = firebase.firestore();
//     console.log('firebase at init',firebase)
// 		success(true);
//   }
  
//   start = () => {
//     return firebase
//   }

// 	getUserData = userId => {
// 		if (!firebase.apps.length) {
// 			return false;
// 		}
// 		return new Promise((resolve, reject) => {
// 			this.db
// 				.ref(`users/${userId}`)
// 				.once('value')
// 				.then(snapshot => {
// 					const user = snapshot.val();
// 					resolve(user);
// 				});
// 		});
// 	};

// 	updateUserData = user => {
// 		if (!firebase.apps.length) {
// 			return false;
// 		}
// 		return this.db.ref(`users/${user.uid}`).set(user);
// 	};

// 	onAuthStateChanged = callback => {
// 		if (!this.auth) {
// 			return;
// 		}
// 		this.auth.onAuthStateChanged(callback);
// 	};

// 	signOut = () => {
// 		if (!this.auth) {
// 			return;
// 		}
// 		this.auth.signOut();
// 	};
// }

// const instance = new FirebaseService;
// // const test = instance()
// export default instance;
