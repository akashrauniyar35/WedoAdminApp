import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../assets/Colors'

const NotesCard = ({ name, date, img, note }: any) => {
    return (
        <View style={{}}>
            <View style={{ flexDirection: 'row', }}>
                <View style={{ marginRight: Colors.spacing }}>
                    <Image source={{ uri: img }} style={{ width: 35, height: 35, borderRadius: 100 }} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', top: -Colors.spacing }}>
                    <Text style={{ fontSize: 13, fontWeight: '600', color: Colors.littleGray, width: '50%', }}>{name}</Text>
                    <Text style={{ fontSize: 10, fontWeight: '300', color: Colors.grayText, }}>{date}</Text>

                </View>
            </View>
            <View style={{ marginLeft: Colors.spacing * 3.5, top: -Colors.spacing * 2 }}>
                <Text style={{ fontSize: 10, fontWeight: '300', color: Colors.littleGray, marginTop: Colors.spacing * .5, marginLeft: Colors.spacing }}>{note}</Text>

            </View>

        </View>
    )
}
export default NotesCard