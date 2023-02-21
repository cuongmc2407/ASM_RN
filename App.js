import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer }
    from "@react-navigation/native";
import { createNativeStackNavigator }
    from '@react-navigation/native-stack';
    const Stack = createNativeStackNavigator();
import Home from '././src/screen/Home'
import Info from '././src/screen/Info'
import Manager from '././src/screen/Manager'
import Add from '././src/screen/Add'
import Edit from '././src/screen/Edit'

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
            name="Home" component={Home}
            />
            <Stack.Screen
            name="Thông tin cá nhân" component={Info}
            />
            <Stack.Screen
            name="Quản lý cửa hàng" component={Manager}
            />
            <Stack.Screen
            name="Thêm mới" component={Add}
            />
            <Stack.Screen
            name="Edit" component={Edit}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
