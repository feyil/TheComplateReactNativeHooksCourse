import React, { useState, userState } from "react";
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [blue, setBlue] = useState(0)
    const [green, setGreen] = useState(0)

    const clampColor = (colorValue) => {
        if (colorValue > 255) {
            return 255
        }
        else if (colorValue < 0) {
            return 0
        }

        return colorValue
    }

    return (
        <View>
            <ColorCounter
                onIncrease={() => { setRed(clampColor(red + COLOR_INCREMENT)) }}
                onDecrease={() => { setRed(clampColor(red - COLOR_INCREMENT)) }}
                color="Red" />
            <ColorCounter
                onIncrease={() => { setBlue(clampColor(blue + COLOR_INCREMENT)) }}
                onDecrease={() => { setBlue(clampColor(blue - COLOR_INCREMENT)) }}
                color="Blue" />
            <ColorCounter
                onIncrease={() => { setGreen(clampColor(green + COLOR_INCREMENT)) }}
                onDecrease={() => { setGreen(clampColor(green - COLOR_INCREMENT)) }}
                color="Green" />

            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen