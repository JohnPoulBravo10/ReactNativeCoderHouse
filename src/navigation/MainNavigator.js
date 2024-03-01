import { StyleSheet,View,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrdersStack from './OrdersStack'
import colors from '../utils/globals/colors';
import TabBarIcon from '../components/TabBarIcon';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
        <NavigationContainer>
           <Tab.Navigator
                initialRouteName='ShopStack'
                screenOptions={{
                    headerShown:false,
                    tabBarShowLabel:false,
                    tabBarStyle: styles.tabBar


                }}
           >
                <Tab.Screen 
                name='ShopStack'
                component={ShopStack}
                options={{
                    tabBarIcon: ({focused}) => 
                    <TabBarIcon title="Productos" nameIcon="home" focused={focused}/>
                }}
                />
                <Tab.Screen 
                    name='CartStack' 
                    component={CartStack}
                    options={{
                        tabBarIcon: ({focused}) => 
                        <TabBarIcon title="Carrito" nameIcon="shopping-cart" focused={focused}/>
                    }}

                />
                <Tab.Screen 
                    name='OrdersStack' 
                    component={OrdersStack}
                    options={{
                        tabBarIcon: ({focused}) => <TabBarIcon title="Ordenes" nameIcon="list" focused={focused}/>
                    }}
                    />
           </Tab.Navigator>
        </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:colors.black,
    }});