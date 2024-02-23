import { SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Home from './src/screens/Home'
import {useFonts} from "expo-font"
import { fontCollection } from './src/utils/globals/fonts'
import { StatusBar } from 'expo-status-bar'
import colors from './src/utils/globals/colors'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsByCategory from './src/screens/ProductsByCategory'
import ProductsDetail from "./src/screens/ProductsDetail"
import Header from './src/components/Header'


const Stack = createNativeStackNavigator();


const App = () => {
  const [fontsLoaded] = useFonts(fontCollection)
  
  
 

  if(!fontsLoaded) return null

  

  return (
    <>
    <StatusBar backgroundColor={colors.black} />
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
      screenOptions={
        ({route})=>{
          return{
            header: () => {
              return <Header />
            }
          }
        }
      }
      >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='ProductsByCategory' component={ProductsByCategory}/>
        <Stack.Screen name='ProductsDetail' component={ProductsDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
