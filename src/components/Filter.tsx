import { Dimensions, Modal, Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../assets/Colors';
import SelectTechnicianCard from './SelectionCard';
import PeriodSelector from './PeriodSelector';
import StatusCard from './Sc';
import SelectionCard from './SelectionCard';

const isAndroid = Platform.OS == 'android' ? true : false
const { width, height } = Dimensions.get('screen')




const data = [
    {
        id: '00',
        name: 'Ninja Prasad',
    },
    {
        id: '01',
        name: 'Ashwin Nigga',
    },
    {
        id: '02',
        name: 'Milan Prasad',
    },
    {
        id: '03',
        name: 'Rajesh Hamal',
    },
];

const scheduleData = [
    {
        id: '00',
        name: 'Cancelled',
        color: "",
    },
    {
        id: '01',
        name: 'Scheduled',
        color: "",
    },
    {
        id: '02',
        name: 'In Progress',
        color: "",
    },
    {
        id: '03',
        name: 'Completed',
        color: "",
    },
]


const Filter = ({ onPress, isOpen, title }) => {


    return (

        <>

            <Pressable
                style={{}}
                onPress={onPress}
            >
                <View style={[styles.filterStyling,]}>

                    <Icon name="filter" size={22} color={Colors.littleGray} />
                    <Text style={{ marginLeft: Colors.spacing * 1.5, color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "900" : "600" }}>{title}</Text>
                </View>
            </Pressable>

            <Modal
                animationType="fade"
                transparent={true}
                visible={isOpen}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    <SafeAreaView />
                    <View style={{
                        flex: 1,
                        backgroundColor: 'white',
                        width: width,
                        borderTopRightRadius: Colors.spacing * 2,
                    }}>

                        <View style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white',
                            // borderBottomWidth: 1,
                            paddingHorizontal: Colors.spacing * 2,
                            paddingVertical: Colors.spacing * 1,
                            shadowRadius: 2,
                            shadowOffset: { width: 0, height: .5 },
                            shadowOpacity: .2,
                            elevation: 2,
                            shadowColor: Colors.grayOne,

                        }}>

                            <Pressable
                                style={{}}
                                onPress={onPress}
                            ><Icon name="chevron-back" size={28} color={Colors.grayOne} /></Pressable>
                            <Text style={{ fontSize: 16, color: Colors.grayOne, fontWeight: isAndroid ? "900" : "600" }}>{"Filter Jobs"}</Text><Icon name="chevron-back" size={28} color={'white'} />
                        </View>


                        <View style={styles.container}>


                            <SelectionCard border={true} rounded={true} data={data} placeholder={"Select Technician"} type={'filter'} label="Technician" />


                            <View style={{ marginTop: Colors.spacing }}>
                                <PeriodSelector />
                            </View>

                            <View style={{ marginTop: Colors.spacing }}>
                                <SelectionCard border={true} rounded={true} data={scheduleData} placeholder={""} type={'filter'} label="Status" />
                            </View>


                            <Pressable style={styles.applyButton}>
                                <Text style={{ fontSize: 16, color: 'white', fontWeight: isAndroid ? "900" : "600", }}>Apply Filter</Text>
                            </Pressable>

                        </View>

                    </View>


                </View>
            </Modal >


        </>






    )
}

export default Filter

const styles = StyleSheet.create({
    filterStyling: {
        backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', marginVertical: Colors.spacing * 1.5, paddingHorizontal: Colors.spacing * 2, paddingVertical: Colors.spacing * 1.75,
        shadowRadius: 1,
        shadowOffset: { width: 0, height: .5 },
        shadowOpacity: .2,
        shadowColor: Colors.grayOne, elevation: 2,
    },

    container: {
        padding: Colors.spacing * 2,
    },
    applyButton: {
        backgroundColor: Colors.madidlyThemeBlue, flexDirection: 'row',
        borderRadius: Colors.spacing * Colors.spacing, alignItems: 'center', justifyContent: 'center', paddingVertical: Colors.spacing * 1.3,
    }

})