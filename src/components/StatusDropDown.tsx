import { StyleSheet, Text, Dimensions, View, TextInput, Animated, LayoutAnimation, Image, TouchableWithoutFeedback, Platform, Pressable } from 'react-native'
import React, { useState, useRef } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/Colors';

const { width, height } = Dimensions.get('screen')



const data = [
    {
        id: '00',
        title: 'Cancelled',
    },
    {
        id: '02',
        title: 'Scheduled',
    },
    {
        id: '03',
        title: 'In Progress',
    },
    {
        id: '04',
        title: 'Completed',
    },
]


const Accordian = ({ }) => {
    const [visible, setVisible] = useState(false);

    function toggler() { setVisible(!visible); }

    const animationController = useRef(new Animated.Value(0)).current

    const [selected, setSelected] = useState();


    const dropDownAnimation = {
        duration: 500,
        update: {
            duration: 300,
            property: LayoutAnimation.Properties.opacity,
            type: LayoutAnimation.Types.easeInEaseOut
        },
        delete: {
            duration: 200,
            property: LayoutAnimation.Properties.opacity,
            type: LayoutAnimation.Types.easeInEaseOut
        },
    }


    const arrowTransform = () => {
        const config = {
            duration: 300,
            toValue: visible ? 0 : 1,
            useNativeDriver: true
        };

        Animated.timing(animationController, config).start();
        LayoutAnimation.configureNext(dropDownAnimation);
        setVisible(true);
    }


    const renderItem = (item) => {
        return (
            <TouchableWithoutFeedback key={item.id} onPress={() => { arrowTransform(), setSelected(item.title), setVisible(false) }}>
                <View style={styles.box}>
                    <Text style={{ color: Colors.littleGray, fontSize: 12, }}>{item.title}</Text>
                </View >
            </TouchableWithoutFeedback>
        )
    }

    const arrowRotateAnimation = animationController.interpolate({
        inputRange: [0, .5,],
        outputRange: ['0deg', '45deg',],
    })

    return (
        <>

            <View style={styles.container}>
                <View style={[styles.taskTitle,]}>

                    <TouchableWithoutFeedback onPress={() => { arrowTransform(), setVisible(!visible) }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: "100%" }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <View style={{ borderRadius: 100, width: 12, height: 12, backgroundColor: selected === "Scheduled" ? "orange" : selected === "Completed" ? Colors.paid : selected === "Cancelled" ? Colors.lightRed : Colors.grayText, marginRight: Colors.spacing }} />
                                <Text style={{ fontSize: 13, color: Colors.littleGray }}>{selected ? selected : 'In Progress'}</Text>
                            </View>

                            <TouchableWithoutFeedback onPress={() => { arrowTransform(), setVisible(!visible) }}>
                                <Animated.View style={{ transform: [{ rotateZ: arrowRotateAnimation }] }}>
                                    <Icon color={Colors.grayText} style={{}} name={visible ? "chevron-up" : "chevron-down"} size={22} />
                                </Animated.View>
                            </TouchableWithoutFeedback>


                        </View>
                    </TouchableWithoutFeedback>


                    {/* <View style={[styles.taskTitleBadge, {}]}>
                        <Text style={{ fontSize: 12, color: Colors.littleGray, paddingHorizontal: 6, padding: 2, backgroundColor: 'white' }}>{title</Text>
                    </View> */}

                    <View style={[styles.drowpDown, { overflow: 'hidden' }]}>
                        {visible && data.map((item) => {
                            return (renderItem(item))
                        })}
                    </View>



                </View>
            </View>
        </>
    )
}

export default Accordian

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    taskTitle: {
        paddingVertical: Platform.OS == 'android' ? 3 : 6,
        paddingHorizontal: Colors.spacing,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: Colors.grayText,
        position: 'relative',
    },
    taskTitleBadge: {
        position: 'absolute',
        backgroundColor: 'white',
        top: -8
    },


    box: {
        marginTop: Colors.spacing * .75,
        marginHorizontal: Colors.spacing * .5
    },




})