import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import OpenQuoteModal from './OpenQuoteModal'
import DataFilter from '../../components/DataFilter';

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

const data = [
    {
        id: '00',
        name: 'Pankaj Udas',
        email: 'email@gmail.com',
        suburb: 'Strathfield NSW',
        service: 'End Of Lease'
    },
    {
        id: '01',
        name: 'Sharma Udas',
        email: 'sharma@gmail.com',
        suburb: 'NewTown NSW',
        service: 'End Of Lease'
    },
    {
        id: '02',
        name: 'Akash Lama',
        email: 'akash@gmail.com',
        suburb: 'Homebush West NSW',
        service: 'General'
    },
    {
        id: '09',
        name: 'Milan Udas',
        email: 'mailan@gmail.com',
        suburb: 'Aubirn NSW',
        service: 'End Of Lease'
    },
    {
        id: '04',
        name: 'Milan Udas',
        email: 'mailan@gmail.com',
        suburb: 'Aubirn NSW',
        service: 'End Of Lease'
    },
    {
        id: '05',
        name: 'Milan Udas',
        email: 'mailan@gmail.com',
        suburb: 'Aubirn NSW',
        service: 'End Of Lease'
    },
    {
        id: '03',
        name: 'Milan Udas',
        email: 'mailan@gmail.com',
        suburb: 'Aubirn NSW',
        service: 'End Of Lease'
    },
    {
        id: '07',
        name: 'Milan Udas',
        email: 'mailan@gmail.com',
        suburb: 'Aubirn NSW',
        service: 'End Of Lease'
    },
    {
        id: '08',
        name: 'Milan Udas',
        email: 'mailan@gmail.com',
        suburb: 'Aubirn NSW',
        service: 'End Of Lease'
    },
    // {
    //     id: '06',
    //     name: 'Milan Udas',
    //     email: 'mailan@gmail.com',
    //     suburb: 'Aubirn NSW',
    //     service: 'End Of Lease'
    // },
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
    const [selectedPage, setSelectedPage] = useState();
    const [openQuote, setOpenQuote] = useState(false);
    const [filerEnabled, setFilterEnabled] = useState(false);

    const toggleFilter = () => {
        setFilterEnabled(!filerEnabled);
    }

    const onPress = () => {
        setOpenQuote(!openQuote);
    }



    const QuoteCards = ({ item }) => {
        return (
            <TouchableWithoutFeedback onPress={() => onPress()}>
                <View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: .5, paddingVertical: 10, borderColor: colors.black }}>

                    <View style={{ flexDirection: 'row', width: '40%', marginLeft: 10 }}>
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: '500' }}>{item.name}</Text>
                            <Text style={{ fontSize: 10, }}>{item.email}</Text>
                        </View>
                    </View>

                    <View style={{ width: '30%', }}>
                        <Text style={{ fontSize: 12, }}>{item.suburb}</Text>
                    </View>

                    <View style={{ width: '30%', }}>
                        <Text style={{ fontSize: 12, }}>{item.service}</Text>
                    </View>

                </View >
            </TouchableWithoutFeedback>
        )
    }

    return (
        <>
            <View style={{}}>
                <DataFilter />
                <View style={{ marginBottom: colors.spacing * 1 }} />
                <TablesHeaders />
                <View style={{ marginBottom: colors.spacing * 1 }} />
                <FlatList data={data} keyExtractor={item => item.id}
                    scrollEnabled={false}
                    contentContainerStyle={{}}
                    renderItem={({ item }) => (<QuoteCards item={item} />)}
                />

                <View style={{ marginTop: colors.spacing * 1, }}>



                    <Text style={{ fontSize: 10, color: colors.black, marginBottom: 5, }} >PAGE 1 OF 6</Text>
                    <FlatList horizontal data={pages} keyExtractor={item => item.id}

                        contentContainerStyle={{ width: '100%' }}

                        renderItem={({ item }) => (
                            <TouchableWithoutFeedback >
                                <View style={{ marginRight: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.darkBlue, borderRadius: 100, height: 35, width: 35 }}>
                                    <Text style={{ color: 'white', fontWeight: '700' }}>{item.page}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )} />
                </View>
                {openQuote && <OpenQuoteModal isOpen={openQuote} onPress={onPress} onClose={onPress} />}
            </View>

        </>
    )
}

export default QuoteTables

const styles = StyleSheet.create({})