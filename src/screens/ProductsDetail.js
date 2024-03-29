import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import productos from '../utils/data/productos.json'
import { useEffect, useState } from 'react'
import colors from '../utils/globals/colors'
import Counter from '../components/Counter'

const ProductsDetail = ({route}) => {
  const {productId} = route.params
  const [product,setProduct] = useState({})

  useEffect(()=>{
    const productFinded = productos.find(product => product.id === productId)
    setProduct(productFinded)
  },[productId])

  return (
    <View style={styles.container}>
    <View style={styles.content } >
        <Image
          style={styles.image}
          source={{uri:product?.images ? product.images[0] : null}}
          resizeMode='cover'
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>
        <View style={styles.containerPrice }>
          <Text style={styles.price}>$ {product.price}</Text>
          <Counter
            initialValue={1}
            product={product} 
            textButton="Carrito" />
        </View>
      </View>
    </View>
  )
}

export default ProductsDetail

const styles = StyleSheet.create({
  container:{
    width:"100%",
    flex:1,
    justifyContent:"start",
    alignItems:"center"
  },
  content:{
    width:"100%",
    flexDirection:'column',
    alignItems: "center",
    justifyContent: "space-between",
    flex:1,
    marginBottom: 30
  },

  image:{
    width:"100%",
    height:300,
  },
  containerText:{
    gap:25,
    paddingHorizontal:5,
    paddingVertical:25,
    flexDirection:"comlumn",
    justifyContent: "space-between",
    alignItems: "center",
  },

  containerPrice:{
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center",
      marginVertical:10,
  },
  title:{
    fontSize:20,
    fontWeight:"bold"
  },
  price:{
    fontSize:30
  },
})