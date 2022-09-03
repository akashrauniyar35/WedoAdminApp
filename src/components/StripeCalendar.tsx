import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CalendarStrip from 'react-native-calendar-strip';
import Colors from '../assets/Colors';





const StripCalandar = () => {
    const [date, setDate] = useState(new Date());
    console.log('datesss', date)

    return (
        <View style={styles.container}>
            <CalendarStrip
                scrollable
                scrollerPaging={true}
                showMonth={true}
                selectedDate={date}
                calendarHeaderStyle={{ fontSize: 18, fontWeight: '500' }}
                calendarHeaderContainerStyle={{ alignItems: 'flex-start', flexDirection: 'row', paddingLeft: Colors.spacing , paddingTop:5}}
                daySelectionAnimation={{
                    type: 'border',
                    duration: 200,
                    borderWidth: 1.5,
                    borderHighlightColor: '#fff',

                }}
                highlightDateContainerStyle={{ backgroundColor: Colors.green, position: 'absolute', }}
                highlightDateNumberStyle={{ color: '#fff', }}
                highlightDateNameStyle={{ color: '#fff', }}
                iconLeft={null}
                iconRight={null}
                dateNumberStyle={{ color: Colors.black, fontSize: 18, }}
                calendarHeaderStyle={{ color: Colors.black }}
                dateNameStyle={{ color: '#7E7E7E', fontSize: 10, fontWeight: '500' }}
                onDateSelected={date => setDate(date.toString())}
                style={{ height: 80, backgroundColor: '#fff', borderRadius: Colors.spacing, borderWidth: 1.5, borderColor: '#7E7E7E', }}
                dayContainerStyle={{}}
            />
        </View>
    )
}

export default StripCalandar

const styles = StyleSheet.create({
    container: {},
    dateNameStyle: {},
    dateNumberStyle: {}
})