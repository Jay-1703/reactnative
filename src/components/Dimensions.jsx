import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

const App = () => {
  // const [dimensions, setDimensions] = useState({
  //   window: Dimensions.get("window")
  // });

  // useEffect(() => {
  //   const response = Dimensions.addEventListener("change", ({ window }) => {
  //     setDimensions({ window });
  //   });
  //   return () => response?.remove();
  // }, []);

  // const windowWidth = dimensions.window.width;
  // const windowHeight = dimensions.window.height;

  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height

  return (
    <View style={styles.container}>
      <View
        style={{
          width: windowWidth > 500 ? 600 : 350,
          height: windowHeight > 500 ? 400 : 350,
          backgroundColor: "lightblue",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: windowWidth > 500 ? 40 : 30 }}>Welcome!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "plum",
  },
  box: {
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
