import { View, Text, StyleSheet, Platform, Dimensions, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../assets/Colors';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import ViewJobModal from '../pages/Quotes/ViewJobModal';

const { width, height } = Dimensions.get('screen')
const isAndroid = Platform.OS == 'android' ? true : false

const JobCard = ({ item, index }) => {

    const [isOpen, setIsOpen] = useState(false);



    const openJobHandler = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Pressable onPress={openJobHandler}>
                <View style={[styles.container, { backgroundColor: index % 2 === 0 ? 'white' : "transparent", elevation: index % 2 === 0 ? 0 : 1 },]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>

                        <View style={{}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Text style={{ fontSize: 20, color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "900" : "600" }}>#20220912-123124</Text>
                                <View style={{ marginLeft: Colors.spacing, backgroundColor: '#fff8ed', padding: Colors.spacing * .55, borderRadius: Colors.spacing, paddingHorizontal: Colors.spacing }}>
                                    <Text style={{ fontSize: 10, color: '#F6BD59', fontWeight: isAndroid ? "900" : "600" }}>In Progress</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing * .5 }}>
                                <Text style={{ fontSize: 13, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "400" }}>30 Sep 2022</Text>
                                <View style={{ backgroundColor: Colors.maidlyGrayText, width: 5, height: 5, marginHorizontal: Colors.spacing, borderRadius: 100, }} />
                                <Text style={{ fontSize: 13, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "400" }}>$ 120</Text>
                            </View>
                        </View>
                        <IconM name="dots-horizontal" size={28} color={Colors.maidlyGrayText} />
                    </View>


                    <View style={{ height: .45, width: '100%', marginVertical: Colors.spacing * 2, backgroundColor: Colors.littleGray }} />

                    <View style={{}}>
                        <View style={{}}>
                            <Text style={{ fontSize: 16, color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "900" : "600" }}>Grace Lama</Text>
                            <View style={{ marginVertical: Colors.spacing }}>
                                <Text style={{ fontSize: 13, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "400" }}>30 henely Rd Strathfield</Text>
                                <Text style={{ fontSize: 13, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "400" }}>New South Wales, 2144</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing * .5 }}>
                            <Text style={{ fontSize: 13, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "400" }}>0412 456 789</Text>
                            <View style={{ backgroundColor: Colors.maidlyGrayText, width: 5, height: 5, marginHorizontal: Colors.spacing, borderRadius: 100, }} />
                            <Text style={{ fontSize: 13, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "400" }}>gracelama@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
            <ViewJobModal isOpen={isOpen} onPress={openJobHandler} />
        </>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: Colors.spacing * 2.5,
        paddingTop: Colors.spacing * 2.5,
    },


})

export default JobCard