import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'


const PreButton = (props) => {
    return (
        <TouchableOpacity style={{ ...styles.Button, backgroundColor: `${props.buttonColor}`, }} >
            <Image style={styles.Image} source={props.image} />
            <Text style={{ ...styles.ButtonText, color: `${props.color}` }}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    Button: {

        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        flexDirection: 'row',
        columnGap: 10,
        alignItems: 'center',
        shadowOffset: { width: -2, height: 4 },
        shadowColor: 'grey',
        elevation: 20,  
    },

    ButtonText: {
        color: 'white',
        paddingVertical: 19,
        fontSize: 22,
        fontWeight: '600',
    },

    Image: {
        width: 20,
        height: 20
    }
})

export default PreButton