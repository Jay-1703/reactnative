import React, { useLayoutEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";

const About = ({ route, navigation }) => {
    // const navigation = useNavigation()
    const { name } = route.params

    useLayoutEffect(() => {
        navigation.setOptions({
            title: name
        })
    }, [navigation, name])
    return (
        <View style={[styles.container]}>
            <Text style={styles.text}>Hello , {name} Welcome to About Page !</Text>
            <Button
                // onPress={() => Alert.alert('Simple Button pressed')}
                onPress={() => navigation.setParams({ name: "Jay" })}
                title="Set Data"
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

export default About