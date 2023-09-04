import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const Home = () => {
  return (
    <SafeAreaView style={tw`p-4 flex-1`}>
        <View style={tw`py-2`}>
            <Text style={tw`text-2xl py-2 font-black text-gray-800`}>@152</Text>
        </View>
        <View style={tw``}>
            <Text style={tw`text-5xl py-2 font-bold text-gray-800`}>Im Someone , and <Text style={tw`underline font-black`}>i'm Gay</Text></Text>
        </View>
        <View style={tw`flex-1 justify-center`}>
            <View style={tw`py-4 gap-2`}>
                <View style={tw`py-4 opacity-20 px-8 bg-gray-100 rounded-full`}>
                    <Text style={tw`font-black`}>@12</Text>
                    <Text><Text style={tw`font-black`}>Someone </Text> is proud</Text>
                </View>
                <View style={tw`py-4 opacity-50 px-8 bg-gray-100 rounded-full`}>
                    <Text style={tw`font-black`}>@252</Text>
                    <Text><Text style={tw`font-black`}>Someone </Text> is proud</Text>
                </View>
                <View style={tw`py-4 px-8 bg-gray-100 rounded-full`}>
                    <Text style={tw`font-black`}>@152</Text>
                    <Text><Text style={tw`font-black`}>Someone </Text> is proud</Text>
                </View>
            </View>
            <View style={tw`h-10 relative w-full bg-gray-300 rounded-full `}>
                <View style={[{width:"40%"},tw`h-full bg-gray-800 border-r-[6px] border-gray-400 rounded-l-full`]}></View>
                <Text style={tw`absolute top-[25%] text-white left-4 `}>123</Text>
                <Text style={tw`absolute top-[25%] text-gray-800 right-4 `}>123</Text>
            </View>
            <View style={tw`py-2 flex-row justify-between`}>
                <Text style={tw`font-black text-lg`}>I'm Gay</Text>
                <Text style={tw`font-black text-lg`}>I'm Not</Text>
            </View>
        </View>
        <View style={tw`p-4`}>
            <TouchableOpacity style={tw`px-8 py-4 flex-row justify-center gap-2 bg-gray-800 rounded-full`}>
                <Text style={tw`text-3xl text-center text-white font-bold `}>Proud</Text>
                <Icon name="chevron-double-up" size={30} color="#fff"></Icon>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Home