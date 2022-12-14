import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CalendarList } from 'react-native-calendars';

const CalendarTable = () => {
    return (
        <View>
            <View style={{ paddingTop: 50, flex: 1, backgroundColor: 'red'}}>
                <CalendarList
                    // Callback which gets executed when visible months change in scroll view. Default = undefined
                    onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={50}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={50}
                    // Enable or disable scrolling of calendar list
                    scrollEnabled={true}
                    // Enable or disable vertical scroll indicator. Default = false
                    showScrollIndicator={true}
                />
            </View>
        </View>
    )
}

export default CalendarTable

const styles = StyleSheet.create({})