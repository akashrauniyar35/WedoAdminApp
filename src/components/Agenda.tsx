import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Agenda, CalendarList } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../assets/Colors';
import ViewAppointmentModal from '../pages/Drawer/ViewAppointmentModal';


const JobsAgenda = ({ nav }) => {
    const [openAppointment, setOpenAppointment] = useState(false)

    function toggleAppointment() {
        setOpenAppointment(!openAppointment)
    }

    function getInitials(name) {
        var names = name.split(' '),
            initials = names[0].substring(0, 1).toUpperCase();

        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
    }


    const AgendaItems = ({ item, nav }) => {

        const initials = getInitials(item.name)

        return (
            <Pressable onPress={toggleAppointment}>
                <View style={{ backgroundColor: '#fff', padding: Colors.spacing, borderRadius: 5, position: 'relative' }}>
                    <Text style={{ fontSize: 12, color: '#5e5e5e', marginBottom: Colors.spacing * 1 }}>{item.time}</Text>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: Colors.black, marginBottom: Colors.spacing * .5 }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: Colors.spacing * .25 }}>
                        <Icon name="location-outline" size={14} style={{ color: Colors.unPaid }} />
                        <Text style={{ fontSize: 12, color: '#5e5e5e', marginLeft: 5 }}>{item.address}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Icon name="call-outline" size={14} style={{ color: Colors.paid }} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '95%' }}>
                            <Text style={{ fontSize: 12, color: '#5e5e5e', marginLeft: 5 }}>{item.contact}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Text style={{ fontSize: 12, color: '#5e5e5e', marginRight: 5 }}>Assigned</Text>
                                <Icon name={item.assigned ? "checkmark-circle" : "close-circle"} size={18} style={{ color: item.assigned ? Colors.paid : Colors.unPaid }} />
                            </View>

                        </View>
                    </View>
                    <View style={{
                        position: 'absolute', backgroundColor: Colors.green, alignItems: 'center', justifyContent: 'center', width: 40, height: 40, right: 10, top: 10, borderRadius: 100,
                    }}>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff', }}>{initials}</Text>
                    </View >
                </View >
            </Pressable>
        )
    }
    const AgendaDays = ({ item, day }) => {
        return (
            <View style={{ backgroundColor: '#fff', padding: Colors.spacing, borderRadius: 5 }}>
                <Text>{item}</Text>
            </View>
        )
    }



    // States


    return (
        <View style={{}}>
            <View style={{
                height: 660,
                borderRadius: 10,
                shadowRadius: 2,
                shadowOpacity: .2,
                paddingBottom: Colors.spacing * 3,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#fff',
                shadowOffset: { width: 0, height: 1 }
            }}>
                <Agenda

                    onRefresh={() => console.log('refreshing...')}
                    items={{
                        '2022-09-16': [{ name: 'Sankar Thapa', address: 'Strathfield NS@ 2135', contact: '0451569865', time: '9:00 AM', assigned: false, }, { name: 'Item 1 Agenda two' }],
                        '2022-09-23': [{ name: 'Bijay Chamling', address: 'Strathfield NS@ 2135', time: '2:00 PM', assigned: true, contact: '0451569865' }],
                        '2012-09-24': [{ name: 'item 4' }],
                        '2022-09-25': [{ name: 'item 3 - any js object' }, { name: 'item 3 any js object', }]
                    }}

                    markedDates={{
                        '2022-09-16': { selected: true, marked: true },
                        '2022-09-17': { marked: true, },
                        '2022-09-25': { selected: true, }
                    }}

                    style={{
                        height: 660,
                        paddingTop: Colors.spacing * 3,
                    }}

                    theme={{
                        agendaDayTextColor: Colors.green,
                        agendaDayNumColor: Colors.black,
                        agendaTodayColor: 'red',
                    }}


                    renderItem={(item, firstItemInDay) => {


                        const spacing = firstItemInDay ? Colors.spacing * 3.5 : null
                        return (
                            <>
                                <View style={{}} />
                                <View style={{ marginTop: spacing, flex: 1, justifyContent: 'center', paddingRight: Colors.spacing, marginBottom: Colors.spacing }}>
                                    <AgendaItems item={item} nav={nav} />
                                </View>
                            </>)
                    }}

                />
            </View>

            {openAppointment ? <ViewAppointmentModal isOpen={openAppointment} onPress={toggleAppointment} onClose={toggleAppointment} /> : null}


        </View>
    )
}

export default JobsAgenda

const styles = StyleSheet.create({})