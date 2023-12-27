import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const HeaderLocation = () => {
    return (
        <View
            style={styles.Container} 
        >
            <View>
                <Image
                    style={styles.LeftImage}
                    source={require("../../../Assets/Image/CommonComponent/Header/location.png")}
                />
            </View>
            <View>
                <Text
                    style={styles.Text}
                >
                SaltLake sector-v kolkata-700157......
                </Text>
            </View>
            <View>
                <Image
                    style={styles.RightImage}
                    source={require("../../../Assets/Image/CommonComponent/Header/downArrow.png")} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',
        marginTop: 15,
        justifyContent:'space-between',
        shadowOffset: { width: -2, height: 4 },
        shadowColor: 'grey',
        elevation: 20,  
    },
    
    LeftImage:{
        height:20,
        width:20

    },

    Text:{
        color:"black",
        fontSize:15,
        fontWeight:'600'
    },

    RightImage:{
        height:20,
        width:20
    }
})

export default HeaderLocation