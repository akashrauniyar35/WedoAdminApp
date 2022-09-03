import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'
import Colors from '../../assets/Colors'
import StripCalandar from '../../components/StripeCalendar'
import OpenExpenseModal from './OpenExpenseModal';
import { FlatList } from 'react-native-gesture-handler';
import AddExpense from './AddExpense';



const data = [
    {
        id: '00',
        title: 'Fuel Caltex',
        comments: 'went to caltex to gas up ute',
        price: '30.35',
        expId: '456876',
        date: '01/09/2022',
    },

    {
        id: '01',
        title: 'Kuppi',
        comments: 'went to stragithfield bought some kuppi',
        price: '100',
        expId: '66876',
        date: '02/09/2022',
    },
    {
        id: '02',
        title: 'Bunnings Warehouse',
        comments: 'Cleaning chemicals from bunnings',
        price: '180.75',
        expId: '12355',
        date: '31/08/2022',
    },

    {
        id: '02',
        title: 'Bunnings Warehouse',
        comments: 'Cleaning chemicals from bunnings',
        price: '180.75',
        expId: '12355',
        date: '31/08/2022',
    },
]

const Expenses = ({ navigation }) => {
    const [openExpense, setOpenExpense] = useState(false);
    const [addExpenseVisible, setAddExpenseVisible] = useState(false);

    function toggleModal() {
        setOpenExpense(!openExpense)
    }
    function toggleAddExpense() {
        setAddExpenseVisible(!addExpenseVisible)
    }

    const ExpenseCard = ({ item }) => {
        return (
            <Pressable onPress={toggleModal}>
                <View style={{ backgroundColor: Colors.lightRed, padding: Colors.spacing, borderRadius: 5, marginBottom: Colors.spacing }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 12, color: '#fff', }}>#{item.expId}</Text>
                        <Text style={{ fontSize: 12, color: '#fff', }}>{item.date}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, color: '#fff', fontWeight: '600' }}>{item.title}</Text>
                        <Text style={{ fontSize: 28, color: '#fff', fontWeight: '800' }}>$ {item.price}</Text>
                    </View>
                </View>
            </Pressable>
        )
    }


    return (
        <>
            <View>
                <SafeAreaView />
                <View style={{ paddingHorizontal: Colors.spacing * 2, }}>
                    <Header nav={navigation} title="Expenses" />
                    <View style={{ marginBottom: Colors.spacing * 1 }} />
                    <SearchBox />
                    <View style={{ marginBottom: Colors.spacing * 1 }} />

                    <StripCalandar />
                    <View style={{ marginBottom: Colors.spacing * .5 }} />

                    <Pressable onPress={toggleAddExpense}>
                        <View style={{}} >
                            <Icon name='ios-add-circle' size={28} color={Colors.green} style={{ alignSelf: 'flex-end' }} />
                        </View>
                    </Pressable>
                    <View style={{ marginBottom: Colors.spacing * .5 }} />
                    <View style={{ backgroundColor: 'orange', }} />
                    <FlatList
                        pagingEnabled
                        showsVerticalScrollIndicator={false}
                        data={data}
                        contentContainerStyle={{}}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (<ExpenseCard item={item} />)}
                    />

                </View>
            </View>

            {openExpense ? <OpenExpenseModal isOpen={openExpense} onPress={toggleModal} onClose={toggleModal} /> : null}

            {addExpenseVisible ? <AddExpense isOpen={addExpenseVisible} onPress={toggleAddExpense} onClose={toggleAddExpense} /> : null}

        </>
    )
}

export default Expenses

const styles = StyleSheet.create({})