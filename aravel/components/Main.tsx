import React, { useState } from 'react'
import { View, Text, Pressable, TextInput  } from 'react-native'
import BellIcon from 'react-native-heroicons/outline/BellIcon'
import ChevronDoubleRightIcon from 'react-native-heroicons/outline/ChevronDoubleRightIcon'
import ArrowPathRoundedSquare from 'react-native-heroicons/outline/ArrowPathRoundedSquareIcon'
import GlobeAsiaAustralia from 'react-native-heroicons/outline/GlobeAsiaAustraliaIcon'
import ArrowsUpDown from 'react-native-heroicons/outline/ArrowsUpDownIcon'
import Calendar from 'react-native-heroicons/outline/CalendarDaysIcon'
import tw from 'twrnc'
import Button from './Button'

interface Main {
  navigation: any
}
const Main:React.FC<Main> = ({navigation}) => {
    const [isRoundTripClicked, setIsRoundUpClicked] = useState(false);
  return (
  <View style={tw`flex-col   justify-start items-center`}>
    <View style={tw`bg-[#03314B] w-full h-67% flex-col justify-start items-start pt-18 pl-8`}>
        <View style={tw`flex-row justify-between w-full  items-center`}>
            <View>
    <Text style={tw`text-white text-xl font-bold`} >Aravel</Text>
    <Text style={tw`text-white  pt-2 text-[#94A3B8]`} >Book your next travel!</Text>
    </View>
<Pressable onPress={() => navigation.navigate('Notifications')} className='border border-[#94A3B8] mr-8 p-2 rounded-full flex-row justify-center items-center'>
    <BellIcon color={'white'} size={'24px'}/>
</Pressable>

    </View>
    <View className='flex-row'>
    <Pressable  style={({pressed}) => [
tw` bg-[#A2FF86]  border border-[#A2FF86] p-3 mt-12  rounded-xl justify-center items-center text-center`

    ]}>
        <View className='flex-row'>
        <ChevronDoubleRightIcon size={'18px'}   color={'#1B6B93'}/>
        <Button buttonStyle='' onPress={() => setIsRoundUpClicked(false)} textStyle={'text-[#03314B] '}>
        <Text> One Way</Text>
        </Button>
        </View>
    </Pressable>
    <Pressable onPress={() => setIsRoundUpClicked(true)} style={tw` border border-[#94A3B8] ml-4 p-3 mt-12  rounded-xl justify-center items-center text-center`}>
        <View className='flex-row'>
        <ArrowPathRoundedSquare size={'18px'}   color={'white'}/>
        <Text style={tw`text-[#94A3B8] pl-1`}>Round Trip</Text>
        </View>
    </Pressable>
</View>
<View style={tw`mt-10 p-2  bg-white rounded-2xl w-90% ${isRoundTripClicked ? 'h-[400px]' : 'h-[350px]' }  flex justify-start items-center`}>
    {/* 1 */}
    <View className='flex-row space-x-2 pt-4 items-center  mx-4'> 

      <View className='flex-row mx-4 space-x-2 h-auto rounded-xl border border-[#ccd8ea]  p-4'> 
<GlobeAsiaAustralia color='#1B6B93' size={24}/>
<TextInput className='w-full'   placeholder='|    Skopje, MKD'/>
        </View>
     </View>
   <View className=' z-30 absolute right-0 mr-8 top-14 rounded-full  p-3 bg-gray-50'>
     <ArrowsUpDown color={'#03314B'} />
     </View> 
{/* 2 */}
<View className='flex-row space-x-2 pt-4 items-center mx-4'> 

<View className='flex-row mx-4 space-x-2 h-auto rounded-xl border border-[#ccd8ea]  p-4'> 
<GlobeAsiaAustralia color='#1B6B93' size={24}/>
<TextInput className='w-full'  placeholder='|    Bremen, DE'/>
  </View>
</View>
{/* 3 */}
<View className='flex-row space-x-2 pt-4 items-center  mx-4'> 

<View className='flex-row mx-4 space-x-2 h-auto rounded-xl border border-[#ccd8ea]  p-4'> 
<Calendar color='#1B6B93' size={22}/>
<TextInput className='w-full'   placeholder='|    Thu, Oct 20'/>
  </View>
</View>
{/* 4 if the roundup button is clicked */}

<View className={`${isRoundTripClicked ? 'flex-row' : 'hidden'} space-x-2 pt-4 items-center  mx-4`}> 

<View className='flex-row mx-4 space-x-2 h-auto rounded-xl border border-[#ccd8ea]  p-4'> 
<Calendar color='#1B6B93' size={22}/>
<TextInput className='w-full'   placeholder='|    Sun, Oct 23'/>
  </View>
</View>
{/* Button */}
<Button onPress={() => navigation.navigate('Tickets')} textStyle={'text-[#03314B] text-[15px]  font-bold'} buttonStyle={tw`bg-[#A2FF86] w-90% h-15 mt-8 flex-row rounded-lg p-5  justify-center items-center text-center`}>
        <Text>Search flights</Text>
    </Button>
</View>
    </View>
  </View>
  )
}

export default Main;