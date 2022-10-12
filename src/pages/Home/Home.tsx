import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../assets/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import BarChart from '../../components/BarChart';
import LineChart from '../../components/LineChart';

import Header from '../../components/Header';

import { useSelector, useDispatch } from 'react-redux'



const { width, height } = Dimensions.get('window')
const techniciansList = [
    {
        id: '00',
        label: 'Ritesh Timsina',
    },
    {
        id: '01',
        label: 'Prakash Sahsher',
    },
    {
        id: '02',
        label: 'Ritesh Timsina',
    },

];

const Banner = () => {
    return (
        <View style={{ padding: Colors.spacing * 2, backgroundColor: Colors.black, borderRadius: Colors.spacing }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing }}>
                <Text style={{ fontSize: 14, fontWeight: '400', color: 'white', }}>Total Expences</Text>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2202/2202112.png' }} style={{ width: 40, height: 40 }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: '600' }}>$ 2,000</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.skyColor, paddingHorizontal: Colors.spacing, paddingVertical: Colors.spacing * .3, borderRadius: 4 }}>
                    <Text style={{ color: Colors.black, fontSize: 12, fontWeight: '500' }}>Monthly</Text>
                    {/* <Icon name='ios-chevron-down' size={14} style={{ marginLeft: 10 }} /> */}
                </View>
            </View>
        </View>
    )
}




const Home = ({ navigation }) => {
    const [selectTech, setSelectTech] = useState(false)

    const count = useSelector((state) => state)
    const dispatch = useDispatch()
    console.log("HOME REDUX", count)

    const selectTechnician = () => {
        setSelectTech(!selectTech);
    }
    return (
        <>
            <SafeAreaView />
            <View style={{ paddingHorizontal: Colors.spacing * 2, backgroundColor: "white", }}>

                <Header nav={navigation} title="Dashboard" />
                <View style={{ marginBottom: Colors.spacing * 1 }} />

                <Banner />
                <View style={{ marginBottom: Colors.spacing * 2 }} />

                <Text style={{ color: Colors.black, fontWeight: '600' }}>Expense Types</Text>
                <View style={{ marginBottom: Colors.spacing * 1 }} />
                <BarChart />
                <View style={{ marginBottom: Colors.spacing * 2 }} />

                <Text style={{ color: Colors.black, fontWeight: '600' }}>Expense Graph</Text>
                <View style={{ marginBottom: Colors.spacing * 1 }} />
                <LineChart />


            </View>
        </>
    )
}

export default Home

const styles = StyleSheet.create({})