import React from 'react'
import { Text } from 'react-native'
import { StyleSheet, View } from 'react-native'

const Description = () => {
    return (
        <View
            style={styles.Container}
        >
            

            <View
                style={styles.BottomBorder}
            >

            </View>

            <Text
                style={styles.Description}
            >
                Lorem ipsum dolor sit amet consectetur. Sit adipiscing maecenas malesuada lacus ultrices ac habitant. Enim tristique in integer euismod mauris aenean in. Odio sed gravida nunc non duis. Suspendisse ac lectus lobortis auctor aliquam nunc. Facilisis aliquet aliquam in mattis sapien pretium ornare. Read More...
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        rowGap: 10,
        marginTop: 10
    },

    Title:{
        color:'black',
        fontSize: 16,
        fontWeight: '600'
    },
    
    BottomBorder:{
        borderBottomWidth:1,
        borderBottomColor:'#FE724C',
        marginRight: 330
    },

    Description:{
        color:'black'
    }
})

export default Description