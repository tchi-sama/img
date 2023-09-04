import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView style={tw`p-4 flex-1`}>
        <View style={tw`flex-1`}>
            <Text style={tw`text-5xl py-2 font-bold text-gray-800`}>Im Someone , and i'm gay</Text>
        </View>
        <View style={tw`p-4`}>
            <TouchableOpacity style={tw`px-8 py-6 bg-gray-800 rounded-xl`}>
                <Text>Proud</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Home