import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Add = (props) => {
    const nav = props.navigation;
    const route = props.route;
    const onSave = route.params.onSave;
    const [name, setName] = useState('');
    const [add, setAdd] = useState('');
    const [phone, setPhone] = useState('');
    const [trangThai, setTrangThai] = useState('');

    const onClose = () => {
      nav.navigate('Quản lý cửa hàng');
    };

    

  return (
    <View style={styles.container}>
            <TextInput style={styles.textInput}
              placeholder='Tên SP'
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <TextInput style={styles.textInput}
            placeholder='Địa chỉ'
              value={add}
              onChangeText={(text) => setAdd(text)}
            />
            <TextInput style={styles.textInput}
            placeholder='SĐT'
              value={phone}
              onChangeText={(text) => setPhone(text)}
              keyboardType='numeric'
            />
            <TextInput style={styles.textInput}
            placeholder='Trạng thái(0/1)'
              value={trangThai}
              onChangeText={(text) => setTrangThai(text)}
              keyboardType='numeric'
            />
            <Button title='Hủy'
              onPress={() => onClose()}
            />
            <Button title='Lưu' 
              onPress={() =>{ onSave(name, add, phone, trangThai); 
               nav.navigate('Quản lý cửa hàng')} }
            />
          </View>
  )
}

export default Add;

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  }
});