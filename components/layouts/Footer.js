import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'

const Footer = (props) => {

  const Theme = useTheme();

  return (
    <View style={{backgroundColor: Theme.colors.primary, padding: 10,}}>
      <Text style={[{ fontSize: 7, textAlign: 'center', textTransform: 'uppercase', letterSpacing: 2,}]}>
        The Only App That Lets You Absorb Pizza Like a Laser!
      </Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({})