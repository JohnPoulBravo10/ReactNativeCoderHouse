import { StyleSheet, Text, View,FlatList } from 'react-native'
import categories from '../utils/data/categories.json'
import CardCategory from './CardCategory'
import colors from '../utils/globals/colors'

const Categories = ({navigation}) => {
  return (
    <FlatList
    style={styles.container}
    data={categories}
    keyExtractor={item => item}
    renderItem={({item})=> <CardCategory item={item} navigation={navigation}/>}
    />
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white
    }
})