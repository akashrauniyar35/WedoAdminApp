import { View, Text, Image, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/Colors'

const AddNotes = () => {
    return (
        <View style={{ paddingVertical: Colors.spacing, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }} >

                <TextInput
                    multiline={true}
                    placeholder="Add notes"
                    placeholderTextColor={Colors.grayOne}
                    style={{
                        color: Colors.grayOne,
                        paddingVertical: Colors.spacing * .5,
                        paddingLeft: Colors.spacing, borderRadius: Colors.spacing * .5, fontSize: 14, borderWidth: .5, borderColor: Colors.grayOne, width: '82%'
                    }}
                />

                <Pressable>
                    <View style={{ marginLeft: Colors.spacing, backgroundColor: Colors.green, paddingHorizontal: Colors.spacing * 1.5, paddingVertical: Colors.spacing, borderRadius: Colors.spacing * .5 }}>
                        <Text style={{ color: 'white', fontWeight: '600', }}>Add</Text>
                    </View>
                </Pressable>
            </View >


        </View >
    )
}

export default AddNotes