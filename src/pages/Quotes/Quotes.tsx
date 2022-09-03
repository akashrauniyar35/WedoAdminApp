import { SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../assets/Colors'
import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'
import Icon from 'react-native-vector-icons/Ionicons';
import QuoteTables from './QuoteTables'
import AddQuoteModal from './AddQuoteModal'






const Quotes = ({ navigation }) => {
    const [addQuote, setAddQuote] = useState(false);

    const toggleAddQuote = () => {
        setAddQuote(!addQuote);
    }


    return (
        <>
            <SafeAreaView />
            <View style={{ paddingHorizontal: colors.spacing * 2, }}>
                <Header nav={navigation} title="Quotes" />
                <View style={{ marginBottom: colors.spacing * 1 }} />
                <SearchBox />

                <View style={{ marginBottom: colors.spacing * 1 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                    <TouchableWithoutFeedback>
                        <View style={[styles.addButton, { backgroundColor: colors.lightRed, }]}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: 'white' }}>Refresh</Text>
                            <Icon name="ios-refresh-circle" size={28} color='white' style={{ marginLeft: 10 }} />
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={toggleAddQuote}>
                        <View style={[styles.addButton, { backgroundColor: colors.green, }]}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: 'white' }}>Add Quote</Text>
                            <Icon name="ios-add-circle" size={28} color='white' style={{ marginLeft: 10 }} />
                        </View>
                    </TouchableWithoutFeedback>

                </View>

                <View style={{ marginBottom: colors.spacing * 1 }} />
                <QuoteTables />




                {addQuote ? <AddQuoteModal isOpen={addQuote} onPress={toggleAddQuote} onClose={toggleAddQuote} /> : null}
            </View >




        </>)
}

export default Quotes

const styles = StyleSheet.create({
    addButton: {
        width: '45%',
        padding: 4,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    }
})