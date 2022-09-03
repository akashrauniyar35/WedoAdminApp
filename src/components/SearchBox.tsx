import { StyleSheet, Text, Dimensions, View, TextInput, Animated, LayoutAnimation, Image, TouchableWithoutFeedback, Platform } from 'react-native'
import React, { useState, useRef } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/Colors';

const { width, height } = Dimensions.get('screen')



const data = [
    {
        id: '00',
        title: 'Sydney NSW 2000',
    },
    {
        id: '02',
        title: 'Kathmandu Napel 4650',
    },
    {
        id: '03',
        title: 'Biratnagar Nepal 4850',
    },
    {
        id: '04',
        title: 'Pokhara Nepal 4550',
    },
]

const SearchBox = () => {
    const [onPress, setOnPress] = useState(false);
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
            toValue: onPress ? 0 : 1,
            useNativeDriver: true
        };

        Animated.timing(animationController, config).start();
        LayoutAnimation.configureNext(dropDownAnimation);
        setOnPress(true);
    }

    return (
        <>

            <View style={styles.container}>
                <View style={[styles.taskTitle,]}>
                    <TextInput
                        onChangeText={(e) => { arrowTransform(), setSelected(e) }}
                        style={{ fontSize: 16, }}
                        value={selected ? selected : ''}
                        placeholderTextColor={Colors.black}
                        placeholder={selected ? selected : '....'}
                    />
                    <View style={[styles.taskTitleBadge, { width: 70, flexDirection: 'row', alignItems: 'center' }]}>
                        <Text style={{ fontSize: 12, color: Colors.black, paddingLeft: 6, padding: 2, backgroundColor: 'white' }}>Search</Text>
                        <View style={{ backgroundColor: 'white', paddingHorizontal: 4, paddingRight: 6, }}>
                            <Icon name="ios-search" size={14} color={Colors.green} />
                        </View>
                    </View>
                    <View style={[styles.drowpDown, onPress && { overflow: 'hidden', marginTop: onPress && Colors.spacing * 2 }, { overflow: 'hidden', }]}>
                        {onPress && data.map((item) => {
                            return (
                                <TouchableWithoutFeedback key={item.id} onPress={() => { setSelected(item.title), arrowTransform(), setOnPress(false) }}>
                                    <View style={{ borderColor: Colors.black, marginBottom: Colors.spacing }}>
                                        <Text style={{ fontSize: 12, color: Colors.black, }}>{item.title}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })}
                    </View>

                </View>
            </View>
        </>
    )
}

export default SearchBox

const styles = StyleSheet.create({
    container: {

    },
    taskTitle: {
        placeHolderTextColor: {},
        padding: 14,
        borderRadius: 4,
        paddingVertical: Platform.OS == 'android' ? 3 : 10,
        borderWidth: 1.5,
        borderColor: '#7E7E7E',
        position: 'relative',
    },
    taskTitleBadge: {
        width: 80,
        position: 'absolute',
        backgroundColor: 'white',
        top: -8
    },
    drowpDown: {
        flexGrow: .1
    },

    selected: {
        alignItems: 'center',
        padding: 14,
        paddingHorizontal: 10,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: '#7E7E7E',
        position: 'relative',
    },

    unselected: {
        alignItems: 'center',
        padding: 14,
        paddingHorizontal: 10,
        paddingVertical: 18,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: '#7E7E7E',
        position: 'relative',
    },

})