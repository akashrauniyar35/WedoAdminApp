import { Dimensions, FlatList, Modal, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, HEIGHT, WIDTH } from '../assets/Colors';
import SelectTechnicianCard from './SelectionCard';
import PeriodSelector from './PeriodSelector';
import StatusCard from './Sc';
import SelectionCard from './SelectionCard';
import SearchJobCard from './SearchJobCard';
import SearchCustomerCard from './SearchCustomerCard';
import { G } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
import { searchJobFail, searchJobPending, searchJobuccess } from '../redux/jobSlice';
import { fetchSearch } from '../config/JobApi';

const isAndroid = Platform.OS == 'android' ? true : false
const { width, height } = Dimensions.get('screen')




const jobData = [
    {
        id: '00',
        number: '20221030-099022',
        price: '120.00',

        name: 'Ninja Prasad',
    },
    {
        id: '04',
        number: '20221030-099022',
        price: '120.00',

        name: 'Ninja Prasad',
    },
    {
        id: '05',
        number: '20221030-099022',
        price: '120.00',

        name: 'Ninja Prasad',
    },
    {
        id: '6',
        number: '20221030-099022',
        price: '200.00',

        name: 'Ashwin Nigga',
    },
    {
        id: '07',
        number: '20221030-099022',
        price: '100.00',
        name: 'Milan Prasad',
    },
    {
        id: '03',
        number: '20221030-099022',
        price: '100.00',
        name: 'Milan Prasad',
    },
    {
        id: '08',
        number: '20221030-099022',
        price: '100.00',
        name: 'Milan Prasad',
    },
    {
        id: '09',
        number: '20221030-099022',
        price: '100.00',
        name: 'Milan Prasad',
    },
    {
        id: '10',
        number: '20221030-099022',
        price: '100.00',
        name: 'Milan Prasad',
    },
];

const customerData = [
    {
        id: '00',
        name: 'Andy Anderson',
        service: "N/A",
        totalJob: '1',
        cost: '120.00'
    },
    {
        id: '01',
        name: 'Mouse Prakash',
        service: "N/A",
        cost: '420.00',
        totalJob: '2',
    },
    {
        id: '02',
        name: 'Keyboard Prakash',
        service: "N/A",
        totalJob: '1',
        cost: '320.00'
    },
    {
        id: '03',
        name: 'Andy Anderson',
        service: "N/A",
        totalJob: '2',
        cost: '220.00'
    },
    {
        id: '03',
        name: 'Andy Anderson',
        service: "N/A",
        totalJob: '2',
        cost: '220.00'
    },
]


const SearchModal = ({ onPress, isOpen }) => {
    const [searchValue, setSearchValue] = useState(String)
    const [lastJob, setLastJob] = useState(false)
    const dispatch = useDispatch()

    const data = useSelector((state: any) => state.jobReducer.searchResults.paginatedResults)


    const searchRequest = async () => {
        const x: any = await fetchSearch(searchValue)
        if (x.data.status === "error") {
            return dispatch(searchJobFail(x.data.status));
        }
        // setData(x.data.paginatedResults)
        dispatch(searchJobuccess(x.data))


    }

    console.log("search results", data)

    useEffect(() => {
        searchRequest()
    }, [searchValue])

    return (

        <>

            <Modal
                animationType="fade"
                transparent={true}
                visible={isOpen}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    <SafeAreaView />
                    <View style={{
                        flex: 1,
                        backgroundColor: 'white',
                        width: width,
                        borderTopRightRadius: Colors.spacing * 2,
                    }}>

                        <View style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white',
                            paddingHorizontal: Colors.spacing * 2,
                            paddingVertical: Colors.spacing * 1,
                            shadowRadius: 2,
                            shadowOffset: { width: 0, height: .5 },
                            shadowOpacity: .2,
                            elevation: 2,
                            shadowColor: Colors.grayOne,

                        }}>

                            <View style={[styles.box, { justifyContent: 'space-between', width: '90%' }]}>
                                <Icon onPress={onPress} name="search" color={Colors.maidlyGrayText} size={20} style={{ marginLeft: Colors.spacing, }} />

                                <TextInput
                                    autoCapitalize="none"
                                    value={searchValue}
                                    onChangeText={setSearchValue}
                                    placeholderTextColor={Colors.maidlyGrayText}
                                    placeholder={searchValue ? searchValue : "Type here to search"}
                                    style={[styles.searchBox, {
                                        width: isAndroid ? "80%" : '75%',
                                        paddingVertical: isAndroid ? Colors.spacing * .7 : Colors.spacing * 1, color: Colors.maidlyGrayText
                                    }]}
                                />
                                <Icon onPress={() => setSearchValue()} name="close-circle" color={Colors.maidlyGrayText} size={20} style={{ marginRight: Colors.spacing, }} />

                            </View>


                            <Pressable onPress={onPress} style={{ marginLeft: Colors.spacing, }}>
                                <Text style={{ fontSize: 10, fontWeight: isAndroid ? "600" : "300", color: Colors.maidlyGrayText, paddingVertical: Colors.spacing, paddingRight: Colors.spacing, }}>Cancle</Text>
                            </Pressable>

                        </View>




                        <View style={styles.container}>

                            <View style={{}}>
                                {/* <Text style={{ fontSize: 16, fontWeight: isAndroid ? "900" : "600", color: Colors.maidlyGrayText, marginBottom: Colors.spacing * 2 }}>Job</Text> */}
                            </View>

                            <FlatList
                                showsVerticalScrollIndicator={false}
                                scrollEnabled={true}
                                contentContainerStyle={{ paddingBottom: Colors.spacing * 10 }}
                                ItemSeparatorComponent={() =>
                                    <View style={{ width: '100%', marginVertical: Colors.spacing * 2, borderBottomWidth: .35, borderColor: Colors.maidlyGrayText }} />
                                }
                                data={data} keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <SearchJobCard key={item.id} jobNumber={item._id} customerName={item.name} cost={item.price} />
                                } />

                        </View>



                        {/* <View style={{ height: 2, opacity: .3, width: '120%', marginVertical: Colors.spacing * 2, backgroundColor: Colors.maidlyGrayText, marginLeft: -Colors.spacing * 2 }} /> */}

                        {/* //customers */}
                        {/* <View style={{}}>
                                <Text style={{ fontSize: 16, fontWeight: isAndroid ? "900" : "600", color: Colors.maidlyGrayText, marginBottom: Colors.spacing * 2 }}>Customer</Text>

                                <View style={styles.customerTable}>
                                    <Text style={{ fontSize: isAndroid ? 14 : 10, fontWeight: isAndroid ? "900" : "600", color: Colors.maidlyGrayText, width: '30%' }}>Name</Text>
                                    <Text style={{ fontSize: isAndroid ? 14 : 10, fontWeight: isAndroid ? "900" : "600", color: Colors.maidlyGrayText, width: '20%' }}>Last Service</Text>
                                    <Text style={{ fontSize: isAndroid ? 14 : 10, fontWeight: isAndroid ? "900" : "600", color: Colors.maidlyGrayText, width: '14%' }}>Total Job</Text>
                                    <Text style={{
                                        fontSize: isAndroid ? 14 : 10, fontWeight: isAndroid ? "900" : "600", color: Colors.maidlyGrayText,
                                        width: '18%'
                                    }}>Total Spent</Text>
                                </View>

                                <FlatList showsVerticalScrollIndicator={false}
                                    contentContainerStyle={{}}
                                    data={customerData} keyExtractor={item => item.id} renderItem={({ item }) => <SearchCustomerCard totalJob={item.totalJob} key={item.id} customerName={item.name} cost={item.cost} lastService={item.service} />} />

                            </View> */}

                    </View>


                </View>
            </Modal >


        </>






    )
}

export default SearchModal

const styles = StyleSheet.create({


    container: {
        padding: Colors.spacing * 2,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.grayBG,
        borderRadius: Colors.spacing * .5,

    },
    searchBox: { fontWeight: isAndroid ? "900" : "600", fontSize: 16, },
    customerTable: {
        marginBottom: Colors.spacing * 2,
        flexDirection: 'row', justifyContent: 'space-between', fontSize: 14,
        borderBottomWidth: .35, borderColor: Colors.maidlyGrayText, paddingBottom: Colors.spacing * 1
    }
})