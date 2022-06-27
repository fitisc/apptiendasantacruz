import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MainNavigator from "./main";
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import { colors } from "../constants/themes/colors";


const BottomTabs = createBottomTabNavigator(); 


const TabNavigator = () => {
    return (
        <BottomTabs.Navigator
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.black,
            }}
            >
            <BottomTabs.Screen
                name="ShopTab"
                component={MainNavigator}
                options={{
                    tabBarLabel: "Shop",
                    TabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "home" : "home-outline"} 
                            size={20}
                            color={focused ? colors.primary : colors.black}
                        />
                    ),
                }}
            />
            <BottomTabs.Screen
                name="CartTab"
                component={CartNavigator}
                options={{
                    tabBarLabel: "Cart",
                    TabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "cart" : "cart-outline"} 
                            size={20}
                            color={focused ? colors.primary : colors.black}
                        />
                    ),
                }}
            />
               <BottomTabs.Screen
                name="OrdersTab"
                component={OrdersNavigator}
                options={{
                    tabBarLabel: "Orders",
                    TabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "file-tray-full" : "file-tray-outline"} 
                            size={20}
                            color={focused ? colors.primary : colors.black}
                        />
                    ),
                }}
            />

        </BottomTabs.Navigator>
    );
            };

export default TabNavigator; 


