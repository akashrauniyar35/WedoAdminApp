import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import {Colors} from '../assets/Colors'

const TablePageButtons = ({ pages }) => {
    return (
        <View style={{ paddingHorizontal: Colors.spacing * 2, marginTop: Colors.spacing * 1 }}>
            <Text style={{ fontSize: 10, color: Colors.black, marginBottom: 5, }} >PAGE 1 OF 6</Text>

            <FlatList horizontal data={pages} keyExtractor={item => item.id}

                contentContainerStyle={{ width: '100%' }}

                renderItem={({ item }) => (
                    <TouchableWithoutFeedback>
                        <View style={{ marginRight: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.darkBlue, borderRadius: 100, height: 35, width: 35 }}>
                            <Text style={{ color: 'white', fontWeight: '700' }}>{item.page}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )} />
        </View>
    )
}

export default TablePageButtons