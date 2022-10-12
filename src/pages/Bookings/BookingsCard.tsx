import { Dimensions, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import {Colors} from '../../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import OpenBookingModal from './OpenBookingModal';


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

const { width, height } = Dimensions.get('screen')

const BookingsCard = ({ item }) => {
    const [openBooking, setOpenBooking] = useState(false);

    const onPress = () => {
        setOpenBooking(!openBooking);
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={() => onPress()}>
                <View style={{
                    flex: 1,
                 
                    padding: 10,
                    marginBottom: 15,
                    borderRadius: 10,
                    elevation: 3,
                    backgroundColor: 'white',
                    shadowRadius: 2,
                    shadowOpacity: .2,
                    shadowOffset: { width: 0, height: 1 },
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <View style={{
                        backgroundColor: Colors.red, alignItems: 'center',
                        justifyContent: 'center', borderRadius: 100, width: 40, height: 40, marginRight: 10
                    }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: '700', }}>{item.service}</Text>
                    </View>
                    <View style={{ width: '85%', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ color: Colors.black, fontWeight: '600' }}>{item.name}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ color: Colors.black, fontWeight: '600', marginRight: 5, fontSize: 12, }}>
                                    {item.paid ? "PAID" : "UNPAID"}</Text>
                                <Icon name="checkmark-circle" size={24} style={{ color: item.paid ? Colors.paid : Colors.unPaid, }} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
                            <Icon name="call-outline" size={14} style={{ color: Colors.paid, marginRight: 5 }} />
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '92%' }}>
                                <Text style={{ color: "gray", fontSize: 12, }}>04158701678</Text>
                                <Text style={{ color: "gray", fontSize: 12, }}>{item.date}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Icon name="location-outline" size={14} style={{ color: Colors.red, marginRight: 5 }} />
                                <Text style={{ color: Colors.black, fontSize: 12, }}>{item.location}</Text>
                            </View>
                            {item.invoiced ? <Text style={{ color: Colors.green, fontWeight: '600', fontSize: 12, }}>Invoiced</Text> : null}
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            {openBooking ? <OpenBookingModal isOpen={openBooking} onPress={onPress} onClose={onPress} /> : null}
        </>
    )
}

export default BookingsCard

const styles = StyleSheet.create({})