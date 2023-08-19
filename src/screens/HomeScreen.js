import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("Lists")}
        title="Go to Lists Demo"
      />
      <Button
        onPress={() => navigation.navigate("Images")}
        title="Go to ImagesScreen Demo"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to CounterScreen Demo"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to ColorScreen Demo"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to SquareScreen Demo"
      />
      <Button
        onPress={() => navigation.navigate("SquareReducers")}
        title="Go to SquareScreenReducers Demo"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
