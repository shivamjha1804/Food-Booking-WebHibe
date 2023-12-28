import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Text, View } from 'react-native'
import Page1 from '../Screens/App/Drawer/Page1';
import Page2 from '../Screens/App/Drawer/Page2';
import Page3 from '../Screens/App/Drawer/Page3';
import Page4 from '../Screens/App/Drawer/Page4';

const Drawer = createDrawerNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
        background: "#fff"
    }
}


const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            screenOptions={screenOptions}
        >
            <Drawer.Screen
                name='Page1'
                component={Page1}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <Icon
                                    name='home'
                                    size={24}
                                    color={focused ? '#EB3030' : 'black'}
                                />
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: focused ? '#EB3030' : 'black'
                                    }}
                                >
                                    Page1
                                </Text>
                            </View>
                        )
                    }
                }}
            />

            <Drawer.Screen
                name='Page2'
                component={Page2}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <Icon
                                    name='home'
                                    size={24}
                                    color={focused ? '#EB3030' : 'black'}
                                />

                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: focused ? '#EB3030' : 'black'
                                    }}
                                >
                                    Page2
                                </Text>
                            </View>
                        )
                    }
                }}
            />

            <Drawer.Screen
                name='Page3'
                component={Page3}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <Icon
                                    name='home'
                                    size={24}
                                    color={focused ? '#EB3030' : 'black'}
                                />
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: focused ? '#EB3030' : 'black'
                                    }}
                                >
                                    Page3
                                </Text>
                            </View>
                        )
                    }
                }}
            />

            <Drawer.Screen
                name='Page4'
                component={Page4}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <Icon
                                    name='home'
                                    size={24}
                                    color={focused ? '#EB3030' : 'black'}
                                />
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: focused ? '#EB3030' : 'black'
                                    }}
                                >
                                    Page4
                                </Text>
                            </View>
                        )
                    }
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation