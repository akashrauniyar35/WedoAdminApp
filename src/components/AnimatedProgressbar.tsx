import React, { FunctionComponent, useEffect } from 'react';
import { Animated, Dimensions, FlatList, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

const AnimatedProgress: FunctionComponent = () => {
    return (
        <FlatList
            contentContainerStyle={style.contentContainer}
            data={[1, 2, 3, 4, 5]}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <ProgressBar widthPct={item} />}
        />
    );
};

const ProgressBar: FunctionComponent<{ widthPct: number }> = ({ widthPct }) => {
    const barWidth = React.useRef(new Animated.Value(0)).current;

    const finalWidth = (width * widthPct) / 10;

    useEffect(() => {
        Animated.spring(barWidth, {
            toValue: finalWidth,
            bounciness: 10,
            speed: 2,
            useNativeDriver: true,
            delay: widthPct * 100,
        }).start();
    }, []);

    return (
        <View style={style.barContainer}>
            <Animated.View style={[style.progressBar, { width: barWidth }]} />
        </View>
    );
};

const style = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
    },
    barContainer: {
        padding: 40,
    },
    progressBar: {
        backgroundColor: 'purple',
        height: 30,
        borderRadius: 15,
    },
});

export default AnimatedProgress;