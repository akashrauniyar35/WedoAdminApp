import { View, Text } from 'react-native'
import React from 'react'
import {Colors} from '../../assets/Colors'

const RequestedServiceCard = () => {
    return (
        <View style={{
            borderRadius: 10,
            shadowRadius: 2,
            padding: 10,
            shadowOpacity: .2,
            backgroundColor: 'white',
            shadowOffset: { width: 0, height: 1 },
        }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <View style={{ width: "50%", }}>
                    <Text style={{ color: Colors.grayText, fontWeight: '600', fontSize: 13, }}>Requested Services</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing }}>
                        <Text style={{ fontSize: 13, width: '60%', fontWeight: '600', color: Colors.grayText }}>Bedrooms</Text>
                        <Text style={{ fontSize: 13, fontWeight: '600', color: Colors.grayText }}>2</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing * .5 }}>
                        <Text style={{ fontSize: 13, width: '60%', fontWeight: '600', color: Colors.grayText }}>Bathrooms</Text>
                        <Text style={{ fontSize: 13, fontWeight: '600', color: Colors.grayText }}>2</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing * .5 }}>
                        <Text style={{ width: '60%', fontSize: 13, fontWeight: '600', color: Colors.grayText }}>Separate Toilet</Text>
                        <Text style={{ fontSize: 13, fontWeight: '600', color: Colors.grayText }}>1</Text>
                    </View>

                </View>
                <View style={{ height: "100%", width: "50%", }}>
                    <Text style={{ color: Colors.grayText, fontWeight: '600', fontSize: 13, }}>Cost</Text>
                    <View style={{}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ color: Colors.grayText, fontWeight: '600', fontSize: 20, }}>$ </Text>
                            <Text style={{ color: Colors.grayText, fontWeight: '600', fontSize: 20, }}>660</Text>
                        </View>
                    </View>


                </View>
            </View >


        </View >
    )
}

export default RequestedServiceCard