import React from 'react';
import { View, Text, Button } from 'react-native';
import {styles} from './styles';

const ProductsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Products Screen</Text>
            <Button style={styles.button}
            title= "Ir a Detalle de Producto"
            onPress={() => navigation.navigate("ProductDetails")}>
            </Button>
        </View>
    );
};

export default ProductsScreen;