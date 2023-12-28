import {
    StyleSheet,
    Text,
    View,
    StatusBar as RNStatusBar,
    TouchableOpacity,
    Dimensions,
    Image,
} from 'react-native';
import React, { useState } from 'react';
import {
    Container,
    Icon,
    StatusBar,
} from 'react-native-basic-elements';
import NavigationService from '../../../Service/Navigation';


const { height, width } = Dimensions.get('screen');

const DrawerContainer = () => {
    const data = [
        {
            icon: <Icon
                name="notifications"
                type="Ionicon"
                size={25}
            />,
            title: 'Page1',
            click: 'Page1',
        },
        {
            icon: <Icon
                name="heart"
                type="SimpleLineIcon"
                size={25}
            />,
            title: 'Page2',
            click: 'Page2',
        },
        {
            icon: <Icon
                name="room-preferences"
                type="MaterialIcon"
                size={25}
            />,
            title: 'Page3',
            click: 'Page3',
        },
        {
            icon: <Icon
                name="room-preferences"
                type="MaterialIcon"
                size={25}
            />,
            title: 'Page4',
            click: 'Page4',
        },
    ];


    return (
        <Container
            style={{
                ...styles.Container,
                height: 15,
                paddingTop: RNStatusBar.currentHeight,
            }}
        >
            <StatusBar
                translucent={true}
                backgroundColor={'transparent'}
                barStyle="dark-content"
            />
            <View
                style={{
                    ...styles.user_view_main
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={require('../../Assest/ProfilePicture.png')}
                        style={{
                            height: 60,
                            width: 60,
                            resizeMode: 'contain',
                            borderRadius: 50,
                            borderWidth: 1,
                            borderColor: '#0090FF',
                            alignSelf: 'center',
                        }}
                    />
                    <View
                        style={{
                            paddingLeft: 15
                        }}
                    >

                        <Text
                            style={{
                                ...styles.user_text,
                                color: '#000'
                            }}
                        >
                            Profile Name
                        </Text>
                        <Text>
                            UI/UX Designer
                        </Text>
                    </View>
                </View>
            </View>

            {data?.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        style={{
                            ...styles.button_view
                        }
                        }
                        onPress={() =>
                            item.onclick ? item.onclick() : NavigationService.navigate(item.click)
                        }
                    // onPress={() => {setModalVisible(true);}}
                    >
                        {item.icon}
                        <Text
                            style={{
                                ...styles.button_text, color: item.color
                            }}
                        >
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                );
            })}
            <View
                style={{
                    position: 'absolute',
                    bottom: 70,
                    alignSelf: 'center',
                }}
            >
                <View
                    style={{
                        paddingLeft: 15
                    }}
                >

                    <Text
                        style={{
                            ...styles.user_text,
                        }}
                    >
                        About Application
                    </Text>
                    <Text
                        style={{
                            ...styles.user_text2,
                        }}
                    >
                        Version 0.1
                    </Text>
                </View>
            </View>
        </Container>
    );
};

export default DrawerContainer;

const styles = StyleSheet.create({
    Container: {},

    user_view_main: {
        flexDirection: 'row',
        paddingLeft: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 60,
    },

    user_text: {
        fontSize: 15,
        color: '#0090FF',
        textAlign: 'center',
    },

    user_text2: {
        fontSize: 10,
        color: '#0090FF',
        textAlign: 'center',
    },

    button_view: {
        flexDirection: 'row',
        margin: 10,
        paddingLeft: 10,
        marginTop: 25,
    },

    button_text: {
        fontSize: 13,
        marginLeft: 10,
    },

    model_style: {
        height: height / 7,
    },

    footer_view: {
        borderWidth: 0.3,
        flexDirection: 'row',
        position: 'absolute',
        bottom: -2,
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,

        alignSelf: 'center',
        borderBottomColor: '#fff',
    },
});