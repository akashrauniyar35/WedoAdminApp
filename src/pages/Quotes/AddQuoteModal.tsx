import { Dimensions, Modal, Pressable, TextInput, SafeAreaView, StyleSheet, TouchableWithoutFeedback, FlatList, Text, View, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import IconM from 'react-native-vector-icons/MaterialIcons';
import ScheduleCard from './ScheduleCard';
import { Colors } from '../../assets/Colors';
import PropertyInfoCard from './PropertyInfoCard';
import CustomerDetailsCard from './CustomerDetailsCard';
import PaymensCard from './PaymensCard';
import AddNotes from './AddNotesCard';
import AddFullNotesCard from './AddFullNotesCard';
import { useSelector } from 'react-redux';

const isAndroid = Platform.OS == 'android' ? true : false
const { width, height } = Dimensions.get('screen')

const w = width * .95;
const colorOne = '#01151A';
const colorTwo = '';
const colorThree = '';
const textColor = 'white';
const grayText = '#2e2e2e'
const grayTextTwo = '#6e6e6e'
const spacing = 10;
const red = '#C10000'
const green = '#48a14d'
const blue = '#007792'
const orange = '#E05500'
const borderColor = '#7E7E7E'



const schedule = [
    {
        id: '00',
        title: 'Urgent',
        color: red,
    },
    {
        id: '02',
        title: 'Today',
        color: blue,
    },
    {
        id: '03',
        title: 'Schedule',
        color: green,
    },
];

const PayTypeData = [

    {
        id: '00',
        title: 'AMC',
    },
    {
        id: '01',
        title: 'Rate',
    },

];
const techniciansList = [
    {
        id: '00',
        label: 'Ritesh Timsina',
    },
    {
        id: '01',
        label: 'Prakash Sahsher',
    },
    {
        id: '02',
        label: 'Ritesh Timsina',
    },

];


const data = [

]


const AddQuoteModal = ({ isOpen, onPress, onClose }) => {


    const [addQuote, setAddQuote] = useState(isOpen);


    const toggleModal = () => {
        setAddQuote(!addQuote)
    }


    return (
        <>
            <View style={{}}>


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={addQuote}
                >
                    <View style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center', }}>

                        <View style={{
                            flex: 1,
                            backgroundColor: textColor, width: width,
                            paddingVertical: spacing * 2,
                        }}>

                            <SafeAreaView />
                            <View style={{ paddingHorizontal: spacing * 2, marginBottom: spacing * 2, }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>

                                    <Text style={{ fontSize: 24, fontWeight: isAndroid ? "900" : "600", color: colorOne, }}>Add Quote</Text>
                                    <Pressable
                                        style={{ alignSelf: 'flex-end' }}
                                        onPress={() => onPress()}
                                    >
                                        <IconM color={Colors.grayOne} name="cancel" size={26} />
                                    </Pressable>

                                </View>

                            </View>


                            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='always' >

                                <View style={{ paddingHorizontal: spacing * 2, }}>

                                    <View style={{ marginBottom: Colors.spacing * 2 }}>
                                        <PropertyInfoCard />
                                    </View>

                                    <View style={{ marginBottom: Colors.spacing * 2 }}>
                                        <ScheduleCard />
                                    </View>

                                    <View style={{ marginBottom: Colors.spacing * 2 }}>
                                        <CustomerDetailsCard />
                                    </View>

                                    {/* <View style={{ marginBottom: Colors.spacing * 2 }}>
                                        <CustomerDetailsCard />
                                    </View> */}

                                    <View style={{ marginBottom: Colors.spacing * 2, }}>
                                        <AddFullNotesCard />
                                    </View>

                                    <View style={{ marginBottom: Colors.spacing * 2 }}>
                                        <PaymensCard />
                                    </View>

                                    <View style={{ marginBottom: Colors.spacing * 2, }}>
                                        <Pressable onPress={() => { }} >
                                            <View style={{ paddingVertical: Colors.spacing, backgroundColor: Colors.green, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ color: 'white', fontSize: 16, fontWeight: isAndroid ? "900" : "600" }}>Save</Text>
                                            </View>
                                        </Pressable>
                                    </View>

                                </View>

                            </ScrollView>




                        </View>
                    </View >
                </Modal >

            </View >


        </>
    )
}

export default AddQuoteModal

const styles = StyleSheet.create({

    taskTitle: {
        padding: 14,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: '#7E7E7E',
        fontSize: 18,
        position: 'relative',
    },
    taskTitleBadge: {

        position: 'absolute',
        backgroundColor: 'white',
        top: -8
    },
    scheduleBox: {
        padding: 8,
        paddingHorizontal: spacing * 2,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContentjustifyContent: 'center'
    },


})