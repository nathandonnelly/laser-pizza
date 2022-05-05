import React, { useEffect } from 'react'
import { Appearance, } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import AppNavigator from './AppNavigator'
import { APP_NAME } from '../data/constants'
import LoadingScreen from '../navigation/screens/LoadingScreen'
import { updateIsLoading } from '../redux/slices/appSlice'
import { AppDarkTheme } from '../themes/AppDarkTheme'
import { AppDefaultTheme } from '../themes/AppDefaultTheme'


const AppContainer = (props) => {

  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.app.isLoading)

  // Handle links.
  const linking = {
    prefixes: [
      "diztro://",
      "https://diztro.com",
      "https://*.diztro.com",
    ],
    config: {
      screens: {
        HomeScreen: "/",
        LoadingScreen: "loading",
      },
    },
  };

  // Handle theme.
  const colorScheme = Appearance.getColorScheme()
  const handleTheme = () => {
    if (colorScheme === 'dark') {
      return AppDarkTheme
    } else {
      return AppDefaultTheme
    }
  }
  const theme = handleTheme();

  // Update isLoading
  useEffect(() => {
    dispatch(updateIsLoading(false))
    return () => { console.log("Clean up for app loading.") }
  }, [])

  if (isLoading === true){
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer
          theme={theme}
          linking={linking}
          fallback={<LoadingScreen />}
          documentTitle={{
            formatter: (options, route) =>
              `${options?.title ?? route?.name} - ${APP_NAME}`,
          }}
        >
          <LoadingScreen />
        </NavigationContainer>
      </PaperProvider>
    )
  } else return (
    <PaperProvider theme={theme}>
      <NavigationContainer
        theme={theme}
        linking={linking}
        fallback={<LoadingScreen />}
        documentTitle={{
          formatter: (options, route) =>
            `${options?.title ?? route?.name} - ${APP_NAME}`,
        }}
      >
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  )
}

export default AppContainer