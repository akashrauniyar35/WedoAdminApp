import { View, Text, StyleSheet, Platform, Dimensions, Pressable, Animated, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import { Colors, WIDTH } from '../assets/Colors';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import ViewJobModal from '../pages/Jobs/ViewJobModal';
import { useSelector, useDispatch } from 'react-redux'
import { viewJobFail, viewJobPending, viewJobSuccess } from '../redux/jobSlice';
import { fetchJobByID } from '../config/JobApi';

import { Swipeable, } from 'react-native-gesture-handler';
import AddJob from '../pages/Add/AddJob';
import AddNotes from './AddNotes';

const { width, height } = Dimensions.get('screen')
const isAndroid = Platform.OS == 'android' ? true : false

const JobCard = ({ item, index, }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [editJobVisible, setEditJobVisible] = useState(false);
    const [addNotesVisible, setAddNotesVisible] = useState(false);
    const swipeableRef = useRef<Swipeable | null>(null);
    const [jobId, setJobId] = useState(String)


    const dispatch = useDispatch()
    const phoneNumber = [item.phone.slice(0, 3), " ", item.phone.slice(3, 6), " ", item.phone.
        slice(6)].join('')

    const price = [item.subtotal.toString().slice(0, 3), ".", item.subtotal.toString().slice(3)].join('')


    const [refsArray, setRefsArray] = useState([])
    const openJobHandler = async () => {
        const jobID = item._id
        dispatch(viewJobPending(jobID))
        setIsOpen(!isOpen)

        const x: any = await fetchJobByID(jobID);
        console.log('response quote id', x)
        if (x.data.status === "error") {
            dispatch(viewJobFail(x.data.status))
        }
        dispatch(viewJobSuccess(x.data.result));


    }


    const swipeableOptions = [
        {
            id: '00',
            title: 'Confirm booking',
            icon: 'calendar-check',
            type: 'confirmBooking',
        },
        {
            id: '01',
            title: 'Edit job details',
            icon: 'file-document-edit',
            type: 'editJob',
        },
        {
            id: '02',
            title: 'Add notes',
            icon: 'text-box-plus',
            type: 'addNotes',
        },
        {
            id: '03',
            title: 'View/Send invoice',
            icon: 'file-pdf-box',
            type: 'viewPDF',
        },
        {
            id: '04',
            title: 'Delete',
            icon: 'trash-can',
            type: 'delete',
        },

    ]


    const leftSwipe = (progress, dragX) => {

        const lastIndex = swipeableOptions.length - 1
        const lastItemID = swipeableOptions[lastIndex].id
        const scale = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-20, 0, 0, 1],
            extrapolate: 'clamp'
        });

        console.log('lastItemID', lastItemID)



        return (
            <View style={styles.leftContainer} >
                {swipeableOptions.map((item) => {
                    return (
                        <Pressable

                            onPress={() => onSwipeablePress(item.type)} key={item.id} style={[styles.leftCard, { borderBottomWidth: item.id === lastItemID ? 0 : .35, borderColor: 'white' }]}>
                            <Animated.View style={{ transform: [{ scale: scale }], flexDirection: 'row', alignItems: 'center', paddingHorizontal: Colors.spacing * 2, justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 12, color: 'white', fontWeight: isAndroid ? "900" : "600" }}>{item.title}</Text>
                                <IconM name={item.icon} size={18} color="white" />
                            </Animated.View>
                        </Pressable>
                    )
                })
                }


            </View >
        )
    }

    const onSwipeablePress = (value) => {
        console.log(value)
        if (value === "editJob") {
            setEditJobVisible(true)
        }
        if (value === "addNotes") {
            setAddNotesVisible(true)
        }
        if (swipeableRef.current) {
            swipeableRef.current.close();
        }
    }


    const swipeableOpen = () => {
        if (swipeableRef.current) {
            swipeableRef.current.openLeft()
        }
    }

    return (
        <>
            <Swipeable renderLeftActions={leftSwipe} ref={swipeableRef}
                friction={2}
            >
                <Pressable onPress={() => openJobHandler()}>
                    <View style={[styles.container, { backgroundColor: index % 2 === 0 ? 'white' : "transparent", elevation: index % 2 === 0 ? 0 : 1 },]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>

                            <View style={{}}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ fontSize: 20, color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "900" : "600" }}>#{item._id.substring(10, 40)}</Text>
                                    <View style={{ marginLeft: Colors.spacing, backgroundColor: '#fff8ed', padding: Colors.spacing * .55, borderRadius: Colors.spacing, paddingHorizontal: Colors.spacing }}>
                                        <Text style={{ fontSize: 10, color: '#F6BD59', fontWeight: isAndroid ? "900" : "600" }}>{item.quoteStatus}</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing * .5 }}>
                                    <Text style={{ fontSize: 13, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "400" }}>{item.createdAt}</Text>
                                    <View style={{ backgroundColor: Colors.maidlyGrayText, width: 5, height: 5, marginHorizontal: Colors.spacing, borderRadius: 100, }} />
                                    <Text style={{ fontSize: 13, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "400" }}>$ {price}</Text>
                                </View>
                            </View>
                            <Pressable onPress={swipeableOpen}>
                                <IconM name="dots-horizontal" size={28} color={Colors.maidlyGrayText} />
                            </Pressable>
                        </View>

                        <View style={{ width: '100%', marginVertical: Colors.spacing * 2, borderBottomWidth: .35, borderColor: Colors.maidlyGrayText }} />

                        <View style={{}}>
                            <View style={{}}>
                                <Text style={{ fontSize: 16, color: Colors.madidlyThemeBlue, fontWeight: isAndroid ? "900" : "600" }}>{item.name}</Text>
                                <View style={{ marginVertical: Colors.spacing }}>
                                    <Text style={{ fontSize: 13, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "400" }}>{'item.address'}</Text>
                                    <Text style={{ fontSize: 13, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "400" }}>{'item.address'}</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Colors.spacing * .5 }}>
                                <Text style={{ fontSize: 13, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "400" }}>{phoneNumber}</Text>
                                <View style={{ backgroundColor: Colors.maidlyGrayText, width: 5, height: 5, marginHorizontal: Colors.spacing, borderRadius: 100, }} />
                                <Text style={{ fontSize: 13, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "400" }}>{item.email}</Text>
                            </View>
                        </View>
                    </View>
                </Pressable>
            </Swipeable>

            <ViewJobModal isOpen={isOpen} onPress={openJobHandler} id={item._id} />

            <AddJob isOpen={editJobVisible} onClose={() => setEditJobVisible(false)} lable={"Edit job"} />
            <AddNotes animation="slide" title="Add notes" onClose={() => setAddNotesVisible(false)} isOpen={addNotesVisible} />

        </>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: Colors.spacing * 2.5,
        paddingTop: Colors.spacing * 2.5,
    },
    leftContainer: {
        width: 200,
        justifyContent: 'center',
        backgroundColor: Colors.madidlyThemeBlue,
        overflow: 'hidden'
    },
    leftCard: {
        width: 200,
        paddingVertical: Colors.spacing * 1,
        overflow: 'hidden'
    }

})

export default JobCard