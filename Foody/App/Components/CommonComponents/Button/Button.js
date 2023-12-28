import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Button = (props) => {
    
    return (
        <View>
            <TouchableOpacity style={{...styles.Button, backgroundColor:`${props.buttonColor}`, }} 
                onPress={() => {
                    // navigation.navigate(`${props.page}`)
                    if(props.onPress){
                        props.onPress()
                    }
                }}
            >
                <Text style={styles.ButtonText}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Button: {
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 15
    },

    ButtonText: {
        color: 'white',
        paddingVertical: 20,
        fontSize: 22,
        fontWeight:'600',

    }
})

export default Button