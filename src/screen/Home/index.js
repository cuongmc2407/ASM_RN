import { StyleSheet, Text, View,Image, Button } from 'react-native'
import React from 'react'

const Home = (props) => {
    const nav = props.navigation;
  return (
    
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../assets/FPT_Polytechnic.png')} />
      <Button
        title='Thông tin cá nhân'
        onPress={() => nav.navigate('Thông tin cá nhân')}
      />
      <Button
        title='Quản lý cửa hàng'
        onPress={() => nav.navigate('Quản lý cửa hàng')}
      />
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        alignItems: 'center',
    },
    logo: {
        width:300,
        height:100,
        marginBottom: 30,
    },


});