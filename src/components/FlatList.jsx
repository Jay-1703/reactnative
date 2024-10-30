import React, { useEffect, useState } from "react";
import { FlatList, Platform, SafeAreaView, StyleSheet, Text, useWindowDimensions, View } from "react-native";

const FlatListComponent = () => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();
    setComments(data.slice(0, 20))
  }

  const width = useWindowDimensions().width
  const height = useWindowDimensions().height

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={comments}
        renderItem={({ item }) => {
          return (
            <View style={styles.card} key={item.id}>
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                {item.email}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                {item.body}
              </Text>
            </View>
          )
        }}
        ListEmptyComponent={<Text>No data found!</Text>}
        ListHeaderComponent={<Text>This is Header</Text>}
        ListFooterComponent={<Text>This is footer</Text>}
        ItemSeparatorComponent={<Text>Ok</Text>}
      // horizontal={true}
      />
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
    ...Platform.select({
      android: {
        marginTop: 30,
      }
    })
  },
  card: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    padding: 5,
    marginHorizontal: 20,    
    marginVertical:10,
  },
  textEmail: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textBody: {
    fontSize: 20,
  }
})
export default FlatListComponent;

