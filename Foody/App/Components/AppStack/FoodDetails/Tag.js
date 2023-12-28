import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Tag = () => {
  return (
    <SafeAreaView>
        <View
            style={styles.Container}
        >
            <Text 
                style={styles.Text}
            >
                Chicken
            </Text>
        </View>
    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
    Container:{
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor:'#e5e4e2',
        borderRadius: 15,
        marginLeft: 10
    },

    Text:{
        color:'#000'
    }
})

export default Tag