import { ActivityIndicator, Dimensions, FlatList, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { Children, useEffect, useState } from 'react'
import colors from '../../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import QuoteOptionsModal from './ViewQuoteModal'
import DataFilter from '../../components/DataFilter';
import Colors from '../../assets/Colors';

import EditModal from './EditModal';
import { useSelector, useDispatch } from 'react-redux'
import { getAllQuotesFail, getAllQuotesPending, getAllQuotesSuccess } from '../../redux/quoteTableSlice';
import AddQuoteModal from './AddQuoteModal';
import { fetchAllQuotes } from '../../config/QuoteApi';
import SearchBox from '../../components/SearchBox';
import QuoteCard from './QuoteCard';


const { width, height } = Dimensions.get('screen')

const pages = [
    {
        id: '00',
        page: '1',
    },
    {
        id: '01',
        page: '2',
    },
    {
        id: '02',
        page: '3',
    },
    {
        id: '03',
        page: '4',
    },

    {
        id: '04',
        page: '5',
    },
    {
        id: '05',
        page: '6',
    },
]

const oldData = [
    {
        id: '00',
        name: 'Pankaj Udas',
        email: 'email@gmail.com',
        suburb: 'Strathfield NSW',
        date: '16 October 2022',
        price: '600',
        number: '20220930-42386',
        phone: '041269822',
        status: 'Scheduled',
        service: 'EOL'
    },
    {
        id: '01',
        name: 'Sharma Udas',
        email: 'sharma@gmail.com',
        suburb: 'NewTown NSW',
        number: '20220930-4200',
        date: '14 October 2022',
        price: '660',
        status: 'Completed',
        phone: '041269822',
        service: 'End Of Lease'
    },
    {
        id: '02',
        name: 'Akash Lama',
        email: 'akash@gmail.com',
        suburb: 'Homebush West NSW',
        number: '20220930-423908',
        date: '05 October 2022',
        status: 'In Progress',
        price: '640', phone: '041269822',

        service: 'General'
    },
    {
        id: '09',
        name: 'Milan Udas',
        email: 'mailan@gmail.com',
        suburb: 'Aubirn NSW',
        number: '20220930-423907',
        date: '19 October 2022',
        price: '760',
        status: 'Scheduled',
        service: 'End Of Lease',
        phone: '041269822',

    },
    {
        id: '04',
        name: 'Milan Udas',
        email: 'mailan@gmail.com',
        suburb: 'Aubirn NSW',
        number: '20220930-423908',
        date: '09 October 2022',
        price: '460',
        status: 'Cancelled',
        service: 'End Of Lease'
    },
    {
        id: '05',
        name: 'Milan Udas',
        email: 'mailan@gmail.com',
        suburb: 'Aubirn NSW',
        number: '20220930-423908',
        date: '09 October 2022',
        price: '460',
        status: 'Cancelled',
        phone: '041269822',

        service: 'End Of Lease'
    },
    {
        id: '03',
        name: 'Milan Udas',
        email: 'mailan@gmail.com',
        suburb: 'Aubirn NSW',
        number: '20220930-423908',
        date: '09 October 2022',
        status: 'Pending',
        price: '460',
        phone: '041269822',
        service: 'End Of Lease'
    },
]


const TablesHeaders = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: colors.spacing * .5, backgroundColor: colors.darkBlue, borderRadius: colors.spacing * .4 }}>
            <Text style={{ fontSize: 14, width: '40%', color: 'white', marginLeft: 10 }}>Name</Text>
            <Text style={{ fontSize: 14, width: '30%', color: 'white' }}>Suburb</Text>
            <Text style={{ fontSize: 14, width: '30%', color: 'white' }}>Service</Text>
        </View>
    )
}




const QuoteTables = () => {
    // const [data, setData] = useState()
    const [selectedPage, setSelectedPage] = useState();
    const [openQuote, setOpenQuote] = useState(false);
    // const [loading, setLoading] = useState(false);
    const [filerEnabled, setFilterEnabled] = useState(false);
    const [editModal, setEditModal] = useState(false)
    const [addQuote, setAddQuote] = useState(false);
    const [limit, setLimit] = useState(10);

    const dispatch = useDispatch()
    const loading = useSelector((state: any) => state.quoteTableReducer.listLoading)
    const data = useSelector((state: any) => state.quoteTableReducer.quoteData)
    // console.log("xy", xy)

    const [searchValue, setSearchValue] = useState();
    const toggleFilter = () => {
        setFilterEnabled(!filerEnabled);
    }

    const viewQuote = () => {
        setOpenQuote(!openQuote);
    }

    const editQuote = () => {
        setEditModal(!editModal)
    };

    const toggleAddQuote = () => {
        setAddQuote(!addQuote);
    }

    const refreshHandler = async () => {
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
    useEffect(() => {
        refreshHandler()

    }, [])







    console.log("pagination Data", data)

    return (
        <>
            <View style={{}}>
                <SearchBox value={searchValue} type="quote" />
                <View style={{ marginBottom: colors.spacing * 1 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableWithoutFeedback onPress={refreshHandler}>
                        <View style={[styles.addButton, { backgroundColor: colors.lightRed, height: 32, justifyContent: 'space-evenly' }]}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: 'white', width: "50%", }}>Refresh</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: "20%", }}>
                                {loading ? <ActivityIndicator size="small" color="white" /> :
                                    <Icon name="ios-refresh-circle" size={26} color='white' />}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={toggleAddQuote}>
                        <View style={[styles.addButton, { backgroundColor: colors.green, height: 32, justifyContent: 'space-evenly' }]}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: 'white', width: "55%", }}>Add Quote</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: "20%", }}>
                                {loading ? <ActivityIndicator size="small" color="white" /> :
                                    <Icon name="ios-add-circle" size={26} color='white' />}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View style={{ marginBottom: colors.spacing * 1 }} />
                <DataFilter />
                <View style={{ marginBottom: colors.spacing * 1 }} />

                <View style={{}}>
                    {/* <View style={{height: height * .7, paddingBottom: Colors.spacing * .5}}> */}
                    <FlatList
                        data={data}                        contentContainerStyle={{}}
                        scrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item._id}
                        renderItem={({ item, index }) => (<QuoteCard key={item._id} editQuote={editQuote} viewQuote={viewQuote} item={item} index={index} />)}
                    />


                </View>


                {openQuote && <QuoteOptionsModal isOpen={openQuote} onPress={viewQuote} onClose={viewQuote} />}
                {editModal && <EditModal isOpen={editModal} onPress={editQuote} onClose={editQuote} />}
                {addQuote ? <AddQuoteModal isOpen={addQuote} onPress={toggleAddQuote} onClose={toggleAddQuote} /> : null}


            </View>

        </>
    )
}

export default QuoteTables

const styles = StyleSheet.create({
    addButton: {
        width: '45%',
        padding: 4,
        paddingVertical: 2,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    }
})