import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddJob from '../Add/AddJob'
import Donut from '../../components/Donut'
import { Colors } from '../../assets/Colors'
import AnimatedProgress from '../../components/AnimatedProgressbar'

const Notifications = () => {
    return (
        <>
            <SafeAreaView />
            <View style={styles.container}>
                <Text>Notifications</Text>
                <Donut lable={"Total Jobs"} percentage={112} color={'teal'} delay={1000} max={500} />

                {/* <AnimatedProgress /> */}
            </View>


        </>
    )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }
})