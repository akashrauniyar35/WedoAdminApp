import { View, Text, Pressable, Platform } from 'react-native'
import React from 'react'
import { Colors, lightenColor } from '../../assets/Colors'
import { useSelector, useDispatch } from 'react-redux'
import { viewQuotePending } from '../../redux/quoteTableSlice';
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { formatDate } from '../../components/dataConverters';

const isAndroid = Platform.OS == 'android' ? true : false


const QuoteCard = ({ item, index, viewQuote, editQuote }) => {

    console.log('q card', item)
    const dispatch = useDispatch()

    const editQuoteHandler = () => {

    }
    const openQuoteHandler = () => {

        let quoteID = item._id
        dispatch(viewQuotePending(quoteID))
        viewQuote()
    }


    const x = String(item.subtotal).slice(0, 3);
    const quotePrice = Number(x).toFixed(2)


    return (

        <Pressable onPress={openQuoteHandler} >
            <View style={{

                flexDirection: 'column', width: '100%', paddingVertical: Colors.spacing * 2, backgroundColor: index % 2 === 0 ? Colors.grayBG : "white", borderRadius: Colors.spacing * 1,

            }}>

                <View style={{ flexDirection: 'row', position: 'relative', paddingHorizontal: Colors.spacing * 2 }}>
                    <View style={{ width: '100%' }}>
                        <View style={{
                            marginBottom: Colors.spacing * .25,
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                < Text style={{ fontSize: 24, fontWeight: isAndroid ? "900" : "600", color: Colors.green }}>#{item._id.substring(0, 10)}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                <View style={{
                                    paddingHorizontal: Colors.spacing * 1, paddingVertical: Colors.spacing * .35, borderRadius: Colors.spacing * 10
                                    , backgroundColor: item.status === "Completed" ? `#${lightenColor(Colors.paid, 35)}` : item.status === "Scheduled" ? "orange" : item.status === "In Progress" ? `#${lightenColor(Colors.grayText, 35)}` : `#${lightenColor(Colors.red, 35)}`,
                                }}>

                                    < Text style={{ fontSize: 10, opacity: 1, fontWeight: isAndroid ? "900" : "600", color: 'white' }}>{'In Progress'}</Text>
                                </View>
                                <Pressable onPress={editQuote} style={{ marginLeft: Colors.spacing * 1.5, }}>
                                    <IconM name="circle-edit-outline" size={22} color={Colors.grayOne} />
                                </Pressable>
                            </View>


                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>


                            {item.quoteReference ? <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                <Icon name="calendar" size={16} color={Colors.grayOne} />
                                <Text style={{ marginLeft: Colors.spacing * .5, fontSize: 14, color: Colors.grayText, fontWeight: isAndroid ? "900" : "600", marginRight: Colors.spacing * 2, }}>{formatDate(item.createdAt.substring(0, 24)).substring(0, 20)}</Text>
                            </View> : null}


                            < View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Icon name="logo-usd" size={16} color={Colors.grayOne} />
                                <Text style={{ fontSize: 14, color: Colors.grayText, fontWeight: isAndroid ? "900" : "600" }}>{quotePrice}</Text>
                            </View>


                        </View>


                        <View style={{ marginTop: Colors.spacing * 3, }}>
                            <Text style={{ fontSize: 16, fontWeight: isAndroid ? "900" : "600", color: Colors.green, }}>{item.name}</Text>

                            <View style={{ flexDirection: 'column', marginTop: Colors.spacing * .5 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing * .25, }}>

                                    <Icon name="checkmark-circle" size={16} color={Colors.grayOne} />
                                    <Text style={{ fontSize: 14, color: Colors.grayText, fontWeight: isAndroid ? "900" : "600", marginLeft: Colors.spacing * .85, marginRight: Colors.spacing * 2 }}>{item.service}</Text>
                                </View>


                                {item.location ? <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing * .5 }}>

                                    <Icon name="location" size={16} color={Colors.grayOne} />
                                    <Text style={{ fontSize: 14, color: Colors.grayText, fontWeight: isAndroid ? "900" : "600", marginLeft: Colors.spacing * .85, marginRight: Colors.spacing * 2 }}>{item.location}</Text>
                                </View> : null}


                                {item.phone ?
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing * .5, }}>
                                        <Icon name="call" size={16} color={Colors.grayOne} />
                                        <Text style={{ fontSize: 14, color: Colors.grayText, fontWeight: isAndroid ? "900" : "600", marginLeft: Colors.spacing * .85, marginRight: Colors.spacing * 2 }}>{item.phone}</Text>
                                    </View> : null}

                                {item.email ? <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing * .5, }}>
                                    <Icon name="mail" size={16} color={Colors.grayOne} />
                                    <Text style={{ fontSize: 14, color: Colors.grayText, fontWeight: isAndroid ? "900" : "600", marginLeft: Colors.spacing * .85, marginRight: Colors.spacing * 2 }}>{item.email}</Text>
                                </View>
                                    : null}
                            </View>

                        </View>

                        {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing }}>
                        

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing * .5, }}>
                                <Icon name="call-outline" size={16} color={Colors.grayText} />
                                <Text style={{ fontSize: 14, color: Colors.grayText, fontWeight: isAndroid ? "900" : "600", marginLeft: Colors.spacing * .85, marginRight: Colors.spacing * 2 }}>{item.phone}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing * .25, }}>
                                <Icon name="mail-outline" size={16} color={Colors.grayText} />
                                <Text style={{ fontSize: 14, color: Colors.grayText, fontWeight: isAndroid ? "900" : "600", marginLeft: Colors.spacing * .85, marginRight: Colors.spacing * 2 }}>{item.email}</Text>
                            </View>

                        </View> */}


                    </View>
                </View>

                {/* <View style={{}}>
                    <Text style={{ fontSize: 12, }}>{item.suburb}</Text>
                </View>

                <View style={{}}>
                    <Text style={{ fontSize: 12, }}>{'item.service'}</Text>
                </View> */}

            </View >
        </Pressable >
    )
}

export default QuoteCard
