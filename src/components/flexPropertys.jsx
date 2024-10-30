import React from "react";
import PlanComponent from "./src/components/PlanComponent";
import ImageComponent from "./src/components/Image";
import ScrollViewComponent from "./src/components/ScrollViewComponent";
import ModalComponent from "./src/components/ModelComponent";
import StatusBarComponent from "./src/components/StatusBar";
import AlertComponents from "./src/components/AlertComponents";
import { StyleSheet, View } from "react-native";
import BoxComponent from "./src/components/BoxComponent";

const App = () => {
  return (
    <View style={styles.container}>
      <BoxComponent style={{ backgroundColor: '#15803d' }}>Box1</BoxComponent>
      <BoxComponent style={{ backgroundColor: '#fbbf24' }}>Box2</BoxComponent>
      <BoxComponent style={{ backgroundColor: '#78716c' }}>Box3</BoxComponent>
      <BoxComponent style={{ backgroundColor: '#65a30d' }}>Box4</BoxComponent>
      <BoxComponent style={{ backgroundColor: '#475569' }}>Box5</BoxComponent>
      <BoxComponent style={{ backgroundColor: '#2563eb' }}>Box6</BoxComponent>
      <BoxComponent style={{ backgroundColor: '#a855f7' }}>Box7</BoxComponent>

      {/* <BoxComponent style={{ backgroundColor: '#65a30d',flexGrow:1 }}>Box4</BoxComponent> */}
      {/* <BoxComponent style={{ backgroundColor: '#15803d',flexShrink:1 }}>Box 1 shrink</BoxComponent>
      <BoxComponent style={{ backgroundColor: '#fbbf24',flexShrink:1 }}>Box 2 shrink</BoxComponent>
      <BoxComponent style={{ backgroundColor: '#78716c',flexShrink:1 }}>Box 3 shrink</BoxComponent> */}
      {/* <PlanComponent />       */}
      {/* <ImageComponent/> */}
      {/* <ScrollViewComponent/> */}
      {/* <ModalComponent/> */}
      {/* <StatusBarComponent/> */}
      {/* <AlertComponents/> */}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:"space-between",
    // height:300,
    // flexDirection:"row",
    // flexWrap:"wrap",
    // alignContent:"stretch",
    // gap:10,    
    marginTop: 60,
    borderWidth: 6,
    borderColor: "red"
  }
})
export default App;

