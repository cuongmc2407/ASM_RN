import { StyleSheet, Text, View, FlatList, Button, Pressable, Image } from "react-native";
import React from "react";
import { useState } from "react";

const Manager = (props) => {
        const [editId, setEditId] = useState('');
  const nav = props.navigation;
  const route = props.route;
  console.log(route.params);

  const [list, setList] = useState([]);
  const [name, setName]= useState(route.params?.name || '');
  const [phone, setPhone]= useState(route.params?.phone || '');
  const [add, setAdd]= useState(route.params?.add || '');
  const [trangThai, setTrangThai]= useState(route.params?.trangThai || '');

  const onDelete = (itemId) => {
    const newList = list.filter((item) => {
      return item.id !== itemId;
    });
    setList(newList);
  };

  const saveData = (name, add, phone, trangThai) => {
    setName(name);
    setPhone(phone);
    setTrangThai(trangThai);
    setAdd(add);
    const newEditList = list.map(item => {
      if (item.id == editId) {
        //gán gtri mới = gtri đã lưu ở state sau khi nhập
        item.name = name;
        item.phone = phone;
        item.add = add;
        item.trangThai = trangThai;
      }
      return item;
    });
    setList(newEditList);
  };

  const onEdit = (editId) => {
    //1. mở modal ra
    nav.navigate('Edit',{name: name, add: add, phone: phone, trangThai: trangThai, saveData: saveData})
    setEditId(editId);
  };

  const onSave = (name, add, phone, trangThai) => {
    setName(name);
    setPhone(phone);
    setTrangThai(trangThai);
    setAdd(add);
    const newItem = {
      id: list[list.length - 1]?.id + 1 || 1,
      name: name,
      add: add,
      phone: phone,
      trangThai: trangThai,
    };
    //2. định nghĩa mảng dl mới rồi lưu
    const newList = [...list, newItem];
    setList(newList);
  };

  return (
    <View>
      <View style = {styles.button}>
        <Button
            title="Thêm mới"
            onPress={() => nav.navigate('Thêm mới', {onSave: onSave})}
        />
      </View>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image style = {{width:100, height:100}} source={{uri:'https://picsum.photos/100'}}/>
            <Text>Tên: {item.name}</Text>
            <Text>Địa chỉ: {item.add}</Text>
            <Text>SĐT: {item.phone}</Text>
            <Text>Trạng thái: {item.trangThai}</Text>
            <Pressable onPress={() => onDelete(item.id)}>
              <Text>Xóa</Text>
            </Pressable>
            <Pressable onPress={() => onEdit(item.id)}>
              <Text>Sửa</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Manager;

const styles = StyleSheet.create({
    button: {
        margin: 20,
    },
    container: {
      margin: 20,
      margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    }
});
