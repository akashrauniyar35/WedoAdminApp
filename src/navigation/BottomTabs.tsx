
import React, { useRef, useEffect, useReducer, useState } from 'react';
import { createBottomTabNavigator, } from
    '@react-navigation/bottom-tabs';
import Home from '../pages/Home/Home';
// import Quotes from '../pages/Extra/Quotes';
import Bookings from '../pages/Bookings/Bookings';
import Appointments from '../pages/Drawer/Appointments';
import Expenses from '../pages/Drawer/Expenses';

import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../assets/Colors';
import Jobs from '../pages/Jobs/Job';
import Notifications from '../pages/Notifications/Notifications';

import AddButton from '../pages/Add/Add';
import Fab from '../components/Fabs';

import { useDispatch, useSelector } from 'react-redux';

import Animated, { Extrapolate, interpolate, interpolateColor, log, useAnimatedStyle, useDerivedValue, withSpring, withTiming } from 'react-native-reanimated';
import { Pressable, View, Dimensions, StyleSheet } from 'react-native';

import { addJobModalVisibleToggle } from '../redux/addJobSlice';
import AddJob from '../pages/Add/AddJob';


const { width } = Dimensions.get('window')

const FAB_SIZE = 34;
const circleScale = parseFloat((300 / FAB_SIZE).toFixed(1))
const circleSize = circleScale * FAB_SIZE;
const dist = circleSize / 2 - FAB_SIZE;
const middleDist = dist / 1.41;
const middleDists = dist / 1.2;


const Tab = createBottomTabNavigator();




function MyTabs() {


    const [addJobsVisible, setAddJobsVisible] = useState(false)
    const dispatch = useDispatch()


    const addJobsCloseHandler = () => {
        setAddJobsVisible(!addJobsVisible)
    }


    const [open, toggle] = useReducer(s => !s, false)
    const rotation = useDerivedValue(() => {
        return withTiming(open ? '0deg' : '135deg');
    }, [open])

    const progress = useDerivedValue(() => {
        return open ? withSpring(1) : withSpring(0)
    })

    const translation = useDerivedValue(() => {
        return open ? withSpring(1, { stiffness: 80, damping: 8 }) : withSpring(0)
    })

    const fabStyles = useAnimatedStyle(() => {
        const rotate = rotation.value;
        const backgroundColor = interpolateColor(
            progress.value,
            [0, 1],
            [Colors.red, Colors.paid]
        )
        return {
            transform: [{ rotate }],
            backgroundColor,
        }
    })

    const scalingStyles = useAnimatedStyle(() => {
        const scale = interpolate(
            progress.value,
            [0, 1],
            [0, circleScale],
        )
        return {
            transform: [{ scale }]
        }
    })

    const translationStyles = (x, y, value) => (
        useAnimatedStyle(() => {
            const translate = interpolate(
                translation.value,
                [0, 1],
                [0, -value],
                { extrapolateLeft: Extrapolate.CLAMP }
            )
            const scale = interpolate(
                progress.value,
                [0, 1],
                [0, 1],
                { extrapolateLeft: Extrapolate.CLAMP }
            )
            if (x && y) {
                return {
                    transform: [{ translateX: translate }, { translateY: translate }, { scale }]
                }
            } else if (x) {
                return {
                    transform: [{ translateX: translate }, { scale }]
                }
            } else {
                return {
                    transform: [{ translateY: translate }, { scale }]
                }
            }
        })
    )

    const ActionButton = ({ icon, style, nav, }) => {



        const onPress = () => {
            setAddJobsVisible(true)
            toggle()
        }


        return (
            <Animated.View style={[styles.actionBtn, style]}>
                <Pressable
                    underlayColor={Colors.madidlyThemeBlue}
                    style={styles.actionBtn}
                    onPress={onPress}>
                    <IconM name={icon} size={24} color={Colors.madidlyThemeBlue} />
                </Pressable>
            </Animated.View>
        )
    }

    return (
        <>
            <Tab.Navigator

                screenOptions={() => ({
                    headerShown: false,
                    backgroundColor: "white",
                    tabBarShowLabel: false, tabBarActiveTintColor: Colors.madidlyThemeBlue,
                    tabBarInactiveTintColor: Colors.grayText,

                })}>

                <Tab.Screen name="Jobs" component={Jobs}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ focused, color }) => (
                            <IconM name="file" color={color} size={26} style={{ transform: [focused ? { scale: 1.3 } : { scale: .8 }] }} />
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
                            <IconM zIndex={-4} name="calendar" color={color} size={26} style={{ transform: [focused ? { scale: 1.3 } : { scale: .8 }] }} />
                        ),
                    }} />


                <Tab.Screen name="Notifications" component={Notifications}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ focused, color }) => (
                            <IconM name="bell" color={color} size={26} style={{ transform: [focused ? { scale: 1.3 } : { scale: .8 }] }} />
                        )
                    }} />

                <Tab.Screen name="Add"
                    component={AddButton}
                    listeners={() => ({
                        tabPress: (e) => {
                            e.preventDefault(); // Prevents navigation
                            // Your code here for when you press the tab
                        }
                    })}

                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.container}>
                                <View style={styles.fabContainer}>
                                    <Animated.View style={[styles.expandingCircle, scalingStyles]} />
                                    <Pressable onPress={toggle}>
                                        <Animated.View style={[styles.fab, fabStyles]}>
                                            <Icon name="close" color={'white'} size={24} />
                                        </Animated.View>
                                    </Pressable>
                                    <ActionButton style={translationStyles(false, true, dist)} icon="file" />
                                    <ActionButton style={translationStyles(true, true, middleDist)} icon="person" />
                                    <ActionButton style={translationStyles(true, false, dist)} icon="cog" />
                                </View>
                            </View>
                        )
                    }} />

            </Tab.Navigator>
            <AddJob lable={"Add job"} isOpen={addJobsVisible} onClose={addJobsCloseHandler} />
        </>
    )
}

const CircleStyle = {
    width: FAB_SIZE,
    height: FAB_SIZE,
    borderRadius: FAB_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
}

const styles = StyleSheet.create({
    container: {

    },
    fabContainer: {
        position: 'absolute',
        bottom: -18,
        alignSelf: 'center'
    },
    fab: {
        ...CircleStyle,
        backgroundColor: Colors.darkBlue,
        transform: [{ rotate: '135deg' }]
    },
    expandingCircle: {
        ...CircleStyle,
        // transform: [{ scale: 8 }],
        backgroundColor: Colors.madidlyThemeBlue,
        position: 'absolute',
        zIndex: -1,
    },
    actionBtn: {
        ...CircleStyle,
        backgroundColor: "white",
        position: 'absolute',
        zIndex: -1,
    },
})


export default MyTabs;