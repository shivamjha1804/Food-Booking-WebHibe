import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Tag = ( {items} ) => {
  return (
    <SafeAreaView>
        <View
            style={styles.Container}
        >
            <Text 
                style={styles.Text}
            >
                {items.TagName}
            </Text>
        </View>
    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
    Container:{
        paddingHorizontal: 25,
        paddingVertical: 5,
        backgroundColor:'#e5e4e2',
        borderRadius: 15,
        marginHorizontal: 2
    },

    Text:{
        color:'#000'
    }
})

export default Tag