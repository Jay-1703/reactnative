import React, { useEffect, useState } from "react";
import PlanComponent from "./src/components/PlanComponent";
import ImageComponent from "./src/components/Image";
import ScrollViewComponent from "./src/components/ScrollViewComponent";
import ModalComponent from "./src/components/ModelComponent";
import StatusBarComponent from "./src/components/StatusBar";
import AlertComponents from "./src/components/AlertComponents";
import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import BoxComponent from "./src/components/BoxComponent";

const App = () => {
  const [text, setText] = useState("")
  const [mode, setMode] = useState(false)

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} style={styles.safeContainer}>
      <View style={{ height: 200 }}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Enter name"
        // autoCorrect={false}
        // autoCapitalize="none"
        // secureTextEntry
        // keyboardType="name-phone-pad"
        />
        <TextInput
          style={styles.miltilineInput}
          value={text}
          onChangeText={setText}
          placeholder="Multiline"
          multiline
        />
        <Text style={styles.text}>Hello , {text} !</Text>
      </View>

      <View style={{ display: "flex", justifyContent: "flex-start" }}>
        <Switch value={mode} onValueChange={() => setMode(!mode)} trackColor={{ false: "#000000", true: "red" }} thumbColor="blue" />
      </View>
    </KeyboardAvoidingView>
  )
}



const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    // backgroundColor: "plum",
    marginTop: StatusBar.currentHeight
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  },
  input: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    // padding: 10,
    margin: 10,
    marginTop: 270
  },
  miltilineInput: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    // padding: 10,
    margin: 10,
    minHeight: 110,
    textAlignVertical: "top"
  }
})
export default App;

