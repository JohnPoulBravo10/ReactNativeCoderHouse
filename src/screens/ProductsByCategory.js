import { FlatList, StyleSheet, Text, View } from 'react-native'
import productos from '../utils/data/productos.json'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory'
import Search from '../components/Search'
import colors from '../utils/globals/colors'

const ProductsByCategory = ({route,navigation}) => {
  const {categorySelected} = route.params
  const [productsFiltered,setProductsFiltered] = useState([])
  const [keyword,setKeyword] = useState("")

  const handlerKeyword = (k) => {
    setKeyword(k)
  }
  useEffect(()=>{
   if(categorySelected)  setProductsFiltered(productos.filter(product => product.category === categorySelected))
   if(keyword) setProductsFiltered(productsFiltered.filter(product => {
    const productTitleLower = product.title.toLowerCase()
    const keywordLower = keyword.toLowerCase()
    return productTitleLower.includes(keywordLower)
  }))
  },[categorySelected,keyword])


  return (
    <View style={styles.container}>
        <Search handlerKeyword={handlerKeyword}/>
        <FlatList
          data={productsFiltered}
          keyExtractor={item => item.id}
          renderItem={({item})=> <ProductByCategory item={item} navigation={navigation}/>}
        />
    </View>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.black,
    flex: 1
  }
})