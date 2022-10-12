import { Dimensions, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import AddOnsCard from './AddOnsCard';


const isAndroid = Platform.OS == 'android' ? true : false
const PropertyInfoCard = () => {
    const [selectedProperty, setSelectedProperty] = useState('Unit')
    const { width, height } = Dimensions.get('screen')

    const property = [
        {
            id: '00',
            label: 'Unit',
            color: Colors.green
        },
        {
            id: '01',
            label: 'House',
            color: Colors.red
        },
        {
            id: '02',
            label: 'Studio',
            color: 'orange'
        },
    ]

    return (
        <View style={{}}>
            <Text style={{ fontSize: 16, color: Colors.green, marginBottom: Colors.spacing, fontWeight: isAndroid ? "900" : "600", }}>Property Info</Text>
            <View style={{
                backgroundColor: 'white',
                padding: Colors.spacing,
                borderRadius: 10,
                elevation: 3,
                shadowRadius: 2,
                shadowOpacity: .2,
                shadowOffset: { width: 0, height: 1 },
            }}>



                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: Colors.spacing * .25, marginBottom: Colors.spacing, }}>
                    {property.map((x) => {
                        return (
                            <Pressable onPress={() => setSelectedProperty(x.label)}
                                style={{
                                    width: width * .25, opacity: selectedProperty === x.label ? 1 : .4,
                                    borderRadius: 4, justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: x.color,
                                }}>
                                <Text style={{ paddingVertical: Colors.spacing * .75, color: 'white', fontWeight: isAndroid ? "900" : "600", fontSize: 24 }} key={x.id}>{x.label}</Text>
                            </Pressable>
                        )
                    })}
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Colors.spacing * .25, marginBottom: Colors.spacing * 1, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, color: Colors.littleGray, fontWeight: isAndroid ? "900" : "600", }}>Bedrooms</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '30%', justifyContent: 'space-between' }}>
                        <Icon name="add-circle" size={28} color={Colors.grayOne} />
                        <Text style={{ fontSize: 20, fontWeight: isAndroid ? "900" : "600", color: Colors.littleGray, }}>2</Text>
                        <Icon name="remove-circle" size={28} color={Colors.grayOne} />
                    </View>
                </View>




                <View style={{}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Colors.spacing * .25, marginBottom: Colors.spacing * 1, justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, color: Colors.littleGray, fontWeight: isAndroid ? "900" : "600", }}>Bathrooms</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '30%', justifyContent: 'space-between' }}>
                            <Icon name="add-circle" size={28} color={Colors.grayOne} />
                            <Text style={{ fontSize: 20, fontWeight: isAndroid ? "900" : "600", color: Colors.littleGray, }}>2</Text>
                            <Icon name="remove-circle" size={28} color={Colors.grayOne} />
                        </View>
                    </View>

                    <View style={{ overflow: 'hidden' }}>
                        <AddOnsCard />
                    </View>
                </View>


            </View>
        </View>
    )
}

export default PropertyInfoCard

const styles = StyleSheet.create({})