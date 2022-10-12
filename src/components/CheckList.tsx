import { Dimensions, Modal, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../assets/Colors';
import SelectTechnicianCard from './SelectionCard';
import PeriodSelector from './PeriodSelector';
import StatusCard from './Sc';
import SelectionCard from './SelectionCard';
import CheckListCard from './CheckListCard';
import AddCheckList from './AddCheckList';

const isAndroid = Platform.OS == 'android' ? true : false
const { width, height } = Dimensions.get('screen')


const data = [
    {
        id: '00',
        category: 'End Of Clease Cleaning Category',
        lable: 'Do Sink & Bathroom',
        name: '',
        status: 'In Progress',
        date: '',
        required: true
    },
    {
        id: '01',
        category: 'General Cleaning Category',
        lable: 'Balcony deep wash',
        name: 'Sanjeev Basnet',
        status: 'Completed',
        date: '12/10/2022',
        required: true
    },
    {
        id: '02',
        category: 'StrathField Cleaning Contract Category',
        lable: 'Take out bins on street',
        name: 'Milan Adhikari',
        status: 'Completed',
        date: '12/10/2022',
        required: false
    },
];


const Checklist = ({ onPress, isOpen, title }) => {
    const [defaultChecklist, setDefaultChecklist] = useState(false);
    const [addCheckList, setAddChecklist] = useState(false);

    const toggleDefaultChecklist = () => {
        setDefaultChecklist(!defaultChecklist)
    }

    const toggleAddChecklist = () => {
        setAddChecklist(!addCheckList)
    }

    return (

        <>

            <Pressable
                style={{}}
                onPress={onPress}
            >
                <View style={[]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", width: '25%' }}>Complete</Text>
                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300", }}>{1} item(s)</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing }}>
                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", width: '25%' }}>Incomplete</Text>
                        <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300", }}>{0} item(s)</Text>
                    </View>
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
                            <Text style={{ fontSize: 16, color: Colors.grayOne, fontWeight: isAndroid ? "900" : "600" }}>{title}</Text><Icon name="chevron-back" size={28} color={'white'} />
                        </View>


                        <View style={styles.container}>



                            <Pressable onPress={() => toggleAddChecklist()} style={styles.applyButton}>
                                <Text style={{ fontSize: 16, color: 'white', fontWeight: isAndroid ? "900" : "600", }}>Add item</Text>
                            </Pressable>




                            <View style={{ marginVertical: Colors.spacing * 2 }}>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    {data.map((item) => {
                                        return (
                                            <CheckListCard required={item.required} key={item.id} status={item.status} category={item.category} lable={item.lable} name={item.name} date={item.date} />
                                        )
                                    })}
                                </ScrollView>
                            </View>


                        </View>

                    </View>


                </View>
                <AddCheckList isOpen={addCheckList} onPress={toggleAddChecklist} />
            </Modal >
        </>




    )
}

export default Checklist

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
        borderRadius: Colors.spacing * .5, alignItems: 'center', justifyContent: 'center', paddingVertical: Colors.spacing * 1.3,
    }

})