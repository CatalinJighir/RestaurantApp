import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {

    const [result, setResult] = useState(null);

    console.log(result);

    const { id } = route.params;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);


    if (!result) {
        return null;
    }

    return <View>
        <Text>{result?.name}</Text>
        <FlatList
            data={result?.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image
                    style={styles.imageStyle}
                    source={{ uri: item }}
                />
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 150
    }
});

export default ResultsShowScreen;