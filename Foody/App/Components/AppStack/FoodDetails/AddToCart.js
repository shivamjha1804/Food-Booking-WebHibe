import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const AddToCart = () => {
  return (
    <TouchableOpacity
        style={
            styles.Container
        }
    >
        <Text 
            style={
                styles.Text
            }
        >
            Add To Cart
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor:'#FE724C',
        paddingHorizontal: 42,
        paddingVertical: 20,
        marginVertical: 15,
        borderRadius:15
    },

    Text:{
        fontSize:17,
        fontWeight: '800',
        color:'#fff'
    }
})

export default AddToCart