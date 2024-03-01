import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Home from '../screens/Home'
import ProductsByCategory from '../screens/ProductsByCategory'
import ProductsDetail from '../screens/ProductsDetail'

const Stack = createNativeStackNavigator()

const ShopStack = () => {
  return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={({route,navigation})=>{
                return {
                header: () =>{
                    return <Header 
                                navigation={navigation}
                                title={route.name === "Home" ? "Categorias":
                                        route.name ==="ProductsByCategory" ? route.params.categorySelected:
                                        "Detalle"
                }/>
                }
                }
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
            <Stack.Screen name="ProductsDetail" component={ProductsDetail} />
        </Stack.Navigator>
  )
}

export default ShopStack