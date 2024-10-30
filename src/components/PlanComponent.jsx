import React from "react";
import { ActivityIndicator, Alert, Button, StyleSheet, Text, View } from "react-native";
import List from "./List";
import { useNavigation } from "@react-navigation/native";

const PlanComponent = ({ navigation }) => { 
  // const navigation = useNavigation()
  return (
    <View style={[styles.container, styles.horizontal]}>
      <Text style={styles.text}>Hello , Welcome to React native !</Text>
      {/* <View style={[styles.box, styles.boxShadowIos]}>
        <Text style={styles.text}>Hello , Welcome to React native !</Text>
      </View>
      <View style={[styles.box, styles.boxShadowAndroid]}>
        <Text style={styles.text}>Hello , Welcome to React native !</Text>
      </View> */}
      {/* <ActivityIndicator size={50} />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" animating={false} />
      <Button
        onPress={() => Alert.alert('Simple Button pressed')}
        title="Learn More"
        color="#007AFF"
        accessibilityLabel="Learn more about this purple button"
      />
      <List /> */}
      <Button
        // onPress={() => Alert.alert('Simple Button pressed')}
        onPress={() => navigation.navigate("ImageComponent")}
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
    // margin: 100,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    width: "60%",
    height: "10%",
    // backgroundColor: 'black',
    padding: 20,
    // borderRadius: 100,
    // borderColor: 'yellow',
    // borderWidth: 2,
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  boxShadowIos: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  boxShadowAndroid: {
    shadowColor: "#000000",
    elevation: 2,
  }
})

export default PlanComponent;

