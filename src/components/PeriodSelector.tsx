import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, isAndroid } from '../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';

const PeriodSelector = () => {
    return (
        <>
            <Pressable onPress={() => onClickHandle(true)}>
                <Text style={{ fontSize: 20, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600", marginBottom: Colors.spacing * 2 }}>{"Period"}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ width: '45 %' }}>
                        <Text style={{ fontSize: 16, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600" }}>From</Text>
                        <View style={styles.box}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 16, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600" }}>{''}</Text>
                                <Icon name="chevron-down" size={22} color={"white"} />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '45 %' }}>
                        <Text style={{ fontSize: 16, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600" }}>To</Text>
                        <View style={styles.box}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 16, color: Colors.maidlyGrayText, fontWeight: isAndroid ? "900" : "600" }}>{''}</Text>
                                <Icon name="chevron-down" size={22} color={"white"} />
                            </View>
                        </View>
                    </View>
                </View>
            </Pressable>
            <View style={{ height: .25, width: '100%', marginVertical: Colors.spacing * 2, backgroundColor: Colors.maidlyGrayText }} />

        </>
    )
}

export default PeriodSelector

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.transparentGloss, },
    box: {
        backgroundColor: 'white',
        borderColor: Colors.maidlyGrayText,
        padding: Colors.spacing * 1,
        paddingHorizontal: Colors.spacing * 2,
        borderRadius: Colors.spacing * Colors.spacing,
        shadowRadius: 2,
        marginTop: Colors.spacing,
        shadowOffset: { width: 0, height: .5 },
        shadowOpacity: .2,
        elevation: 2,
        shadowColor: Colors.grayOne,
        borderWidth: isAndroid ? .35 : 0,

    },
})