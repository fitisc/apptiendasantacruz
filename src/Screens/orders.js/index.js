import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const OrdersScreen = () => {
    return (
        <View style={styles.container}>
        <Text>OrdersScreen</Text>
        <TouchableOpacity>
            <Text>Go to OrdersScreen</Text>
        </TouchableOpacity>
        </View>
    );
    };

    export default OrdersScreen;