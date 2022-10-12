import { View, Text, Platform, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/Colors'
const isAndroid = Platform.OS == 'android' ? true : false
const { width, height } = Dimensions.get('screen')
const AddFullNotesCard = () => {
    return (
        <View style={{ display: 'flex' }}>
            <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.green, fontSize: 16, }}>Notes</Text>
            <View style={{
                backgroundColor: 'white', marginTop: Colors.spacing, paddingHorizontal: Colors.spacing, paddingVertical: isAndroid ? 0 : Colors.spacing, borderRadius: Colors.spacing * .5, elevation: 3, shadowRadius: 2,
                shadowOpacity: .2,
                height: height * .13,
                shadowOffset: { width: 0, height: 1 },
            }}>

                <TextInput multiline={true} placeholderTextColor={Colors.littleGray} placeholder="add notes ..." style={{ fontSize: 16, color: Colors.littleGray }} maxLength={300} />

            </View>
        </View>
    )
}

export default AddFullNotesCard