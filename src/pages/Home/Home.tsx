import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../assets/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import BarChart from '../../components/BarChart';
import LineChart from '../../components/LineChart';

import Header from '../../components/Header';

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
        <View style={{ padding: colors.spacing * 2, backgroundColor: colors.black, borderRadius: colors.spacing }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: colors.spacing }}>
                <Text style={{ fontSize: 14, fontWeight: '400', color: 'white', }}>Total Expences</Text>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2202/2202112.png' }} style={{ width: 40, height: 40 }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: '600' }}>$ 2,000</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.skyColor, paddingHorizontal: colors.spacing, paddingVertical: colors.spacing * .3, borderRadius: 4 }}>
                    <Text style={{ color: colors.black, fontSize: 12, fontWeight: '500' }}>Monthly</Text>
                    {/* <Icon name='ios-chevron-down' size={14} style={{ marginLeft: 10 }} /> */}
                </View>
            </View>
        </View>
    )
}




const Home = ({ navigation }) => {
    const [selectTech, setSelectTech] = useState(false)

    const selectTechnician = () => {
        setSelectTech(!selectTech);
    }
    return (
        <>
            <SafeAreaView />
            <View style={{ paddingHorizontal: colors.spacing * 2, }}>

                <Header nav={navigation} title="Dashboard" />
                <View style={{ marginBottom: colors.spacing * 1 }} />

                <Banner />
                <View style={{ marginBottom: colors.spacing * 2 }} />

                <Text style={{ color: colors.black, fontWeight: '600' }}>Expense Types</Text>
                <View style={{ marginBottom: colors.spacing * 1 }} />
                <BarChart />
                <View style={{ marginBottom: colors.spacing * 2 }} />

                <Text style={{ color: colors.black, fontWeight: '600' }}>Expense Graph</Text>
                <View style={{ marginBottom: colors.spacing * 1 }} />
                <LineChart />


            </View>
        </>
    )
}

export default Home

const styles = StyleSheet.create({})