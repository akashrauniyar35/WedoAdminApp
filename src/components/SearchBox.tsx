import { StyleSheet, Text, Dimensions, View, TextInput, Animated, LayoutAnimation, Image, TouchableWithoutFeedback, Platform, ActivityIndicator } from 'react-native'
import React, { useState, useRef } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/Colors';
import { useSelector, useDispatch } from 'react-redux'
import { searchQuoteFail, searchQuotePending, searchQuoteSuccess } from '../redux/quoteTableSlice';
import { searchQuote } from '../config/QuoteApi';

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

const SearchBox = ({ type, }: string, onChange: any) => {
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
                    {type === "quote" ?
                        <TextInput
                            autoCapitalize="none"
                            onChangeText={(value) => { searchHandler(value) }}
                            style={{ fontSize: 13, marginTop: 2 }}
                            value={searchValue ? searchValue : ''}
                            placeholderTextColor={Colors.black}
                            placeholder={searchValue ? searchValue : '....'}
                        /> :
                        <TextInput
                            autoCapitalize="none"
                            onChangeText={(e) => { arrowTransform(), setSearchValue(e) }}
                            style={{ fontSize: 13, marginTop: 2 }}
                            value={searchValue ? searchValue : ''}
                            placeholderTextColor={Colors.black}
                            placeholder={searchValue ? searchValue : '....'}
                        />}

                    <View style={[styles.taskTitleBadge, { width: 70, flexDirection: 'row', alignItems: 'center' }]}>
                        <Text style={{ fontSize: 12, color: Colors.black, paddingLeft: 6, padding: 2, backgroundColor: 'white' }}>Search</Text>
                        <View style={{ backgroundColor: 'white', paddingHorizontal: 4, paddingRight: 6, }}>
                            <Icon name="ios-search" size={14} color={Colors.green} />
                        </View>
                    </View>
                    <View style={[styles.drowpDown, onPress && { overflow: 'hidden', marginTop: onPress && Colors.spacing * 2 }, { overflow: 'hidden', }]}>
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
        paddingVertical: Platform.OS == 'android' ? 3 : 7,
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