import { Animated, Dimensions, LayoutAnimation, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

import { BarChart, } from 'react-native-chart-kit';
import { Colors } from '../assets/Colors';

const { width, height } = Dimensions.get('window')



const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    yAxisLabel: '$',
    datasets: [
        {
            data: [35, 45, 58, 20, 99, 43],
            Colors: [
                (opacity = 1) => Colors.red,
                (opacity = 1) => Colors.green,
                (opacity = 1) => Colors.darkBlue,
                (opacity = 1) => 'orange',
                (opacity = 1) => Colors.skyColor,
                (opacity = 1) => Colors.lightRed,
            ]
        }
    ]
};

const BarChartGraph = () => {

    const chartConfig = {
        backgroundGradientFrom: Colors.skyColor,
        backgroundGradientTo: "#fff",
        barPercentage: 0.5,
        height: 1000,
        fillShadowGradient: `rgba(1, 122, 205, 1)`,
        fillShadowGradientOpacity: 1,
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
        labelColor: (opacity = 1) => Colors.black,

        style: {
            borderRadius: 16,
            // fontFamily: "Bogle-Regular",
        },
        propsForBackgroundLines: {
            strokeWidth: 1,
            stroke: "#e3e3e3",
            strokeDasharray: "0",
        },
        propsForLabels: {
            fontWeight: '400',

            color: Colors.black
            // fontFamily: "Bogle-Regular",
        },
    };


    return (
        <View>
            <BarChart
                style={{ borderRadius: 10, }}
                withCustomBarColorFromData={true}
                showBarTops={false}
                flatColor={true}
                withHorizontalLabels={true}
                fromZero={true}
                withInnerLines={false}
                data={data}
                width={width * .9}
                height={220}
                yAxisLabel="$"
                chartConfig={chartConfig}
            />
        </View>
    )

}

export default BarChartGraph

const styles = StyleSheet.create({})