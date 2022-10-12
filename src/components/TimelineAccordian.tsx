import { StyleSheet, Text, Dimensions, View, TextInput, Animated, LayoutAnimation, Image, TouchableWithoutFeedback, Platform, Pressable } from 'react-native'
import React, { useState, useRef } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../assets/Colors';
import QuoteTimelineCard from '../pages/Quotes/QuoteTimelineCard';
import NotesCard from '../pages/Quotes/NotesCard';
import AddNotesCard from '../pages/Quotes/AddNotesCard';

const { width, height } = Dimensions.get('screen')
const isAndroid = Platform.OS == 'android' ? true : false

const TimelineAccordian = ({ title, data }) => {
    const [visible, setVisible] = useState(false);

    console.log("Notes DATA", title, data)

    const animationController = useRef(new Animated.Value(0)).current




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


    const arrowRotateAnimation = animationController.interpolate({
        inputRange: [0, .5,],
        outputRange: ['0deg', '180deg',],
    })

    return (
        <>

            <View style={styles.container}>
                <View style={[styles.taskTitle,]}>

                    <TouchableWithoutFeedback onPress={() => { arrowTransform(), setVisible(!visible) }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: "100%", marginBottom: visible ? Colors.spacing : 0 }}>
                            <Text style={{ fontSize: 18, fontWeight: isAndroid ? "900" : "600", color: Colors.grayOne }}> {title} ({data.length})</Text>
                            <TouchableWithoutFeedback onPress={() => { arrowTransform(), setVisible(!visible) }}>
                                <Animated.View style={{ transform: [{ rotateZ: arrowRotateAnimation }] }}>
                                    <Icon color={Colors.grayOne} style={{}} name={visible ? "chevron-up" : "chevron-down"} size={22} />
                                </Animated.View>
                            </TouchableWithoutFeedback>


                        </View>
                    </TouchableWithoutFeedback>


                    <View style={[{ overflow: 'hidden', }]}>
                        {visible && data.map((item, index) => {

                            return (<QuoteTimelineCard icon={item.icon} title={item.title} createdBy={item.createdBy} key={item.id} item={item} index={index} toggle={arrowTransform} />)
                        })}
                        
                    </View>



                </View>
            </View >
        </>
    )
}

export default TimelineAccordian

const styles = StyleSheet.create({
    container: {
        flex: 1, overflow: 'hidden'
    },
    taskTitle: {
        paddingVertical: Platform.OS == 'android' ? Colors.spacing * 1.3 : Colors.spacing,
        paddingHorizontal: Colors.spacing,
        borderRadius: 4,
        borderWidth: 1.5,

        borderColor: Colors.littleGray,
        position: 'relative',
    },



    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Colors.spacing * .5,
        marginBottom: Colors.spacing,
    },




})