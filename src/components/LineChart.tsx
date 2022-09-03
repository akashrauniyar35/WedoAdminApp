import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-chart-kit';
import Colors from '../assets/Colors';

const { width, height } = Dimensions.get('window')

const LineChartGraph = () => {

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Rainy Days"] // optional
    };

    return (
        <View>
            <LineChart data={{
                labels: ['Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                ],

                datasets: [
                    {
                        data: [20, 45, 28, 80, 99, 34],
                        strokeWidth: 2,
                    },
                ],
            }}
                width={width * .9}
                height={220}
                bezier
                yAxisLabel="$"
                chartConfig={{
                    backgroundColor: '#c92ac7',
                    backgroundGradientFrom: Colors.lightGlass,
                    backgroundGradientTo: '',
                    decimalPlaces: 2,
                    color: (opacity = 1) => Colors.darkBlue,
                    style: {
                        borderRadius: 16,
                    },
                }}
                style={{
                    borderRadius: 16,
                }}
            />
        </View>
    )
}

export default LineChartGraph

const styles = StyleSheet.create({})