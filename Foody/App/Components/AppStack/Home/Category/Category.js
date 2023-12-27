import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import SubCategory from './SubCategory'

const Detail = [
    {
        Image: require("../../../../Assets/Image/AppStack/Home/Category/burger.png"),
        Label: "Burger"
    },
    {
        Image: require("../../../../Assets/Image/AppStack/Home/Category/broast.png"),
        Label: "Broast"
    },
    {
        Image: require("../../../../Assets/Image/AppStack/Home/Category/chicken.png"),
        Label: "Chicken"
    },
    {
        Image: require("../../../../Assets/Image/AppStack/Home/Category/pizza.png"),
        Label: "Pizza"
    },
    {
        Image: require("../../../../Assets/Image/AppStack/Home/Category/burger.png"),
        Label: "Burger"
    },
    {
        Image: require("../../../../Assets/Image/AppStack/Home/Category/broast.png"),
        Label: "Burger"
    },
    {
        Image: require("../../../../Assets/Image/AppStack/Home/Category/chicken.png"),
        Label: "Burger"
    },
    {
        Image: require("../../../../Assets/Image/AppStack/Home/Category/pizza.png"),
        Label: "Burger"
    }
]

const Category = () => {
  return (
    <View>
        <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
                {
                    Detail.map((item, index)=>{
                        return (
                            <SubCategory item={item} key={index}/>
                        )
                    })
                }
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
    }
})

export default Category