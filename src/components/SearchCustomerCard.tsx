import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, isAndroid } from '../assets/Colors'

const SearchCustomerCard = ({ customerName, cost, totalJob, lastService }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: isAndroid ? 14 : 10, fontWeight: isAndroid ? "600" : "300", color: Colors.madidlyThemeBlue, width: '30%' }}>{customerName}</Text>
      <Text style={{ fontSize: isAndroid ? 14 : 10, fontWeight: isAndroid ? "600" : "300", color: Colors.maidlyGrayText, width: '20%' }}>{lastService}</Text>
      <Text style={{ fontSize: isAndroid ? 14 : 10, fontWeight: isAndroid ? "600" : "300", color: Colors.maidlyGrayText, width: '14%' }}>{totalJob}</Text>
      {/* <Text style={{
        fontSize: isAndroid ? 14 : 10, fontWeight: isAndroid ? "600" : "300", color: Colors.maidlyGrayText,
        width: '18%'
      }}>${cost}</Text> */}

      <View style={{ flexDirection: 'row', alignItems: 'center', width: '18%' }}>
        <Text style={{ fontSize: isAndroid ? 14 : 10, fontWeight: isAndroid ? "900" : "600", color: Colors.maidlyGrayText }}>$ </Text>
        <Text style={{ fontSize: isAndroid ? 14 : 10, fontWeight: isAndroid ? "900" : "600", color: Colors.maidlyGrayText, }}>{cost}</Text>
      </View>


    </View>
  )
}

export default SearchCustomerCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center', justifyContent: 'space-between', marginBottom: Colors.spacing * 2
  }
})