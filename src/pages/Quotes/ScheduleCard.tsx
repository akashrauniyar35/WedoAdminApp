import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Colors from '../../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
const ScheduleCard = () => {
    return (
        <View style={{ paddingHorizontal: Colors.spacing * 1, }}>
            <View style={{
                backgroundColor: 'white',
                padding: Colors.spacing,
                borderRadius: 10,
                shadowRadius: 2,
                elevation: 3,
                shadowOpacity: .2,
                shadowOffset: { width: 0, height: 1 },
            }}>
                <Text style={{ fontSize: 13, color: Colors.littleGray, marginBottom: Colors.spacing }}>Schedule</Text>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Colors.spacing * .25 }}>
                    <IconM name="calendar" size={20} color={Colors.grayOne} />
                    <TextInput placeholder="7 Oct 2022" placeholderTextColor={Colors.grayText} style={{ paddingVertical: Colors.spacing * .5, paddingLeft: Colors.spacing, fontSize: 13, }} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Colors.spacing * .25 }}>
                    <IconM name="clock-outline" size={20} color={Colors.grayOne} />
                    <TextInput placeholder="10 AM" placeholderTextColor={Colors.grayText} style={{ paddingVertical: Colors.spacing * .5, paddingLeft: Colors.spacing, fontSize: 13, }} />
                </View>
            </View>
        </View>
    )
}

export default ScheduleCard

const styles = StyleSheet.create({})