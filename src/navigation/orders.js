import React from "react";
import {Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesScreen, ProductsScreen, ProductDetailsScreen } from "../Screens/Index.js";
import {colors} from "../constants/themes/colors";

const Stack = createNativeStackNavigator();
const isIOS = Platform.OS === "ios";

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Orders"
            screenOptions={{
            headerStyle: {
                backgroundColor: isIOS ? colors.secondary : colors.primary,},
            headerTintColor: isIOS ? colors.black : colors.white,
            headerTitleStyle: {fontFamily: "OpenSans-Bold", fontSize: 20},
            }}>
            <Stack.Screen 
            name="Orders" 
            component={CategoriesScreen}
            options={{
                title: "Categories",

                
            }}
           
            />
        </Stack.Navigator>
    );
};

export default OrdersNavigator;