import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';


const isAndroid = Platform.OS == 'android' ? true : false
const CustomerDetailsCard = () => {
    return (
        <View style={{}}>
            <Text style={{ fontSize: 16, color: Colors.green, marginBottom: Colors.spacing, fontWeight: isAndroid ? "900" : "600", }}>Customer Details</Text>

            <View style={{
                backgroundColor: 'white',
                padding: Colors.spacing,
                borderRadius: 10,
                elevation: 3,
                shadowRadius: 2,
                shadowOpacity: .2,
                shadowOffset: { width: 0, height: 1 },
            }}>


                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <IconM name="account-circle" size={24} color={Colors.grayOne} />
                    <TextInput placeholder="Customer Full Name" placeholderTextColor={Colors.littleGray} style={{ color: Colors.littleGray, paddingVertical: Colors.spacing * .5, paddingLeft: Colors.spacing, fontSize: 16, fontWeight: isAndroid ? "900" : "600", }} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <IconM name="phone" size={24} color={Colors.grayOne} />
                    <TextInput placeholder="0415701789" placeholderTextColor={Colors.littleGray} style={{ color: Colors.littleGray, paddingVertical: Colors.spacing * .5, paddingLeft: Colors.spacing, fontSize: 16, fontWeight: isAndroid ? "900" : "600", }} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <IconM name="at" size={24} color={Colors.grayOne} />
                    <TextInput placeholder="emial@gmail.com" placeholderTextColor={Colors.littleGray} style={{ color: Colors.littleGray, paddingVertical: Colors.spacing * .5, paddingLeft: Colors.spacing, fontSize: 16, fontWeight: isAndroid ? "900" : "600", }} />
                </View>



                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <IconM name="map-marker" size={24} color={Colors.grayOne} />
                    <TextInput placeholder="30 Henley Rd Homebush West 2140 NSW" placeholderTextColor={Colors.littleGray} style={{ color: Colors.littleGray, paddingVertical: Colors.spacing * .5, paddingLeft: Colors.spacing, fontSize: 16, fontWeight: isAndroid ? "900" : "600", }} />
                </View>


            </View>
        </View>
    )
}

export default CustomerDetailsCard

const styles = StyleSheet.create({})