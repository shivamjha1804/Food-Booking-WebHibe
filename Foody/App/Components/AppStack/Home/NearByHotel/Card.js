import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-basic-elements'


const Card = ({item, ...props}) => {
    const [active, setActive] = useState(false)
    return (
        <TouchableOpacity
            onPress={() => {
                if(props.onPress){
                    props.onPress()
                }
            }}
        >
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
                        {/* <View
                        style={styles.HeartContainer}
                    >
                        <Image
                            style={styles.Heart}
                            source={require("../../../../Assets/Image/AppStack/Home/NearByHotel/heart.png")}
                        />

                        <Image
                            
                            style={[styles.RedHeart,{
                                opacity:active ? 1:0
                            }]}
                            source={require("../../../../Assets/Image/AppStack/Home/NearByHotel/redHeart.png")}
                        />
                    </View> */}
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
                    <Image
                        style={styles.Icon}
                        source={require("../../../../Assets/Image/AppStack/Home/NearByHotel/location.png")}
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
                    <Image
                        style={styles.Icon}
                        source={require("../../../../Assets/Image/AppStack/Home/NearByHotel/star.png")}
                    />
                    <Text
                        style={styles.Text}
                    >
                        {item.Rating}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginLeft: 12
    },

    HeartContainer: {
        backgroundColor: "white",
        borderRadius: 25,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 120,
        left: 10

    },

    // Heart: {
    //     height: 15,
    //     width: 15
    // },

    // RedHeart: {
    //     height: 25,
    //     width: 25,
    //     position: 'absolute',
    //     opacity: 0
    // },

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
    }
})

export default Card