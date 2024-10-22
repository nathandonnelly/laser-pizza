import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, } from 'react-native'
import { useTheme } from 'react-native-paper'
import Footer from '../layouts/Footer'

const LayoutTemplate = (props) => {

  const Theme = useTheme();

  return (
    <ScrollView contentContainerStyle={[styles.flexOne, {backgroundColor: Theme.colors.background}]}>
      <ImageBackground
        source={{uri: require('../../assets/images/backgrounds/background-pepperoni-pizza.jpg')}}
        style={{
          flex: 1,
          width: "100%",
        }}
        imageStyle={{
          opacity: .075,
        }}
      >
        {props.children}
      </ImageBackground>
      <Footer navigation={props.navigation} route={props.route} />
    </ScrollView>
  )
}

export default LayoutTemplate

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
})