import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: "Friend #1" },
        { name: "Friend #2" },
        { name: "Friend #3" },
        { name: "Friend #4" },
        { name: "Friend #5" },
        { name: "Friend #6" },
        { name: "Friend #7" },
        { name: "Friend #8" },
        { name: "Friend #9" }
    ];

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textLine}>{item.name}</Text>
            }} />
    )
}

const styles = StyleSheet.create({
    textLine: {
        marginVertical: 50,
        marginHorizontal: 5
    }
})

export default ListScreen