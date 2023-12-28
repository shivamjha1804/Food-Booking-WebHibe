import React from 'react'
import { ScrollView } from 'react-native'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Card from './Card'
import { useNavigation } from '@react-navigation/native'
import NavigationService from '../../../../Services/Navigation'

const CardDetail = [
    {
        Image: require("../../../../Assets/Image/AppStack/Home/NearByHotel/Food1.png"),
        Title: "Egg Benedict with Capsicum",
        Location: "2.2 away from you",
        Rating: "4.9 (1.1k+ Reviwes)"
    },
    {
        Image: require("../../../../Assets/Image/AppStack/Home/NearByHotel/Food1.png"),
        Title: "Egg Benedict with Capsicum",
        Location: "2.2 away from you",
        Rating: "4.9 (1.1k+ Reviwes)"
    },
    {
        Image: require("../../../../Assets/Image/AppStack/Home/NearByHotel/Food1.png"),
        Title: "Egg Benedict with Capsicum",
        Location: "2.2 away from you",
        Rating: "4.9 (1.1k+ Reviwes)"
    },
    {
        Image: require("../../../../Assets/Image/AppStack/Home/NearByHotel/Food1.png"),
        Title: "Egg Benedict with Capsicum",
        Location: "2.2 away from you",
        Rating: "4.9 (1.1k+ Reviwes)"
    },
]

const NearByHotel = () => {
    return (
        <View>
            <View 
                style={styles.Row1}
            >
                <View
                    style={styles.Row1Col1}
                >
                    <Text
                        style={styles.Title} 
                    >
                        Nearby hotels
                    </Text>
                </View>
                <View
                    style={styles.Row1Col2}
                >
                    <TouchableOpacity
                        style={styles.Button}
                    >
                        <Text
                            style={styles.ButtonText}
                        >
                            View All
                        </Text>
                        <Image
                            style={styles.Image}
                            source={require("../../../../Assets/Image/AppStack/Home/NearByHotel/rightArrow.png")} 
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={styles.Row2} 
            >
                <Text
                    style={styles.Row1Col1} 
                >
                Exclusive restaurants deals near you
                </Text>
            </View>
            <View>
                <ScrollView horizontal>
                    {
                        CardDetail.map((item, index) => {
                            return(
                                <Card 
                                    item={item} 
                                    key={index}
                                    onPress={() => {
                                        NavigationService.navigate("FoodDetail")
                                    }} 
                                />
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    Row1:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    
    Title:{
        color:'#000',
        fontSize: 20,
        fontWeight: '700'
    },

    Button:{
        flexDirection:'row',
        alignItems:'center',
        columnGap: 10
    },
    
    Image:{
        height:15,
        width:15
    },

    ButtonText:{
        color:'#000',
        fontSize: 15,
        fontWeight: "400"
    },

    Row1Col1:{
        color:'#8C9099',
        fontSize: 14,
        paddingBottom:15
    }
})

export default NearByHotel