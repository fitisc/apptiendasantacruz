import React from 'react';
import { View, Text, Button } from 'react-native';
import {styles} from './styles';

const CategoriesScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CategoriesScreen</Text>
            <Button style={styles.button}
            title="Ir a Productos"
            onPress={() => navigation.navigate("Products")}>
            </Button>
        </View>
    );
}

export default CategoriesScreen;
