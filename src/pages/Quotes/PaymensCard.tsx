import { View, Text, Platform } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/Colors'
import { sub } from 'react-native-reanimated'
const isAndroid = Platform.OS == 'android' ? true : false
const PaymensCard = ({ subtotal }) => {

    const x = String(subtotal).slice(0, 3);
    const quotePrice = Number(x).toFixed(2)

    console.log('first', quotePrice)
    return (
        <View>
            <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.green, fontSize: 16, marginRight: Colors.spacing }}>Payments</Text>
            <View style={{
                backgroundColor: 'white', marginTop: Colors.spacing, padding: Colors.spacing, borderRadius: Colors.spacing * .5, elevation: 3, shadowRadius: 2,
                shadowOpacity: .2,
                shadowOffset: { width: 0, height: 1 },
            }}>


                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.littleGray, fontSize: 16, marginTop: Colors.spacing * .5, }}>Sub Total</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '25%', justifyContent: 'flex-end' }}>
                        <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.littleGray, fontSize: 16, marginTop: Colors.spacing * .5, }}>$ </Text>
                        <Text style={{ width: '80%', fontWeight: isAndroid ? "900" : "600", color: Colors.littleGray, fontSize: 16, marginTop: Colors.spacing * .5, textAlign: 'left' }}>{quotePrice === "NaN" ? '0.00' : quotePrice}</Text>
                    </View>
                </View>

                <View style={{
                    width: "100%", borderBottomWidth: .5,
                    borderColor: Colors.transparentGloss,
                    marginVertical: Colors.spacing * .5
                }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.littleGray, fontSize: 16, marginTop: Colors.spacing * .5, }}>Paid</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '25%', justifyContent: 'flex-end' }}>
                        <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.littleGray, fontSize: 16, marginTop: Colors.spacing * .5, }}>$ </Text>
                        <Text style={{ width: '80%', fontWeight: isAndroid ? "900" : "600", color: Colors.littleGray, fontSize: 16, marginTop: Colors.spacing * .5, textAlign: 'left' }}>{'0.00'}</Text>
                    </View>
                </View>

                <View style={{
                    width: "100%", borderBottomWidth: .5,
                    borderColor: Colors.transparentGloss,
                    marginVertical: Colors.spacing * .5
                }} />



                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.littleGray, fontSize: 16, marginTop: Colors.spacing * .5, }}>Total</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '25%', justifyContent: 'flex-end' }}>
                        <Text style={{ fontWeight: isAndroid ? "900" : "600", color: Colors.littleGray, fontSize: 16, marginTop: Colors.spacing * .5, }}>$ </Text>
                        <Text style={{ width: '80%', fontWeight: isAndroid ? "900" : "600", color: Colors.littleGray, fontSize: 16, marginTop: Colors.spacing * .5, textAlign: 'left' }}>{quotePrice === "NaN" ? '0.00' : quotePrice}</Text>
                    </View>
                </View>


            </View>
        </View>
    )
}

export default PaymensCard