import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput
            placeholder="Search"
            style={styles.inputStyle}
            value={term}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}

        />
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'lightgrey',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 18,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;