import { View, Text, TouchableWithoutFeedback, Image, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import { formatDate } from '../../components/dataConverters';
const isAndroid = Platform.OS == 'android' ? true : false

const QuoteTimelineCard = ({ item, index, toggle, createdBy, title, icon }) => {

    const date = formatDate(item.date.substring(0, 24))
    return (
        <TouchableWithoutFeedback key={item.id}>
            <View style={styles.box}>
                <View style={{}}>
                    <View style={{ marginRight: Colors.spacing }}>
                        {/* <Image source={{ uri: 'https://randomuser.me/api/portraits/men/3.jpg' }} style={{ width: 35, height: 35, borderRadius: 100 }} /> */}

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Icon size={20} name={icon === "GiConfirmed" ? "checkmark-circle-outline" : icon === "AiOutlinePlusCircle" ? "add-circle-outline" : "close-circle-outline"} color={Colors.paid} />
                            <View style={{ marginLeft: Colors.spacing }}>
                                <Text style={{ color: Colors.grayOne, fontSize: 14, fontWeight: isAndroid ? "900" : "600", }}>{item.title}</Text>
                                <Text style={{ color: Colors.grayText, fontSize: 12, fontWeight: isAndroid ? "900" : "600", }}>{item.createdBy}</Text>
                            </View>
                        </View>
                        <Text style={{ color: Colors.grayText, fontSize: 10, }}>{date}</Text>
                    </View>

                </View>
            </View >
        </TouchableWithoutFeedback>
    )
}

export default QuoteTimelineCard

const styles = StyleSheet.create({
    box: {

        marginHorizontal: Colors.spacing * .5,
        marginBottom: Colors.spacing,
    },
})