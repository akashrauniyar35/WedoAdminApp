import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, isAndroid, WIDTH } from '../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';

const AddButtonHeader = ({ onPress, lable }) => {
    return (
        <View style={{
            flexDirection: 'row', width: WIDTH, alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white',
            // borderBottomWidth: 1,
            paddingHorizontal: Colors.spacing * 2,


            shadowRadius: 2,
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: .3,
            elevation: 3,
            height: 55,
            shadowColor: Colors.grayOne,
            marginBottom: Colors.spacing * 2
        }}>
            <Pressable onPress={onPress}>
                <Icon name="chevron-back" size={22} color={Colors.grayOne} />
            </Pressable>
            <Text style={{ fontSize: 14, color: Colors.grayOne, fontWeight: isAndroid ? "900" : "600" }}>{lable}</Text>
            <Pressable >
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={{ fontSize: 14, color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "900" : "600" }}>{'Save'}</Text>
                </View>

            </Pressable>
        </View>
    )
}

export default AddButtonHeader

const styles = StyleSheet.create({



})