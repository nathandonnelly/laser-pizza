import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Appbar, Surface, Text, TouchableRipple, useTheme } from 'react-native-paper'
import { APP_NAME } from '../../data/constants'
import Pizza from '../icons/Pizza'

const Header = (props) => {

  const Theme = useTheme();

  return (
    <SafeAreaView>
      <Appbar>
        <TouchableRipple
          style={[{ backgroundColor: Theme.colors.surface, borderRadius: "50%", elevation: 12, }]}
        >
          <Surface style={{padding: 10, borderRadius: "50%",}}>
            <Pizza height={25} width={25}/>
          </Surface>
        </TouchableRipple>
        <Appbar.Content title={APP_NAME} titleStyle={{textTransform: 'uppercase', letterSpacing: 2, fontWeight: "600",}} subtitle="like pizza, that you absorb like a laser" />
        <Appbar.Action icon="pizza" onPress={() => { props.navigation.toggleDrawer() }}/>
      </Appbar>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({})