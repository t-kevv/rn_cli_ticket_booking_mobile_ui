import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Splash, Onboarding, Getstarted, Signin, Signup, Emailverification, Forgotpassword, Resetpassword, Details, Home } from "./src/screens"
import Tabnavigators from './src/navigators/Tabnavigators';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}>

          <Stack.Screen name="Tab" component={Tabnavigators} options={{ animation: 'default' }} />


          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Onboarding" component={Onboarding} options={{ animation: 'slide_from_right' }} />
          {/* <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: true }} /> */}
          <Stack.Screen name="Getstarted" component={Getstarted} options={{ animation: 'slide_from_bottom' }} />

          

          <Stack.Screen name="Signin" component={Signin} options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name="Signup" component={Signup} options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name="Emailverication" component={Emailverification} options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name="Forgotpassword" component={Forgotpassword} options={{ animation: 'slide_from_left' }} />
          <Stack.Screen name="Resetpassword" component={Resetpassword} options={{ animation: 'slide_from_right' }} />

          <Stack.Screen name="Details" component={Details} options={{ animation: 'slide_from_bottom' }} />
         



        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})

export default App

