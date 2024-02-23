import { Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const CardCategory = ({item,navigation}) => {
  return (
    <Pressable  style={styles.container} onPress={()=>navigation.navigate("ProductsByCategory",{categorySelected:item})}>
          <Text style={styles.text}>{item}</Text>
    </Pressable>
  )
}

export default CardCategory

const styles = StyleSheet.create({
    container:{
        width:"80%",
        backgroundColor:colors.black,
        marginHorizontal:"10%",
        marginVertical:10,
        padding:20,
        alignItems:"center",
        borderRadius:5
    },
    text:{
        fontSize:16,
        fontFamily:fonts.PlayfairDisplayRegular,
        color: colors.white
    }
})