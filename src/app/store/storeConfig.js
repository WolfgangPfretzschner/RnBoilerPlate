import {createStore, applyMiddleware} from 'redux';
import rootReducer from 'app/reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import {getFirebase} from 'react-redux-firebase';
import {getFirestore, reduxFirestore} from 'redux-firestore';
import firebase from 'app/services/firebaseService/firebaseInit';
// import firebase from 'app/services/firebaseService/firebaseServiceConfig';

const initialState = {};

export const storeConfig = () => {
  const middlewares = [
    thunk.withExtraArgument({
      getFirebase,
      getFirestore,
    }),
  ];

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const composedEnhancer = composeWithDevTools(
    ...storeEnhancers,
    reduxFirestore(firebase),
  );

  const store = createStore(rootReducer, initialState, composedEnhancer);

  return store;
};
