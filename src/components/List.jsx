import React from 'react'
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const DATA = [
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
    {
        id: '3',
        title: 'Third Item',
    },
    {
        id: '4',
        title: 'Fourth Item',
    },
    {
        id: '5',
        title: 'Fifth Item',
    },
    {
        id: '6',
        title: 'Sixth Item',
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const List = () => {
    return (
        <SafeAreaView>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
                ListEmptyComponent={<Text>No data found!</Text>}
                // numColumns={1} // show num of colums
                // horizontal={true} // show horizontal
                // initialNumToRender={10}
                // initialScrollIndex={2}
                // inverted={true} // show reverse list
                // progressViewOffset={2}
                // refreshing={true}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding:10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
export default List