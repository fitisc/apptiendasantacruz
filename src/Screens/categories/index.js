import React from 'react';
import { View, FlatList } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { CategoryItem } from "../../components/index";
import { selectCategory } from '../../store/actions/category.actions';
import {styles} from './styles';

const CategoriesScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories);
 

    const onSelected = (item) => {
        dispatch(selectCategory(item.id));
        navigation.navigate("Products", { 
            title: item.title,
         });
    };

    const renderItem = ({item}) => (
        <CategoryItem item={item} onSelected={onSelected} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                />
        </View>
    );
};

export default CategoriesScreen;
