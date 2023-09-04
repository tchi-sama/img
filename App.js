import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from "twrnc"
import Home from './screens/Home';
import Login from './screens/Login';
export default function App() {
  return (
    <View style={tw`flex-1`}>
      <Home/>
      {/* <Login/> */}
      <StatusBar style="auto" />
    </View>
  );
}

