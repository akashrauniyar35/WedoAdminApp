import { View, Text, Image, Platform } from 'react-native'
import React from 'react'
import {Colors} from '../../assets/Colors'


const isAndroid = Platform.OS == 'android' ? true : false
const NotesCard = ({ name, date, img, note, item, createdAt, title }: any) => {
    console.log("note items", item)



    var getInitials = function (string: string) {
        var names = string.split(' '),
            initials = names[0].substring(0, 1).toUpperCase();

        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
    };


    return (
        <View style={{}}>
            <View style={{ flexDirection: 'row',}}>

                <View style={{ marginRight: Colors.spacing }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: 30, height: 30, borderRadius: 100, backgroundColor: Colors.green, }}><Text style={{ fontWeight: isAndroid ? "900" : "600", color: 'white' }}>{getInitials(name)}</Text></View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', top: -Colors.spacing, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 13, fontWeight: '600', color: Colors.littleGray, width: '60%', }}>{name}</Text>
                    <Text style={{ fontSize: 10, fontWeight: '300', color: Colors.grayText, }}>{createdAt.substring(0, 15)}</Text>

                </View>
            </View>
            <View style={{ marginLeft: Colors.spacing * 3.5, top: -Colors.spacing * 2 }}>
                <Text style={{ fontSize: 13, fontWeight: '300', color: Colors.grayText, marginTop: Colors.spacing * .5, marginLeft: Colors.spacing }}>{title}</Text>
            </View>

        </View>
    )
}
export default NotesCard