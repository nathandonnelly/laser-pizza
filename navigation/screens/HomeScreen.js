import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { useSelector } from 'react-redux'
import * as Linking from 'expo-linking'
import LayoutTemplate from '../../components/templates/LayoutTemplate'
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

const HomeScreen = (props) => {

  const toppings = useSelector(state => state.app.toppings);
  const [count, setCount] = useState(0);
  const pizzaHeight = 100;
  const pizzaWidth = 100;

  const returnPizza = () => {
    if (toppings === "pepperoni") {
      return <Pepperoni height={pizzaHeight} width={pizzaWidth} />
    }
    else if (toppings === "green-peppers") {
      return <GreenPeppers height={pizzaHeight} width={pizzaWidth}/>
    }
    else if (toppings === "cheese") {
      return <Cheese height={pizzaHeight} width={pizzaWidth}/>
    }
    else if (toppings === "mushrooms") {
      return <Mushrooms height={pizzaHeight} width={pizzaWidth}/>
    }
    else if (toppings === "veggie") {
      return <Veggie height={pizzaHeight} width={pizzaWidth}/>
    }
    else if (toppings === "deluxe") {
      return <Deluxe height={pizzaHeight} width={pizzaWidth}/>
    }
    else if (toppings === "olives") {
      return <Olives height={pizzaHeight} width={pizzaWidth}/>
    }
    else if (toppings === "pineapple") {
      return <Pineapple height={pizzaHeight} width={pizzaWidth}/>
    }
    else if (toppings === "ham") {
      return <Ham height={pizzaHeight} width={pizzaWidth}/>
    }
    else if (toppings === "hawaiian") {
      return <Hawaiian height={pizzaHeight} width={pizzaWidth}/>
    }
  }

  return (
    <LayoutTemplate>
      {
        count >= 1000000 ? (
          <View style={[styles.container]}>
            <Text style={{margin: 10,}}>yeehaw cowboy.</Text>
            <Button mode="contained" onPress={() => { Linking.openURL("https://www.dominos.com")}}>
              View Dominos Coupons
            </Button>
          </View>
        ) : (
          <View style={[styles.container]}>
            <View style={{margin: 10, marginBottom: 20,}}>
              {returnPizza()}
            </View>
            <Button mode="contained" onPress={() => { setCount(count + 1)}}>Launch Laser!</Button>
            <Text numberOfLines={100} style={{margin: 10,}}>you have absorbed {count.toString()} slices of pizza.</Text>
            <View style={{height: 75,}}></View>
          </View>
        )
      }
    </LayoutTemplate>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  flexOne: {
    flex: 1,
  },
})