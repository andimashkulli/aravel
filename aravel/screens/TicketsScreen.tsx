import React from 'react'
import { Text, View, SafeAreaView, Pressable, ScrollView } from 'react-native'
import tw from 'twrnc'
import LeftArrow from 'react-native-heroicons/outline/ArrowLeftIcon'
import FilterIcon from 'react-native-heroicons/outline/FunnelIcon'
import Building from 'react-native-heroicons/solid/BuildingLibraryIcon'
import Button from '../components/Button'
interface TicketsScreen {
  navigation: any
}

const TicketsScreen:React.FC<TicketsScreen> = ({navigation}) => {
  const dates = [19,20,21,22,23,24];
  return(
    <View className='flex  text-white justify-start items-center'>
    <View style={tw`bg-[#03314B] w-full h-60% flex-col justify-start items-start pt-18 pl-8`}>
<SafeAreaView className='flex justify-center'>
  {/* The arrow and filter icon */}
<View className='flex flex-row w-full justify-between'>
  {/* The arrow button to go back */}
  <Pressable onPress={() => navigation.goBack()} className='flex'>
<LeftArrow color={'white'}/>
</Pressable>
{/* The filter button to filter the tickets */}
<View className='flex pr-10'>
<FilterIcon color={'white'}/>
</View>
</View>
{/* The small where-to texts */}
<View className='flex mt-8 flex-row w-full justify-between pr-10'>
<Text className='text-grayColor font-medium'>New York, NY</Text>
<Text className='text-grayColor font-medium'>Boston, MA</Text>
</View>
{/* the big where-to text  */}
<View className='flex text-white mt-4 flex-row w-full justify-between pr-10'>
<Text style={tw`text-white`} className='text-whiteColor text-3xl font-bold'>NYP</Text>
<Text  className='text-xl mt-1 text-grayColor'>·--------<Building color={'#94A3B8'}/>--------·</Text>
<Text style={tw`text-white`}  className='text-white text-3xl font-bold'>BBY</Text>
</View>
{/* the dates available for the flight option */}
<ScrollView horizontal contentContainerStyle={{
  
   paddingTop:45,
   
   
}}
showsHorizontalScrollIndicator={false}
>
  <View className='flex flex-row space-x-6'>
{dates.map((date) => {
  return(
    <Pressable key={date}>
      <Button textStyle={'text-grayColor '} onPress={() => {}} buttonStyle={''}><Text>
       Oct {date}</Text></Button>
        </Pressable>
  )
})}
</View>
</ScrollView>

</SafeAreaView>
    </View>
    {/* The white part - tickets  */}
    <SafeAreaView>
      {/* Here we need to place the component where the data of tickets will be mapped  */}
    </SafeAreaView>
</View>
  )
}

export default TicketsScreen