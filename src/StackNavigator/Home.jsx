import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";

const Home = ({ navigation }) => {
    // const navigation = useNavigation()

    return (
        <View style={[styles.container]}>
            <Text style={styles.text}>Hello , Welcome to React native !</Text>
            <Button
                // onPress={() => Alert.alert('Simple Button pressed')}
                onPress={() => navigation.navigate("About")}
                title="About page"
                color="#007AFF"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})

export default Home