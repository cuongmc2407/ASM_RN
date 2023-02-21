import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";
import { useState } from "react";

const index = (props) => {
  const nav = props.navigation;
  const route = props.route;
  console.log(route.params);
  const saveData = route.params.saveData;
  const [name, setName] = useState(route.params?.name || "");
  const [phone, setPhone] = useState(route.params?.phone || "");
  const [add, setAdd] = useState(route.params?.add || "");
  const [trangThai, setTrangThai] = useState(route.params?.trangThai || "");
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Tên SP"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Địa chỉ"
        value={add}
        onChangeText={(text) => setAdd(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="SĐT"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Trạng thái"
        value={trangThai}
        onChangeText={(text) => setTrangThai(text)}
        keyboardType="numeric"
      />
      <Button title="Hủy" onPress={() => nav.navigate("Quản lý cửa hàng")} />
      <Button
        title="Sửa"
        onPress={(name, add, phone, trangThai) => {
          saveData(name, add, phone, trangThai);
          nav.navigate("Quản lý cửa hàng");
        }}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
