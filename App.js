import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import IndexNavigation from './src/pages';

//REDUX IMPORTS
import { createStore, applyMiddleware, compose } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import reducers from './src/state/reducers';
import { watcherSaga } from "./src/state/actions";
import createSagaMiddleware from "redux-saga";

// REDUX INICIALIZACION
const sagaMiddleware = createSagaMiddleware();
// const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers,
  compose(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watcherSaga);
//END REDUX


export default function App() {
  return (
    <ReduxProvider store={store}>      

    <View style={styles.container}>
        <IndexNavigation/>
    </View>
    </ReduxProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
