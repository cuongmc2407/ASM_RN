import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";

const Info = (props) => {
  const nav = props.navigation;
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/avt.jpg")} />
      <Text style={styles.text}>Họ tên: Mai Chí Cường</Text>
      <Text style={styles.text}>MSV: PH27903</Text>
      <View>
        <Button
          title="Quản lý cửa hàng"
          onPress={() =>
            nav.navigate('Quản lý cửa hàng')
          }
        />
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    margin: 10,
  },
  container: {
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});
