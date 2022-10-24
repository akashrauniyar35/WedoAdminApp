import { Dimensions, FlatList, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../assets/Colors'
import Header from '../../components/Header'
import AccordiaSearch from '../../components/SearchBox'
import { Calendar } from 'react-native-calendars'
import CN from '../../components/CalandarDatePicker'


import JobCard from '../../components/JobCard'
import Filter from '../../components/Filter'
import LineChartGraph from '../../components/LineChart'



import { getAllJobFail, getAllJobPending, getAllJobSuccess } from '../../redux/jobSlice';
import { fetchAllJobs } from '../../config/JobApi';
import { useDispatch, useSelector } from 'react-redux'
import Fab from '../../components/Fabs'
import AddJob from '../Add/AddJob'
import Donut from '../../components/Donut'


const { width, height } = Dimensions.get('screen')
const isAndroid = Platform.OS == 'android' ? true : false







const Jobs = ({ navigation }) => {
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');
  const [pageCount, setPageCount] = useState(1);
  const [filtersVisible, setFiltersVisible] = useState(false)

  const dispatch = useDispatch();

  const loading = useSelector((state: any) => state.jobReducer.listLoading)
  const data = useSelector((state: any) => state.jobReducer.jobData)


  const toggleFilter = () => {
    setFiltersVisible(!filtersVisible)
  }


  console.log('ddd', data)

  const marked = {
    minDate: { startingDay: true, color: '#50cebb', textColor: 'white' },
    maxDate: { endingDay: true, color: '#50cebb', textColor: 'white' },
  }


  const refreshHandler = async () => {
    dispatch(getAllJobPending('data'))
    const p = 'payload test'
    const x: any = await fetchAllJobs(pageCount)

    if (x.data.status === "error") {
      return dispatch(getAllJobFail(x.data.status));
    }
    // setData(x.data.paginatedResults)
    dispatch(getAllJobSuccess(x.data))

    console.log('response from all quotes', x.data)
    setPageCount(1);
  }

  useEffect(() => {
    refreshHandler()
  }, [])

  console.log("pagination Data Notifications", data)
  return (
    <>
      <View style={{ backgroundColor: Colors.madlyBGBlue, }}>
        <SafeAreaView />
        <Header nav={navigation} title="Jobs" />
        <View style={{ paddingHorizontal: Colors.spacing * 2, }}>
          <View style={{ marginBottom: Colors.spacing * 1 }} />
          {/* <AccordiaSearch /> */}
          {/* <CN /> */}

          <View style={{ marginTop: Colors.spacing * 1 }}>
            {/* <LineChartGraph /> */}
            {/* <Donut lable={"Total Jobs"} percentage={110} color={Colors.madidlyThemeBlue} delay={500} max={500} /> */}
          </View>
        </View>



        <Filter title={"Filter jobs"} isOpen={filtersVisible} onPress={toggleFilter} />



        <View style={{ paddingBottom: isAndroid ? Colors.spacing * 40 : Colors.spacing * 82, height: height * 1.5 }}>

          <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{}} data={data} keyExtractor={item => item.id} renderItem={({ item, index }) => <JobCard item={item} index={index} />} />
        </View>

      </View>

    </>
  )
}

export default Jobs

const styles = StyleSheet.create({



})