import { Dimensions, Modal, Pressable, TextInput, SafeAreaView, StyleSheet, TouchableWithoutFeedback, FlatList, Text, View, ScrollView, Animated, ViewPagerAndroidBase } from 'react-native'
import React, { useState } from 'react'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../assets/Colors';


const { width, height } = Dimensions.get('screen')
const isAndroid = Platform.OS == 'android' ? true : false
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


const AddNotesCard = ({ modalY, closeModal, isVisible }) => {

    const NotesCard = () => {
        return (
            <View style={{ backgroundColor: 'red' }}>
                <View style={{ backgroundColor: Colors.littleGray, marginTop: isVisible ? -height * .5 : -height * 2, width: width * .95, padding: Colors.spacing, borderRadius: Colors.spacing, }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: isAndroid ? "900" : "600", color: 'white', fontSize: 16, }}>Create a new note</Text>
                        <Pressable onPress={closeModal}>
                            <IconM color='white' name="close-circle" size={24} />
                        </Pressable>
                    </View>


                    <View style={{
                        backgroundColor: 'white', marginTop: Colors.spacing * 2, paddingHorizontal: Colors.spacing, paddingVertical: isAndroid ? 0 : Colors.spacing, borderRadius: Colors.spacing * .5, elevation: 3, shadowRadius: 2,
                        shadowOpacity: .2,
                        height: height * .13,
                        shadowOffset: { width: 0, height: 1 },
                    }}>

                        <TextInput multiline={true} placeholderTextColor={Colors.littleGray} placeholder="add notes ..." style={{ fontSize: 16, color: Colors.littleGray }} maxLength={300} />

                    </View>




                    <Pressable style={{ alignSelf: 'flex-end', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '30%', marginTop: Colors.spacing * 2, backgroundColor: 'white', borderRadius: Colors.spacing, paddingVertical: Colors.spacing * .75 }}>
                        <Text style={{ fontWeight: isAndroid ? "900" : "900", color: Colors.grayOne, fontSize: 18, }}>Save</Text>
                    </Pressable>






                </View>



            </View >
        )
    }


    return (
        <>
            <Animated.View style={{ transform: [{ translateY: modalY }], }}>
                <NotesCard />
            </Animated.View >
        </>



    )
}

export default AddNotesCard

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