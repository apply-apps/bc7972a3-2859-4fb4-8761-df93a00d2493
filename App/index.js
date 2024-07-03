// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const tales = [
        { id: '1', title: 'Cinderella' },
        { id: '2', title: 'Snow White' },
        { id: '3', title: 'Beauty and the Beast' }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Fairy Tales</Text>
            <View style={styles.list}>
                {tales.map((tale) => (
                    <TouchableOpacity
                        key={tale.id}
                        style={styles.item}
                        onPress={() => navigation.navigate('Tale', { title: tale.title })}
                    >
                        <Text style={styles.itemText}>{tale.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
};

const TaleScreen = ({ route }) => {
    const { title } = route.params;

    const talesContent = {
        'Cinderella': 'Once upon a time, there was a girl named Cinderella...',
        'Snow White': 'Once upon a time, there was a princess named Snow White...',
        'Beauty and the Beast': 'Once upon a time, there was a prince who was turned into a beast...'
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.content}>{talesContent[title]}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Tale" component={TaleScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    list: {
        flex: 1,
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    itemText: {
        fontSize: 18,
    },
    contentContainer: {
        paddingVertical: 20,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
    },
});