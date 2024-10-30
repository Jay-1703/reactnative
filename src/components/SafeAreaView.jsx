import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";

const App = () => {

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "lightblue",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.text}>Welcome!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "plum",
    ...Platform.select({      
      android: {
        marginTop:30,
      }
    })
  },
  box: {
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    ...Platform.select({
      ios: {
        fontSize: 20,
        color: "black",
      },
      android: {
        fontSize: 30,
        color: "blue",
      }
    })
  }
});

export default App;
