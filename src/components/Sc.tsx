import { Alert, Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, isAndroid, WIDTH } from '../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';


const data = [
    {
        id: '00',
        name: 'Paid',
    },
    {
        id: '01',
        name: 'Completed',
    },
    {
        id: '02',
        name: 'Scheduled',
    },
    {
        id: '03',
        name: 'In Progress',
    },
    {
        id: '04',
        name: 'Cancelled',
    },
]

const StatusCard = () => {
    const [selected, setSelected] = useState();
    const [isOpen, setIsOpen] = useState(false)



    const onClickHandle = (visible) => {
        setIsOpen(visible)
    }

    const onTechSelect = (value) => {
        setSelected(value)
        setIsOpen(false)
    }




    return (
        <>
            <Pressable onPress={() => onClickHandle(true)}>
                <Text style={{ fontSize: 20, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", marginBottom: Colors.spacing }}>{"Status"}</Text>
                <View style={styles.box}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                        <Text style={{ fontSize: 16, color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "900" : "600" }}>{selected ? selected : 'Select Technician'}</Text>
                        <Icon name="chevron-down" size={22} color={Colors.maidlyGrayText} />
                    </View>
                </View>
                <View style={{ height: .35, width: '100%', marginVertical: Colors.spacing * 2, backgroundColor: Colors.maidlyGrayText }} />
            </Pressable>
            {isOpen ?
                <Modal
                    style={{ flex: 1, }}
                    animationType="fade"
                    transparent={true}
                    visible={isOpen}
                >
                    <View style={styles.container}>
                        <View style={styles.selectonContainer}>

                            {data.map((item, index) => {
                                return (

                                    <Pressable onPress={() => onTechSelect(item.name)}>
                                        <View key={item.id} style={{ flexDirection: 'row', borderColor: 'white', alignItems: 'center', justifyContent: 'space-between', paddingVertical: Colors.spacing * 1 }}>
                                            <Text style={{ fontSize: 14, color: 'white', fontWeight: isAndroid ? "900" : "600" }}>{item.name}</Text>
                                            <Icon name={selected === item.name ? "radio-button-on" : "radio-button-off"} size={22} color={'white'} />
                                        </View>
                                    </Pressable>
                                )
                            })}


                            {/* <Pressable onPress={() => onClickHandle(false)}>
                                <Text style={styles.text}>Close</Text>
                            </Pressable> */}

                        </View>
                    </View>
                </Modal >
                : null}
        </>)
}

export default StatusCard

const styles = StyleSheet.create({

    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.transparentGloss, },
    box: {
        backgroundColor: 'white',
        borderColor: Colors.maidlyGrayText,
        padding: Colors.spacing * 1,
        paddingHorizontal: Colors.spacing * 2,
        borderRadius: Colors.spacing * 10,
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
        paddingVertical: Colors.spacing
    },


})