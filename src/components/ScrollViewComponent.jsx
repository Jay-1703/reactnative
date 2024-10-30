import { Image, ScrollView, Text, View, Pressable } from "react-native"

const ScrollViewComponent = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ padding: 60 }}>
                <View style={{ height: 400 }}>
                    <Pressable onPress={() => console.log("Image click")} onLongPress={() => console.log("Long press done")} onPressIn={() => console.log("Press in")} onPressOut={() => console.log("Press out")}>
                        <Image source={{ uri: "https://picsum.photos/400/400" }} style={{ height: 200, width: 400 }} />
                    </Pressable>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores aperiam, dicta est dolor nihil expedita. Ullam at doloribus deleniti earum, maiores quidem minima maxime voluptas, dolor vel eligendi quam!
                    </Text>
                </View>

                <View style={{ height: 400 }}>
                    <Image source={{ uri: "https://picsum.photos/400/400" }} style={{ height: 200, width: 400 }} />
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores aperiam, dicta est dolor nihil expedita. Ullam at doloribus deleniti earum, maiores quidem minima maxime voluptas, dolor vel eligendi quam!
                    </Text>
                </View>

                <View style={{ height: 400 }}>
                    <Image source={{ uri: "https://picsum.photos/400/400" }} style={{ height: 200, width: 400 }} />
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores aperiam, dicta est dolor nihil expedita. Ullam at doloribus deleniti earum, maiores quidem minima maxime voluptas, dolor vel eligendi quam!
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ScrollViewComponent