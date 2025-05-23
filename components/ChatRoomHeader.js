import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image } from 'expo-image'

export default function ChatRoomHeader({user, router}) {
return (
    <Stack.Screen
            options={{
                    title: '',
                    headerShadowVisible: false,
                    headerLeft: () => (
                            <View className='flex-row items-center gap-4'>
                                    <TouchableOpacity onPress={() => router.back()}>
                                            <Entypo name="chevron-thin-left" size={hp(4)} color="black" />
                                    </TouchableOpacity>
                                    <View className="flex-row items-center gap-3">
                                            <Image
                                                    source={user?.profileUrl}
                                                    style={{height: hp(4.5), aspectRatio: 1, borderRadius: 100}} 
                                            />
                                            <Text 
                                                    style={{fontSize: hp(2.5)}}
                                                    className="font-semibold text-neutral-800"
                                            >
                                                    {user?.username}
                                            </Text>
                                    </View>
                            </View>
                    ),
                    headerRight: () => (
                            <View className="flex-row items-center" style={{gap: wp(8)}}>
                                    <Ionicons name="call" size={hp(2.8)} color="grey" />
                                    <Ionicons name="videocam" size={hp(3.5)} color="grey" />
                            </View>
                    )
            }}
    />
)
}