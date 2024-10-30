import { View, Image, ImageBackground, Text } from "react-native"

const logo = require("../../assets/icon.png")
const ImageComponent = () => {
    return (
        <ImageBackground source={{ uri: "https://picsum.photos/400/400" }} style={{ flex: 1 }}>
            <View style={{ height: 300 }}>
                {/* <Image source={{ uri: "https://picsum.photos/200/300" }} style={{ height: 300, width: 'full' }} /> */}
                <Text>Image</Text>
            </View>
        </ImageBackground>
    )
}

export default ImageComponent