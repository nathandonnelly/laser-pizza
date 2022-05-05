import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Appbar, Text } from 'react-native-paper'

const Header = (props) => {
  return (
    <SafeAreaView>
      <Appbar>
        <Appbar.Content title="Header" subtitle="Expo Boilerplate Application" />
      </Appbar>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({})