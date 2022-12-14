import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { Dimensions, Image, Pressable, ActivityIndicator, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'


import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import {Colors} from '../assets/Colors';
import Divider from '../components/Divider';
import { logoutPending, logoutSuccess } from '../redux/authenticationSlice';




const drawerLists = [
]


const CustomDrawer = (props) => {
    const logoutRequest = useSelector((state: any) => state.logoutRequest)
    const dispatch = useDispatch()
    console.log(props)



    const logoutHandler = async () => {
        const token = 'token xxx'
        console.log(token)
        dispatch(logoutPending(token))
        dispatch(logoutSuccess(token))
        try {
            const value = await AsyncStorage.removeItem('@access_Token')
            if (value !== null) {
                console.log("GET ASYNC STORAGE ACCESS", value);
            }
        } catch (e) {
            // error reading value
        }
    }






    const DrawerLabel = ({ label, icon, navigateTo }) => {
        return (
            <TouchableWithoutFeedback onPress={() => props.navigation.navigate(navigateTo)}>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: Colors.spacing * 3, marginBottom: Colors.spacing * 2, }}>
                    <IconM name={icon} size={22} color={"#1e1e1e"} />
                    <Text style={{ marginLeft: Colors.spacing * 2, fontSize: 13, color: Colors.black }}>{label}</Text>
                </View>
            </TouchableWithoutFeedback >
        )
    }
    const DrawerBottomLabel = ({ label, icon }) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: Colors.spacing * 3.5, marginBottom: Colors.spacing * 2, }}>
                <IconM name={icon} size={22} color={"#1e1e1e"} />
                <Text style={{ marginLeft: Colors.spacing * 2, fontSize: 13, color: Colors.black }}>{label}</Text>
            </View>
        )
    }



    const DrawerHeader = ({ }) => {
        return (
            <View style={{ padding: Colors.spacing, paddingHorizontal: Colors.spacing * 2, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ backgroundColor: '#caf1de', padding: 4, width: 45, height: 45, alignItems: 'center', justifyContent: 'center', position: 'relative', borderRadius: 100 }}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2922/2922510.png' }} style={{ width: 35, height: 35 }} />

                    <TouchableWithoutFeedback>
                        <IconM name='pencil-circle' size={22} color={Colors.green} style={{ position: 'absolute', bottom: -5, right: -5, }} />
                    </TouchableWithoutFeedback>
                </View>

                <View style={{ marginLeft: Colors.spacing * 2 }}>
                    <Text style={{ fontSize: 18, color: Colors.black, fontWeight: '600' }}>First Last Name</Text>
                    <Text style={{ color: Colors.red }}>email@gmail.com</Text>
                </View>
            </View>
        )
    }



    const DrawerFooter = () => {

        console.log("drawer logout", logoutRequest)
        return (
            <Pressable onPress={() => logoutHandler()} >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: Colors.green, padding: Colors.spacing, paddingHorizontal: Colors.spacing * 2, }}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '600', }}>Logout</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {logoutRequest ? <ActivityIndicator size={20} color={'white'} /> : <Icon name="log-out-outline" size={22} color={'white'} />}
                    </View>
                </View>
            </Pressable>
        )
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <SafeAreaView />

                <DrawerHeader />


                <View style={{ marginTop: Colors.spacing * 2 }}>


                    <DrawerLabel icon={"view-dashboard-variant-outline"} label={"Dashboard"} navigateTo={"BottomTabs"} />


                    <DrawerLabel icon="calendar-outline" label="Appointments" navigateTo={"appointments"} />


                    <DrawerLabel icon="account-outline" label="Contractors" navigateTo={"contractors"} />



                    <DrawerLabel icon="currency-usd" label="Expenses" navigateTo={"expenses"} />
                    <DrawerLabel icon={"account-group-outline"} label="Completed Jobs" navigateTo={"Completed Jobs"} />

                    <DrawerLabel icon={"account-group-outline"} label="Job Recalls" navigateTo={"TechnicianList"} />

                    {/* <DrawerLabel icon={"account-group-outline"} label="Technician List" navigateTo={"TechnicianList"} /> */}



                </View>

                <Divider width={'80%'} color={Colors.black} />


                <View style={{ marginTop: Colors.spacing * 2 }}>


                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate("AMC")}>
                        <DrawerBottomLabel icon={"lifebuoy"} label={"Help & Support"} />
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate("AMC")}>
                        <DrawerBottomLabel icon={"cog-outline"} label={"Settings"} />
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate("AMC")}>
                        <DrawerBottomLabel icon={"information-outline"} label={"About"} />
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate("AMC")}>
                        <DrawerBottomLabel icon={"handshake-outline"} label={"Invite Friends"} />
                    </TouchableWithoutFeedback>


                </View>


            </View >

            <DrawerFooter />
            <SafeAreaView />
        </>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({})