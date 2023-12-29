import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Rating = () => {

    const [active, setActive] = useState(false)
    return (
        <View
            style={styles.Container}
        >
            
            <View
                style={styles.BottomBorder}
            ></View>
            <Text
                style={styles.Description}
            >
                Sit adipiscing maecenas malesuada lacus ultrices ac habitant. Enim tristique in integer euismod mauris aenean in. Odio sed gravida nunc non duis. Suspendisse ac lectus lobortis auctor aliquam nunc. Facilisis aliquet aliquam in mattis sapien pretium ornare. Read More...
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    Container:{
        rowGap: 10,
        marginTop: 10
    },

    BottomBorder:{
        borderBottomWidth:1,
        borderBottomColor:'#FE724C',
        marginRight: 150,
        marginLeft: 163
    },
  
    Description:{
        color:'black'
    }
})
export default Rating