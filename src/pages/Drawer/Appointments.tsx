import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'
import {Colors} from '../../assets/Colors'
import Calendar from '../../components/Calendar'
import Agenda from '../../components/Agenda'

const Appointments = ({ navigation }) => {
    return (
        <>
            <View>
                <SafeAreaView />
                <View style={{ paddingHorizontal: Colors.spacing * 2,backgroundColor: "white", }}>
                    <Header nav={navigation} title="Appointments" />
                    <View style={{ marginBottom: Colors.spacing * 1 }} />

                    <SearchBox />
                    <View style={{ marginBottom: Colors.spacing * 1.5 }} />
                    <View style={{}}>
                        <Agenda nav={navigation} />
                    </View>


                </View>
            </View>
        </>
    )
}

export default Appointments

const styles = StyleSheet.create({})