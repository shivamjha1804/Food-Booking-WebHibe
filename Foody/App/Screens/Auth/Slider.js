import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
import Button from '../../Components/CommonComponents/Button/Button';
import { useNavigation } from '@react-navigation/native';

const Data = [
  {
    Text: "Enjoy the best restuarants or get what you need from neadby stores, delivered"
  },

  {
    Text: "Get what you need from neadby stores, delivered enjoy the best restuarants or"
  },

  {
    Text: "Restuarants or get what you need from neadby stores, delivered enjoy the best"
  }
]

const Slider = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.Row1}>
        <Image style={styles.Image} source={require("../../Assets/Image/AuthStack/Slider//Restaurant.png")} />
      </View>
      <View style={styles.Row2}>
        <Swiper height={130} width={550} autoplay activeDotColor='#F83758' dotColor='#DEDBDB' style={styles.wrapper}>
          {
            Data.map((item) => {
              return (
                <View>
                  <Text style={styles.Content}>
                    {item.Text} 
                  </Text>
                </View>
              )
            })
          }
        </Swiper>

      </View>
      <View style={styles.Row3}>
        <Button onPress={() => {
          navigation.navigate("SignIn")
        }} buttonColor={'#FE724C'} text={"Get Started"}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20
  },

  Row1: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "35%",
  },

  Image: {
    height: "100%",
    width: "100%",
    resizeMode: 'contain',
  },

  Row2: {
    marginVertical: 55,
    height: "27%"
  },

  wrapper: {},

  Content: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700',
    alignSelf: 'center',
  },

})

export default Slider