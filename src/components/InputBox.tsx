import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors, isAndroid } from '../assets/Colors'


const InputBox = ({ lable, placeholder, rounded }) => {
    return (
        <View>
            {lable != "" && <Text style={{ fontSize: 16, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", marginBottom: Colors.spacing }}>{lable}</Text>}
            <View style={[styles.box, { borderWidth: isAndroid ? .35 : 0, borderRadius: rounded === true ? Colors.spacing * Colors.spacing : Colors.spacing * .5 }]}>
                <TextInput placeholderTextColor={'#5A5A5A'} placeholder={placeholder} style={[styles.input, { paddingVertical: Colors.spacing * .85, marginLeft: rounded === true ? Colors.spacing * 2 : Colors.spacing }]} />
            </View>
        </View>
    )
}

export default InputBox

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'white',
        shadowRadius: 2,
        shadowOffset: { width: 0, height: .5 },
        shadowOpacity: .2,
        shadowColor: Colors.grayOne, elevation: 2,

    },
    input: {
        borderColor: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600",
    },
})