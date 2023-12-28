import React, { useState } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-basic-elements'

const Card = ({ item }) => {
    const [active, setActive] = useState(false)
    return (
        <View
            style={styles.Container}
        >
            <View
                style={styles.Row1}
            >
                <Image
                    source={item.Image}
                />
            </View>
            <View
                style={styles.Row2}
            >
                <TouchableOpacity
                    style={styles.HeartContainer}
                    onPress={() => {
                        setActive(!active)
                    }}
                >

                    <Icon
                        name='heart'
                        type='AntDesign'
                        size={17}
                        style={{
                            color: active ? 'red' : 'grey',
                        }}
                    />

                </TouchableOpacity>
            </View>
            <View
                style={styles.Row3}
            >
                <Text
                    style={styles.Title}
                >
                    {item.Title}
                </Text>
            </View>
            <View
                style={styles.Row4}
            >
                <Icon
                    name='location-pin'
                    type='Entypo'
                />
                <Text
                    style={styles.Text}
                >
                    {item.Location}
                </Text>
            </View>
            <View
                style={styles.Row5}
            >
                <Icon 
                    name='star'
                    type='Entypo'
                    color={'#FFC529'}
                />
                <Text
                    style={styles.Text}
                >
                    {item.Rating}
                </Text>
            </View>
            <View
                style={styles.Row6}
            >
                <Text
                    style={styles.Amount}
                >
                    {item.Amount}
                </Text>
                <Text
                    style={styles.perPlate}
                >
                    /per plate
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    Container: {
        width: "52%",
        marginVertical: 5
    },

    HeartContainer: {
        backgroundColor: "white",
        borderRadius: 25,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 105,
        left: 10

    },

    Title: {
        color: "#000",
        paddingVertical: 15,
        fontSize: 15,
        fontWeight: '700'
    },

    Row4: {
        flexDirection: 'row',
        columnGap: 10,
        alignItems: 'center',
        paddingBottom: 5
    },

    Row5: {
        flexDirection: 'row',
        columnGap: 10,
        alignItems: 'center'
    },

    Icon: {
        height: 15,
        width: 15
    },

    Text: {
        color: '#8C9099'
    },

    Row6:{
        flexDirection:'row',
        marginVertical:5,
        alignItems:'center'
    },

    Amount:{
        color:'#FE724C',
        fontSize: 17,
        fontWeight: '700'
    },

    perPlate:{
        color:'#8C9099'
    }
})

export default Card