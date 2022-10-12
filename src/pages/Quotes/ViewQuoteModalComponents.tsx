import { View, Text, Dimensions, Pressable, ScrollView, Platform, SafeAreaView, Animated } from 'react-native'
import React, { useState } from 'react'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, lightenColor } from '../../assets/Colors'
import StatusBox from '../../components/SelectionCard';
import NotesAccordian from '../../components/TimelineAccordian';
import PaymensCard from './PaymensCard';
import MapCard from './MapCard';
import AddNotesCard from '../../components/AddNotesCard';
import ViewNotesAccordian from '../../components/NotesAccordian';


const isAndroid = Platform.OS == 'android' ? true : false

const timeline_data = [
    {
        id: '00',
        name: 'Web',
        date: 'Mon Sep 12 2022 08:59',
        label: 'Quote Created',
    },
    {
        id: '01',
        name: 'Milan',
        date: 'Mon Sep 12 2022 08:59',
        label: 'Booking Created',
    },
];




const notes_data = [
    {
        id: '00',
        name: 'Milan Thakur',
        date: 'Mon Sep 12 2022 09:33:25',
        img: 'https://randomuser.me/api/portraits/men/3.jpg',
        note: 'This will be some notes by Milan Balcony needs its windows cleaned with sugar soap'
    },
    {
        id: '01',
        name: 'Milan Samsung',
        date: 'Mon Sep 12 2022 09:33:25',
        img: 'https://randomuser.me/api/portraits/women/63.jpg',
        note: 'Clean the kitchen & toilets thorougly'
    },
    {
        id: '02',
        name: 'Sam Adhikari',
        date: 'Mon Sep 12 2022 09:33:25',
        img: 'https://randomuser.me/api/portraits/men/32.jpg',
        note: 'Pelase do kitchen sink'
    },
    {
        id: '03',
        name: 'Umesh ji',
        img: 'https://randomuser.me/api/portraits/women/90.jpg',
        date: 'Mon Sep 12 2022 09:33:25',
        note: 'Balcony needs its windows cleaned with sugar soap'
    },
]

const { width, height } = Dimensions.get('screen')
const ViewQuoteModalComponents = ({ quoteID, onClose, item }) => {

    const [addNoteVisible, setAddNoteVisible] = useState(false)
    const [modalY, setModalY] = useState(new Animated.Value(-height))


    function dateConverter(x: any) {
        var d = (new Date(x) + '').split(' ');
        d[2] = d[2] + ',';

        return [d[0], d[1], d[2], d[3], d[4]].join(' ');
        // return [d[0], d[1], d[2], d[3]].join(' ');
    }

    const date = dateConverter(Date.parse(item.createdAt));

    console.log('view quote item', item.products)




    // const addNotesToggler = () => {
    //     setToggleAddNotes(!toggleAddNotes);
    // }







    const openModal = () => {

        setAddNoteVisible(!addNoteVisible)

        Animated.timing(modalY, {
            duration: 500,
            toValue: 0,
            useNativeDriver: true
        }).start()

    }
    const closeModal = () => {
        setAddNoteVisible(!addNoteVisible)
        Animated.timing(modalY, {
            duration: 500,
            toValue: -height,
            useNativeDriver: true
        }).start()

    }



    const toggleAddModal = () => {
        setAddNoteVisible(!addNoteVisible);
    }


    return (
        <>
            <View>
                <SafeAreaView />
                <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    width: width,
                }}>

                    <View style={{ flexDirection: 'row', marginTop: Colors.spacing * 2, justifyContent: 'space-between', paddingHorizontal: Colors.spacing * 2 }}>

                        <View style={{ flexDirection: 'column', }}>
                            <Text style={{ fontSize: 24, fontWeight: isAndroid ? "900" : "600", color: Colors.green, }}>#{quoteID.substring(0, 10)}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 3 }}>
                                <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.lightRed, fontSize: 14, }}>{date}</Text>
                            </View>
                        </View>

                        <Pressable
                            style={{}}
                            onPress={onClose}
                        ><IconM color={Colors.grayOne} name="close-circle" size={24} />
                        </Pressable>
                    </View>




                    <ScrollView style={{}} showsVerticalScrollIndicator={false}>

                        <View style={{ paddingHorizontal: Colors.spacing * 2, }}>

                            <View style={{ marginBottom: Colors.spacing * 3, marginTop: Colors.spacing, }}>
                                {/* <StatusBox /> */}
                                <View style={{
                                    width: "100%", borderBottomWidth: .5,
                                    marginTop: Colors.spacing,
                                    borderColor: Colors.transparentGloss,
                                }} />
                            </View>



                            <View style={{ marginBottom: Colors.spacing * 3, }}>
                                <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.green, fontSize: 20, }}>{item.name}</Text>
                                <Text style={{ fontWeight: '300', color: Colors.grayOne, fontSize: 14, marginTop: Colors.spacing * .25 }}>Strathfield NSW 2145</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing * .5 }}>
                                    {item.email ? <Text style={{ fontSize: 14, color: Colors.grayOne }}>{item.email}</Text> : null}
                                    <View style={{ backgroundColor: Colors.grayText, width: 5, height: 5, marginHorizontal: Colors.spacing, borderRadius: 100, }} />
                                    <Text style={{ fontSize: 14, color: Colors.grayOne }}>{item.phone}</Text>
                                </View>

                                <View style={{ flexDirection: 'column', paddingTop: Colors.spacing * 2, marginBottom: Colors.spacing, }} >


                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '40%', justifyContent: 'space-between' }}>
                                        <IconM name='download-circle-outline' size={26} color={Colors.paid} />
                                        <IconM name='email-send-outline' size={26} color={Colors.red} />
                                        <IconM name='delete-circle-outline' size={26} color={Colors.grayOne} />
                                    </View>



                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing }}>
                                        <Pressable>
                                            <View style={{ borderRadius: Colors.spacing * 10, flexDirection: 'row', paddingHorizontal: Colors.spacing * 1.5, paddingVertical: Colors.spacing * .5, backgroundColor: Colors.green, alignItems: 'center', }}>
                                                <IconM name='calendar-plus' size={18} color='white' />
                                                <Text style={{ marginLeft: Colors.spacing * .5, fontSize: 16, fontWeight: isAndroid ? "900" : "600", color: 'white' }}>New booking</Text>
                                            </View>
                                        </Pressable>

                                        <Pressable onPress={openModal}>
                                            <View style={{ marginLeft: Colors.spacing * 1.5, borderRadius: Colors.spacing * 10, flexDirection: 'row', paddingHorizontal: Colors.spacing * 1.5, paddingVertical: Colors.spacing * .5, backgroundColor: `#${lightenColor(Colors.red, 35)}`, alignItems: 'center', }}>
                                                <IconM name='note-plus' size={18} color='white' />
                                                <Text style={{ marginLeft: Colors.spacing * .5, fontSize: 16, fontWeight: isAndroid ? "900" : "600", color: 'white' }}>Note</Text>
                                            </View>
                                        </Pressable>
                                    </View>

                                </View>





                                <View style={{
                                    width: "100%", borderBottomWidth: .5,
                                    borderColor: Colors.grayOne,
                                    marginBottom: Colors.spacing
                                }} />

                            </View>




                            <View style={{ marginBottom: Colors.spacing * 3, }}>
                                <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.green, fontSize: 16, }}>Job Details</Text>

                                <View style={{
                                    flexDirection: 'row', alignItems: 'center',
                                }}>
                                    <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.grayOne, fontSize: 14, marginTop: Colors.spacing * .5, width: '20%' }}>Service</Text>
                                    <Text style={{ fontWeight: '300', color: Colors.grayText, fontSize: 14, marginTop: Colors.spacing * .5, }}>{item.service}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.grayOne, fontSize: 14, marginTop: Colors.spacing * .5, width: '20%' }}>Property</Text>
                                    <Text style={{ fontWeight: '300', color: Colors.grayText, fontSize: 14, marginTop: Colors.spacing * .5, }}>{'Unit'}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.grayOne, fontSize: 14, marginTop: Colors.spacing * .5, width: '20%' }}>Size</Text>
                                    <Text style={{ fontWeight: '300', color: Colors.grayText, fontSize: 14, marginTop: Colors.spacing * .5, }}>{item.bedrooms}bd | {item.bathrooms}ba</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.grayOne, fontSize: 14, marginTop: Colors.spacing * .5, width: '20%' }}>Time</Text>
                                    <Text style={{ fontWeight: '300', color: Colors.grayText, fontSize: 14, marginTop: Colors.spacing * .5, }}>{'10:00 AM'}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.grayOne, fontSize: 14, marginTop: Colors.spacing * .5, width: '20%' }}>Date</Text>
                                    <Text style={{ fontWeight: '300', color: Colors.grayText, fontSize: 14, marginTop: Colors.spacing * .5, }}>{' booking date 10:00 AM'}</Text>
                                </View>


                                <View style={{}}>
                                    <View style={{ marginVertical: Colors.spacing * .5, position: 'relative' }}>
                                        <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.grayOne, fontSize: 14, marginTop: Colors.spacing * .5, width: '20%', position: 'relative' }}>Add Ons</Text>

                                        <View style={{ flexWrap: 'wrap', flexDirection: 'row', width: '100%', marginTop: Colors.spacing * .5, }}>

                                            {item.products.map((x: any) => {
                                                if (x.quantity > 0) {
                                                    return (
                                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: Colors.spacing * .25, marginRight: Colors.spacing, }}>
                                                            <View style={{ backgroundColor: Colors.grayText, width: 5, height: 5, marginRight: Colors.spacing * .5, borderRadius: 100, }} />
                                                            <Text style={{ fontSize: 14, color: Colors.grayText }}>{x.description} ({x.quantity})</Text>
                                                        </View>
                                                    )
                                                } else { null }

                                            })}

                                        </View>

                                    </View>
                                    <View style={{ flexDirection: 'column', marginTop: Colors.spacing * .5, marginBottom: Colors.spacing }}>
                                        <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.grayOne, fontSize: 14, marginBottom: Colors.spacing * .25, }}>Notes</Text>
                                        <Text style={{ fontWeight: '300', color: Colors.grayText, fontSize: 14, }}>{'some Notes by customer'}</Text>
                                    </View>

                                    <View style={{
                                        width: "100%", borderBottomWidth: .5,
                                        borderColor: Colors.grayOne,
                                        marginBottom: Colors.spacing * 2
                                    }} />
                                </View>

                            </View>


                            <View style={{ marginBottom: Colors.spacing * 3, }}>
                                <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.green, fontSize: 16, marginBottom: Colors.spacing }}>Job Notes</Text>


                                <ViewNotesAccordian title={'Notes'} data={item.notes} />

                                <View style={{
                                    marginTop: Colors.spacing,
                                    width: "100%", borderBottomWidth: .5,
                                    borderColor: Colors.grayOne,
                                    marginBottom: Colors.spacing
                                }} />

                            </View>

                            <View style={{ marginBottom: Colors.spacing * 3, }}>
                                <PaymensCard subtotal={item.subtotal} />
                            </View>
                            
                            <View style={{ marginBottom: Colors.spacing * 3, }}>
                                <MapCard subtotal={item.subtotal} />
                            </View>




                            <View style={{ marginBottom: Colors.spacing * 3, }}>
                                <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.green, fontSize: 16, marginBottom: Colors.spacing }}>Timeline</Text>


                                <NotesAccordian title={'Timeline'} data={item.timelines} />

                                <View style={{
                                    marginTop: Colors.spacing,
                                    width: "100%", borderBottomWidth: .5,
                                    borderColor: Colors.grayOne,
                                    marginBottom: Colors.spacing
                                }} />

                            </View>

                        </View>

                    </ScrollView>
                </View>
            </View>

            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <AddNotesCard modalY={modalY} closeModal={closeModal} isVisible={addNoteVisible} />
            </View>

        </>
    )
}

export default ViewQuoteModalComponents