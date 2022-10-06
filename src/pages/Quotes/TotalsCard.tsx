import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Colors from '../../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

const TotalsCard = () => {
    return (
        <View style={{ paddingHorizontal: Colors.spacing * 1, }}>
            <View style={{
                backgroundColor: 'white',
                padding: Colors.spacing,
                borderRadius: 10,
                elevation: 3,
                shadowRadius: 2,
                shadowOpacity: .2,
                shadowOffset: { width: 0, height: 1 },
            }}>
                <Text style={{ fontSize: 13, color: Colors.littleGray, marginBottom: Colors.spacing }}>Totals</Text>


                {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Colors.spacing * .25 }}>
                    <IconM name="cog-outline" size={20} color={Colors.grayOne} />
                    <TextInput placeholder="End of Lease Cleaning" placeholderTextColor={Colors.grayText} style={{ paddingVertical: Colors.spacing * .5, paddingLeft: Colors.spacing, fontSize: 13, }} />
                </View> */}

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Colors.spacing * .25, marginBottom: Colors.spacing * .5, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 11, color: Colors.littleGray, }}>{2} Bedrooms</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: "22%", }}>
                        <Text style={{ fontSize: 14, color: Colors.littleGray, fontWeight: '600', marginRight: 10 }}>$</Text>
                        <Text style={{ fontSize: 14, color: Colors.littleGray, fontWeight: '600' }}>300.00</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Colors.spacing * .25, marginBottom: Colors.spacing * .5, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 11, color: Colors.littleGray, }}>{2} Bathrooms</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: "22%", }}>
                        <Text style={{ fontSize: 14, color: Colors.littleGray, fontWeight: '600', marginRight: 10 }}>$</Text>
                        <Text style={{ fontSize: 14, color: Colors.littleGray, fontWeight: '600' }}>200.00</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Colors.spacing * .25, marginBottom: Colors.spacing * .5, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 11, color: Colors.littleGray, }}>{1} Study Room</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '22%' }}>
                        <Text style={{ fontSize: 14, color: Colors.littleGray, fontWeight: '600', marginRight: 10 }}>$</Text>
                        <Text style={{ fontSize: 14, color: Colors.littleGray, fontWeight: '600' }}>60.00</Text>
                    </View>
                </View>

                <View style={{
                    width: "100%", borderBottomWidth: .5,
                    borderColor: Colors.transparentGloss,
                    marginVertical: Colors.spacing
                }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Colors.spacing * .25, marginBottom: Colors.spacing * .5, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 11, color: Colors.littleGray, }}>{1} Study Room</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '22%' }}>
                        <Text style={{ fontSize: 14, color: Colors.littleGray, fontWeight: '600', marginRight: 6 }}>$</Text>
                        <Text style={{ fontSize: 14, color: Colors.littleGray, fontWeight: '600' }}>6000.00</Text>
                    </View>
                </View>


            </View>
        </View>
    )
}

export default TotalsCard

const styles = StyleSheet.create({})