// Increase Counter

// export const increaseCounter = () => ({
//   type: 'INCREASE_COUNTER',
// });
// Decrease Counter
// export const decreaseCounter = () => ({
//   type: 'DECREASE_COUNTER',
// });

export const increaseCounter = () => async (
  dispatch,
  getState,
  {getFirebase, getFirestore},
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const user = firebase.auth().currentUser;
  let value = getState().firestore.ordered.counter[0].count
  value = parseInt(value,10) +1
  try {
    await firestore.set(`counter/rL78Gi6TXnJpwQtLzyzN`, {count: value});
    dispatch({type: 'INCREASE_COUNTER'});
  } catch (error) {
    console.log(
      '%cError getPaginatedOrders',
      'color:red;font-size:14px',
      error,
    );
    throw error;
  }
};
export const decreaseCounter = () => async (
  dispatch,
  getState,
  {getFirebase, getFirestore},
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  // const user = firebase.auth().currentUser;
  let value = getState().firestore.ordered.counter[0].count;
  value = parseInt(value, 10) - 1;
  try {
    await firestore.set(`counter/rL78Gi6TXnJpwQtLzyzN`, {count: value});
    dispatch({type: 'DECREASE_COUNTER'});
  } catch (error) {
    console.log(
      '%cError getPaginatedOrders',
      'color:red;font-size:14px',
      error,
    );
    throw error;
  }
};
