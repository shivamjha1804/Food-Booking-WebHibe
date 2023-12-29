import React, { useState } from 'react'
import { ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Header from '../../../Components/AppStack/FoodDetails/Header'
import { Icon } from 'react-native-basic-elements'
import ReactNativeModal from 'react-native-modal'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Tag from '../../../Components/AppStack/FoodDetails/Tag'
import Descriptin from '../../../Components/AppStack/FoodDetails/Description'
import Description from '../../../Components/AppStack/FoodDetails/Description'
import Rating from '../../../Components/AppStack/FoodDetails/Rating'
import RecommendedForYou from '../../../Components/CommonComponents/RecommendedForYou/RecommendedForYou'
import AddToCart from '../../../Components/AppStack/FoodDetails/AddToCart'
import NavigationService from '../../../Services/Navigation'

const TagsDetail = [
  {
    TagName: "chicken"
  },

  {
    TagName: "Briyani"
  },

  {
    TagName: "Indian"
  }
]


const FoodDetail = () => {
  const insets = useSafeAreaInsets()
  const [isModalVisible, setModalVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [screen1, setScreen1] = useState(true);
  const [screen2, setScreen2] = useState(false);
  const [count, setCount] = useState(0)

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onBackdropPress = () => {
    setModalVisible(false)
  }

  const addCountHandler = () => {
    setCount(count + 1);
  };
  const removeCountHandler = () => {
    if(count === 0){
      return;  
    }
    setCount(count - 1);
  };



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <StatusBar
          backgroundColor={'transparent'}
          translucent
        />
        <ImageBackground
          resizeMode='contain'
          source={require("../../../Assets/Image/AppStack/FoodDetail/backgroundImage.png")}
          style={{
            height: 221,
            paddingHorizontal: 10,
            backgroundColor: 'red'
          }}
        >
          <Header
            onPress1={() => {
              toggleModal()
            }}

            onPress={() => {
              NavigationService.navigate("Cart")
            }}
          />
        </ImageBackground>

        {/* MODAL */}

        <ReactNativeModal
          isVisible={isModalVisible}
          style={{
            marginHorizontal: 0,
            justifyContent: 'flex-end',
            marginBottom: -insets.bottom
          }}
          statusBarTranslucent={false}
        >
          <View
            style={{
              backgroundColor: '#d3d3d3',
              paddingHorizontal: 10,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                onBackdropPress()
              }}

              style={{
                position: 'absolute',
                top: -70,
                alignSelf: 'center'
              }}
            >
              <Icon
                name='cross'
                type='Entypo'
                size={50}

              />
            </TouchableOpacity>
            <View>
              <Text
                style={styles.Title}
              >
                ABC hotels
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                justifyContent: 'center',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                paddingHorizontal: 10
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 10,
                  columnGap: 10,
                  borderBottomColor: '#d3d3d3',
                  borderBottomWidth: 1
                }}
              >
                <Icon
                  name='fast-food'
                  type='Ionicons'
                />

                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    fontWeight: '600'
                  }}
                >
                  Restaurant Info
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 10,
                  columnGap: 10,
                  borderBottomColor: '#d3d3d3',
                  borderBottomWidth: 1,
                }}
              >
                <Icon
                  name='eye-slash'
                  type='FontAwesome5'
                />

                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    fontWeight: '600'
                  }}
                >
                  Hide this restuarant
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 10,
                  columnGap: 10
                }}
              >
                <Icon
                  name='infocirlceo'
                  type='AntDesign'
                />

                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      fontWeight: '600'
                    }}
                  >
                    Report fraud or bad practices
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      paddingRight: 2
                    }}
                  >
                    The Random Word Generator is a tool to help you create a list of random words.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ReactNativeModal>



        <View
          style={styles.Container}
        >
          <View
            style={styles.Row1}
          >
            {
              TagsDetail.map((items, index) => {
                return (
                  <Tag
                    items={items}
                    key={index}
                  />
                )
              })
            }
          </View>

          <View
            style={styles.Row2}
          >
            <Text
              style={styles.Row2Text}
            >
              Eggs Benedict with {"\n"}Capsicum
            </Text>

            <TouchableOpacity
              style={styles.Row2IconContainer}
              onPress={() => {
                setActive(!active)
              }}

            >
              <Icon
                name='heart'
                type='AntDesign'
                size={20}
                style={{
                  color: active ? 'red' : 'white',

                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={styles.Row3}
          >
            <View
              style={styles.Row3Col1}
            >
              <Icon
                name='location-arrow'
                type='FontAwesome'
              />
              <Text
                style={styles.Row3Col1Text}
              >
                2.2 away from you
              </Text>
            </View>
            <View
              style={styles.Row3Col2}
            >
              <Icon
                name='star'
                type='AntDesign'
                color={'#FFC529'}
              />
              <Text
                style={styles.Row3Col2Text}
              >
                4.9 (1.1k+ Reviwes)
              </Text>
            </View>
          </View>

          <View
            style={
              styles.Row4
            }
          >
            <Text
              style={
                styles.Row4Text1
              }
            >
              $20.00
            </Text>
            <Text
              style={
                styles.Row4Text2
              }
            >
              /per plate
            </Text>
          </View>

          <View
            style={
              styles.Row5
            }
          >

            <TouchableOpacity
              onPress={() => {
                setScreen1(true)
                setScreen2(false)
              }}
            >
              <Text
                style={styles.Row5Title}
              >
                Description
              </Text>
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() => {
                setScreen1(false)
                setScreen2(true)
              }}
            >
              <Text
                style={styles.Row5Title}
              >
                Rating & Others
              </Text>
            </TouchableOpacity>

          </View>

          <View
            style={styles.Row6}
          >
            {
              screen1 ?
                <Description />
                : screen2 ?
                  <Rating />
                  :
                  null
            }
          </View>

          <View
            style={
              styles.Row6
            }
          >
            <RecommendedForYou />
          </View>

        </View>
      </ScrollView>
      <View
        style={styles.AddToCartContainer}
      >
        <View
          style={styles.Quantity}
        >
          <TouchableOpacity
            onPress={() => {
              addCountHandler()
            }}
          >


            <Icon
              name='plus'
              type='Entypo'

            />
          </TouchableOpacity>
          <Text
            style={
              styles.Counting
            }
          >
            {count}
          </Text>
          
          <TouchableOpacity
            onPress={() => {
              removeCountHandler()
            }}
          >
            <Icon
              name='minus'
              type='Entypo'

            />
          </TouchableOpacity>
        </View>
        <View>
          <AddToCart />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#000',
    paddingVertical: 10
  },

  Container: {
    paddingHorizontal: 10
  },

  Row1: {
    flexDirection: 'row',
    marginVertical: 10
  },

  Row2: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },

  Row2Text: {
    color: 'black',
    fontSize: 22,
    fontWeight: '700',
  },

  Row2IconContainer: {
    backgroundColor: '#FE724C',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 17,
    borderRadius: 30
  },

  Row3: {
    flexDirection: 'row',
    columnGap: 15,
    marginVertical: 10
  },

  Row3Col1: {
    flexDirection: 'row',
    columnGap: 5
  },

  Row3Col2: {
    flexDirection: 'row',
    columnGap: 5
  },

  Row3Col1Text: {
    color: 'black'
  },

  Row3Col2Text: {
    color: 'black'
  },

  Row4: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  Row4Text1: {
    fontSize: 25,
    color: '#323643',
    fontWeight: '600'
  },

  Row4Text2: {
    color: '#323643'
  },

  Row5: {
    flexDirection: 'row',
    columnGap: 80,
    marginTop: 10
  },

  Row5Title: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600'
  },

  AddToCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17,
    alignItems: 'center'
  },

  Quantity: {
    flexDirection: 'row-reverse',
    marginRight: 20,
    alignItems: 'center',
    columnGap: 10
  },

  Counting: {
    color: 'black',
    fontSize: 20,
    fontWeight: '800',
    paddingHorizontal: 10
  }
})

export default FoodDetail