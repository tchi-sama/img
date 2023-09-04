import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "twrnc"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const Login = () => {
    const [screen,setScreen]=useState(0)
  return (
    <SafeAreaView style={tw`p-4 pt-8 flex-1`}>
      <Text style={tw`text-6xl text-gray-900 uppercase py-2 font-black`}>Login</Text>
      <Text style={tw`text-3xl font-bold text-gray-700 py-2`}>join our comunity to get fucked</Text>
      <View style={tw`flex-1 justify-center`}>
        {
    screen == 0?
        <TouchableOpacity onPress={()=>setScreen(1)} style={tw`bg-gray-900 py-4 items-center px-8 flex-row gap-4 rounded-full `}>
                <Icon name='google' color={"white"} size={30}></Icon>
                <Text style={tw`text-white font-bold text-xl`}>Login with google</Text>
        </TouchableOpacity>:

        <View>
            <Text style={tw`text-4xl font-bold `}>Are you <Text style={tw`font-black`}>Gay </Text>?</Text>
            <View style={tw`flex-row gap-2 py-8`}>
                <TouchableOpacity style={tw`bg-gray-300 flex-1 py-4 items-center px-8 flex-row gap-4 rounded-full `}>
                        <Text style={tw`text-black font-black uppercase text-xl`}>no</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`bg-gray-900 py-4 flex-1 items-center px-8 flex-row gap-4 rounded-full `}>
                        <Text style={tw`text-white font-black uppercase  text-xl`}>yes</Text>
                </TouchableOpacity>
            </View>
        </View>
        }
      </View>
      <View style={tw`p-4 justify-center flex-row gap-2`}>
        <View style={[tw`h-4 w-6 ${screen==0?"bg-gray-900":"bg-gray-400"} rounded-full`]}></View>
        <View style={tw`h-4 w-6  ${screen==1?"bg-gray-900":"bg-gray-400"} rounded-full`}></View>
      </View>
    </SafeAreaView>

  )
}

export default Login