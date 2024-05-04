import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import GoBack from './GoBack'; 

const Details = ({ navigation, route }) => {

    const [fruitData, setFruitData] = useState([]);
    const fruitname = route.params.fruitname;
    const fruitImage = route.params.fruitImage;

    // const goBack = () => navigation.navigate('HomeScreen')

    // fetch garerw aba fruitData maa data aaucha
    // useEffect(() => {
    //     fetch(`https://www.fruityvice.com/api/fruit/${fruitname}`)
    //         .then(response => response.json())
    //         .then(data => setFruitData([data]));
    // }, []);

    const data = [
        {
            "name": "Apple",
            "id": 6,
            "family": "Rosaceae",
            "order": "Rosales",
            "genus": "Malus",
            "nutritions": {
              "calories": 52,
              "fat": 0.4,
              "sugar": 10.3,
              "carbohydrates": 11.4,
              "protein": 0.3
            }
        },
        {
            "name": "Mango",
            "id": 27,
            "family": "Anacardiaceae",
            "order": "Sapindales",
            "genus": "Mangifera",
            "nutritions": {
              "calories": 60,
              "fat": 0.38,
              "sugar": 13.7,
              "carbohydrates": 15,
              "protein": 0.82
            }
        },
        {
            "name": "Orange",
            "id": 2,
            "family": "Rutaceae",
            "order": "Sapindales",
            "genus": "Citrus",
            "nutritions": {
              "calories": 43,
              "fat": 0.2,
              "sugar": 8.2,
              "carbohydrates": 8.3,
              "protein": 1
            }
        }
    ]

    useEffect(() => {
        const fruit = data.find(item => item.name.toLowerCase() === fruitname.toLowerCase());
        if (fruit) {
            setFruitData([fruit]);
        }
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.detailDiv}>
            <Text style={styles.textStyle}>Fruit Name: {item.name}</Text>
            <Text style={styles.textStyle}>Belongs to the family: {item.family}</Text>
            <Text style={styles.textStyle}>Order of the fruit: {item.order}</Text>
            <Text style={styles.textStyle}>Genus: {item.genus}</Text>
            <Text style={styles.textStyle}>Calories: {item.nutritions.calories}</Text>
            <Text style={styles.textStyle}>Fat: {item.nutritions.fat}g</Text>
            <Text style={styles.textStyle}>Sugar: {item.nutritions.sugar}g</Text>
            <Text style={styles.textStyle}>Carbohydrates: {item.nutritions.carbohydrates}g</Text>
            <Text style={styles.textStyle}>Protein: {item.nutritions.protein}g</Text>
        </View>
    );

    return (
        <View>
            <Text style={styles.headingDiv}>Details of {fruitname}</Text>

            <View style={{ alignItems: 'center' }}>
                <Image source={{ uri: fruitImage }} style={styles.fruitStyle} />
            </View>

            <FlatList
                data={fruitData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />

            {/* <TouchableOpacity style={styles.buttonDiv} onPress={goBack}>
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity> */}

            <GoBack navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({

    headingDiv: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20
    },

    fruitStyle: {
        width: 200,
        height: 200,
        borderRadius: 20,
        marginVertical: 20
    },

    textStyle: {
        fontSize: 16,
        color: '#333',
        marginVertical: 5,
        textAlign: 'center'
    },

    detailDiv: {
        backgroundColor: '#d7f2d0',
        width: 300,
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 20
    }
});

export default Details;