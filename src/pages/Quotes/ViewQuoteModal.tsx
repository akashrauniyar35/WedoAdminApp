import { Dimensions, Modal, Pressable, TextInput, SafeAreaView, StyleSheet, TouchableWithoutFeedback, FlatList, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../assets/Colors';
import ClientCard from './ClientCard';
import RequestedServiceCard from './RequestedServiceCard';
import EditModal from './EditQuoteModal';
import SearchBox from '../../components/SearchBox';
import StatusBox from '../../components/SelectionCard';
import NotesCard from './NotesCard';
import AddNotes from './AddNotesCard';
import QuoteTimeline from './QuoteTimelineCard';
import QuoteTimelineCard from './QuoteTimelineCard';
import NotesAccordian from '../../components/TimelineAccordian';
import { useSelector, useDispatch } from 'react-redux'
import { validatePathConfig } from '@react-navigation/native';
import { fetchQuoteByID } from '../../config/QuoteApi';
import { viewQuoteFail, viewQuoteSuccess } from '../../redux/quoteTableSlice';
import ViewQuoteModalComponents from './ViewQuoteModalComponents';

const { width, height } = Dimensions.get('screen')

const w = width * .95;
const colorOne = '#01151A';
const colorTwo = '';
const colorThree = '';
const textColor = 'white';
const grayText = '#2e2e2e'
const grayTextTwo = '#6e6e6e'
const spacing = 10;
const red = '#C10000'
const green = '#48a14d'
const blue = '#007792'
const orange = '#E05500'
const borderColor = '#7E7E7E'






const techniciansList = [
    {
        id: '00',
        label: 'Ritesh Timsina',
    },
    {
        id: '01',
        label: 'Prakash Sahsher',
    },
    {
        id: '02',
        label: 'Ritesh Timsina',
    },

];





const ViewQuoteModal = ({ isOpen, onPress, onClose }) => {
    const [editModal, setEditModal] = useState(isOpen)
    const quoteID = useSelector((state: any) => state.quoteTableReducer.selectedQuoteValue)
    const dispatch = useDispatch()


    // const [data, setData] = useState(useSelector((state: any) => state.quoteTableReducer.quoteByIdData.map((item: any) => item)))
    // const [data, setData] = useState()
    const quoteData: any = useSelector((state: any) => state.quoteTableReducer.quoteByIdData)


    const toggleEditModal = () => {
        setEditModal(!editModal)


    }

    const loadQuote = async () => {
        const x: any = await fetchQuoteByID(quoteID);
        console.log('response quote id', x)
        if (x.data.status === "error") {
            dispatch(viewQuoteFail(x.data.status))
        }
        dispatch(viewQuoteSuccess(x.data.result));
        // const y: any = useSelector((state: any) => state.quoteTableReducer.quoteByIdData)
        // { x.map((item: any) => setData(item)) }
    }


    useEffect(() => {
        loadQuote();

    }, [])


    return (
        <>
          
            <View style={{}}>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={editModal}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: editModal ? Colors.transparentGloss : 'transparent', }}>
                        {quoteData.map((item: any) => (<ViewQuoteModalComponents quoteID={quoteID} onClose={onPress} key={item._id} item={item} />))}
                    </View >
                </Modal >
            </View >

        </>
    )
}

export default ViewQuoteModal

const styles = StyleSheet.create({




})