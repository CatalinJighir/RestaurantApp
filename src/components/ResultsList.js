import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultsDetail from "./ResultsDetail";
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({ title, results }) => {

    if (!results.length) {
        return null;
    }

    const navigation = useNavigation();

    return <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
            horizontal={true}
            data={results}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('ResultsShow', {
                            id: item.id
                        });
                    }}>
                        <ResultsDetail
                            result={item}
                        />
                    </TouchableOpacity>
                )
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginBottom: 5
    }
});

export default ResultsList;