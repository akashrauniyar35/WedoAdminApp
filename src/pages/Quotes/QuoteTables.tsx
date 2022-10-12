import { ActivityIndicator, Dimensions, FlatList, Platform, Pressable, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { Children, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import QuoteOptionsModal from './ViewQuoteModal'
import DataFilter from '../../components/DataFilter';
import { Colors } from '../../assets/Colors';

import EditModal from './EditQuoteModal';
import { useSelector, useDispatch } from 'react-redux'
import { getAllQuotesFail, getAllQuotesPending, getAllQuotesSuccess } from '../../redux/quoteTableSlice';
import AddQuoteModal from './AddQuoteModal';
import { fetchAllQuotes } from '../../config/QuoteApi';
import SearchBox from '../../components/SearchBox';
import QuoteCard from './QuoteCard';

const isAndroid = Platform.OS == 'android' ? true : false
const { width, height } = Dimensions.get('screen')





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
    // console.log("DARA", data)
    const [searchValue, setSearchValue] = useState();
    const [ref, setRef] = useState();
    const [pageCount, setPageCount] = useState(1);
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
        const x: any = await fetchAllQuotes(pageCount)

        if (x.data.status === "error") {
            return dispatch(getAllQuotesFail(x.data.status));
        }
        // setData(x.data.paginatedResults)
        dispatch(getAllQuotesSuccess(x.data))

        console.log('response from all quotes', x.data)
        setPageCount(1);
    }

    useEffect(() => {
        refreshHandler()

    }, [])



    const getNextPage = () => {
        setPageCount(pageCount + 1);
        refreshHandler()

    }
    // console.log('next page loading', pageCount)

    console.log("pagination Data", data)





    return (
        <>
            <View style={{}}>

                <View style={{}}>
                    <SearchBox type="quote" />
                    <View style={{ marginBottom: Colors.spacing * 1 }} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>


                        <TouchableWithoutFeedback onPress={refreshHandler}>
                            <View style={[styles.addButton, { backgroundColor: Colors.lightRed, justifyContent: 'space-evenly', paddingVertical: Colors.spacing * .75 }]}>
                                <Text style={{ fontSize: 20, fontWeight: isAndroid ? "900" : "600", color: 'white', width: "50%", }}>Refresh</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: "20%", }}>
                                    {loading ? <ActivityIndicator size="small" color="white" /> :
                                        <Icon name="ios-refresh-circle" size={30} color='white' />}
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={toggleAddQuote}>
                            <View style={[styles.addButton, { backgroundColor: Colors.green, justifyContent: 'space-evenly', paddingVertical: Colors.spacing * .75 }]}>
                                <Text style={{ fontSize: 20, fontWeight: isAndroid ? "900" : "600", color: 'white', width: "55%", }}>Add Quote</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: "20%", }}>
                                    {loading ? <ActivityIndicator size="small" color="white" /> :
                                        <Icon name="ios-add-circle" size={30} color='white' />}
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={{ marginBottom: Colors.spacing * 1, }} />
                    <DataFilter />
                    <View style={{ marginBottom: Colors.spacing * 1 }} />


                    <View style={{}}>
                        <FlatList

                            data={data} contentContainerStyle={{}}
                            scrollEnabled={true}
                            showsVerticalScrollIndicator={false}
                            onEndReached={() => getNextPage()}
                            keyExtractor={item => item._id}
                            renderItem={({ item, index }) => (<QuoteCard key={item._id} editQuote={editQuote} viewQuote={viewQuote} item={item} index={index} />)}
                        />
                    </View>


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