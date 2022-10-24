import React, { useEffect, useState } from 'react'
import { Alert, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native'
import { Colors, isAndroid, lightenColor, WIDTH } from '../../assets/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import AddButtonHeader from '../../components/AddButtonHeader';
import { useDispatch, useSelector } from 'react-redux';
import { addJobModalVisibleToggle } from '../../redux/addJobSlice';
import InputBox from '../../components/InputBox';
import CustomerCard from '../../components/CustomerCard';
import ScheduleCard from '../../components/ScheduleCard';
import PropertyDetails from '../../components/PropertyDetails';
import JobTotals from '../../components/JobTotals';
import AssignTech from '../../components/AssignTech';
import { jobData } from '../../interfaces/jobInterfaces';
import addressInterface from '../../interfaces/addressInterface';




const AddJob = ({ isOpen, onClose, lable }) => {

    const [customerName] = useState(String)
    const [customerPhone] = useState(String)
    const [customerAddress] = useState(String)
    const [customerEmail] = useState(String)
    const [notes] = useState(String)
    const [service] = useState(String)
    const [property] = useState(String)
    const date = new Date()

    const [unit, setUnit] = useState(String)
    const [streetAddress, setStreetAddress] = useState(String)
    const [suburb, setSuburb] = useState(String)
    const [postCode, setPostCode] = useState(String)
    const [state, setState] = useState(String)


    const [addressData, setAddressData] = useState<addressInterface>({
        unit: '',
        streetAddress: '',
        suburd: '',
        postCode: '',
        state: 'NSW'
    });
    console.log('addressData', addressData)

    const unitHandler = (value: string) => {
        setAddressData({ ...addressData, unit: value })
    }
    const streetAddressHandler = (value: string) => {
        setAddressData({ ...addressData, streetAddress: value })
    }
    const suburbHandler = (value: string) => {
        setAddressData({ ...addressData, suburd: value })
    }
    const postCodeHandler = (value: string) => {
        setAddressData({ ...addressData, postCode: value })
    }
    const stateHandler = (value: string) => {
        setAddressData({ ...addressData, state: value })
    }


    const customerNameHander = (value: string) => {
        setJobData({ ...jobData, fullName: value })
    }
    const customerPhoneHander = (value) => {
        setJobData({ ...jobData, phone: value })
        console.log(value)
    }
    const customerEmailHander = (value) => {
        setJobData({ ...jobData, email: value })
        console.log(value)
    }
  

    const onDateChangeHandler = (value) => {
        setJobData({ ...jobData, bookingDate: value })
    }

    const jobNotesHandler = (value) => {
        setJobData({ ...jobData, steamStairs: value })
    }

    const serviceHandler = (value) => {
        setJobData({ ...jobData, service: value })
    }
    const propertyHandler = (value) => {
        setJobData({ ...jobData, blinds: value })
    }
    const bedroomHandler = (value) => {
        setJobData({ ...jobData, bedrooms: value })
    }
    const bathroomHandler = (value) => {
        setJobData({ ...jobData, bathrooms: value })
    }


    const [jobData, setJobData] = useState<jobData>(
        {
            fullName: '',
            email: "",
            bookingDate: date.toString().substring(0, 15),
            address: "",
            phone: '',
            totalPrice: "600",
            products: [],
            stripeData: [],
            paidStatus: true,
            jobStatus: "done",
            bedrooms: "2",
            bathrooms: "2",
            balcony: "2",
            separateToilet: "1",
            studyRoom: "2",
            wallWash: "2",
            fridge: "2",
            garage: "1",
            blinds: "2",
            steamLiving: "2",
            steamBedroom: "2",
            steamHallway: "1",
            steamStairs: "2",
            service: ""
        }
    )

    const dispatch = useDispatch()

    const onPress = () => {
    }

    console.log("jobData", jobData)
    return (
        < View >
            <View style={styles.centeredView}>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isOpen}
                ><SafeAreaView />
                    <View style={styles.centeredView}>
                        <AddButtonHeader onPress={onClose} lable={lable} />

                        <View style={styles.modalView}>
                            <ScrollView>

                                <View style={{ paddingHorizontal: Colors.spacing * 2, }}>
                                    <CustomerCard name={customerName} nameHandler={customerNameHander} phone={customerPhone} phoneHandler={customerPhoneHander} email={customerEmail} emailHandler={customerEmailHander} unit={unit} streetAddress={streetAddress} suburb={suburb} postCode={postCode} state={state} unitHandler={unitHandler} streetAddressHandler={streetAddressHandler} suburbHandler={suburbHandler} stateHandler={stateHandler} />
                                </View>

                                <View style={{ paddingHorizontal: Colors.spacing * 2, }}>
                                    <ScheduleCard date={jobData.bookingDate} onDateChangeHandler={onDateChangeHandler} notes={notes} jobNotesHandler={jobNotesHandler} />
                                </View>

                                <View style={{ paddingHorizontal: Colors.spacing * 2, }}>
                                    <PropertyDetails service={service} serviceHandler={serviceHandler} property={property} propertyHandler={propertyHandler} bedrooms={jobData.bedrooms} bedroomHandler={bedroomHandler} bathrooms={jobData.bedrooms} bathroomHandler={bathroomHandler} />
                                </View>

                                <View style={{ paddingHorizontal: Colors.spacing * 2, }}>
                                    <JobTotals />
                                </View>

                                <View style={{ paddingHorizontal: Colors.spacing * 2, paddingBottom: Colors.spacing * 4 }}>
                                    <AssignTech />
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </Modal >
            </View >
        </View>
    )
}

export default AddJob

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
    },
    modalView: {
        backgroundColor: "white",
        width: WIDTH,
        flex: 1,
        paddingBottom: Colors.spacing,

    },


})