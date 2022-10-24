import React, { useEffect, useState } from 'react'
import { Alert, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native'
import { Colors, isAndroid, lightenColor, WIDTH } from '../../assets/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderComponent from '../../components/AddButtonHeader';
import ScheduleCard from './ScheduleCard';
import SelectionCard from '../../components/SelectionCard';
import MapCard from './JobMapCard';
import { getInitials } from '../../components/dataConverters';
import JobNotesCard from '../../components/JobNotesCard';
import CheckList from '../../components/CheckList';
import AddNotes from '../../components/AddNotes';

import { viewQuoteFail, viewQuotePending, viewQuoteSuccess } from '../../redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import ViewJobModalComponent from './ViewJobModalComponent';
import { fetchQuoteByID } from '../../config/JobApi';



const ViewJobModal = ({ isOpen, onPress, id }) => {



    const jobID = useSelector((state: any) => state.jobReducer.sealectedJobValue)
    const jobData: any = useSelector((state: any) => state.jobReducer.jobByIdData)
    const dispatch = useDispatch()

    return (
        < View >
            <View style={styles.centeredView}>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isOpen}
                    onRequestClose={onPress}

                ><SafeAreaView />
                    <View style={styles.centeredView}>

                        <Pressable>
                            <HeaderComponent onPress={onPress} lable={`#${id.substring(0, 40)}`} />
                        </Pressable>
                        <View style={styles.modalView}>

                            {jobData.map((item) => {
                                return (
                                    <ViewJobModalComponent key={item._id} id={jobID} item={item} />
                                )
                            })}
                        </View>
                    </View>
                </Modal >
            </View >
        </View>
    )
}

export default ViewJobModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
    },
    modalView: {
        backgroundColor: "white",
        width: WIDTH,
        flex: 1,
        paddingVertical: Colors.spacing * 2,
    },


})