import { Dimensions, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../assets/Colors';
import SearchModal from './SearchModal';



const isAndroid = Platform.OS == 'android' ? true : false
const Header = ({ nav, title }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSearch = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>

            <View style={{
                flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white',
                // borderBottomWidth: 1,
                paddingHorizontal: Colors.spacing * 2,
                shadowRadius: 2,
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: .3,
                elevation: 3,
                height: 55,
                shadowColor: Colors.grayOne,

            }}>
                <Pressable onPress={toggleSearch} >
                    <Icon name="search" size={22} color={Colors.grayOne} />
                </Pressable>
                <Text style={{ fontSize: 16, color: Colors.grayOne, fontWeight: isAndroid ? "900" : "600" }}>{title}</Text>
                <Pressable onPress={() => nav.toggleDrawer()} >
                    <Icon name="menu" size={28} color={Colors.grayOne} />
                </Pressable>
            </View>

            <SearchModal isOpen={isOpen} onPress={toggleSearch} />
        </>
    )
}

export default Header

const styles = StyleSheet.create({})