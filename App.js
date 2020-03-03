import React from 'react';
import {Provider} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import StartPage from 'features/home/StartPage';
import {storeConfig} from 'app/store/storeConfig';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {createFirestoreInstance} from 'redux-firestore';
// import firebase from 'firebase/app';
import firebase from 'app/services/firebaseService/firebaseInit';


 
const store = storeConfig();

const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
  updateProfileOnLogin: false,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance: createFirestoreInstance,
};

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <View style={styles.container}>
            <StartPage />
          </View>
        </ReactReduxFirebaseProvider>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
