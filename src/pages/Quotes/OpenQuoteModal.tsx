import { Dimensions, Modal, Pressable, TextInput, SafeAreaView, StyleSheet, TouchableWithoutFeedback, FlatList, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import IconM from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../assets/Colors';
import ClientCard from './ClientCard';
import RequestedServiceCard from './RequestedServiceCard';


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


const AMCModal = ({ isOpen, onPress, onClose }) => {


    const [openAMC, setOpenAMC] = useState(isOpen);


    return (
        <>
            <View style={{}}>


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={openAMC}
                >
                    <View style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center', }}>

                        <View style={{
                            flex: 1,
                            backgroundColor: textColor, width: width,
                            paddingTop: spacing * 2,

                        }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: spacing * 2.5, paddingHorizontal: spacing * 2 }}>

                                <Text style={{ fontSize: 18, fontWeight: '600', color: colorOne, }}>Open Quote Modal</Text>
                                <Pressable
                                    style={{ alignSelf: 'flex-end' }}
                                    onPress={() => onPress()}
                                >
                                    <IconM color={colorOne} name="cancel" size={25} />
                                </Pressable>

                            </View>




                            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='always' >



                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: spacing * 2 }}>
                                    <Text style={{ color: grayText, fontWeight: '600', fontSize: 13, }}>Service</Text>
                                    <View style={{ backgroundColor: grayText, width: 4, height: 4, borderRadius: 100, marginTop: 2, marginHorizontal: spacing }} />
                                    <Text style={{ color: grayText, fontWeight: '600', fontSize: 13, }}>End of Lease</Text>
                                </View>


                                <View style={{ marginVertical: spacing, paddingHorizontal: spacing * 2 }}>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 16, fontWeight: '600', color: colorOne, }}>End of Lease Clean</Text>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Text style={{ color: grayText, fontSize: 13, }}>Quote Ref: </Text>
                                            <Text style={{ color: grayText, fontSize: 13, }}>WD21</Text>
                                        </View>


                                    </View>

                                    <View style={{ alignItems: 'center', borderRadius: 4, marginTop: Colors.spacing * .5, backgroundColor: Colors.paid, width: '40%' }}><Text style={{ fontWeight: '300', fontSize: 13, color: 'white', paddingVertical: 2 }}>Booking Confirmed</Text></View>

                                </View>



                                <View style={{ marginBottom: spacing, paddingHorizontal: spacing * 2 }}>
                                    <ClientCard />
                                </View>

                                <View style={{ marginBottom: spacing, paddingHorizontal: spacing * 2 }}>
                                    <RequestedServiceCard />
                                </View>







                                {/* 
                                <TouchableWithoutFeedback onPress={() => { }}>
                                    <View style={{ backgroundColor: colorOne, marginBottom: spacing * 2, borderRadius: 5, padding: 14, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: textColor, fontSize: 16, fontWeight: '600' }}>UPDATE</Text>
                                    </View>
                                </TouchableWithoutFeedback> */}


                            </ScrollView>



                        </View>
                    </View >
                </Modal >
            </View >


        </>
    )
}

export default AMCModal

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