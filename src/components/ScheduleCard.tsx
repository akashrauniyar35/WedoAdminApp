import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import InputBox from './InputBox'
import { Colors, HEIGHT, isAndroid, WIDTH } from '../assets/Colors'
import CalandarDatePicker from './CalandarDatePicker'
import SelectionCard from './SelectionCard'
import PickTimeModal from './PickTimeModal'





const ScheduleCard = ({ date, onDateChangeHandler, notes, jobNotesHandler }) => {

    const [calendarVisible, setCalendarVisible] = useState(false)
    const [timeVisible, setTimeVisible] = useState(false)
    const [jobDate, setJobDate] = useState(date);
    const [jobTime, setJoTime] = useState(String);


    const handleDatePicker = (value) => {
        const x = value.toString().substring(0, 15)
        setJobDate(x)
        onDateChangeHandler(x)
        setCalendarVisible(false)
    }

    const handleTimePicker = (value) => {
        setJoTime(value);
        setTimeVisible(!timeVisible)
        console.log('value')
    }

    const handleNotes = (value) => {
        jobNotesHandler(value)
    }

    return (

        <>
            <View>
                <Text style={{ fontSize: 18, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", marginBottom: Colors.spacing * 2 }}>Schedule</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing * 2, }}>
                    <Text style={{ fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>Booking date</Text>
                    <Pressable style={{ width: "70%" }} onPress={() => setCalendarVisible(true)}>
                        <InputBox onPress={() => setCalendarVisible(true)} placeholderSize={12} width="70%" size={40} rounded={true} placeholder={jobDate && jobDate} editable={false} />
                    </Pressable>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing * 2, }}>
                    <Text style={{ fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>Time</Text>
                    <Pressable onPress={() => setTimeVisible(true)} style={{ width: "70%" }}>
                        <InputBox onPress={() => setTimeVisible(true)} placeholderSize={12} size={40} placeholder="" rounded={true} placeholder={jobTime && jobTime} editable={false} />
                    </Pressable >
                </View>

                <View style={{ marginBottom: Colors.spacing * 2, }}>
                    <Text style={{ fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", marginBottom: Colors.spacing, }}>Job notes</Text>
                    <View style={{}}>
                        <TextInput placeholder={notes} onChangeText={(value) => handleNotes(value)} style={styles.notes} multiline={true} maxLength={300} />
                    </View>
                </View>

                <View>
                    <Modal style={{ flex: 1, }} animationType="fade" transparent={true} visible={calendarVisible} >
                        <View style={styles.container}>
                            <View style={styles.selectonContainer}>
                                <CalandarDatePicker onPress={handleDatePicker} />
                                <Pressable style={{ alignSelf: 'flex-end', marginTop: Colors.spacing, marginRight: Colors.spacing }} onPress={() => setCalendarVisible(false)}>
                                    <Text style={{ fontSize: 14, color: 'white', fontWeight: isAndroid ? "900" : "600", }}>Close</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>

                <View style={{ width: "70%", marginRight: Colors.spacing * .25, }}>
                    <PickTimeModal isVisible={timeVisible} onPress={handleTimePicker} onClose={() => setTimeVisible(false)} />
                </View>

                <View style={{ opacity: .35, marginVertical: Colors.spacing * 2, borderBottomWidth: 2, borderColor: Colors.maidlyGrayText }} />
            </View>


        </>
    )
}

export default ScheduleCard

const styles = StyleSheet.create({
    notes: {
        textAlignVertical: "top",
        fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300",
        backgroundColor: 'white',
        borderColor: Colors.maidlyGrayText,
        alignItems: 'center',
        width: "100%",
        height: HEIGHT * .2,
        shadowRadius: 2,
        paddingTop: Colors.spacing * 1,
        paddingHorizontal: Colors.spacing * 2,
        shadowOffset: { width: 0, height: .5 },
        shadowOpacity: .2,
        elevation: 2,
        shadowColor: Colors.maidlyGrayText,
        borderWidth: isAndroid ? .35 : 0,
        borderRadius: Colors.spacing * 2,

    },
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.transparentGloss },
    selectonContainer: {

        // backgroundColor: Colors.maidlyGrayText,
        // width: WIDTH * .9,
        // padding: Colors.spacing * 2,
        // position: 'relative',
        // paddingVertical: Colors.spacing * 4,

    },
})