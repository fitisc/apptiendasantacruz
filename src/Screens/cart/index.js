import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { cart} from "../../data/cart";
import { CartItem } from "../../components/index";
import { styles } from "./styles";

const CartScreen = () => {

    const total = 1200;

    const onHandlerDeleteItem = (id) => {
        console.log(id);
    };
    

    const renderItem = ({ item }) => {
        return <CartItem item={item} onDelete={onHandlerDeleteItem} />;
};
    const onHandlerConfirmCart = () => {
        console.log("Confirmar compra");
};



    return (
        <View style={styles.container}>
            <View style={styles.cartList}>
                <FlatList
                data= {cart}
                renderItem= {renderItem}
                keyExtractor= {(item) => item.id}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonConfirm} onPress={onHandlerConfirmCart()}>
                    <Text style={styles.buttonText}>Confirmar compra</Text>
                    <View style={styles.containerTotal}>
                        <Text style={styles.totalTitle}>Total</Text>
                        <Text style={styles.total}>${total}</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default CartScreen;
