import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CalendarPicker from 'react-native-calendar-picker';
import Colors from '../assets/Colors';


const { width, height } = Dimensions.get('screen')

const CalandarDatePicker = ({ }) => {
    const [selectedStartDate, setSelectedStartDate] = useState(null)
    const [selectedEndDate, setSelectedEndDate] = useState(null)

    function onDateChange(date, type) {
        if (type === 'END_DATE') {
            setSelectedEndDate(date)
        } else {
            setSelectedStartDate(date)
            setSelectedEndDate(null)
        }
    }

    const minDate = new Date(); // Today
    // const maxDate = new Date(2022, 9, 3)
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';


    console.log(startDate.slice(0, 15))

    return (
        <View style={styles.shadowBox}>
            <View style={styles.container}>
                <CalendarPicker
                    width={width * .8}
                    startDate={startDate}
                    monthYearHeaderWrapperStyle={{}}
                    startFromMonday={true}
                    restricted={false}
                    allowRangeSelection={true}
                    allowBackwardRangeSelect={true}
                    // minDate={minDate}
                    // maxDate={maxDate}
                    todayBackgroundColor={Colors.green}
                    selectedDayColor={Colors.green}
                    selectedDayTextColor={'#fff'}
                    monthYearTextStyle={{ textColor: '#6e6e6e' }}
                    onDateChange={onDateChange}
                    previousTitleStyle={{ fontSize: 12, fontWeight: '400', color: '#6e6e6e' }}
                    nextTitleStyle={{ fontSize: 12, fontWeight: '400', color: '#6e6e6e' }}
                />

    
            </View>

        </View>
    )
}

export default CalandarDatePicker

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        width: width * .75,
    },
    shadowBox: {
        alignItems: 'center',
        backgroundColor: '#fff',
        width: width * .8,
        alignSelf: 'center',
        padding: 10,
        paddingHorizontal: 30,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: .2,
        borderRadius: 10,

    }
})