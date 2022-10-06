import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Colors from '../../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomerDetailsCard = () => {
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
                <Text style={{ fontSize: 13, color: Colors.littleGray, marginBottom: Colors.spacing }}>Customer Details</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Colors.spacing * .25 }}>
                    <IconM name="account-circle" size={20} color={Colors.grayOne} />
                    <TextInput placeholder="Customer Full Name" placeholderTextColor={Colors.grayText} style={{ paddingVertical: Colors.spacing * .5, paddingLeft: Colors.spacing, fontSize: 13, }} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Colors.spacing * .25 }}>
                    <IconM name="phone" size={20} color={Colors.grayOne} />
                    <TextInput placeholder="0415701789" placeholderTextColor={Colors.grayText} style={{ paddingVertical: Colors.spacing * .5, paddingLeft: Colors.spacing, fontSize: 13, }} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Colors.spacing * .25 }}>
                    <IconM name="at" size={20} color={Colors.grayOne} />
                    <TextInput placeholder="emial@gmail.com" placeholderTextColor={Colors.grayText} style={{ paddingVertical: Colors.spacing * .5, paddingLeft: Colors.spacing, fontSize: 13, }} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Colors.spacing * .25 }}>
                    <IconM name="map-marker" size={20} color={Colors.grayOne} />
                    <TextInput placeholder="30 Henley Rd Homebush West 2140 NSW" placeholderTextColor={Colors.grayText} style={{ paddingVertical: Colors.spacing * .5, paddingLeft: Colors.spacing, fontSize: 13, }} />
                </View>

            </View>
        </View>
    )
}

export default CustomerDetailsCard

const styles = StyleSheet.create({})