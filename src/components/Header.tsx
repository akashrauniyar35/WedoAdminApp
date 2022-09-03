import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../assets/Colors';

const Header = ({ nav, title }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18, color: colors.black, fontWeight: '700' }}>{title}</Text>
            <Icon name="menu" size={28} style={{}} onPress={() => nav.toggleDrawer()} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})