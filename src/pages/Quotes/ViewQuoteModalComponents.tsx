import { View, Text, Dimensions, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../assets/Colors'
import StatusBox from '../../components/StatusDropDown';
import NotesAccordian from '../../components/NotesAccordian';

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

    function dateConverter(x: any) {
        var d = (new Date(x) + '').split(' ');
        d[2] = d[2] + ',';

        return [d[0], d[1], d[2], d[3], d[4]].join(' ');
        // return [d[0], d[1], d[2], d[3]].join(' ');
    }

    const date = dateConverter(Date.parse(item.createdAt));

    console.log('view quote item', item.products)

    return (
        <View>
            <View style={{
                flex: 1,
                marginTop: height * .1,
                backgroundColor: 'white',
                width: width,
                borderTopRightRadius: Colors.spacing * 2,
            }}>

                <View style={{ flexDirection: 'row', marginTop: Colors.spacing * 2.5, alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Colors.spacing * 2 }}>

                    <View style={{ flexDirection: 'row', alignItems: "flex-end" }}>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: Colors.green, }}>#{quoteID.substring(0, 10)}</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: Colors.spacing, marginBottom: 3 }}>
                            <Text style={{ fontSize: 10, color: Colors.littleGray }}>{'other info'}</Text>
                            <View style={{ backgroundColor: Colors.grayText, width: 4, height: 4, marginHorizontal: Colors.spacing, borderRadius: 100, }} />
                            <Text style={{ fontSize: 10, color: Colors.littleGray, }}>${item.subtotal}</Text>
                        </View>
                    </View>

                    <Pressable
                        style={{ alignSelf: 'flex-end' }}
                        onPress={onClose}
                    ><IconM color={Colors.grayText} name="close-circle-outline" size={25} />
                    </Pressable>
                </View>




                <ScrollView style={{ paddingHorizontal: Colors.spacing * 2, }} showsVerticalScrollIndicator={false}>

                    <View style={{ marginBottom: Colors.spacing }}>
                        <Text style={{ fontWeight: '600', color: Colors.lightRed, fontSize: 13, marginBottom: Colors.spacing * 2 }}>{date}</Text>
                        <StatusBox />

                    </View>

                    <View style={{
                        width: "100%", borderBottomWidth: .5,
                        borderColor: Colors.transparentGloss,
                        marginBottom: Colors.spacing * 2
                    }} />


                    <View style={{ marginBottom: Colors.spacing }}>
                        <Text style={{ fontWeight: '600', color: Colors.green, fontSize: 16, }}>{item.name}</Text>
                        <Text style={{ fontWeight: '300', color: Colors.littleGray, fontSize: 10, marginTop: Colors.spacing * .5 }}>Strathfield NSW 2135</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing * .25 }}>
                            <Text style={{ fontSize: 10, color: Colors.littleGray }}>{item.email}</Text>
                            <View style={{ backgroundColor: Colors.grayText, width: 4, height: 4, marginHorizontal: Colors.spacing, borderRadius: 100, }} />
                            <Text style={{ fontSize: 10, color: Colors.littleGray }}>{item.phone}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: Colors.spacing, marginBottom: Colors.spacing }} >

                            <Pressable>
                                <View style={{ borderRadius: Colors.spacing * .5, paddingHorizontal: Colors.spacing * 2, paddingVertical: Colors.spacing * .5, backgroundColor: Colors.green, }}>
                                    <Text style={{ fontSize: 13, fontWeight: '600', color: 'white' }}>Convert to Booking</Text>
                                </View>
                            </Pressable>

                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '30%', justifyContent: 'space-between' }}>
                                <IconM name='download-circle-outline' size={24} color={Colors.paid} />
                                <IconM name='email-send-outline' size={24} color={Colors.unPaid} />
                                <IconM name='delete-circle-outline' size={24} color={Colors.grayText} />
                            </View>

                        </View>

                        <View style={{
                            width: "100%", borderBottomWidth: .5,
                            borderColor: Colors.transparentGloss,
                            marginBottom: Colors.spacing
                        }} />

                    </View>




                    <View style={{ marginBottom: Colors.spacing, }}>
                        <Text style={{ fontWeight: '600', color: Colors.green, fontSize: 16, }}>Job Details</Text>

                        <View style={{
                            flexDirection: 'row', alignItems: 'center',
                        }}>
                            <Text style={{ fontWeight: '600', color: Colors.littleGray, fontSize: 10, marginTop: Colors.spacing * .5, width: '20%' }}>Service</Text>
                            <Text style={{ fontWeight: '300', color: Colors.littleGray, fontSize: 10, marginTop: Colors.spacing * .5, }}>{item.service}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ fontWeight: '600', color: Colors.littleGray, fontSize: 10, marginTop: Colors.spacing * .5, width: '20%' }}>Property</Text>
                            <Text style={{ fontWeight: '300', color: Colors.littleGray, fontSize: 10, marginTop: Colors.spacing * .5, }}>{'Unit'}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ fontWeight: '600', color: Colors.littleGray, fontSize: 10, marginTop: Colors.spacing * .5, width: '20%' }}>Size</Text>
                            <Text style={{ fontWeight: '300', color: Colors.littleGray, fontSize: 10, marginTop: Colors.spacing * .5, }}>{item.bedrooms}bd | {item.bathrooms}ba</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ fontWeight: '600', color: Colors.littleGray, fontSize: 10, marginTop: Colors.spacing * .5, width: '20%' }}>Time</Text>
                            <Text style={{ fontWeight: '300', color: Colors.littleGray, fontSize: 10, marginTop: Colors.spacing * .5, }}>{'10:00 AM'}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ fontWeight: '600', color: Colors.littleGray, fontSize: 10, marginTop: Colors.spacing * .5, width: '20%' }}>Date</Text>
                            <Text style={{ fontWeight: '300', color: Colors.littleGray, fontSize: 10, marginTop: Colors.spacing * .5, }}>{' booking date 10:00 AM'}</Text>
                        </View>


                        <View style={{}}>
                            <View style={{ flexDirection: 'row', marginVertical: Colors.spacing * .5 }}>
                                <Text style={{ fontWeight: '600', color: Colors.littleGray, fontSize: 10, marginTop: Colors.spacing * .5, width: '20%' }}>Add Ons</Text>

                                <View style={{}}>

                                    {item.products.map((x: any) => {
                                        return (
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing * .5, marginRight: Colors.spacing }}>
                                                <View style={{ backgroundColor: Colors.grayText, width: 4, height: 4, marginRight: Colors.spacing * .5, borderRadius: 100, }} /><Text style={{ fontSize: 10, color: Colors.littleGray }}>{x.description} ({x.quantity})</Text>
                                            </View>
                                        )

                                    })}

                                </View>

                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing * .5, marginBottom: Colors.spacing }}>
                                <Text style={{ fontWeight: '600', color: Colors.littleGray, fontSize: 10, width: '20%' }}>Notes</Text>
                                <Text style={{ fontWeight: '300', color: Colors.littleGray, fontSize: 10, }}>{'some Notes by customer'}</Text>
                            </View>

                            <View style={{
                                width: "100%", borderBottomWidth: .5,
                                borderColor: Colors.transparentGloss,
                                marginBottom: Colors.spacing * 2
                            }} />
                        </View>



                        <View style={{ marginBottom: Colors.spacing, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight: '600', color: Colors.green, fontSize: 16, marginRight: Colors.spacing }}>Payments</Text>
                                <View style={{
                                    backgroundColor: Colors.paid,
                                    paddingHorizontal: Colors.spacing, paddingVertical: Colors.spacing * .1, borderRadius: 2,
                                }}>
                                    <Text style={{
                                        fontSize: 13,
                                        color: 'white',
                                        fontWeight: '600',
                                    }}>Cash</Text>
                                </View>
                            </View>
                            <View style={{
                                backgroundColor: 'white', marginTop: Colors.spacing, padding: Colors.spacing, borderRadius: Colors.spacing * .5, elevation: 3, shadowRadius: 2,
                                shadowOpacity: .2,
                                shadowOffset: { width: 0, height: 1 },
                            }}>


                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                    <Text style={{ fontWeight: '600', color: Colors.littleGray, fontSize: 10, width: '20%' }}>Sub Total</Text>
                                    <Text style={{ fontWeight: '600', color: Colors.littleGray, fontSize: 13, }}>${item.subtotal}</Text>
                                </View>

                                <View style={{
                                    width: "100%", borderBottomWidth: .5,
                                    borderColor: Colors.transparentGloss,
                                    marginVertical: Colors.spacing * .5
                                }} />

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                    <Text style={{ fontWeight: '600', color: Colors.littleGray, fontSize: 10, marginTop: Colors.spacing * .5, width: '20%' }}>Paid</Text>
                                    <Text style={{ fontWeight: '600', color: Colors.littleGray, fontSize: 13, marginTop: Colors.spacing * .5, }}>${item.subtotal}</Text>
                                </View>
                                <View style={{
                                    width: "100%", borderBottomWidth: .5,
                                    borderColor: Colors.transparentGloss,
                                    marginVertical: Colors.spacing * .5
                                }} />

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                    <Text style={{ fontWeight: '600', color: Colors.littleGray, fontSize: 10, marginTop: Colors.spacing * .5, width: '20%' }}>Total</Text>
                                    <Text style={{ fontWeight: '600', color: Colors.littleGray, fontSize: 13, marginTop: Colors.spacing * .5, }}>${item.subtotal}</Text>
                                </View>

                            </View>
                        </View>

                        {/*                         
                        <View style={{
                            width: "100%", borderBottomWidth: .5,
                            borderColor: Colors.transparentGloss,
                            marginBottom: Colors.spacing
                        }} /> */}

                    </View>






                    <View style={{ marginBottom: Colors.spacing, }}>
                        <Text style={{ fontWeight: '600', color: Colors.green, fontSize: 16, marginBottom: Colors.spacing, }}>Job Notes</Text>


                        {/* {notes_data.map((item) =>
                    (<NotesCard name={item.name} date={item.date} img={item.img} note={item.note} key={item.id} />)
                )} */}

                        < NotesAccordian title={'Job Notes'} data={item.notes} />


                        <View style={{
                            marginTop: Colors.spacing,
                            width: "100%", borderBottomWidth: .5,
                            borderColor: Colors.transparentGloss,
                            marginBottom: Colors.spacing
                        }} />

                    </View>


                    <View style={{ marginBottom: Colors.spacing, }}>
                        <Text style={{ fontWeight: '600', color: Colors.green, fontSize: 16, marginBottom: Colors.spacing }}>Timeline</Text>


                        {/* {item.timelines.map((obj: any) => (<NotesAccordian title={'Timeline'} data={timeline_data} />))} */}


                        <NotesAccordian title={'Timeline'} data={item.timelines} />
                        <View style={{
                            marginTop: Colors.spacing,
                            width: "100%", borderBottomWidth: .5,
                            borderColor: Colors.transparentGloss,
                            marginBottom: Colors.spacing
                        }} />

                    </View>


                </ScrollView>


            </View>
        </View>

    )
}

export default ViewQuoteModalComponents