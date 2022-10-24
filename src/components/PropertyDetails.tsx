import { StyleSheet, Text, Dimensions, View, TextInput, Animated, LayoutAnimation, Image, TouchableWithoutFeedback, Pressable, Switch } from 'react-native'
import React, { useState, useRef } from 'react'
import InputBox from './InputBox'
import { Colors, HEIGHT, isAndroid, WIDTH } from '../assets/Colors'
import SelectionCard from './SelectionCard'

import Icon from 'react-native-vector-icons/Ionicons';

const bedroomsData = [
    {
        id: '00',
        name: '1  Bedroom',
    },
    {
        id: '01',
        name: '2  Bedrooms',
    },
    {
        id: '02',
        name: '3  Bedrooms',
    },
    {
        id: '03',
        name: '4  Bedrooms',
    },
    {
        id: '04',
        name: '5  Bedrooms',
    },
    {
        id: '04',
        name: '6  Bedrooms',
    },
]
const bathroomsData = [
    {
        id: '00',
        name: '1  Bathroom',
    },
    {
        id: '01',
        name: '2  Bathrooms',
    },
    {
        id: '02',
        name: '3  Bathrooms',
    },
    {
        id: '03',
        name: '4  Bathrooms',
    },
    {
        id: '04',
        name: '5  Bathrooms',
    },
    {
        id: '04',
        name: '6  Bathrooms',
    },
];

const productsData = [
 
    {
        "item": "TC 100",
        "description": "Balcony",
        "quantity": 0,
        "amount": 4000
    },
    {
        "item": "TC 101",
        "description": "Separate Toilet",
        "quantity": 0,
        "amount": 6000
    },
    {
        "item": "TC 102",
        "description": "Study Room",
        "quantity": 0,
        "amount": 5000
    },
    {
        "item": "TC 103",
        "description": "Wall Wash",
        "quantity": 0,
        "amount": 5000
    },
    {
        "item": "TC 104",
        "description": "Fridge",
        "quantity": 0,
        "amount": 6000
    },
    {
        "item": "TC 105",
        "description": "Garage",
        "quantity": 0,
        "amount": 6000
    },
    {
        "item": "TC 106",
        "description": "Blinds",
        "quantity": 0,
        "amount": 6000
    },
    {
        "item": "TC 107",
        "description": "Steam Living",
        "quantity": 0,
        "amount": 6000
    },
    {
        "item": "TC 108",
        "description": "Steam Bedroom",
        "quantity": 0,
        "amount": 6000
    },
    {
        "item": "TC 109",
        "description": "Steam Bedroom",
        "quantity": 0,
        "amount": 6000
    },
    {
        "item": "TC 110",
        "description": "Steam Stairs",
        "quantity": 0,
        "amount": 6000
    },
    {
        "item": "TC 111",
        "description": "Steam Hallway",
        "quantity": 0,
        "amount": 6000
    }
];

const services = [
    {
        id: "00",
        title: 'General'
    },
    {
        id: "01",
        title: 'Enf Of Lease'
    },
]

const propertyTypes = [
    {
        id: "00",
        title: 'Studio',
    },
    {
        id: "01",
        title: 'Unit'
    },
    {
        id: "02",
        title: 'House'
    },
]

const PropertyDetails = ({ serviceHandler, service, property, propertyHandler, bedrooms, bedroomHandler, bathrooms, bathroomHandler }) => {
    const [addCheckList, setAddChecklist] = useState(false);
    const animationController = useRef(new Animated.Value(0)).current
    const [selectedService, setSelectedService] = useState(String)
    const [selectedProperty, setSelectedProperty] = useState(String)


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


    const dropdown = () => {

        const config = {
            duration: 300,
            toValue: addCheckList ? 0 : 1,
            useNativeDriver: true
        };

        Animated.timing(animationController, config).start();
        LayoutAnimation.configureNext(dropDownAnimation);
        setAddChecklist(!addCheckList)
    }

    const toggleDefaultChecklist = () => {
        dropdown()
    }

    const jobServiceHandler = (value) => {
        serviceHandler(value)
        setSelectedService(value)
    }

    const jobPropertyTypesHandler = (value) => {
        propertyHandler(value)
        setSelectedProperty(value)
    }

    const jobBedroomHandler = (value) => {
        const x = value.substring(0, 1)
        bedroomHandler(x)
    }
    const jobBathroomHandler = (value) => {
        const x = value.substring(0, 1)
        bathroomHandler(x)
    }

    return (
        <View style={{ overflow: 'hidden' }}>
            <Text style={{ fontSize: 18, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "700", marginBottom: Colors.spacing * 2 }}>Job</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing * 2 }}>
                <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>Service</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', width: "70%", justifyContent: "flex-start", }}>
                    {services.map((item) => {
                        return (
                            <View style={{ marginRight: "7%", }}>
                                <Pressable onPress={() => jobServiceHandler(item.title)} key={item.id} style={[styles.serviceButton, { backgroundColor: item.title === selectedService ? Colors.madidlyThemeBlue : 'white', }]}>
                                    <Text style={{ fontSize: 12, color: item.title === selectedService ? 'white' : Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : selectedService === item.title ? "900" : "300" }}>{item.title}</Text>
                                </Pressable>
                            </View>
                        )
                    })}
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing * 2 }}>
                <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>Property</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', width: "69%", justifyContent: 'space-between', marginRight: 5, }}>
                    {propertyTypes.map((item) => {
                        return (
                            <View style={{}}>
                                <Pressable onPress={() => jobPropertyTypesHandler(item.title)} key={item.id} style={[styles.serviceButton, { backgroundColor: item.title === selectedProperty ? Colors.madidlyThemeBlue : 'white', }]}>
                                    <Text style={{ fontSize: 12, color: item.title === selectedProperty ? 'white' : Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : selectedProperty === item.title ? "900" : "300" }}>{item.title}</Text>
                                </Pressable>
                            </View>
                        )
                    })}
                </View>
            </View>

            {/* <Text style={{ fontSize: 14, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", marginBottom: Colors.spacing * 2 }}>House Details</Text> */}


            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing * 2, }}>
                <Text style={{ fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>Bedrooms</Text>
                <View style={{ width: "70%", marginRight: Colors.spacing * .25, }}>
                    <SelectionCard onPress={jobBedroomHandler} size={40} fontSize={12} phColor={Colors.maidlyGrayText} rounded={true} data={bedroomsData} type={'filter'} placeholder="1 Bedroom" />
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing * 2, }}>
                <Text style={{ fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>Bathrooms</Text>
                <View style={{ width: "70%", marginRight: Colors.spacing * .25, }}>
                    <SelectionCard onPress={jobBathroomHandler} size={40} fontSize={12} phColor={Colors.maidlyGrayText} rounded={true} data={bathroomsData} type={'filter'} placeholder="1 Bathroom" />
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing, }}>
                <Text style={{ fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>Addons</Text>
                <View style={{}}>
                    <Switch
                        trackColor={{ false: "#767577", true: Colors.maidlyGrayText }}
                        thumbColor={'white'}
                        onValueChange={toggleDefaultChecklist}
                        value={addCheckList}
                    />
                </View>
            </View>



            {
                addCheckList &&
                <View style={styles.productsContainer}>

                    {productsData.map((item) => {
                        return (
                            <View style={styles.productsCard}>

                                <Text style={{ fontSize: 12, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "600" : "300", }}>{item.description}</Text>


                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '30%', justifyContent: 'space-between' }}>
                                    <Icon name="add-circle-outline" size={24} color={Colors.maidlyGrayText} />
                                    <Text style={{ alignSelf: 'center', fontSize: 16, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", }}>{item.quantity}</Text>
                                    <Icon name="remove-circle-outline" size={24} color={Colors.maidlyGrayText} />
                                </View>

                            </View>
                        )
                    })}
                </View>
            }


            <View style={{ opacity: .35, marginVertical: Colors.spacing * 2, borderBottomWidth: 2, borderColor: Colors.maidlyGrayText }} />
        </View >
    )
}

export default PropertyDetails

const styles = StyleSheet.create({
    productsCard: {

        marginBottom: Colors.spacing * 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: .35,
        paddingBottom: Colors.spacing * 1,
        borderColor: Colors.maidlyGrayText,

    },
    productsContainer: {
        justifyContent: "space-between",
        marginTop: Colors.spacing,
        overflow: 'hidden'
    },
    serviceButton: {
        // marginRight: Colors.spacing * 1,
        backgroundColor: 'white',
        borderColor: Colors.maidlyGrayText,
        paddingHorizontal: Colors.spacing * 2,
        height: 40,
        justifyContent: 'center',
        shadowRadius: 2,
        borderRadius: Colors.spacing * Colors.spacing,
        shadowOffset: { width: 0, height: .5 },
        shadowOpacity: .2,
        elevation: 2,
        shadowColor: Colors.madidlyThemeBlue,
        borderWidth: isAndroid ? .35 : 0,
    }
})