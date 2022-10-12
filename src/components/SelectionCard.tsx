import { Alert, Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, isAndroid, lightenColor, WIDTH } from '../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';




const SelectionCard = ({ data, label, type, placeholder, rounded, border }) => {
    const [selected, setSelected] = useState();
    const [isOpen, setIsOpen] = useState(false)



    const onClickHandle = (visible) => {
        setIsOpen(visible)
    }

    const onTechSelect = (value) => {
        setIsOpen(false)
        setSelected(value)
    }

    return (
        <>
            <Pressable onPress={() => onClickHandle(true)}>
                {label && <Text style={{ fontSize: 20, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", marginBottom: Colors.spacing }}>{label}</Text>}
                <View style={[styles.box, { paddingHorizontal: rounded === true ? Colors.spacing * 2 : Colors.spacing, borderRadius: rounded === true ? Colors.spacing * Colors.spacing : Colors.spacing * .75, borderWidth: isAndroid ? .35 : 0, borderColor: Colors.maidlyGrayText }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            {type === "schedule" && <View style={{ borderRadius: 100, backgroundColor: selected === "Cancelled" ? Colors.red : selected === "Scheduled" ? 'orange' : selected === "In Progress" ? "orange" : selected === "Completed" ? Colors.paid : 'orange', width: 18, height: 18, marginRight: Colors.spacing, }} />}

                            <Text style={{ fontSize: 16, color: type === "filter" ? Colors.madidlyThemeBlue : Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700" }}>{selected ? selected : placeholder}</Text>
                        </View>
                        <Icon name="chevron-down" size={22} color={Colors.maidlyGrayText} />
                    </View>
                </View>
                {border === true && <View style={{ height: .25, width: '100%', marginVertical: Colors.spacing * 2, backgroundColor: Colors.maidlyGrayText }} />}
            </Pressable>

            <Modal style={{ flex: 1, }} animationType="fade" transparent={true} visible={isOpen} >
                <View style={styles.container}>
                    <View style={styles.selectonContainer}>
                        {data.map((item, index) => {
                            return (
                                <Pressable onPress={() => onTechSelect(item.name)}>
                                    <View key={item.id} style={{ flexDirection: 'row', borderColor: 'white', alignItems: 'center', justifyContent: 'space-between', paddingVertical: Colors.spacing * 1.5 }}>
                                        <Text style={{ fontSize: 16, color: 'white', fontWeight: isAndroid ? "900" : "700" }}>{item.name}</Text>
                                        <Icon name={selected === item.name ? "radio-button-on" : "radio-button-off"} size={24} color={'white'} />
                                    </View>
                                </Pressable>)
                        })}
                    </View>
                </View>
            </Modal >

        </>)
}

export default SelectionCard

const styles = StyleSheet.create({

    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.transparentGloss, },
    box: {
        backgroundColor: 'white',
        borderColor: Colors.maidlyGrayText,
        padding: Colors.spacing * 1,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: .5 },
        shadowOpacity: .2,
        elevation: 2,
        shadowColor: Colors.madidlyThemeBlue,
    },

    selectonContainer: {
        backgroundColor: Colors.maidlyGrayText,
        width: WIDTH * .8,
        padding: Colors.spacing * 2,

        paddingVertical: Colors.spacing * 4,

    },


})