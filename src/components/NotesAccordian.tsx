import { StyleSheet, Text, Dimensions, View, TextInput, Animated, LayoutAnimation, Image, TouchableWithoutFeedback, Platform, Pressable } from 'react-native'
import React, { useState, useRef } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/Colors';
import QuoteTimelineCard from '../pages/Quotes/QuoteTimelineCard';
import NotesCard from '../pages/Quotes/NotesCard';
import AddNotes from '../pages/Quotes/AddNotes';

const { width, height } = Dimensions.get('screen')



// const data = [
//     {
//         id: '00',
//         title: 'Cancelled',
//     },
//     {
//         id: '02',
//         title: 'Scheduled',
//     },
//     {
//         id: '03',
//         title: 'In Progress',
//     },
//     {
//         id: '04',
//         title: 'Completed',
//     },
// ]


const NotesAccordian = ({ title, data }) => {
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
        outputRange: ['0deg', '45deg',],
    })

    return (
        <>

            <View style={styles.container}>
                <View style={[styles.taskTitle,]}>

                    <TouchableWithoutFeedback onPress={() => { arrowTransform(), setVisible(!visible) }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: "100%", marginBottom: visible ? Colors.spacing : 0 }}>

                            <Text style={{ fontSize: 13, color: Colors.littleGray, }}>{title} ({data.length})</Text>

                            <TouchableWithoutFeedback onPress={() => { arrowTransform(), setVisible(!visible) }}>
                                <Animated.View style={{ transform: [{ rotateZ: arrowRotateAnimation }] }}>
                                    <Icon color={Colors.grayText} style={{}} name={visible ? "chevron-up" : "chevron-down"} size={22} />
                                </Animated.View>
                            </TouchableWithoutFeedback>


                        </View>
                    </TouchableWithoutFeedback>




                    <View style={[{ overflow: 'hidden' }]}>
                        {visible && data.map((item, index) => {

                            return title === "Timeline" ? (<QuoteTimelineCard icon={item.icon} title={item.title} createdBy={item.createdBy} key={item.id} item={item} index={index} toggle={arrowTransform} />) : (<NotesCard name={item.name} date={item.date} img={item.img} note={item.note} key={item.id} />)
                        })}

                        {title === "Job Notes" ? visible ? <AddNotes /> : null : null}


                    </View>



                </View>
            </View>
        </>
    )
}

export default NotesAccordian

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Colors.spacing * .5,
        marginBottom: Colors.spacing,
    },




})