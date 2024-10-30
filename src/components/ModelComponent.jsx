import { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'

const ModalComponent = () => {
    const [model, setModel] = useState(false)
    return (
        <View style={{ flex: 1, padding: 40 }}>
            <Button
                title='Open model'
                onPress={() => setModel(true)}
            />
            <Modal visible={model} onRequestClose={() => setModel(false)} animationType='fade' presentationStyle='pageSheet' style={{ height: 300, width: 400 }}>
                <View style={{ flex: 1, backgroundColor: "lightblue", padding: 20 }}>
                    <Text>This is model component</Text>
                    <Button title='Close' onPress={() => setModel(false)} />
                </View>
            </Modal>
        </View>
    )
}

export default ModalComponent