import React, { useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../../Components/AppStack/FoodDetails/Header'
import { Icon } from 'react-native-basic-elements'
import ReactNativeModal from 'react-native-modal'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Tag from '../../../Components/AppStack/FoodDetails/Tag'

const FoodDetail = () => {
  const insets = useSafeAreaInsets()
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onBackdropPress = () => {
    setModalVisible(false)
  }

  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
      />
      <ImageBackground
        resizeMode='contain'
        source={require("../../../Assets/Image/AppStack/FoodDetail/backgroundImage.png")}
        style={{
          height:221,
          paddingHorizontal: 10,
          backgroundColor:'red'
        }}
      >
        <Header
          onPress={() => {
            toggleModal()
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
                alignSelf:'center'
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
                    paddingRight:2
                  }}
                >
                  The Random Word Generator is a tool to help you create a list of random words.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ReactNativeModal>


      <View>
        <View
          style={{
            flexDirection:'row',
            marginVertical: 10
          }}
        >
        <Tag/>
        <Tag/>
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
  }
})

export default FoodDetail