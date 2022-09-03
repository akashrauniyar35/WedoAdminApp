import { Dimensions, FlatList, Modal, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../assets/Colors';
import { Calendar } from 'react-native-calendars'
import CalandarDatePicker from './CalandarDatePicker';


const { width, height } = Dimensions.get('screen')

const DataFilter = () => {

    const [filterData, setFilterData] = useState([{ id: '00', dateRange: '01/08/2022 - 31/08/2022', minPrice: '500', maxPrice: '1000', location: 'Sydney NSW 2000', services: 'EOL', cancelled: true, paid: false, completed: true }])


    const [filtersEnablet, setFiltersEnabled] = useState(false);
    const [filterModalVisible, setFilterModalVisible] = useState(false);

    // const [minDate, setMinDate] = useState('');
    // const [maxDate, setMaxDate] = useState('');




    const [selectedStartDate, setSelectedStartDate] = useState(null)
    const [selectedEndDate, setSelectedEndDate] = useState(null)
    const [showCalendarPicker, setShowCalendarPicker] = useState(false);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';



    const FilterCard = ({ item }) => {

        console.log('ITEMS', item)

        const PriceRange = () => {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: Colors.spacing * 2 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <IconM name="currency-usd" size={16} color={Colors.black} style={{ marginLeft: -8 }} />
                        <Text style={{ fontSize: 10 }}>500</Text>
                        <Text style={{ fontSize: 10 }}> to </Text>
                        <Text style={{ fontSize: 10 }}>1000</Text>
                    </View>
                </View>
            )
        }


        const DateRangeFilter = () => {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: Colors.spacing * 2 }}>
                    <Icon name="calendar-outline" size={16} color={Colors.darkBlue} style={{ marginRight: 5 }} />
                    <Text style={{ fontSize: 10 }}>01/08/2022 to 31/08/2022</Text>
                </View>
            )
        }

        const Location = () => {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: Colors.spacing * 2 }}>
                    <Icon name="location-outline" size={16} color={Colors.red} style={{ marginRight: 5 }} />
                    <Text style={{ fontSize: 10 }}>Sydney NSW</Text>
                </View>
            )
        }

        const Services = () => {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: Colors.spacing * 2 }}>
                    <IconM name="vacuum-outline" size={16} color={Colors.green} style={{ marginRight: 5 }} />
                    <Text style={{ fontSize: 10 }}>Services</Text>
                </View>
            )
        }

        const Paid = () => {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: Colors.spacing * 2 }}>
                    <Icon name="cash-outline" size={16} color={Colors.paid} style={{ marginRight: 5 }} />
                    <Text style={{ fontSize: 10 }}>Paid</Text>
                </View>
            )
        }
        const UnPaid = () => {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: Colors.spacing * 2 }}>
                    <Icon name="cash-outline" size={16} color={Colors.unPaid} style={{ marginRight: 5 }} />
                    <Text style={{ fontSize: 10 }}>Unpaid</Text>
                </View>
            )
        }
        const Cancelled = () => {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: Colors.spacing * 2 }}>
                    <Icon name="close-circle" size={16} color={Colors.red} style={{ marginRight: 4 }} />
                    <Text style={{ fontSize: 10 }}>Cancelled</Text>
                </View>
            )
        }
        const Completed = () => {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: Colors.spacing * 2 }}>
                    <Icon name="checkmark-circle" size={16} color={Colors.paid} style={{ marginRight: 4 }} />
                    <Text style={{ fontSize: 10 }}>Completed</Text>
                </View>
            )
        }


        return (
            <>
                {item.dateRange === "" ? null : <DateRangeFilter />}
                {item.minPrice && item.maxPrice === "" ? null : <PriceRange />}
                {item.loaction === "" ? null : <Location />}
                {item.unPaid ? <UnPaid /> : null}
                {item.paid ? <Paid /> : null}
                {item.service === "" ? null : <Services />}
                {item.cancelled ? <Cancelled /> : null}
                {item.completed ? <Completed /> : null}

            </>
        )
    }

    function toggleMainModal() {
        setFilterModalVisible(!filterModalVisible)
    };

    function toggleDateRangePicker() {
        setShowCalendarPicker(!showCalendarPicker);
    };



    const FilterModal = ({ }) => {

        // let showCalandarPlicker = false;
        // function toggleCalendarPicker() { !showCalandarPlicker }

        return (
            <View style={{}}>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={filterModalVisible}
                >
                    <View style={{
                        flex: .7,
                        marginTop: height * .3,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        shadowRadius: 2,
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: .2,
                        borderRadius: 20,
                    }}>

                        <View style={{
                            flex: 1,

                            backgroundColor: '#fff',
                            width: width * .9,
                            padding: Colors.spacing * 2,
                            shadowRadius: 2,
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: .2,
                            borderRadius: 10,
                        }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>

                                <Text style={{ fontSize: 18, fontWeight: '600', color: Colors.black, }}>Filter</Text>
                                <Pressable
                                    style={{ alignSelf: 'flex-end' }}
                                    onPress={() => toggleMainModal()}
                                >
                                </Pressable>

                            </View>


                            <View style={{ backgroundColor: 'yellow' }}>




                            </View>


                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <Text style={{ fontSize: 12, color: Colors.black, }}>Pick Date / Date Range</Text>
                            </View>


                            <CalandarDatePicker />

                            {/* //Apply */}
                            <Pressable >
                                <View style={{ backgroundColor: Colors.green, marginBottom: Colors.spacing * 2, borderRadius: 5, paddingVertical: Colors.spacing * .5, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: Colors.black, fontSize: 16, fontWeight: '600' }}>Apply</Text>
                                </View>
                            </Pressable>





                        </View>
                    </View >
                </Modal >


            </View >
        )
    }

    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>


                <View style={{ width: '90%' }}>
                    <View style={{}}>

                        <FlatList
                            contentContainerStyle={{ alignItems: 'center', justifyContent: 'space-between' }}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={filterData}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (<FilterCard item={item} />)}
                        />

                    </View>


                </View>

                <View style={{ width: '10%', }}>
                    <Pressable onPress={() => toggleMainModal()}>
                        <View style={{
                            backgroundColor: Colors.green,
                            width: 25,
                            height: 25,
                            alignSelf: 'center',
                            borderRadius: 100,
                            padding: 4,
                            flexDirection: "column",
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Icon name="funnel" size={14} color={"#fff"} style={{ top: 2 }} />
                        </View>
                    </Pressable>
                </View>

                <View style={{}}>
                    {filterModalVisible ? <FilterModal /> : null}
                </View>

            </View>
        </>
    )
}

export default DataFilter

const styles = StyleSheet.create({
    taskTitle: {
        padding: 14,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: '#7E7E7E',
        fontSize: 18,
        position: 'relative',
    },
    taskTitleBadge: {

        position: 'absolute',
        backgroundColor: 'white',
        top: -8
    },
    scheduleBox: {
        padding: 8,
        paddingHorizontal: Colors.spacing * 2,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContentjustifyContent: 'center'
    },
})