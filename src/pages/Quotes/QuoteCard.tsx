import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../assets/Colors'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux'
import { viewQuotePending } from '../../redux/quoteTableSlice';




const QuoteCard = ({ item, index, viewQuote, editQuote }) => {


    const dispatch = useDispatch()

    const editQuoteHandler = () => {

    }
    const openQuoteHandler = () => {
        let quoteID = item._id
        dispatch(viewQuotePending(quoteID))
        viewQuote()
    }

    return (
        <Pressable onPress={openQuoteHandler}>
            <View style={{ flexDirection: 'column', width: '100%', paddingVertical: 10, backgroundColor: index % 2 === 0 ? Colors.grayBG : "white" }}>

                <View style={{ flexDirection: 'row', marginLeft: Colors.spacing, position: 'relative' }}>
                    <View style={{}}>
                        <View style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: "90%", }}>
                                < Text style={{ fontSize: 18, fontWeight: '600', color: Colors.green }}>#{item._id.substring(0, 10)}</Text>
                                < Text style={{ opacity: .8, fontSize: 11, backgroundColor: index % 2 === 0 ? "white" : Colors.grayBG, fontWeight: '600', color: item.status === "Completed" ? Colors.paid : item.status === "Scheduled" ? "orange" : item.status === "In Progress" ? Colors.grayText : Colors.red, paddingHorizontal: Colors.spacing * 1, paddingVertical: Colors.spacing * .25, borderRadius: Colors.spacing * .5, marginLeft: Colors.spacing }}>{'item.status'}</Text>
                            </View>
                            <Pressable onPress={editQuote} style={{ marginLeft: Colors.spacing * .5 }}>
                                <IconM name="circle-edit-outline" size={20} color={Colors.grayText} />
                            </Pressable>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ fontSize: 13, color: Colors.littleGray }}>{'item.date'}</Text>
                            <View style={{ backgroundColor: Colors.grayText, width: 4, height: 4, marginHorizontal: Colors.spacing, borderRadius: 100, }} />
                            <Text style={{ fontSize: 13, color: Colors.littleGray }}>${'item.price'}</Text>

                        </View>


                        <Text style={{ fontSize: 16, fontWeight: '600', marginTop: Colors.spacing, color: Colors.lightRed }}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ fontSize: 13, color: Colors.littleGray }}>{item.suburb}</Text>
                            <View style={{ backgroundColor: Colors.grayText, width: 4, height: 4, marginHorizontal: Colors.spacing, borderRadius: 130, }} />
                            <Text style={{ fontSize: 13, color: Colors.littleGray }}>{item.service}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing }}>
                            <Text style={{ fontSize: 13, color: Colors.littleGray }}>{item.phone}</Text>
                            <View style={{ backgroundColor: Colors.grayText, width: 4, height: 4, marginHorizontal: Colors.spacing, borderRadius: 130, }} />
                            <Text style={{ fontSize: 13, color: Colors.littleGray }}>{item.email}</Text>
                        </View>
                    </View>
                </View>

                {/* <View style={{}}>
            <Text style={{ fontSize: 12, }}>{item.suburb}</Text>
        </View>

        <View style={{}}>
            <Text style={{ fontSize: 12, }}>{item.service}</Text>
        </View> */}

            </View >
        </Pressable >
    )
}

export default QuoteCard
