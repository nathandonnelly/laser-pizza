import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { Drawer, Headline, Text, useTheme } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { updateToppings } from '../../redux/slices/appSlice' 
import Cheese from '../../components/icons/Cheese'
import Pepperoni from '../../components/icons/Pepperoni'
import GreenPeppers from '../../components/icons/GreenPeppers'
import Mushrooms from '../../components/icons/Mushrooms'
import Veggie from '../../components/icons/Veggie'
import Deluxe from '../../components/icons/Deluxe'
import Olives from '../../components/icons/Olives'
import Pineapple from '../../components/icons/Pineapple'
import Ham from '../../components/icons/Ham'
import Hawaiian from '../../components/icons/Hawaiian'

const MainDrawer = (props) => {

  const dispatch = useDispatch();
  const toppings = useSelector(state => state.app.toppings);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const Theme = useTheme();

  return (
    <View style={[styles.flexOne]}>
      <DrawerContentScrollView>
        <View style={{marginHorizontal: 10,}}>
          <Headline style={[styles.bold]}>Menu.</Headline>
        </View>
        <Drawer.Section>
          <Drawer.Item
            icon={() => (<Cheese width={20} height={20} />)}
            label="Cheese"
            onPress={() => {
              dispatch(updateToppings("cheese"))
              props.navigation.closeDrawer();
            }}
          />
          <Drawer.Item
            icon={() => (<Pepperoni width={20} height={20} />)}
            label="Pepperoni"
            onPress={() => {
              dispatch(updateToppings("pepperoni"));
              props.navigation.closeDrawer();
            }}
          />
          <Drawer.Item
            icon={() => (<GreenPeppers width={20} height={20} />)}
            label="Green Peppers"
            onPress={() => {
              dispatch(updateToppings("green-peppers"));
              props.navigation.closeDrawer();
            }}
          />
          <Drawer.Item
            icon={() => (<Mushrooms width={20} height={20} />)}
            label="Mushrooms"
            onPress={() => {
              dispatch(updateToppings("mushrooms"));
              props.navigation.closeDrawer();
            }}
          />
          <Drawer.Item
            icon={() => (<Veggie width={20} height={20} />)}
            label="Veggie"
            onPress={() => {
              dispatch(updateToppings("veggie"));
              props.navigation.closeDrawer();
            }}
          />
          <Drawer.Item
            icon={() => (<Deluxe width={20} height={20} />)}
            label="Deluxe"
            onPress={() => {
              dispatch(updateToppings("deluxe"));
              props.navigation.closeDrawer();
            }}
          />
          <Drawer.Item
            icon={() => (<Olives width={20} height={20} />)}
            label="Olives"
            onPress={() => {
              dispatch(updateToppings("olives"));
              props.navigation.closeDrawer();
            }}
          />
          <Drawer.Item
            icon={() => (<Pineapple width={20} height={20} />)}
            label="Pineapple"
            onPress={() => {
              dispatch(updateToppings("pineapple"));
              props.navigation.closeDrawer();
            }}
          />
          <Drawer.Item
            icon={() => (<Ham width={20} height={20} />)}
            label="Ham"
            onPress={() => {
              dispatch(updateToppings("ham"));
              props.navigation.closeDrawer();
            }}
          />
          <Drawer.Item
            icon={() => (<Hawaiian width={20} height={20} />)}
            label="Hawaiian"
            onPress={() => {
              dispatch(updateToppings("hawaiian"));
              props.navigation.closeDrawer();
            }}
          />
        </Drawer.Section>
        <Headline style={{fontWeight: "600", marginHorizontal: 20, textTransform: 'uppercase', textAlign: 'center', letterSpacing: 2,}}>
          Use at your own risk. This is experimental technology.
        </Headline>
      </DrawerContentScrollView>
      <SafeAreaView style={{bottom: 0, margin: 5,}}>
        <Text style={{fontSize: 8, textAlign: 'center', margin: 10,}}>be good, make good choices.</Text>
        <Text style={{fontSize: 8, textAlign: 'center',}}>A Diztro Application.</Text>
        <Text style={{fontSize: 8, textAlign: 'center',}}>© {currentYear} Nathan Donnelly Ventures</Text>
      </SafeAreaView>
    </View>
  )
}

export default MainDrawer

const styles = StyleSheet.create({
  bold: {
    fontWeight: "600",
  },
  flexOne: {
    flex: 1,
  },
})