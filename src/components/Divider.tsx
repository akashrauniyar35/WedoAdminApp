import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Divider = ({ width, color, height , opacity }) => {
    return (
        <View style={{
            width: width, height: height ? height : 2, alignSelf: 'center',
            backgroundColor: color,
            opacity: opacity ? .3 : 1,
        }} />
    )
}

export default Divider

const styles = StyleSheet.create({

})