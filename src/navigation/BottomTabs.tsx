
import React, { useRef, useEffect } from 'react';
import { createBottomTabNavigator, } from
    '@react-navigation/bottom-tabs';
import Home from '../pages/Home/Home';
import Quotes from '../pages/Quotes/Quotes';
import Bookings from '../pages/Bookings/Bookings';
import Notifications from '../pages/Notifications/Notifications';
import Appointments from '../pages/Drawer/Appointments';
import Expenses from '../pages/Drawer/Expenses';

import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../assets/Colors';



const Tab = createBottomTabNavigator();





function MyTabs() {

    return (
        <Tab.Navigator

            screenOptions={() => ({
                headerShown: false,
                backgroundColor: "white",
                tabBarShowLabel: false, tabBarActiveTintColor: Colors.green,
                tabBarInactiveTintColor: Colors.grayText,

            })}>

            <Tab.Screen name="Quotes" component={Quotes}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <IconM name="file" color={color} size={26} style={{ transform: [focused ? { scale: 1.3 } : { scale: .8 }] }} />
                    ),
                }} />

            <Tab.Screen name="Bookings" component={Bookings}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <IconM name="bookshelf" color={color} size={26} style={{ transform: [focused ? { scale: 1.3 } : { scale: .8 }] }} />
                    ),
                }} />



            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <IconM name="view-dashboard" color={color} size={26} style={{ transform: [focused ? { scale: 1.3 } : { scale: .8 }] }} />
                    ),
                }} />


            <Tab.Screen name="Appointments" component={Appointments}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <IconM name="calendar" color={color} size={26} style={{ transform: [focused ? { scale: 1.3 } : { scale: .8 }] }} />
                    ),
                }} />



            <Tab.Screen name="Notifications" component={Notifications}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color }) => (
                        <IconM name="bell" color={color} size={26} style={{ transform: [focused ? { scale: 1.3 } : { scale: .8 }] }} />
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default MyTabs;