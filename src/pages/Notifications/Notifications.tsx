import { Dimensions, FlatList, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../assets/Colors'
import Header from '../../components/Header'
import AccordiaSearch from '../../components/SearchBox'
import { Calendar } from 'react-native-calendars'
import CN from '../../components/CalandarDatePicker'


import JobCard from '../../components/JobCard'
import Filter from '../../components/Filter'

const { width, height } = Dimensions.get('screen')
const isAndroid = Platform.OS == 'android' ? true : false






const data = [

  {
    id: '00',
    quoteReference: '1234253535235235',
    scheduledAt: '30 Sep 2022 10 AM', quoteStatus: 'In Progress',
    totalPrice: '400',
    name: 'Grace Lama',
    streedAddress: '30 Hendley Rd Strathfield',
    state: 'New South Wales',
    postCode: '2140',
    phone: '045678987',
    email: 'email@rmail.com'
  },
  {
    id: '01',
    quoteReference: '123091803985',
    scheduledAt: '22 Oct 2022 10 AM', quoteStatus: 'In Progress',
    totalPrice: '400',
    name: 'Shree Lama',
    streedAddress: '30 Hendley Rd Strathfield',
    state: 'New South Wales',
    postCode: '2140',
    phone: '045678987',
    email: 'email@rmail.com'
  },
  {
    id: '01',
    quoteReference: '123091803985',
    scheduledAt: '22 Oct 2022 10 AM', quoteStatus: 'In Progress',
    totalPrice: '400',
    name: 'Shree Lama',
    streedAddress: '30 Hendley Rd Strathfield',
    state: 'New South Wales',
    postCode: '2140',
    phone: '045678987',
    email: 'email@rmail.com'
  },
  {
    id: '01',
    quoteReference: '123091803985',
    scheduledAt: '22 Oct 2022 10 AM', quoteStatus: 'In Progress',
    totalPrice: '400',
    name: 'Shree Lama',
    streedAddress: '30 Hendley Rd Strathfield',
    state: 'New South Wales',
    postCode: '2140',
    phone: '045678987',
    email: 'email@rmail.com'
  },
  {
    id: '01',
    quoteReference: '123091803985',
    scheduledAt: '22 Oct 2022 10 AM', quoteStatus: 'In Progress',
    totalPrice: '400',
    name: 'Shree Lama',
    streedAddress: '30 Hendley Rd Strathfield',
    state: 'New South Wales',
    postCode: '2140',
    phone: '045678987',
    email: 'email@rmail.com'
  },
  {
    id: '01',
    quoteReference: '123091803985',
    scheduledAt: '22 Oct 2022 10 AM', quoteStatus: 'In Progress',
    totalPrice: '400',
    name: 'Shree Lama',
    streedAddress: '30 Hendley Rd Strathfield',
    state: 'New South Wales',
    postCode: '2140',
    phone: '045678987',
    email: 'email@rmail.com'
  },
  {
    id: '01',
    quoteReference: '123091803985',
    scheduledAt: '22 Oct 2022 10 AM', quoteStatus: 'In Progress',
    totalPrice: '400',
    name: 'Shree Lama',
    streedAddress: '30 Hendley Rd Strathfield',
    state: 'New South Wales',
    postCode: '2140',
    phone: '045678987',
    email: 'email@rmail.com'
  },
  {
    id: '01',
    quoteReference: '123091803985',
    scheduledAt: '22 Oct 2022 10 AM', quoteStatus: 'In Progress',
    totalPrice: '400',
    name: 'Shree Lama',
    streedAddress: '30 Hendley Rd Strathfield',
    state: 'New South Wales',
    postCode: '2140',
    phone: '045678987',
    email: 'email@rmail.com'
  },
  {
    id: '02',
    quoteReference: '98157398235794',
    scheduledAt: '30 Sep 2022 10 AM', quoteStatus: 'In Progress',
    totalPrice: '400',
    name: 'Milan Lama',
    streedAddress: '30 Hendley Rd Strathfield',
    state: 'New South Wales',
    postCode: '2140',
    phone: '045678987',
    email: 'email@rmail.com'
  },
]

const Notifications = ({ navigation }) => {
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');


  const [filtersVisible, setFiltersVisible] = useState(false)


  const toggleFilter = () => {
    setFiltersVisible(!filtersVisible)
  }

  const marked = {
    minDate: { startingDay: true, color: '#50cebb', textColor: 'white' },
    maxDate: { endingDay: true, color: '#50cebb', textColor: 'white' },
  }

  return (
    <View style={{ backgroundColor: Colors.madlyBGBlue, }}>
      <SafeAreaView />
      <Header nav={navigation} title="Jobs" />
      <View style={{ paddingHorizontal: Colors.spacing * 2, }}>
        <View style={{ marginBottom: Colors.spacing * 1 }} />
        {/* <AccordiaSearch /> */}
        {/* <CN /> */}

        <View style={{ height: height * .15, backgroundColor: 'pink', marginTop: Colors.spacing * 1 }}>
          <Text>Jobs</Text>
        </View>
      </View>



      <Filter title={"Filter jobs"} isOpen={filtersVisible} onPress={toggleFilter} />



      <View style={{ paddingBottom: isAndroid ? Colors.spacing * 40 : Colors.spacing * 82, height: height * 1.5 }}>

        <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{}} data={data} keyExtractor={item => item.id} renderItem={({ item, index }) => <JobCard item={item} index={index} />} />

      </View>

    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({



})