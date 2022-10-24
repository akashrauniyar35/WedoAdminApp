import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, isAndroid } from '../assets/Colors'
import InputBox from './InputBox'
import AddressCard from './AddressCard'


const CustomerCard = ({ name, phone, email, nameHandler, phoneHandler, emailHandler, unit, streetAddress, suburb, postCode, state, unitHandler, streetAddressHandler, suburbHandler, postCodeHandler,  }) => {

    const [predectionsVisible, setPredectionsVisible] = useState(false)
    const toggleLocations = () => { setPredectionsVisible(!predectionsVisible) }


const onAddressChange = (value) => {
console.log('123124',value)
}


    return (

        <View style={{}}>
            <Text style={{ fontSize: 18, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", marginBottom: Colors.spacing * 2 }}>Customer info</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing * 2, }}>
                <Text style={{ fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>Name</Text>
                <View style={{ width: "70%", }}>
                    <InputBox placeholder={name} size={40} rounded={true} onChange={nameHandler} placeholderSize={12} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing * 2 }}>
                <Text style={{ fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>Number</Text>
                <View style={{ width: "70%" }}>
                    <InputBox maxLength={10} size={40} rounded={true} placeholder={phone} onChange={phoneHandler} keyboardType="phone-pad" placeholderSize={12} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing * 2 }}>
                <Text style={{ fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>Email</Text>
                <View style={{ width: "70%", }}>
                    <InputBox size={40} rounded={true} placeholder={email} onChange={emailHandler} keyboardType="email-address" placeholderSize={12} />
                </View>
            </View>

            <View style={{}}>

                <View style={{ width: "100%" }}>
                    <AddressCard   />
                </View>

            </View>

            <View style={{ width: '100%', opacity: .35, marginVertical: Colors.spacing * 2, borderBottomWidth: 2, borderColor: Colors.maidlyGrayText }} />

        </View>

    )
}

export default CustomerCard

const styles = StyleSheet.create({})