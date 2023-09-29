import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Features() {
  return (
    <ScrollView
      style={{height: hp(60)}}
      bounces={false}
      showsVerticalScrollIndicator={false}
      className="space-y-4">
      <Text style={{fontSize: wp(6.5)}} className="font-semibold text-gray-700">
        Features
      </Text>
      <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            className="rounded-ful"
            source={require('../../assets/images/chatgptIcon.png')}
            style={{height: hp(4), width: hp(4)}}
          />
          <Text
            style={{fontSize: wp(4.8)}}
            className="font-semibold text-gray-700">
            ChatGPT
          </Text>
        </View>

        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          ChatGPT can provide you with instant and knowledgeable responses,
          assist you with creative ideas on a wide range of topics.
        </Text>
      </View>
      <View className="bg-purple-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            className="rounded-ful"
            source={require('../../assets/images/dalleIcon.png')}
            style={{height: hp(4), width: hp(4)}}
          />
          <Text
            style={{fontSize: wp(4.8)}}
            className="font-semibold text-gray-700">
            DALL-E
          </Text>
        </View>

        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          DALL-E can generate imaginative and diverse images from textual
          descriptions, expanding the boundaries of visual creativity.
        </Text>
      </View>
      <View className="bg-cyan-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            className="rounded-ful"
            source={require('../../assets/images/smartaiIcon.png')}
            style={{height: hp(4), width: hp(4)}}
          />
          <Text
            style={{fontSize: wp(4.8)}}
            className="font-semibold text-gray-700">
            Smart AI
          </Text>
        </View>

        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          A powerful voice assistant with the abilities of ChatGPT and Dall-E,
          providing you the best of both worlds.
        </Text>
      </View>
    </ScrollView>
  );
}
