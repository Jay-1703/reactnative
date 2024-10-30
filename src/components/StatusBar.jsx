import { StatusBar, View } from "react-native"

const StatusBarComponent = () => {
    return (
        <View style={{ flex: 1, padding: 40 }}>
            <StatusBar backgroundColor="lightgreen" barStyle="light-content" hidden/>
        </View>
    )
}

export default StatusBarComponent