import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import InputBox from './InputBox'
import { Colors, HEIGHT, isAndroid, WIDTH } from '../assets/Colors'
import JobPayments from './JobPayments'

const JobTotals = () => {
    return (
        <View>
            <Text style={{ fontSize: 18, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", marginBottom: Colors.spacing * 2 }}>Totals</Text>
            <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", marginBottom: Colors.spacing * 2 }}>Job details</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing * 2, }}>
                <Text style={{ fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>Base price</Text>
                <View style={{ width: "50%" }}>
                    <InputBox bold={true} placeholderSize={14} size={40} rounded={true} placeholder="$ 100.00" bg={Colors.grayBG} itemsCenter={true} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing * 2, }}>
                <View style={{ alignSelf: "flex-start", marginTop: -Colors.spacing * .5 }}>
                    <Text style={{ fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", marginBottom: Colors.spacing * .5 }}>1  Bedroom</Text>
                    <Text style={{ fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>1  Bathroom</Text>
                </View>
                <View style={{ width: "50%" }}>
                    <InputBox bold={true} placeholderSize={14} size={40} rounded={true} placeholder="$ 0.00" bg={Colors.grayBG} itemsCenter={true} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing * 2, }}>
                <Text style={{ fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>Addons</Text>
                <View style={{ width: "50%" }}>
                    <InputBox bold={true} placeholderSize={14} bold={true} size={40} rounded={true} placeholder="$ 0.00" bg={Colors.grayBG} itemsCenter={true} />
                </View>
            </View>

            <View style={{ marginVertical: Colors.spacing * 1, marginBottom: Colors.spacing * 3, borderBottomWidth: .35, borderColor: Colors.maidlyGrayText }} />



            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing * 2, }}>
                <Text style={{ fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>Discount</Text>
                <View style={{ width: "50%" }}>
                    <InputBox bold={true} placeholderSize={14} size={40} rounded={true} placeholder="$ 0.00" bg={Colors.grayBG} itemsCenter={true} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing * 2, }}>
                <Text style={{ fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>Additional charges</Text>
                <View style={{ width: "50%" }}>
                    <InputBox bold={true} placeholderSize={14} size={40} rounded={true} placeholder="$ 0.00" bg={Colors.grayBG} itemsCenter={true} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing * 2, }}>
                <Text style={{ fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>Total Addons</Text>
                <View style={{}}>
                    <Text style={{ fontSize: 22, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>$ 0.00</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing * 2, }}>
                <Text style={{ fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>Tax</Text>
                <View style={{ width: "50%" }}>
                    <InputBox bold={true} placeholderSize={14} size={40} rounded={true} placeholder="$ 0.00" bg={Colors.grayBG} itemsCenter={true} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing * 2, }}>
                <Text style={{ fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>Total</Text>
                <View style={{}}>
                    <Text style={{ fontSize: 22, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>$ 100.00</Text>
                </View>
            </View>

            <View style={{ marginVertical: Colors.spacing * 1, marginBottom: Colors.spacing * 3, borderBottomWidth: .35, borderColor: Colors.maidlyGrayText }} />


            <JobPayments />

            <View style={{ opacity: .35, marginVertical: Colors.spacing * 2, borderBottomWidth: 2, borderColor: Colors.maidlyGrayText }} />
        </View>
    )
}

export default JobTotals

const styles = StyleSheet.create({

})