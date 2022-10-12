import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, isAndroid, WIDTH } from '../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderComponent = ({ onPress, lable }) => {
    return (
        <View>
            <View style={styles.container}>

                <Pressable
                    style={{}}
                    onPress={onPress}
                ><Icon name="chevron-back" size={28} color={Colors.grayOne} /></Pressable>
                <Text style={{ fontSize: 16, color: Colors.grayOne, fontWeight: isAndroid ? "900" : "600" }}>{lable}</Text><Icon name="chevron-back" size={28} color={'white'} />
            </View>
        </View>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row', width: WIDTH, alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white',
        paddingHorizontal: Colors.spacing * 2,
        paddingVertical: Colors.spacing * 1,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: .3,
        elevation: 3,
        shadowColor: Colors.grayOne,
    }

})