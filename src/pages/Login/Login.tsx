import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {
  const [hiddenPassword, setHiddenPassword] = useState(false)

  function toggleHiddenPassword() {
    setHiddenPassword(!hiddenPassword)
  }
  return (
    <>
      <SafeAreaView style={{ backgroundColor: Colors.skyColor }} />
      <View style={{ backgroundColor: Colors.skyColor, flex: 1 }}>
        <View style={{ paddingHorizontal: Colors.spacing * 2, }}>

          <View style={{ alignItems: 'center', justifyContent: 'center', top: Colors.spacing * 6 }}>

            <Text style={{ color: Colors.black, fontWeight: '600', fontSize: 26 }}>Hello Again!</Text>
            <Text style={{ color: 'white', fontSize: 14, width: '45%', paddingTop: Colors.spacing * 2, textAlign: 'center' }}>Wellcome back you've been missed!</Text>
          </View>



          <View style={{ marginTop: Colors.spacing * 10 }}>

            <TextInput
              style={{ fontSize: 16, backgroundColor: '#fff', padding: Colors.spacing, borderRadius: 5, }}
              placeholderTextColor={Colors.black}
              placeholder={'Enter eamil'}
            />

            <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 5, alignItems: 'center', justifyContent: 'space-between', marginTop: Colors.spacing * 1 }}>
              <TextInput
                secureTextEntry={hiddenPassword}
                style={{
                  fontSize: 16,
                  width: '85%',
                  backgroundColor: '#fff', borderRadius: 5, padding: Colors.spacing,
                }}
                placeholderTextColor={Colors.black}
                placeholder={'Password'}
              />
              <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                <Pressable onPress={toggleHiddenPassword}>
                  <Icon name={hiddenPassword ? "ios-eye-off" : "ios-eye"} size={28} color={Colors.skyColor} />
                </Pressable>
              </View>
            </View>

          </View>

          <Pressable onPress={() => navigation.navigate('recoverPassword')}>
            <Text style={{ color: Colors.black, fontSize: 12, alignSelf: 'flex-end', marginTop: Colors.spacing }}>Recover Password</Text>
          </Pressable>


          <View style={{ marginBottom: Colors.spacing * 6 }} />

          <Pressable onPress={() => navigation.navigate('signup')}>
            <View style={{ backgroundColor: Colors.darkBlue, borderRadius: 5, padding: Colors.spacing, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 16, color: '#fff', fontWeight: '600' }}>Sign In</Text>
            </View>
          </Pressable>

        </View>

      </View >

      {/* <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', bottom: Colors.spacing * 4, alignSelf: 'center' }}>

        <Text style={{ color: Colors.black, fontSize: 14, marginRight: 5 }}>Not a member?</Text>

        <Pressable >
          <Text style={{ color: Colors.darkBlue, fontSize: 14, fontWeight: '600' }}>Register Now</Text>
        </Pressable>
      </View> */}

    </>
  )
}

export default Login

const styles = StyleSheet.create({})