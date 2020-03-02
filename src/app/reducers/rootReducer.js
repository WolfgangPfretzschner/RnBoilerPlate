// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
// import authReducer from './authReducer';
import counterReducer from 'features/home/homeReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

// Redux: Root Reducer
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  counterReducer: counterReducer
});
// Exports
export default rootReducer;
