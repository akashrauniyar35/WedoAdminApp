import { Dimensions, Modal, Pressable, TextInput, SafeAreaView, StyleSheet, TouchableWithoutFeedback, FlatList, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../assets/Colors';
import ClientCard from './ClientCard';
import RequestedServiceCard from './RequestedServiceCard';
import CustomerDetailsCard from './CustomerDetailsCard';
import ScheduleCard from './ScheduleCard';
import JobsDetailsCard from './JobsDetailsCard';
import TotalsCard from './TotalsCard';


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


const EditModal = ({ isOpen, onPress, onClose, }: any) => {

    const [editModal, setEditModal] = useState(isOpen)



    const toggleEditModal = () => {
        setEditModal(!editModal)
    }



    return (
        <>
            <View style={{}}>


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isOpen}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>

                        <View style={{
                            flex: 1,
                            backgroundColor: textColor,
                            width: width,
                            paddingTop: spacing * 2,
                            borderTopRightRadius: spacing * 2,
                        }}>

                            <View style={{
                                flexDirection: 'row', alignItems: 'center',
                                borderBottomWidth: 1,
                                borderColor: Colors.transparentGloss,
                                justifyContent: 'space-between',
                                marginVertical: spacing * 2.5,
                                paddingHorizontal: spacing * 2,
                                paddingBottom: Colors.spacing * .5
                            }}>

                                <Pressable
                                    style={{}}
                                    onPress={() => onPress()}
                                >
                                    <Icon color={colorOne} name="chevron-back" size={25} />
                                </Pressable>
                                <Text style={{ fontSize: 16, fontWeight: '600', color: colorOne, }}>Edit</Text>
                                <Pressable>
                                    <Text style={{ fontSize: 16, fontWeight: '600', color: colorOne, }}>Save</Text>
                                </Pressable>
                            </View>

                            <ScrollView style={{ paddingHorizontal: spacing * 1, }}>

                                <View style={{ marginBottom: Colors.spacing * 2 }}>
                                    <CustomerDetailsCard />
                                </View>

                                <View style={{ marginBottom: Colors.spacing * 2 }}>
                                    <ScheduleCard />
                                </View>

                                <View style={{ marginBottom: Colors.spacing * 2 }}>
                                    <JobsDetailsCard />
                                </View>

                                <View style={{ marginBottom: Colors.spacing * 2 }}>
                                    <TotalsCard />
                                </View>


                            </ScrollView>








                        </View>
                    </View >
                </Modal >
            </View >


        </>
    )
}

export default EditModal

const styles = StyleSheet.create({




})