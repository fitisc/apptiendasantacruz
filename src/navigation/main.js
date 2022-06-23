import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesScreen, ProductsScreen, ProductDetailsScreen } from "../screens/Index";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigator;