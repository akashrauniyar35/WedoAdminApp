import { Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from '../../components/CalandarDatePicker'
import DateTimePicker from '../../components/DateTimePicker';
import { useSelector } from 'react-redux';
import { formatDate } from '../../components/dataConverters';

const isAndroid = Platform.OS == 'android' ? true : false
const ScheduleCard = ({ }) => {
    const [datePicker, setDatePicker] = useState(false);
    const [timePicker, setTimePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState()
    const [selectedTime, setSelectedTime] = useState()

    const quoteDate = useSelector((state: any) => state.addQuoteReducer.quoteDate)

    const quoteTime = useSelector((state: any) => state.addQuoteReducer.quoteTime)


    const toggleDatePicker = () => {
        setDatePicker(!datePicker)
    }

    const toggleTimePicker = () => {
        setTimePicker(!timePicker)
    }



    return (
        <View style={{}}>
            <Text style={{ fontSize: 16, color: Colors.green, marginBottom: Colors.spacing, fontWeight: isAndroid ? "900" : "600", }}>Schedule</Text>
            <View style={{
                backgroundColor: 'white',
                padding: Colors.spacing,
                borderRadius: 10,
                shadowRadius: 2,
                elevation: 3,
                shadowOpacity: .2,
                shadowOffset: { width: 0, height: 1 },
            }}>

                <Pressable onPress={toggleDatePicker}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <IconM name="calendar" size={24} color={Colors.littleGray} />
                        <Text style={{ color: Colors.littleGray, paddingVertical: Colors.spacing * .5, paddingLeft: Colors.spacing, fontSize: 16, fontWeight: isAndroid ? "900" : "600" }} >{quoteDate !== "" ? quoteDate.substring(0, 16) : "schedule date"}</Text>
                    </View>
                </Pressable>

                <Pressable onPress={toggleTimePicker} style={{ marginTop: Colors.spacing }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <IconM name="clock-outline" size={24} color={Colors.littleGray} />
                        <Text style={{ color: Colors.littleGray, paddingVertical: Colors.spacing * .5, paddingLeft: Colors.spacing, fontSize: 16, fontWeight: isAndroid ? "900" : "600" }} >{quoteTime !== '' ? formatDate(quoteTime.substring(0, 24)).substring(24, 16) : 'schedule time'}</Text>
                    </View>
                </Pressable>
                <DateTimePicker datePicker={datePicker} onDatePickerClose={toggleDatePicker} timePicker={timePicker} onTimePickerClose={toggleTimePicker} />
            </View>
        </View>
    )
}

export default ScheduleCard

const styles = StyleSheet.create({})