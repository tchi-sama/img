import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "twrnc"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const Login = () => {
  return (
    <SafeAreaView style={tw`p-4 pt-8 flex-1`}>
      <Text style={tw`text-6xl text-gray-900 py-2 font-black`}>Login</Text>
      <Text style={tw`text-xl text-gray-700 py-2`}>join our comunity to get fucked</Text>
      <View style={tw`flex-1 justify-center`}>
        <TouchableOpacity style={tw`bg-gray-900 py-4 items-center px-8 flex-row gap-4 rounded-full `}>
                <Icon name='google' color={"white"} size={30}></Icon>
                <Text style={tw`text-white font-bold text-xl`}>Login with google</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`p-4 justify-center flex-row gap-2`}>
        <View style={tw`h-4 w-4 bg-gray-900 rounded-full`}></View>
        <View style={tw`h-4 w-4 bg-gray-400 rounded-full`}></View>
      </View>
    </SafeAreaView>
  )
}

export default Login