import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Explorer() {
    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Ex. Apple" 
                />
                <TouchableOpacity style={styles.searchButton}>
                    <Text style={styles.searchButtonText}>🔍</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '90%',
        height: '20%'
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
        padding: 10,
        width: '80%',
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    searchButton: {
        marginLeft: 10,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#ff3b30',
    },
    searchButtonText: {
        color: 'white',
        fontSize: 18,
    },
});
