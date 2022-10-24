import { StyleSheet, Text, Dimensions, View, TextInput, Animated, LayoutAnimation, Image, TouchableWithoutFeedback, Platform, Pressable } from 'react-native'
import React, { useState, useRef } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../assets/Colors';
import QuoteTimelineCard from '../pages/Extra/QuoteTimelineCard';
import NotesCard from '../pages/Extra/NotesCard';
import AddNotesCard from '../pages/Extra/AddNotesCard';
import { formatDate, getInitials } from './dataConverters';

const { width, height } = Dimensions.get('screen')
const isAndroid = Platform.OS == 'android' ? true : false

const NotesAccordian = ({ title, data }) => {
    const [visible, setVisible] = useState(false);

    console.log("Notes ACC DATA", title, data)


    // const date = formatDate(item.createdAt)


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
                            const date = formatDate(item.createdAt.substring(0, 24))
                            return (

                                <TouchableWithoutFeedback key={item.id}>
                                    <View style={styles.box}>
                                        <View style={{ flexDirection: 'row', }}>
                                            {/* getInitials */}
                                            {!item.image ?

                                                <View style={{ marginRight: Colors.spacing, width: 35, height: 35, borderRadius: 100, backgroundColor: Colors.green, alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{ color: 'white', fontSize: 14, fontWeight: isAndroid ? "900" : "600", }}>{getInitials(item.name)}</Text>
                                                </View>
                                                :
                                                <Image source={{ uri: 'https://randomuser.me/api/portraits/men/3.jpg' }} style={{ width: 35, height: 35, borderRadius: 100, marginRight: Colors.spacing, }} />
                                            }
                                            <View style={{ width: '85%' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                                    <Text style={{ color: Colors.grayOne, fontSize: 14, fontWeight: isAndroid ? "900" : "600", }}>{item.name}</Text>
                                                    <Text style={{ color: Colors.grayText, fontSize: 10, }}>{date}</Text>
                                                </View>
                                                <Text style={{ color: Colors.grayText, fontSize: 10, fontWeight: isAndroid ? "900" : "600", }}>{item.email}</Text>

                                                <Text style={{ textAlign: "justify", color: Colors.grayOne, fontSize: 12, marginTop: Colors.spacing }}>{"item.title, some manual notes, some manual notes, some manual notes, some manual notes, some manual notes, some manual notes, some manual notes, some manual asd asd  notes, some manual notes, some manual notes"}
                                                </Text>
                                            </View>

                                        </View>
                                        <Text style={{ color: Colors.grayOne, fontSize: 12, fontWeight: isAndroid ? "900" : "600", }}>{item.createdBy}</Text>
                                    </View >
                                </TouchableWithoutFeedback>

                            )
                        })}

                    </View>



                </View>
            </View >
        </>
    )
}

export default NotesAccordian

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
        marginBottom: Colors.spacing * 2,
        justifyContent: 'space-between',
        marginHorizontal: Colors.spacing * .5,

    },




})