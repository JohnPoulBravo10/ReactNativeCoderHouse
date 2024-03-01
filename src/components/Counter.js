import { StyleSheet, View, Pressable,Text } from 'react-native'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../features/cart/cartSlice'
import colors from '../utils/globals/colors'

const Counter = ({initialValue,textButton,product}) => {

    const [count,setCount] = useState(initialValue)
    const dispatch = useDispatch()

    const handlerAddCartItem = (quantity) => {
      dispatch(addCartItem({...product,quantity}))
      setCount(1)
    }

  return (
    <View style={styles.counterContainer}>
         <Pressable style={styles.boton} onPress={()=> setCount(count + 1) }>
            <Text style={styles.botonText}>+</Text>
          </Pressable>
            <Text style={styles.botonText}>{count}</Text>
          <Pressable style={styles.boton} onPress={ ()=> setCount(count - 1) }>
            <Text style={styles.botonText}>-</Text>
          </Pressable>
          <Pressable style={styles.boton} onPress={()=>handlerAddCartItem(count)}>
            <Text style={styles.botonText}>Agregar Carrito</Text>
          </Pressable>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    counterContainer:{
        width:200,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        margin:10,
      },
      botonText:{
        width:50,
        textAlign:"center",
      }
})