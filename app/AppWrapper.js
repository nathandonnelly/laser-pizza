import '../config/firebase.config';
import React from 'react'
import { decode, encode } from "base-64";
import { Provider as StoreProvider } from 'react-redux'
import AppContainer from './AppContainer'
import store from '../redux/stores/store'

const AppWrapper = (props) => {
  // Base 64 Imports for Axios Bug Fix.
  if (!global.btoa) {
    global.btoa = encode;
  }
  if (!global.atob) {
    global.atob = decode;
  }
  
  return (
    <StoreProvider store={store}>
      <AppContainer />
    </StoreProvider>
  )
}

export default AppWrapper