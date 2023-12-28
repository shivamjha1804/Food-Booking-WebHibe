import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-basic-elements'
import NavigationService from '../../../Services/Navigation'


const Header = (props) => {
    return (
        <View
            style={styles.Container}
        >
            <TouchableOpacity
                onPress={() => {
                    NavigationService.back();
                }}
            >
                <View
                    style={styles.Row1}
                >
                    <Icon
                        name='arrowleft'
                        type='AntDesign'
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    if(props.onPress){
                        props.onPress()
                    }
                }}
            >
                <View
                    style={styles.Row2}
                >
                    <Icon
                        name='dots-three-vertical'
                        type='Entypo'
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
    },

    Row1: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 40
    },

    Row2: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 40

    }
})

export default Header