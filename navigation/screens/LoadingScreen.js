import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Headline, Text, useTheme } from 'react-native-paper'
import Pepperoni from '../../components/icons/Pepperoni'

const LoadingScreen = (props) => {

  const Theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: Theme.colors.primary}]}>
      <Headline style={styles.headline}>Laser Pizza</Headline>
      <Pepperoni width={200} height={200}/>
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
  headline: {
    fontWeight: "600",
    fontSize: 30,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})