import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppTextInput, Icon } from 'react-native-basic-elements'

const SearchBar = () => {
    return (
        <View
            style={styles.Container}
        >
            <AppTextInput
                leftIcon={{
                    name: 'search',
                    type: 'Ionicon',
                }}
                placeholder="Food, groceries, drinks, etc."
                rightAction={<Icon
                    name='filter'
                    type='Ionicon'
                />}
                inputContainerStyle={
                    styles.Input
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        marginTop:15
    },

    Input:{
        backgroundColor:'#EEEEEE',
        elevation: 3,
    }
})

export default SearchBar