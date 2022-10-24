import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, isAndroid, WIDTH } from '../assets/Colors'

const SearchJobCard = ({ customerName, cost, jobNumber }) => {
    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{}}>
                    <Text style={{ fontSize: 16, fontWeight: isAndroid ? "900" : "600", color: Colors.madidlyThemeBlue, marginBottom: isAndroid ? Colors.spacing * .5 : Colors.spacing * 1 }}>#{jobNumber}</Text>
                    <Text style={{ fontSize: 14, fontWeight: isAndroid ? "600" : "300", color: Colors.maidlyGrayText }}>{customerName}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: isAndroid ? '20%' : '25%' }}>
                    <Text style={{ fontSize: 16, fontWeight: isAndroid ? "900" : "600", color: Colors.maidlyGrayText }}>$ </Text>
                    <Text style={{ fontSize: 16, fontWeight: isAndroid ? "900" : "600", color: Colors.maidlyGrayText, }}>{'100'}</Text>
                </View>
            </View>
        </>
    )
}

export default SearchJobCard

const styles = StyleSheet.create({})