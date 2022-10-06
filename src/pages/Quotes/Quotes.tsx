import { SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../assets/Colors'
import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'
import Icon from 'react-native-vector-icons/Ionicons';
import QuoteTables from './QuoteTables'
import AddQuoteModal from './AddQuoteModal'
import Colors from '../../assets/Colors'






const Quotes = ({ navigation }) => {
    // const [addQuote, setAddQuote] = useState(false);

    // const toggleAddQuote = () => {
    //     setAddQuote(!addQuote);
    // }

    return (
        <>
            <SafeAreaView />
            <View style={{ paddingHorizontal: colors.spacing * 2, backgroundColor: "white", flex: 1 }}>
                <Header nav={navigation} title="Quotes" />
                <View style={{ marginBottom: colors.spacing * 1 }} />


                <View style={{ flex: .62, }}>
                    <QuoteTables />
                </View>




                {/* {addQuote ? <AddQuoteModal isOpen={addQuote} onPress={toggleAddQuote} onClose={toggleAddQuote} /> : null} */}
            </View >




        </>)
}

export default Quotes

const styles = StyleSheet.create({

})