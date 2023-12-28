import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-basic-elements'
import Card from '../../../Components/CommonComponents/RecommendedForYou/Card'
import { FlatList } from 'react-native'

const CardDetail = [
    {
        Image: require("../../../Assets/Image/CommonComponent/RecommendedYou/Food1.png"),
        Title: "Egg Benedict with Capsicum",
        Location: "2.2 away from you",
        Rating: "4.9 (1.1k+ Reviwes)",
        Amount: "$20"
    },
    {
        Image: require("../../../Assets/Image/CommonComponent/RecommendedYou/Food1.png"),
        Title: "Egg Benedict with Capsicum",
        Location: "2.2 away from you",
        Rating: "4.9 (1.1k+ Reviwes)",
        Amount: "$20"
    },
    {
        Image: require("../../../Assets/Image/CommonComponent/RecommendedYou/Food1.png"),
        Title: "Egg Benedict with Capsicum",
        Location: "2.2 away from you",
        Rating: "4.9 (1.1k+ Reviwes)",
        Amount: "$20"
    },
    {
        Image: require("../../../Assets/Image/CommonComponent/RecommendedYou/Food1.png"),
        Title: "Egg Benedict with Capsicum",
        Location: "2.2 away from you",
        Rating: "4.9 (1.1k+ Reviwes)",
        Amount: "$20"
    },
    {
        Image: require("../../../Assets/Image/CommonComponent/RecommendedYou/Food1.png"),
        Title: "Egg Benedict with Capsicum",
        Location: "2.2 away from you",
        Rating: "4.9 (1.1k+ Reviwes)",
        Amount: "$20"
    },
    {
        Image: require("../../../Assets/Image/CommonComponent/RecommendedYou/Food1.png"),
        Title: "Egg Benedict with Capsicum",
        Location: "2.2 away from you",
        Rating: "4.9 (1.1k+ Reviwes)",
        Amount: "$20"
    },
    {
        Image: require("../../../Assets/Image/CommonComponent/RecommendedYou/Food1.png"),
        Title: "Egg Benedict with Capsicum",
        Location: "2.2 away from you",
        Rating: "4.9 (1.1k+ Reviwes)",
        Amount: "$20"
    },
    {
        Image: require("../../../Assets/Image/CommonComponent/RecommendedYou/Food1.png"),
        Title: "Egg Benedict with Capsicum",
        Location: "2.2 away from you",
        Rating: "4.9 (1.1k+ Reviwes)",
        Amount: "$20"
    },
    {
        Image: require("../../../Assets/Image/CommonComponent/RecommendedYou/Food1.png"),
        Title: "Egg Benedict with Capsicum",
        Location: "2.2 away from you",
        Rating: "4.9 (1.1k+ Reviwes)",
        Amount: "$20"
    },
    {
        Image: require("../../../Assets/Image/CommonComponent/RecommendedYou/Food1.png"),
        Title: "Egg Benedict with Capsicum",
        Location: "2.2 away from you",
        Rating: "4.9 (1.1k+ Reviwes)",
        Amount: "$20"
    },
]

const RecommendedForYou = () => {
    return (
        <View 
            style={styles.Container}
        >
            <View 
                style={styles.Row1}
            >
                <View
                    style={styles.Row1Col1}
                >
                    <Text
                        style={styles.Title} 
                    >
                        Recommended you
                    </Text>
                </View>
                <View
                    style={styles.Row1Col2}
                >
                    <TouchableOpacity
                        style={styles.ViewAllButton}
                    >
                        <Text
                            style={styles.ViewAllButtonText}
                        >
                            View All
                        </Text>
                        <Icon
                            name='arrowright'
                            type='AntDesign'
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View 
                style={styles.Row2}
            >
                <Text
                    style={styles.Description}
                >
                    Explore best items and enjoy your meal
                </Text>
            </View>
            <View style={styles.Row3}>
                <FlatList 
                    data={CardDetail} 
                    numColumns={2}
                    renderItem={({item, index}) => {
                        return(
                            <Card item={item} key={index}/>
                        )
                    }}
                />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    Container:{
        marginTop: 15,
        paddingTop:10
    },

    Row1:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    Row1Col1:{
        flexDirection:'row'
    },

    Row1Col2:{
        flexDirection:'row'
    },

    Title:{
        color:'black',
        fontSize: 20,
        fontWeight:'700'
    },

    ViewAllButton:{
        flexDirection:'row',
        columnGap: 5,
        alignItems:'center'
    },

    ViewAllButtonText:{
        color:'#323643'
    },

    Row2:{
        marginVertical: 10
    },

    Description:{
        color:'#8C9099'
    }
})

export default RecommendedForYou