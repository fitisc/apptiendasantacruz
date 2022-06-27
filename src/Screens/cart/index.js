import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const CartScreen = () => {
    return (
        <View style={styles.container}>
        <Text>Cart Screen</Text>
        <TouchableOpacity>
            <Text>Go to OrdersScreen</Text>
        </TouchableOpacity>
        </View>
    );
    };

    export default CartScreen;