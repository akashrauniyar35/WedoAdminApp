import { StyleSheet, Text, Dimensions, View, TextInput, Animated, LayoutAnimation, Image, TouchableWithoutFeedback, Platform, ActivityIndicator, Pressable } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../assets/Colors';
import { useSelector, useDispatch } from 'react-redux'
import { getAllQuotesFail, getAllQuotesPending, getAllQuotesSuccess, searchQuoteFail, searchQuotePending, searchQuoteSuccess } from '../redux/jobSlice';
import { fetchAllQuotes, searchQuote } from '../config/JobApi';
import { ColorSpace } from 'react-native-reanimated';

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

const SearchBox = ({ type }: string) => {
    const [onPress, setOnPress] = useState(false);
    const animationController = useRef(new Animated.Value(0)).current
    const [searchValue, setSearchValue] = useState();

    const dispatch = useDispatch()

    const searchHandler = async (value) => {
        setSearchValue(value)

        if (type === "quote") {
            dispatch(searchQuotePending(value))

            try {
                const searchResults: any = await searchQuote(value);
                console.log("Respone isAuth", searchResults)
                if (searchResults.status === "error") {
                    // setErroremail(true)
                    // setErrorpassword(isAuth.message)
                    return dispatch(searchQuoteFail(searchResults.message));
                }
                console.log("Search results", searchResults.data.paginatedResults)
                dispatch(searchQuoteSuccess(searchResults.data.paginatedResults));

            } catch (e: any) {
                dispatch(searchQuoteFail(e.message));
            }

        }
    }

    const refreshHandler = async () => {
        setSearchValue('')
        dispatch(getAllQuotesPending('data'))
        const p = 'payload test'
        const x: any = await fetchAllQuotes(p)

        if (x.data.status === "error") {
            return dispatch(getAllQuotesFail(x.data.status));
        }
        // setData(x.data.paginatedResults)
        dispatch(getAllQuotesSuccess(x.data))

        console.log('response from all quotes', x.data)

    }

    // useEffect(() => {
    //     refreshHandler()

    // }, [])



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
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        {type === "quote" ?

                            <TextInput
                                autoCapitalize="none"
                                onChangeText={(value) => { searchHandler(value) }}
                                style={{ fontSize: 22, color: Colors.grayOne, width: '90%'}}
                                value={searchValue ? searchValue : ''}
                                placeholderTextColor={Colors.grayOne}
                                placeholder={searchValue ? searchValue : '....'}
                            />
                            :
                            <TextInput
                                autoCapitalize="none"
                                onChangeText={(e) => { arrowTransform(), setSearchValue(e) }}
                                style={{ fontSize: 13, color: Colors.grayOne, width: '90%', }}
                                value={searchValue ? searchValue : ''}
                                placeholderTextColor={Colors.grayOne}
                                placeholder={searchValue ? searchValue : '....'}
                            />}

                        {searchValue ?
                            <Pressable onPress={() => refreshHandler()} style={{}}>
                                <Icon name="ios-close-circle" size={28} color={Colors.grayOne} />
                            </Pressable> : null}
                    </View>

                    <View style={[styles.taskTitleBadge, { width: 60, flexDirection: 'row', alignItems: 'center' }]}>
                        <Text style={{ fontSize: 10, color: Colors.grayOne, paddingLeft: 6, padding: 2, fontWeight: '900' }}>Search</Text>
                        <View style={{ paddingHorizontal: 4, paddingRight: 6, }}>
                            <Icon name="ios-search" size={14} color={Colors.green} />
                        </View>
                    </View>



                    <View style={[styles.drowpDown, onPress && { overflow: 'hidden', }, { overflow: 'hidden', }]}>
                        {onPress && data.map((item) => {
                            return (
                                <TouchableWithoutFeedback key={item.id} onPress={() => { setSearchValue(item.title), arrowTransform(), setOnPress(false) }}>
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
        paddingHorizontal: 14,
        borderRadius: 4,
        paddingTop: Platform.OS == 'android' ? 6 : 7,

        borderWidth: 1,
        borderColor: Colors.grayText,
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

    searchValue: {
        alignItems: 'center',
        padding: 14,
        paddingHorizontal: 10,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: '#7E7E7E',
        position: 'relative',
    },

    unsearchValue: {
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