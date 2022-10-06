import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Colors from '../../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

const JobsDetailsCard = () => {
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
                <Text style={{ fontSize: 13, color: Colors.littleGray, marginBottom: Colors.spacing }}>Service</Text>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Colors.spacing * .25 }}>
                    <IconM name="cog-outline" size={20} color={Colors.grayOne} />
                    <TextInput placeholder="End of Lease Cleaning" placeholderTextColor={Colors.grayText} style={{ paddingVertical: Colors.spacing * .5, paddingLeft: Colors.spacing, fontSize: 13, }} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Colors.spacing * .25, marginBottom: Colors.spacing * .5, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 11, color: Colors.littleGray, }}>Bedrooms</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '25%', justifyContent: 'space-between' }}>
                        <Icon name="add-circle" size={22} color={Colors.grayOne} />
                        <Text style={{ fontSize: 14, fontWeight: '600', color: Colors.littleGray, }}>2</Text>
                        <Icon name="remove-circle" size={22} color={Colors.grayOne} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Colors.spacing * .25, marginBottom: Colors.spacing * .5, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 11, color: Colors.littleGray, }}>Bathrooms</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '25%', justifyContent: 'space-between' }}>
                        <Icon name="add-circle" size={22} color={Colors.grayOne} />
                        <Text style={{ fontSize: 14, fontWeight: '600', color: Colors.littleGray, }}>2</Text>
                        <Icon name="remove-circle" size={22} color={Colors.grayOne} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Colors.spacing * .25, marginBottom: Colors.spacing * .5, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 11, color: Colors.littleGray, }}>Study Room</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '25%', justifyContent: 'space-between' }}>
                        <Icon name="add-circle" size={22} color={Colors.grayOne} />
                        <Text style={{ fontSize: 14, fontWeight: '600', color: Colors.littleGray, }}>1</Text>
                        <Icon name="remove-circle" size={22} color={Colors.grayOne} />
                    </View>
                </View>




            </View>
        </View>
    )
}

export default JobsDetailsCard

const styles = StyleSheet.create({})