import { StyleSheet, Text, Dimensions, View, TextInput, Animated, LayoutAnimation, Image, TouchableWithoutFeedback, Platform, Pressable } from 'react-native'
import React, { useState, useRef } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import QuoteTimelineCard from '../pages/Quotes/QuoteTimelineCard';
import NotesCard from '../pages/Quotes/NotesCard';
import AddNotes from '../pages/Quotes/AddNotes';
import { Colors } from '../../assets/Colors';

const { width, height } = Dimensions.get('screen')
const isAndroid = Platform.OS == 'android' ? true : false





const AddOnsCard = ({ }) => {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState();
    const [addedProducts, setAddedProducts] = useState([])
    // const addedProducts: any = []
    console.log("added", addedProducts)




    const data = [

        {
            id: '00',
            label: 'Study room',
            selected: selected,
        },
        {
            id: '01',
            label: 'Laundry',
            selected: selected,
        },
        {
            id: '02',
            label: 'Seperate toilet',
            selected: selected,
        },
        {
            id: '03',
            label: 'Balcony',
            selected: selected,
        },
        {
            id: '04',
            label: 'Wall wash',
            selected: selected,
        },
        {
            id: '05',
            label: 'Garage',
            selected: selected,
        },
        {
            id: '06',
            label: 'Blinds',
            selected: selected,
        },
        {
            id: '07',
            label: 'Other Extra',
            selected: selected,
        },
        {
            id: '08',
            label: 'Carpets',
            steameClean: false,
            selected: selected,
        },

    ]


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



    const Addons = ({ obj }: any) => {
        return (

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: obj.label === "Carpets" ? '40%' : '40%', marginBottom: Colors.spacing, marginRight: Colors.spacing * 2 }}>
                <Text style={{ fontSize: 16, color: Colors.grayOne, fontWeight: isAndroid ? "900" : "600", }}>{obj.label}</Text>

                <Pressable style={{ paddingLeft: Colors.spacing * 1 }}>

                    <IconM name="check-circle-outline" size={26} color={Colors.green} />
                    {/* <Text style={{ fontSize: 16, color: Colors.grayOne, fontWeight: isAndroid ? "900" : "600", }}>Select</Text> */}
                </Pressable>

                {/* <Pressable onPress={() => setAddedProducts(obj)}>
                    <Icon name="add-circle" size={20} color={Colors.grayOne} />
                </Pressable>
                <Pressable onPress={() => setAddedProducts(obj)}>
                    <Icon name="remove-circle" size={20} color={Colors.grayOne} />
                </Pressable> */}

            </View >
        )
    }

    return (
        <>

            <View style={styles.container}>
                <View style={[styles.taskTitle,]}>

                    <TouchableWithoutFeedback onPress={() => { arrowTransform(), setVisible(!visible) }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: "100%", marginBottom: visible ? Colors.spacing : 0 }}>
                            <Text style={{ fontSize: 18, fontWeight: isAndroid ? "900" : "600", color: Colors.littleGray }}>Add Ons</Text>

                            <TouchableWithoutFeedback onPress={() => { arrowTransform(), setVisible(!visible) }}>
                                <Animated.View style={{ transform: [{ rotateZ: arrowRotateAnimation }] }}>
                                    <Icon color={Colors.grayOne} style={{}} name={visible ? "chevron-up" : "chevron-down"} size={28} />
                                </Animated.View>
                            </TouchableWithoutFeedback>


                        </View>
                    </TouchableWithoutFeedback>



                    <View style={[{ flexDirection: 'row', flexWrap: 'wrap', }]}>
                        {visible ? data.map((obj: any) => <Addons obj={obj} key={obj.id} />) : null}
                    </View>



                </View>
            </View>
        </>
    )
}

export default AddOnsCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Colors.spacing * .5,
        overflow: 'hidden'
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