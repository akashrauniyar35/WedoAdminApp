
import React, { useRef, useEffect } from 'react';
import { createBottomTabNavigator, } from
    '@react-navigation/bottom-tabs';
import Home from '../pages/Home/Home';
import Quotes from '../pages/Quotes/Quotes';
import Bookings from '../pages/Bookings/Bookings';
import Notifications from '../pages/Notifications/Notifications';
import Appointments from '../pages/Drawer/Appointments';
import Expenses from '../pages/Drawer/Expenses';





const Tab = createBottomTabNavigator();





function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={() => ({
                headerShown: false,
                tabBarShowLabel: false,

            })}>
            <Tab.Screen name="Quotes" component={Quotes} />
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="Expenses" component={Expenses} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Bookings" component={Bookings} />
        </Tab.Navigator>
    )
}

export default MyTabs;