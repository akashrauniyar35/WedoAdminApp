import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import {Colors} from '../../assets/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ClientCard = () => {
    return (
        <View style={{
            borderRadius: 10,
            shadowRadius: 2,
            padding: 10,
            shadowOpacity: .2,
            backgroundColor: 'white',
            shadowOffset: { width: 0, height: 1 },
            // padding: Colors.spacing,
        }}>
          
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{ backgroundColor: '#caf1de', padding: 4, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', position: 'relative', borderRadius: 100 }}>
                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2922/2922510.png' }} style={{ width: 35, height: 35 }} />
                    </View>

                    <View style={{ marginLeft: Colors.spacing }}>
                        <Text style={{ fontSize: 13, color: Colors.black, fontWeight: '600' }}>First Last Name</Text>
                        <Text style={{ color: Colors.black, fontSize: 13, }}>email@gmail.com</Text>
                        <Text style={{ color: Colors.black, fontSize: 12, }}>0415700189</Text>
                    </View>
                </View>

                <View style={{}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        < Icon name="download-circle-outline" size={22} color={Colors.paid} style={{ marginRight: Colors.spacing * .5 }} />
                        < Icon name="cancel" size={22} color={Colors.grayText} style={{ marginRight: Colors.spacing * .5 }} />
                        < Icon name="email-send-outline" size={22} color={Colors.grayText} style={{ marginRight: Colors.spacing * .5 }} />
                        < Icon name="delete-circle" size={22} color={Colors.unPaid} />
                    </View>

                    <Pressable>
                        <View style={{ backgroundColor: Colors.green, paddingVertical: 1.5, borderRadius: 4, marginTop: Colors.spacing * .5 }}>
                            <Text style={{ fontSize: 13, color: 'white', alignSelf: 'center' }}>Create Booking</Text>
                        </View>
                    </Pressable>

                </View>
            </View>

        </View >
    )
}

export default ClientCard

const styles = StyleSheet.create({})