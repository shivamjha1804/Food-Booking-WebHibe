import React from 'react'
import { Text, View } from 'react-native'
import { AppTextInput, Icon } from 'react-native-basic-elements'

const Input = (props) => {
  return (
    <View>
        <AppTextInput
            placeholder = {props.placeholder}
            secureTextEntry = {props.secureTextEntry}
            rightAction={<Icon
              name= {props.Icon}
              type='Ionicon'
            />}
        />
    </View>
  )
}

export default Input