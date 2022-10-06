import { View, Text, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';


const QuoteTimelineCard = ({ item, index, toggle, createdBy, title, icon }) => {
    return (
        <TouchableWithoutFeedback key={item.id}>
            <View style={styles.box}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{ marginRight: Colors.spacing }}>
                        {/* <Image source={{ uri: 'https://randomuser.me/api/portraits/men/3.jpg' }} style={{ width: 35, height: 35, borderRadius: 100 }} /> */}

                        <Icon size={20} name={icon === "GiConfirmed" ? "checkmark-circle-outline" : icon === "AiOutlinePlusCircle" ? "add-circle-outline" : "close-circle-outline"} color={Colors.paid} />
                    </View>
                    <View>
                        <Text style={{ color: Colors.grayText, fontSize: 10, }}>{item.date}</Text>
                        <Text style={{ color: Colors.littleGray, fontSize: 12, fontWeight: 'bold' }}>{item.title}</Text>
                    </View>
                </View>

                <Text style={{ color: Colors.littleGray, fontSize: 12, fontWeight: 'bold' }}>{item.createdBy}</Text>

            </View >
        </TouchableWithoutFeedback>
    )
}

export default QuoteTimelineCard

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: Colors.spacing * .5,
        marginBottom: Colors.spacing,
    },
})