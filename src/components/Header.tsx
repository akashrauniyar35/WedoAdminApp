import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../assets/Colors';
import Colors from '../assets/Colors';

const Header = ({ nav, title }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18, color: colors.black, fontWeight: '700' }}>{title}</Text>
            <Pressable onPress={() => nav.toggleDrawer()} >
                <Icon name="menu" size={28} color={Colors.grayText} />
            </Pressable>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})