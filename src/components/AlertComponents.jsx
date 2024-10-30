import { Alert, Button, View } from "react-native"

const AlertComponents = () => {
    return (
        <View style={{ flex: 1, padding: 60 }}>
            <Button onPress={() => Alert.alert("Error", "Invalid data")} title="Alert" />
            <Button onPress={() => Alert.alert("Error", "Invalid data", [
                {
                    text: "Cancel",
                    onPress: () => console.log("cancel pressed....")
                },
                {
                    text: "Ok",
                    onPress: () => console.log("Ok pressed....")
                }
            ])} title="Alert" />
        </View>
    )
}

export default AlertComponents