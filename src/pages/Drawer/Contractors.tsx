import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'
import Colors from '../../assets/Colors'

const Contractors = ({ navigation }) => {
    return (
        <>
            <View>
                <SafeAreaView />
                <View style={{ paddingHorizontal: Colors.spacing * 2, }}>
                    <Header nav={navigation} title="Contractors" />
                    <View style={{ marginBottom: Colors.spacing * 1 }} />

                    <SearchBox />
                    <View style={{ marginBottom: Colors.spacing * 2 }} />
                </View>
            </View>
        </>
    )
}

export default Contractors

const styles = StyleSheet.create({})