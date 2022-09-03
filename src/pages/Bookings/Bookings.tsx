import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'
import Colors from '../../assets/Colors'
import BookingsCard from './BookingsCard'

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
    id: "00",
    name: "Milan Adhikari",
    phone: "041579187",
    location: "Homebush West NSW 2140",
    invoiced: false,
    paid: true,
    date: "07/09/2022",
    service: 'EOL'
  },
  {
    id: "01",
    name: "Samsung Chaudhary",
    phone: "041579187",
    location: "Sydney NSW 2000",
    invoiced: true,
    paid: true,
    date: "07/09/2022",
    service: 'G'
  },
  {
    id: "02",
    name: "Kapil Nanga",
    phone: "041579187",
    location: "Cronulla NSW 2098",
    invoiced: false,
    paid: false,
    date: "07/09/2022",
    service: 'EOL'
  },
  {
    id: "03",
    name: "James Uday",
    phone: "041579187",
    location: "Paramatta NSW 2150",
    invoiced: true,
    paid: true,
    date: "08/09/2022",
    service: 'G'
  },
  {
    id: "03",
    name: "James Uday",
    phone: "041579187",
    location: "Paramatta NSW 2150",
    invoiced: true,
    paid: true,
    date: "09/09/2022",
    service: 'G'
  },
  {
    id: "03",
    name: "James Uday",
    phone: "041579187",
    location: "Paramatta NSW 2150",
    invoiced: true,
    date: "09/09/2022",
    paid: true,
    service: 'G'
  },
]

const { width, height } = Dimensions.get('screen')
const Bookings = ({ navigation }) => {
  return (
    <>
      <SafeAreaView />
      <View style={{ paddingHorizontal: Colors.spacing * 2, }}>
        <Header nav={navigation} title="Bookings" />
        <View style={{ marginBottom: Colors.spacing * 1 }} />
      </View>
      <View style={{ paddingHorizontal: Colors.spacing * 2, }}>

        <SearchBox />
        <View style={{ marginBottom: Colors.spacing * 1 }} />
      </View>

      <View style={{}}>
        <FlatList data={data}
          scrollEnabled={false}
          contentContainerStyle={{ paddingHorizontal: Colors.spacing * 2, }}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (<BookingsCard item={item} />)}
        />

      </View>
      <View style={{ paddingHorizontal: Colors.spacing * 2, marginTop: Colors.spacing * 1 }}>
        <Text style={{ fontSize: 10, color: Colors.black, marginBottom: 5, }} >PAGE 1 OF 6</Text>
        <FlatList horizontal data={pages} keyExtractor={item => item.id}

          contentContainerStyle={{ width: '100%' }}

          renderItem={({ item }) => (
            <TouchableWithoutFeedback >
              <View style={{ marginRight: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.darkBlue, borderRadius: 100, height: 35, width: 35 }}>
                <Text style={{ color: 'white', fontWeight: '700' }}>{item.page}</Text>
              </View>
            </TouchableWithoutFeedback>
          )} />
      </View>


    </>
  )
}

export default Bookings

const styles = StyleSheet.create({})