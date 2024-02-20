import { SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Home from './src/screens/Home'
import ProductsByCategory from './src/screens/ProductsByCategory'
import ProductsDetail from './src/screens/ProductsDetail'
import {useFonts} from "expo-font"
import { fontCollection } from './src/utils/globals/fonts'
import { StatusBar } from 'expo-status-bar'
import colors from './src/utils/globals/colors'




const App = () => {
  const [categorySelected,setCategorySelected] = useState("")
  const [productId,setProductId] = useState(0)
  const [fontsLoaded] = useFonts(fontCollection)
  const [portrait,setPortrait] = useState(true)
  const {width,height} = useWindowDimensions()
  useEffect(()=>{
    if(width > height) setPortrait(false) 
    else setPortrait(true)
  },[width,height])
  if(!fontsLoaded) return null

  const selectedCategoryState = (category) => {
    setCategorySelected(category)

  }
  const selectedProductId = (id) => {
    setProductId(id)
  }

  return (
    <>
    <StatusBar backgroundColor={colors.black} />
    <SafeAreaView style={styles.container}>
      {categorySelected ?
                productId ?
                  <ProductsDetail 
                    productId={productId}
                    portrait={portrait}
                     />
                  : 
                  <ProductsByCategory 
                    selectedProductId={selectedProductId} 
                    categorySelected={categorySelected}/>
                :
                <Home selectedCategoryState={selectedCategoryState}/>
                
      }
    </SafeAreaView>
  </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
