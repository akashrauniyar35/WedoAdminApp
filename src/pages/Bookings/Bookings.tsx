import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'
import {Colors} from '../../assets/Colors'
import BookingsCard from './BookingsCard'
import Icon from 'react-native-vector-icons/Ionicons';
import DataFilter from '../../components/DataFilter'
import TablePageButtons from '../../components/TablePageButtons'
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
    id: "05",
    name: "James Uday",
    phone: "041579187",
    location: "Paramatta NSW 2150",
    invoiced: true,
    paid: true,
    date: "09/09/2022",
    service: 'G'
  },
  {
    id: "04",
    name: "James Uday",
    phone: "041579187",
    location: "Paramatta NSW 2150",
    invoiced: true,
    date: "09/09/2022",
    paid: true,
    service: 'G'
  },
  {
    id: "04",
    name: "James Uday",
    phone: "041579187",
    location: "Paramatta NSW 2150",
    invoiced: true,
    date: "09/09/2022",
    paid: true,
    service: 'G'
  },
  {
    id: "04",
    name: "James Uday",
    phone: "041579187",
    location: "Paramatta NSW 2150",
    invoiced: true,
    date: "09/09/2022",
    paid: true,
    service: 'G'
  },
  {
    id: "04",
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
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ paddingHorizontal: Colors.spacing * 2, }}>
          <Header nav={navigation} title="Bookings" />
          <View style={{ marginBottom: Colors.spacing * 1 }} />
        </View>
        <View style={{ paddingHorizontal: Colors.spacing * 2, }}>

          <SearchBox />



          <View style={{ marginBottom: Colors.spacing * 1 }} />

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

            <TouchableWithoutFeedback>
              <View style={[styles.addButton, { backgroundColor: Colors.lightRed, }]}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: 'white' }}>Refresh</Text>
                <Icon name="ios-refresh-circle" size={28} color='white' style={{ marginLeft: 10 }} />
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => { }}>
              <View style={[styles.addButton, { backgroundColor: Colors.green, }]}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: 'white' }}>Add Booking</Text>
                <Icon name="ios-add-circle" size={28} color='white' style={{ marginLeft: 10 }} />
              </View>
            </TouchableWithoutFeedback>

          </View>
          <View style={{ marginBottom: Colors.spacing * 1 }} />
          <DataFilter />
          <View style={{ marginBottom: Colors.spacing * 1 }} />
        </View>

        <View style={{}}>
          <FlatList data={data}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: Colors.spacing * 2,  }}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (<BookingsCard item={item} />)}
          />
        </View>

      </View>


      {/* <TablePageButtons pages={pages} /> */}


    </>
  )
}

export default Bookings

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