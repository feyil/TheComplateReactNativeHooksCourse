import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentScreen = () => {
    const myName = 'Furkan Emre'

    return (
        <View>
            <Text style={styles.titleText}>Gettting started with React Native!</Text>
            <Text style={styles.contentText}>My name is {myName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 45
    },
    contentText: {
        fontSize: 20
    }
})

export default ComponentScreen;