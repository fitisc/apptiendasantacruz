import React from 'react';
import { View, Text } from 'react-native';
import { products } from '../../data/products';

import {styles} from './styles';

const ProductDetailsScreen = ({route}) => {
    const {productId} = route.params;
    const product = products.find(product => product.id === productId);
    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.text}>id:{product.id}</Text>
                <Text style={styles.text}>Nombre:{product.name}</Text>
                <Text style={styles.text}>Descripción:{product.description}</Text>
                <Text style={styles.text}>Peso:{product.weight}</Text>
                <Text style={styles.text}>Precio:${product.price.toLocaleString("es-US")}</Text>
          </View>
        </View>
    );
};

export default ProductDetailsScreen;