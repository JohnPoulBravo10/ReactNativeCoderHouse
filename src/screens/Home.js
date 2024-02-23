import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/globals/colors'
import Categories from '../components/Categories'
import Header from '../components/Header'

const Home = ({navigation}) => {
  return (
    <>
    <Categories navigation={navigation}/>
</>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.black,
        flex: 1
        },
    text:{
        color: colors.white
    }
})