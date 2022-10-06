import { View, Text, Image, TextInput, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../assets/Colors'

const AddNotes = () => {
    return (
        <View style={{}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                <TextInput
                    placeholder="Add notes"
                    placeholderTextColor={Colors.littleGray}
                    style={{
                        paddingVertical: Colors.spacing * .5,
                        paddingLeft: Colors.spacing, borderRadius: Colors.spacing * .5, fontSize: 13, borderWidth: .5, borderColor: Colors.grayText, width: '82%'
                    }}
                />


                <Pressable>
                    <View style={{ marginLeft: Colors.spacing, backgroundColor: Colors.green, paddingHorizontal: Colors.spacing * 1, paddingVertical: Colors.spacing * .5, borderRadius: Colors.spacing * .5 }}>
                        <Text style={{ color: 'white', fontWeight: '600' }} >Add</Text>
                    </View>
                </Pressable>
            </View >


        </View >
    )
}

export default AddNotes