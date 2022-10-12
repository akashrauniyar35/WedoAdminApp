import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { Fragment, useState } from 'react'
import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'
import Icon from 'react-native-vector-icons/Ionicons';
import QuoteTables from './QuoteTables'
import AddQuoteModal from './AddQuoteModal'
import { Colors } from '../../assets/Colors'


const isAndroid = Platform.OS == 'android' ? true : false



const Quotes = ({ navigation }) => {
    // const [addQuote, setAddQuote] = useState(false);

    // const toggleAddQuote = () => {
    //     setAddQuote(!addQuote);
    // }

    return (
        <>


            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <SafeAreaView />
            <View style={{ paddingHorizontal: Colors.spacing * 2, backgroundColor: 'white' }}>
                <Header nav={navigation} title="Quotes" />
                <View style={{ marginBottom: Colors.spacing * 1 }} />
            </View >

            <View style={{  paddingHorizontal: Colors.spacing * 2, backgroundColor: 'white',  }}>
                <QuoteTables />
            </View>



        </>)
}

export default Quotes

const styles = StyleSheet.create({

})