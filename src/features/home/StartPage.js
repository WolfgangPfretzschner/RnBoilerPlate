import React, {Component} from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {increaseCounter, decreaseCounter} from 'features/home/store/actions/counterAction';
import {useFirestoreConnect, isLoaded, isEmpty} from 'react-redux-firebase';
import firebaseService from 'app/services/firebaseService';

const Counter = () => {
  useFirestoreConnect(() => [
    {
      collection: 'counter',
      doc: 'rL78Gi6TXnJpwQtLzyzN',
    },
  ]);
  const counter = useSelector(state => state.counterReducer.counter);
  const count = useSelector(
    ({firestore: {ordered}}) =>
      ordered.counter && ordered.counter[0] && ordered.counter[0].count,
  );

  // const count = useSelector(state => state.firestore.ordered.count)

  const dispatch = useDispatch();

  if (!isLoaded(count)) {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <ActivityIndicator size="small" style={styles.indicator} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loggedInContainer}>
        {/* <Text style={styles.loggedInText}>Logged In: </Text> */}
        <Text style={styles.loggedInText}>{count}</Text>
      </View>
      <Text style={styles.counterTitle}>Counter</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={() => dispatch(increaseCounter())}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.counterText}>{counter}</Text>

        <TouchableOpacity onPress={() => dispatch(decreaseCounter())}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggedInContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  loginButton: {
    marginTop: 20,
    paddingTop: 20,
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggedInText: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '400',
    color: '#000',
  },
  counterTitle: {
    fontFamily: 'System',
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
  counterText: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '400',
    color: '#000',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 50,
    fontWeight: '300',
    color: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    // alignSelf: 'center',
  },
});

// Exports
export default Counter;
