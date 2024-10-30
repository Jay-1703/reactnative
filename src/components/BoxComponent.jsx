import { StyleSheet, Text, View } from "react-native"

const BoxComponent = ({ children, style }) => {
    return (
        <View style={[styles.box, style]}>
            <Text style={styles.textColor}>
                {children}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    box: {
        backgroundColor: "#ffffff",
        padding: 20
    },
    textColor: {
        fontSize: 24,
        color: "#ffffff"
    }
})
export default BoxComponent