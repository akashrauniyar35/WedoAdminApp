import { Alert, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native'
import React, { useState } from 'react'
import { Colors, isAndroid, lightenColor, WIDTH } from '../../assets/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderComponent from '../../components/HeaderComponent';
import ScheduleCard from './ScheduleCard';
import SelectionCard from '../../components/SelectionCard';
import MapCard from './MapCard';
import { getInitials } from '../../components/dataConverters';
import JobNotesCard from '../../components/JobNotesCard';
import CheckList from '../../components/CheckList';





const scheduleData = [
    {
        id: '00',
        name: 'Cancelled',
        color: "",
    },
    {
        id: '01',
        name: 'Scheduled',
        color: "",
    },
    {
        id: '02',
        name: 'In Progress',
        color: "",
    },
    {
        id: '03',
        name: 'Completed',
        color: "",
    },
];


const techData = [
    {
        id: '00',
        name: 'Ninja Prasad',
    },
    {
        id: '01',
        name: 'Ashwin Nigga',
    },
    {
        id: '02',
        name: 'Milan Prasad',
    },
    {
        id: '03',
        name: 'Rajesh Hamal',
    },
];



const ViewJobModal = ({ isOpen, onPress }) => {

    const [checkListVisible, setCheckListVisible] = useState(false)

    const checkListHandler = () => {
        setCheckListVisible(!checkListVisible)
    }

    return (
        <View>
            <View style={styles.centeredView}>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isOpen}
                    onRequestClose={onPress}

                ><SafeAreaView />
                    <View style={styles.centeredView}>

                        <HeaderComponent onPress={onPress} lable={'#20220912-123124'} />
                        <View style={styles.modalView}>

                            <ScrollView showsVerticalScrollIndicator={false}>

                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: Colors.spacing * 2, }}>
                                    <Text style={{ fontSize: 20, color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "900" : "600" }}>#20220912-123124</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "400" }}>  -  {'10/10/2022'}</Text>
                                        <View style={{ opacity: .5, backgroundColor: Colors.maidlyGrayText, width: 5, height: 5, marginHorizontal: Colors.spacing, borderRadius: 100, }} />
                                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "400" }}>$ 300</Text>
                                    </View>
                                </View>


                                <View style={{ marginTop: Colors.spacing * 1.5, paddingHorizontal: Colors.spacing * 2, }}>
                                    <SelectionCard data={scheduleData} type={'schedule'} placeholder="Scheduled" />
                                    <Text style={{ fontSize: 20, color: Colors.madidlyThemeBlue, marginTop: Colors.spacing * 2, fontWeight: isAndroid ? "900" : "600" }}>16 October 2022</Text>
                                    <View style={{ height: .35, width: '100%', marginVertical: Colors.spacing * 2, backgroundColor: Colors.maidlyGrayText }} />
                                </View>

                                <View style={{ marginTop: Colors.spacing, paddingHorizontal: Colors.spacing * 2, }}>
                                    <Text style={{ fontSize: 20, color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "900" : "700" }}>Milan Pandey</Text>
                                    <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300", }}>$ 300</Text>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing }}>
                                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300" }}>{'0415701987'}</Text>
                                        <View style={{ opacity: .5, backgroundColor: Colors.maidlyGrayText, width: 10, height: 10, marginHorizontal: Colors.spacing, borderRadius: 100, }} />
                                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300" }}>{'emial@gmail.com'}</Text>
                                    </View>

                                    <View style={{ marginVertical: Colors.spacing * 2, }}>
                                        <SelectionCard data={techData} placeholder="Assign technician" />
                                    </View>
                                    <MapCard />

                                    <View style={{ opacity: .25, height: 4, width: '100%', marginVertical: Colors.spacing * 2, backgroundColor: Colors.maidlyGrayText }} />
                                </View>







                                <View style={{ paddingHorizontal: Colors.spacing * 2, }}>

                                    <Pressable>
                                        <View style={[styles.buttonsFull]}>
                                            <Text style={{
                                                fontSize: 14,
                                                color: 'white', fontWeight: isAndroid ? "900" : "700"
                                            }}>Convert to booking</Text>
                                        </View>
                                    </Pressable>
                                    <Pressable>
                                        <View style={[styles.buttonsFull, { backgroundColor: '#f1b04c', borderRadius: Colors.spacing * Colors.spacing }]}>
                                            <Text style={{
                                                fontSize: 14,
                                                color: 'white', fontWeight: isAndroid ? "900" : "700"
                                            }}>Email Quote</Text>
                                        </View>
                                    </Pressable>
                                    <Pressable>
                                        <View style={[styles.buttonsFull, { backgroundColor: '#f1b04c', borderRadius: Colors.spacing * Colors.spacing }]}>
                                            <Text style={{
                                                fontSize: 14,
                                                color: 'white', fontWeight: isAndroid ? "900" : "700"
                                            }}>Send ETA Text</Text>
                                        </View>
                                    </Pressable>
                                    <Pressable>
                                        <View style={[styles.buttonsFull, { backgroundColor: '#f1b04c', borderRadius: Colors.spacing * Colors.spacing }]}>
                                            <Text style={{
                                                fontSize: 14,
                                                color: 'white', fontWeight: isAndroid ? "900" : "700"
                                            }}>Send Reminder</Text>
                                        </View>
                                    </Pressable>




                                    <View style={{ opacity: .25, height: 4, width: '100%', marginVertical: Colors.spacing * 2, backgroundColor: Colors.maidlyGrayText }} />

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Colors.spacing }}>

                                        <Pressable>
                                            <View style={[styles.buttonsHalf]}>
                                                <Text style={{
                                                    fontSize: 14,
                                                    color: 'white', fontWeight: isAndroid ? "900" : "700"
                                                }}>Job buttons</Text>
                                            </View>
                                        </Pressable>


                                        <Pressable>
                                            <View style={[styles.buttonsHalf, {
                                                paddingHorizontal: Colors.spacing * 2,
                                                shadowRadius: 2,
                                                shadowOffset: { width: 0, height: 0 },
                                                shadowOpacity: .2,
                                                elevation: 2, backgroundColor: 'white',
                                                borderColor: Colors.maidlyGrayText, borderWidth: .15
                                            }]}>
                                                <Text style={{
                                                    fontSize: 14,
                                                    color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "900" : "700"
                                                }}>Job save</Text>
                                            </View>
                                        </Pressable>

                                    </View>

                                    <View style={{ opacity: .25, height: 4, width: '100%', marginVertical: Colors.spacing * 2, backgroundColor: Colors.maidlyGrayText }} />

                                </View>



                                <View style={{ paddingHorizontal: Colors.spacing * 2, }}>


                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 20, color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "900" : "700" }}>Job details</Text>

                                        <Pressable>
                                            <Text style={{ fontSize: 14, color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "600" : "700", }}>Edit details</Text>
                                        </Pressable>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing, }}>
                                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", width: '20%' }}>Size</Text>
                                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300", }}>{2} bd | {2} ba</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing, }}>
                                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", width: '20%' }}>Service</Text>
                                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300", }}>{'End of Lease Cleaning'}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing, }}>
                                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", width: '20%' }}>Date</Text>
                                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300", }}>{'16 October 2022'}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing, }}>
                                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", width: '20%' }}>Time</Text>
                                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300", }}>{'10 AM'}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing, }}>
                                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", width: '20%' }}>Location</Text>
                                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300", }}>{'30 Genley Rd Homebush West 2140 NSW'}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: Colors.spacing, }}>
                                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", width: '20%' }}>Add ons</Text>
                                        <View style={{ width: '80%', flexDirection: 'row', alignItems: 'center', }}>
                                            <Text style={{ fontSize: 14, marginRight: Colors.spacing, marginBottom: Colors.spacing, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300", }}>Seperate Toilet ({1})</Text>
                                            <Text style={{ fontSize: 14, marginRight: Colors.spacing, marginBottom: Colors.spacing, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300", }}>Wall Wash ({2})</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", width: '20%' }}>Notes</Text>
                                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300", }}>{'Some notes'}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing, }}>
                                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", width: '20%' }}>Assigned</Text>
                                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300", }}>{'N/A'}</Text>
                                    </View>
                                    <View style={{ opacity: .25, height: 4, width: '100%', marginTop: Colors.spacing * 2, backgroundColor: Colors.maidlyGrayText }} />
                                </View>


                                <View style={{ paddingHorizontal: Colors.spacing * 2, }}>


                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

                                        <Pressable>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                <IconM name="text-box-plus" color={Colors.madidlyThemeBlue} size={20} />
                                                <Text style={{ fontSize: 16, marginLeft: Colors.spacing, color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "900" : "700" }}>Add note</Text>
                                            </View>
                                        </Pressable>

                                        <View style={{ opacity: .25, height: Colors.spacing * 4, width: 2, marginVertical: Colors.spacing * 2, backgroundColor: Colors.maidlyGrayText }} />

                                        <Pressable>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                <IconM name="image-plus" color={Colors.madidlyThemeBlue} size={20} />
                                                <Text style={{ fontSize: 16, marginLeft: Colors.spacing, color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "900" : "700" }}>Add file</Text>
                                            </View>
                                        </Pressable>
                                    </View>

                                    <View style={{ opacity: .25, height: 1, width: '100%', marginTop: Colors.spacing * 2, marginBottom: Colors.spacing, backgroundColor: Colors.maidlyGrayText }} />
                                </View>


                                <View style={{ paddingHorizontal: Colors.spacing * 2, marginTop: Colors.spacing }}>
                                    <Text style={{ fontSize: 20, color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "900" : "700", marginBottom: Colors.spacing }}>System notes</Text>

                                    <JobNotesCard />
                                    <JobNotesCard />
                                    <JobNotesCard />




                                </View>

                                <View style={{ paddingHorizontal: Colors.spacing * 2, marginTop: Colors.spacing }}>
                                    <Pressable onPress={checkListHandler}   >
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: Colors.spacing, justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 20, color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "900" : "700", }}>Checklist</Text>
                                            <Icon name="chevron-forward" size={20} color={Colors.grayOne} />
                                        </View>
                                    </Pressable>

                               

                                    <CheckList title="Checklist" onPress={checkListHandler} isOpen={checkListVisible} />


                                </View>


                            </ScrollView>

                        </View>







                    </View>
                </Modal >
            </View >
        </View >
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
        paddingVertical: Colors.spacing * 2
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    buttonsFull: {
        alignItems: "center",
        marginBottom: Colors.spacing,
        justifyContent: "center",
        backgroundColor: Colors.madidlyThemeBlue,
        paddingVertical: Colors.spacing * 1.5,
        borderRadius: Colors.spacing * Colors.spacing,

    },
    buttonsHalf: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.madidlyThemeBlue,
        paddingVertical: Colors.spacing * 1.5,
        width: WIDTH * .40,
        borderRadius: Colors.spacing * Colors.spacing,
    },

})