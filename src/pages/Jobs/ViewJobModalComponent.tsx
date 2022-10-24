import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, isAndroid, WIDTH } from '../../assets/Colors'
import SelectionCard from '../../components/SelectionCard'
import MapCard from './JobMapCard'
import JobNotesCard from '../../components/JobNotesCard'
import Checklist from '../../components/CheckList'
import AddNotes from '../../components/AddNotes'

import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import JobTimelineCard from '../../components/JobTimelineCard'




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


const ViewJobModalComponent = ({ id, item }) => {
    console.log('job component modal item', item)
    const [checkListVisible, setCheckListVisible] = useState(false)
    const [addNoteVisible, setAddNoteVisible] = useState(false)


    const x = String(item.subtotal).slice(0, 3);
    const quotePrice = Number(x).toFixed(2);

    const phoneNumber = [item.phone.slice(0, 4), " ", item.phone.slice(3, 6), " ", item.phone.
        slice(6)].join('')

    const date = [item.createdAt.slice(0, 4), "/", item.createdAt.slice(5, 7), "/", item.createdAt.slice(8, 15), item.createdAt.
        slice(8)].join('').substring(0, 10)


    const checkListHandler = () => {
        setCheckListVisible(!checkListVisible)
    }

    const addNotesHandler = () => {
        setAddNoteVisible(!addNoteVisible)
    }

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: Colors.spacing * 2, }}>
                    <Text style={{ fontSize: 20, color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "900" : "600" }}>{item.quoteReference}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "400" }}>  -  {date}</Text>
                        <View style={{ opacity: .5, backgroundColor: Colors.maidlyGrayText, width: 5, height: 5, marginHorizontal: Colors.spacing, borderRadius: 100, }} />
                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "400" }}>$ {quotePrice}</Text>
                    </View>
                </View>


                <View style={{ marginTop: Colors.spacing * 1.5, paddingHorizontal: Colors.spacing * 2, }}>
                    <SelectionCard phColor={Colors.maidlyGrayText} data={scheduleData} type={'schedule'} placeholder={item.quoteStatus} />
                    <Text style={{ fontSize: 20, color: Colors.madidlyThemeBlue, marginTop: Colors.spacing * 2, fontWeight: isAndroid ? "900" : "600" }}>{item.createdAt.substring(0, 18)}</Text>
                    <View style={{ height: .35, width: '100%', marginVertical: Colors.spacing * 2, backgroundColor: Colors.maidlyGrayText }} />
                </View>

                <View style={{ marginTop: Colors.spacing, paddingHorizontal: Colors.spacing * 2, }}>
                    <Text style={{ fontSize: 20, color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "900" : "700" }}>{item.name}</Text>
                    <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300", }}>$ {quotePrice}</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing }}>
                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300" }}>{phoneNumber}</Text>
                        <View style={{ opacity: .5, backgroundColor: Colors.maidlyGrayText, width: 10, height: 10, marginHorizontal: Colors.spacing, borderRadius: 100, }} />
                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300" }}>{item.email}</Text>
                    </View>

                    <View style={{ marginVertical: Colors.spacing * 2, }}>
                        <SelectionCard phColor={Colors.maidlyGrayText} data={techData} placeholder="Assign technician" />
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
                            <Text style={{ fontSize: 14, color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "600" : "300", }}>Edit details</Text>
                        </Pressable>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing, }}>
                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", width: '20%' }}>Size</Text>
                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300", }}>{item.bedrooms} bd | {item.bathrooms} ba</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing, }}>
                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", width: '20%' }}>Service</Text>
                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300", }}>{item.service}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing, }}>
                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", width: '20%' }}>Date</Text>
                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300", }}>{item.createdAt}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing, }}>
                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", width: '20%' }}>Time</Text>
                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300", }}>{'item.time'}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing, }}>
                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", width: '20%' }}>Location</Text>
                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300", }}>{'item.location'}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: Colors.spacing, }}>
                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", width: '20%' }}>Add ons</Text>
                        <View style={{ width: '80%', flexDirection: 'row', alignItems: 'center', }}>





                            <View style={{ flexWrap: 'wrap', flexDirection: 'row', width: '100%', }}>

                                {item.products.map((x: any) => {
                                    if (x.quantity > 0) {
                                        return (
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: Colors.spacing * .25, marginRight: Colors.spacing, }}>
                                                <View style={{ backgroundColor: Colors.maidlyGrayText, width: 5, height: 5, marginRight: Colors.spacing * .5, borderRadius: 100, }} />
                                                <Text style={{ fontSize: 14, color: Colors.maidlyGrayText }}>{x.description} ({x.quantity})</Text>
                                            </View>
                                        )
                                    } else { null }

                                })}

                            </View>

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

                        <Pressable onPress={addNotesHandler}>
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



                    <View style={{ paddingBottom: Colors.spacing * 4 }}>
                        <Checklist title="Checklist" onPress={checkListHandler} isOpen={checkListVisible} />
                    </View>

                    <AddNotes title="Checklist" onClose={() => setAddNoteVisible(false)} onPress={addNotesHandler} isOpen={addNoteVisible} />


                </View>


                <View style={{ paddingHorizontal: Colors.spacing * 2 }}>
                    <Text style={{ fontSize: 20, color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "900" : "700", marginBottom: Colors.spacing }}>Timeline</Text>

                    {item.timelines.map((item) => <JobTimelineCard createdBy={item.createdBy} key={item.id} date={item.date} icon={item.icon} title={item.title} />)}


                </View>


            </ScrollView>
        </View>
    )
}

export default ViewJobModalComponent

const styles = StyleSheet.create({
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
        height: isAndroid ? 45 : 45,
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