import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import Footer from '../layouts/Footer'

const LayoutTemplate = (props) => {

  const Theme = useTheme();

  return (
    <ScrollView contentContainerStyle={{backgroundColor: Theme.colors.background}}>
      {props.children}
      <Footer navigation={props.navigation} route={props.route} />
    </ScrollView>
  )
}

export default LayoutTemplate

const styles = StyleSheet.create({})