import React from 'react'
import { StyleSheet, } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Header from '../components/layouts/Header'
import MainDrawer from '../navigation/drawers/MainDrawer'
import HomeScreen from '../navigation//screens/HomeScreen'

const AppNavigator = (props) => {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName='HomeScreen'
      drawerContent={(props) => (<MainDrawer navigation={props.navigation} route={props.route}/>)}
      screenOptions={{
        header: (props) => (
          <Header navigation={props.navigation} route={props.route} />
        )
      }}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{title: "Home"}} />
    </Drawer.Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})